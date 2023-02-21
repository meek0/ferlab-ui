import React from 'react';
import { Spin } from 'antd';
import Card, { CardProps } from 'antd/lib/card';
import cx from 'classnames';

import ConditionalWrapper from '../../components/utils/ConditionalWrapper';

import styles from './Gridcard.module.scss';

type OwnProps = CardProps & {
    footer?: React.ReactNode;
    content: React.ReactNode;
    theme?: 'shade' | 'light';
    loadingType?: 'skeleton' | 'spinner';
    wrapperClassName?: string;
    contentClassName?: string;
};

const getWrapperClass = (footer: React.ReactNode, title: React.ReactNode) =>
    !footer && !title ? styles.contentOnly : !footer ? styles.withHeaderOnly : !title ? styles.withFooterOnly : '';

const GridCard = ({
    className = '',
    content,
    contentClassName = '',
    footer,
    loadingType = 'skeleton',
    theme = 'light',
    wrapperClassName = '',
    ...rest
}: Omit<OwnProps, 'actions'>) => (
    <div className={cx(wrapperClassName, styles.fuiCardWrapper)}>
        <Card
            {...rest}
            actions={footer ? [footer] : undefined}
            className={cx(
                styles.fbUIGridCard,
                className,
                theme == 'light' ? styles.light : styles.shade,
                getWrapperClass(footer, rest.title),
            )}
            loading={loadingType === 'skeleton' ? rest.loading : false}
        >
            <ConditionalWrapper
                children={<div className={cx(styles.contentWrapper, contentClassName)}>{content}</div>}
                condition={loadingType === 'spinner'}
                wrapper={(children) => <Spin spinning={rest.loading}>{children}</Spin>}
            />
        </Card>
    </div>
);

export default GridCard;
