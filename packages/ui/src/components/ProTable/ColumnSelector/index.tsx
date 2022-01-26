import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button, Popover, Space } from 'antd';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableColumnItem from './SortableColumnItem';
import { useEffect, useState } from 'react';
import { ProColumnType, TColumnStates } from '../types';

import styles from '@ferlab/style/components/protable/ColumnSelector.module.scss';

interface OwnProps<T = any> {
    className?: string;
    columns: ProColumnType<T>[];
    columnStates: TColumnStates;
    onChange: (newColumnState: TColumnStates) => void;
}

const ColumnSelector = ({ className = '', columns, columnStates, onChange }: OwnProps) => {
    const [localColumns, setLocalColumns] = useState<{
        saveIndex: number;
        state: TColumnStates;
    }>({
        saveIndex: -1,
        state: [...columnStates].sort((a, b) => a.index - b.index),
    });

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    useEffect(() => {
        // Ensure onChange is not call on load
        if (localColumns.saveIndex > -1) {
            onChange(
                localColumns.state.map((localState, index) => {
                    return {
                        ...getColumnStateByKey(localState.key)!,
                        index,
                    };
                }),
            );
        }
    }, [localColumns]);

    const getColumnStateByKey = (stateKey: string) => columnStates.find(({ key }) => stateKey === key);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setLocalColumns((localColumn) => {
                const oldIndex = localColumn.state.findIndex(({ key }) => key === active.id);
                const newIndex = localColumn.state.findIndex(({ key }) => key === over?.id);

                return {
                    saveIndex: localColumn.saveIndex + 1,
                    state: arrayMove(localColumn.state, oldIndex, newIndex),
                };
            });
        }
    };

    const List = ({ children }: any) => {
        // Needs to be defined here else it breaks the grid
        return (
            <Space direction="vertical" className={className}>
                {children}
            </Space>
        );
    };

    return (
        <Popover
            placement="bottomLeft"
            trigger="click"
            align={{
                offset: [-5, 0],
            }}
            overlayClassName={styles.ProTablePopoverColumn}
            content={
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={localColumns.state.map(({ key }) => key)} strategy={rectSortingStrategy}>
                        <List>
                            {localColumns.state.map((localState, index) => {
                                const title = columns.find(({ key }) => localState.key === key)!.title;
                                const savedColumnState = getColumnStateByKey(localState.key);
                                return (
                                    <SortableColumnItem
                                        id={localState.key!}
                                        label={title?.toString()!}
                                        key={index}
                                        checked={savedColumnState?.visible}
                                        onChange={(e) => {
                                            const filteredStates = columnStates.filter(
                                                ({ key }) => key !== localState.key,
                                            );
                                            const newStates = [
                                                ...filteredStates,
                                                {
                                                    ...savedColumnState!,
                                                    visible: e.target.checked,
                                                },
                                            ];

                                            onChange(newStates);
                                        }}
                                    />
                                );
                            })}
                        </List>
                    </SortableContext>
                </DndContext>
            }
        >
            <Button type="text" icon={<SettingOutlined className={styles.ProTableSettingBtnIcon} />}></Button>
        </Popover>
    );
};

export default ColumnSelector;
