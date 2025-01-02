"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5867],{"./stories/Components/Filters/FilterSelector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BooleanFilterSelector:()=>BooleanFilterSelector,RangeFilterSelector:()=>RangeFilterSelector,TermFilterSelector:()=>TermFilterSelector,TextInputFilterSelector:()=>TextInputFilterSelector,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ferlab_ui_core_components_filters_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../packages/ui/core/components/filters/types.js"),_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/Components/Filters/data.ts"),_ferlab_ui_core_components_filters_FilterSelector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../packages/ui/core/components/filters/FilterSelector.js"),_ferlab_ui_core_components_filters_FilterSelector__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_ferlab_ui_core_components_filters_FilterSelector__WEBPACK_IMPORTED_MODULE_2__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={title:"@ferlab/Components/Filters/FilterSelector",component:_ferlab_ui_core_components_filters_FilterSelector__WEBPACK_IMPORTED_MODULE_2___default(),decorators:[function(Story){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"story_container",style:{display:"inline-grid"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)))}],argTypes:{className:{control:"string"},children:{control:"object"}}};var FilterSelectorStory=function(_param){var title=_param.title,maxShowing=_param.maxShowing,filterGroup=_param.filterGroup,onChange=_param.onChange,props=_object_without_properties(_param,["title","maxShowing","filterGroup","onChange"]);return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ferlab_ui_core_components_filters_FilterSelector__WEBPACK_IMPORTED_MODULE_2___default(),_object_spread({filterGroup:filterGroup,maxShowing:maxShowing,onChange:onChange},props)))},filerGroupTerm={field:"this.field",title:"title_filter_group",type:_ferlab_ui_core_components_filters_types__WEBPACK_IMPORTED_MODULE_3__.VisualType.Checkbox},filerGroupBoolean={field:"this.field",title:"title_filter_group",type:_ferlab_ui_core_components_filters_types__WEBPACK_IMPORTED_MODULE_3__.VisualType.Toggle},filterGroupRange={field:"this.field",title:"title_filter_group",config:{rangeTypes:[{key:"this.field",name:"Years"}],min:1,max:2},type:_ferlab_ui_core_components_filters_types__WEBPACK_IMPORTED_MODULE_3__.VisualType.Range},filterGroupTextInput={field:"this.field",title:"title_filter_group",config:{label:"Filter Label",placeholder:"Filter placeholder"},type:_ferlab_ui_core_components_filters_types__WEBPACK_IMPORTED_MODULE_3__.VisualType.Text},onChangeTypeStory=function(){return null},TermFilterSelector=FilterSelectorStory.bind({});TermFilterSelector.args={title:"FilterSelector Term",maxShowing:6,filterGroup:filerGroupTerm,onChangeType:onChangeTypeStory(filerGroupTerm,_data__WEBPACK_IMPORTED_MODULE_1__.uW),hasSearchInput:!0,filters:_data__WEBPACK_IMPORTED_MODULE_1__.uW};var BooleanFilterSelector=FilterSelectorStory.bind({});BooleanFilterSelector.args={title:"FilterSelector Boolean",filterGroup:filerGroupBoolean,onChangeType:onChangeTypeStory(filerGroupBoolean,_data__WEBPACK_IMPORTED_MODULE_1__._X),hasSearchInput:!0,filters:_data__WEBPACK_IMPORTED_MODULE_1__._X};var RangeFilterSelector=FilterSelectorStory.bind({});RangeFilterSelector.args={title:"FilterSelector Range",filterGroup:filterGroupRange,onChangeType:onChangeTypeStory(filterGroupRange,_data__WEBPACK_IMPORTED_MODULE_1__.FS),hasSearchInput:!0,filters:_data__WEBPACK_IMPORTED_MODULE_1__.FS};var TextInputFilterSelector=FilterSelectorStory.bind({});TextInputFilterSelector.args={title:"FilterSelector Text Input",filterGroup:filterGroupTextInput,onChangeType:onChangeTypeStory(filterGroupTextInput,[]),hasSearchInput:!0,filters:[]},TermFilterSelector.parameters={...TermFilterSelector.parameters,docs:{...TermFilterSelector.parameters?.docs,source:{originalSource:"({\n  title,\n  maxShowing,\n  filterGroup,\n  onChange,\n  ...props\n}: {\n  title: string;\n  maxShowing: number;\n  filterGroup: IFilterGroup;\n  onChange: onChangeType;\n  searchInputVisible: boolean;\n  filters: IFilter<IFilterCount>[];\n  props: Story<TermFilterProps>;\n}) => <>\n        <h3>{title}</h3>\n        <FilterSelector filterGroup={filterGroup} maxShowing={maxShowing} onChange={onChange} {...props} />\n    </>",...TermFilterSelector.parameters?.docs?.source}}},BooleanFilterSelector.parameters={...BooleanFilterSelector.parameters,docs:{...BooleanFilterSelector.parameters?.docs,source:{originalSource:"({\n  title,\n  maxShowing,\n  filterGroup,\n  onChange,\n  ...props\n}: {\n  title: string;\n  maxShowing: number;\n  filterGroup: IFilterGroup;\n  onChange: onChangeType;\n  searchInputVisible: boolean;\n  filters: IFilter<IFilterCount>[];\n  props: Story<TermFilterProps>;\n}) => <>\n        <h3>{title}</h3>\n        <FilterSelector filterGroup={filterGroup} maxShowing={maxShowing} onChange={onChange} {...props} />\n    </>",...BooleanFilterSelector.parameters?.docs?.source}}},RangeFilterSelector.parameters={...RangeFilterSelector.parameters,docs:{...RangeFilterSelector.parameters?.docs,source:{originalSource:"({\n  title,\n  maxShowing,\n  filterGroup,\n  onChange,\n  ...props\n}: {\n  title: string;\n  maxShowing: number;\n  filterGroup: IFilterGroup;\n  onChange: onChangeType;\n  searchInputVisible: boolean;\n  filters: IFilter<IFilterCount>[];\n  props: Story<TermFilterProps>;\n}) => <>\n        <h3>{title}</h3>\n        <FilterSelector filterGroup={filterGroup} maxShowing={maxShowing} onChange={onChange} {...props} />\n    </>",...RangeFilterSelector.parameters?.docs?.source}}},TextInputFilterSelector.parameters={...TextInputFilterSelector.parameters,docs:{...TextInputFilterSelector.parameters?.docs,source:{originalSource:"({\n  title,\n  maxShowing,\n  filterGroup,\n  onChange,\n  ...props\n}: {\n  title: string;\n  maxShowing: number;\n  filterGroup: IFilterGroup;\n  onChange: onChangeType;\n  searchInputVisible: boolean;\n  filters: IFilter<IFilterCount>[];\n  props: Story<TermFilterProps>;\n}) => <>\n        <h3>{title}</h3>\n        <FilterSelector filterGroup={filterGroup} maxShowing={maxShowing} onChange={onChange} {...props} />\n    </>",...TextInputFilterSelector.parameters?.docs?.source}}};let __namedExportsOrder=["TermFilterSelector","BooleanFilterSelector","RangeFilterSelector","TextInputFilterSelector"]},"./stories/Components/Filters/data.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__.d(__webpack_exports__,{EY:()=>filtersWithBigCounts,FS:()=>rangeFilters,TW:()=>booleanFiltersBigCount,_X:()=>booleanFilters,no:()=>filtersWithNoData,py:()=>dictionaryFrench,uW:()=>filters});var filters=[{data:{count:1,key:"One"},name:"one",id:"id_one"},{data:{count:2,key:"Two"},name:"two",id:"id_two"},{data:{count:3,key:"three"},name:"three",id:"id_three"},{data:{count:4,key:"Four"},name:"four super long data with very long name",id:"id_four"},{data:{count:5,key:"Five"},name:"five",id:"id_five"},{data:{count:6,key:"Six"},name:"six",id:"id_six"},{data:{count:7,key:"Seven"},name:"seven",id:"id_seven"},{data:{count:8,key:"Eight"},name:"eight",id:"id_eight"},{data:{count:9,key:"Nine"},name:"nine",id:"id_nine"}],filtersWithNoData=(function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()})(filters).concat([{data:{count:42,key:"__missing__"},name:"__missing__",id:"__missing__"}]),filtersWithBigCounts=[{data:{count:345,key:"Two"},name:"two",id:"id_two"},{data:{count:3450,key:"three"},name:"three",id:"id_three"},{data:{count:34589,key:"three"},name:"three",id:"id_three"},{data:{count:345892,key:"Four"},name:"four super long data with very long name",id:"id_four"},{data:{count:3458923,key:"Five"},name:"five",id:"id_five"},{data:{count:0x20fca34,key:"Six"},name:"Six",id:"id_six"}],rangeFilters=[{data:{max:10,min:1,rangeType:""},name:"one",id:"id_one"},{data:{max:5,min:2,rangeType:""},name:"two",id:"id_two"},{data:{max:15,min:3,rangeType:""},name:"three",id:"id_three"},{data:{max:12,min:4,rangeType:""},name:"four",id:"id_four"},{data:{max:17,min:5,rangeType:""},name:"five",id:"id_five"}],booleanFilters=[{data:{count:1e3,key:"true"},name:"true",id:"id_one"},{data:{count:200,key:"false"},name:"false",id:"id_two"}],booleanFiltersBigCount=[{data:{count:345687,key:"true"},name:"true",id:"id_one"},{data:{count:0x1adb9efc,key:"false"},name:"false",id:"id_three"}],dictionaryFrench={actions:{all:"tout",apply:"appliquer",clear:"dégager",less:"moins",more:"plus",none:"aucun",searchPlaceholder:"recherche"},globalSearch:{infoTooltip:"info",placeholder:"recherche"},messages:{errorNoData:"aucune donné",errorNotFound:"rien"},checkBox:{searchPlaceholder:"recherche"},range:{max:"FMax",min:"FMin",unit:"Unité"},operators:{between:"Entre (inclusif)",lessThan:"Moins que",lessThanOfEqual:"Moins que ou égal",greaterThan:"Plus que",greaterThanOrEqual:"Plus que ou égal"}}}}]);