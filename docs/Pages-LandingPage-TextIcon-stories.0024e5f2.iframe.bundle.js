(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4165],{"../packages/ui/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./stories/Pages/LandingPage/TextIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LargeTextIconStory:()=>LargeTextIconStory,MediumTextIconStory:()=>MediumTextIconStory,SmallTextIconStory:()=>SmallTextIconStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/ui/core/pages/LandingPage/TextIcon/index.js"),_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1__),_ferlab_ui_core_components_Icons_FuturoSpot_CloudComputingSpotIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../packages/ui/core/components/Icons/FuturoSpot/CloudComputingSpotIcon.js"),_ferlab_ui_core_components_Icons_FuturoSpot_CloudComputingSpotIcon__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_ferlab_ui_core_components_Icons_FuturoSpot_CloudComputingSpotIcon__WEBPACK_IMPORTED_MODULE_2__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"@ferlab/Pages/LandingPage/TextIcon",component:_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1___default(),decorators:[function(Story){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)}]};var commonProps={title:"Title",subtitle:"Subtitle",IconComponent:_ferlab_ui_core_components_Icons_FuturoSpot_CloudComputingSpotIcon__WEBPACK_IMPORTED_MODULE_2___default()},smallProps=_object_spread_props(_object_spread({},commonProps),{size:"small"}),mediumProps=_object_spread_props(_object_spread({},commonProps),{size:"medium"}),largeProps=_object_spread_props(_object_spread({},commonProps),{size:"large"}),SmallTextIconStory=function(){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1___default(),smallProps)},MediumTextIconStory=function(){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1___default(),mediumProps)},LargeTextIconStory=function(){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ferlab_ui_core_pages_LandingPage_TextIcon__WEBPACK_IMPORTED_MODULE_1___default(),largeProps)};SmallTextIconStory.parameters={...SmallTextIconStory.parameters,docs:{...SmallTextIconStory.parameters?.docs,source:{originalSource:"() => <TextIcon {...smallProps} />",...SmallTextIconStory.parameters?.docs?.source}}},MediumTextIconStory.parameters={...MediumTextIconStory.parameters,docs:{...MediumTextIconStory.parameters?.docs,source:{originalSource:"() => <TextIcon {...mediumProps} />",...MediumTextIconStory.parameters?.docs?.source}}},LargeTextIconStory.parameters={...LargeTextIconStory.parameters,docs:{...LargeTextIconStory.parameters?.docs,source:{originalSource:"() => <TextIcon {...largeProps} />",...LargeTextIconStory.parameters?.docs?.source}}};let __namedExportsOrder=["SmallTextIconStory","MediumTextIconStory","LargeTextIconStory"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../packages/ui/core/components/Icons/FuturoSpot/icon.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.dP1SB7wzHSQIc5osHqji {
  color: var(--gray-9);
}

.yeuEhAMPpKlLjBXcTksw {
  color: var(--gray-4);
}
`,"",{version:3,sources:["webpack://./../packages/ui/core/components/Icons/FuturoSpot/icon.module.css"],names:[],mappings:"AAAA;EACE,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB",sourcesContent:[".iconColor {\n  color: var(--gray-9);\n}\n\n.spotColor {\n  color: var(--gray-4);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={iconColor:"dP1SB7wzHSQIc5osHqji",spotColor:"yeuEhAMPpKlLjBXcTksw"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../packages/ui/core/pages/LandingPage/TextIcon/index.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.FJCbt_GUeVEbqVZNQK_j {
  color: var(--landing-text-icon-color-light);
}
.FJCbt_GUeVEbqVZNQK_j .H85a1su0TZRBVH_DVbtk {
  color: var(--landing-text-icon-color-light);
}
.FJCbt_GUeVEbqVZNQK_j .Kye9zsGeQte3TXNrcram {
  color: var(--landing-spot-icon-color-light);
}

.vJApEND6iq9vFhxjRs4L {
  color: var(--landing-text-icon-color-dark);
}
.vJApEND6iq9vFhxjRs4L .H85a1su0TZRBVH_DVbtk {
  color: var(--landing-text-icon-color-dark);
}
.vJApEND6iq9vFhxjRs4L .Kye9zsGeQte3TXNrcram {
  color: var(--landing-spot-icon-color-dark);
}

.lPqPD9r0ZuybaHcTEU_4 .uM9jiMwcsjMIrmafraTk {
  display: flex;
  align-items: center;
  gap: 16px;
}
.lPqPD9r0ZuybaHcTEU_4 .uM9jiMwcsjMIrmafraTk .H85a1su0TZRBVH_DVbtk {
  width: 48px;
  height: 48px;
}
.lPqPD9r0ZuybaHcTEU_4 .uM9jiMwcsjMIrmafraTk .AWXAtCEmyva5hojZxeeS {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.lPqPD9r0ZuybaHcTEU_4 .uM9jiMwcsjMIrmafraTk .Auoh5wCLfPuUYFNjR0Gq {
  font-size: 14px;
  line-height: 22px;
}

.i1XkTVzzMjOeydNLmdai .uM9jiMwcsjMIrmafraTk {
  display: flex;
  align-items: center;
  gap: 16px;
}
.i1XkTVzzMjOeydNLmdai .uM9jiMwcsjMIrmafraTk .H85a1su0TZRBVH_DVbtk {
  width: 64px;
  height: 64px;
}
.i1XkTVzzMjOeydNLmdai .uM9jiMwcsjMIrmafraTk .AWXAtCEmyva5hojZxeeS {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
.i1XkTVzzMjOeydNLmdai .uM9jiMwcsjMIrmafraTk .Auoh5wCLfPuUYFNjR0Gq {
  font-size: 16px;
  line-height: 24px;
}

.z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk {
  display: flex;
  align-items: center;
  gap: 24px;
}
.z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .H85a1su0TZRBVH_DVbtk {
  width: 96px;
  height: 96px;
}
.z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .AWXAtCEmyva5hojZxeeS {
  font-size: 38px;
  font-weight: 600;
  line-height: 46px;
}
.z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .Auoh5wCLfPuUYFNjR0Gq {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

@media (max-width: 1024px) {
  .z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk {
    gap: 16px;
  }
  .z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .H85a1su0TZRBVH_DVbtk {
    width: 64px;
    height: 64px;
  }
  .z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .AWXAtCEmyva5hojZxeeS {
    font-size: 24px;
    line-height: 32px;
  }
  .z4sJ1WvF5nzAHyGj68cm .uM9jiMwcsjMIrmafraTk .Auoh5wCLfPuUYFNjR0Gq {
    font-size: 16px;
    line-height: 24px;
  }
}
`,"",{version:3,sources:["webpack://./../packages/ui/core/pages/LandingPage/TextIcon/index.module.css"],names:[],mappings:"AAAA;EACE,2CAA2C;AAC7C;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;AACF",sourcesContent:[".light {\n  color: var(--landing-text-icon-color-light);\n}\n.light .icon {\n  color: var(--landing-text-icon-color-light);\n}\n.light .iconSpot {\n  color: var(--landing-spot-icon-color-light);\n}\n\n.dark {\n  color: var(--landing-text-icon-color-dark);\n}\n.dark .icon {\n  color: var(--landing-text-icon-color-dark);\n}\n.dark .iconSpot {\n  color: var(--landing-spot-icon-color-dark);\n}\n\n.small .layout {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.small .layout .icon {\n  width: 48px;\n  height: 48px;\n}\n.small .layout .title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n}\n.small .layout .subtitle {\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.medium .layout {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.medium .layout .icon {\n  width: 64px;\n  height: 64px;\n}\n.medium .layout .title {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 32px;\n}\n.medium .layout .subtitle {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.large .layout {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.large .layout .icon {\n  width: 96px;\n  height: 96px;\n}\n.large .layout .title {\n  font-size: 38px;\n  font-weight: 600;\n  line-height: 46px;\n}\n.large .layout .subtitle {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 32px;\n}\n\n@media (max-width: 1024px) {\n  .large .layout {\n    gap: 16px;\n  }\n  .large .layout .icon {\n    width: 64px;\n    height: 64px;\n  }\n  .large .layout .title {\n    font-size: 24px;\n    line-height: 32px;\n  }\n  .large .layout .subtitle {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light:"FJCbt_GUeVEbqVZNQK_j",icon:"H85a1su0TZRBVH_DVbtk",iconSpot:"Kye9zsGeQte3TXNrcram",dark:"vJApEND6iq9vFhxjRs4L",small:"lPqPD9r0ZuybaHcTEU_4",layout:"uM9jiMwcsjMIrmafraTk",title:"AWXAtCEmyva5hojZxeeS",subtitle:"Auoh5wCLfPuUYFNjR0Gq",medium:"i1XkTVzzMjOeydNLmdai",large:"z4sJ1WvF5nzAHyGj68cm"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../packages/ui/core/components/Icons/FuturoSpot/icon.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_icon_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../packages/ui/core/components/Icons/FuturoSpot/icon.module.css"),options={};options.styleTagTransform=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default(),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_icon_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);let __WEBPACK_DEFAULT_EXPORT__=_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_icon_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_icon_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_icon_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"../packages/ui/core/pages/LandingPage/TextIcon/index.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_index_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../packages/ui/core/pages/LandingPage/TextIcon/index.module.css"),options={};options.styleTagTransform=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default(),_storybook_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_index_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);let __WEBPACK_DEFAULT_EXPORT__=_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_index_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_index_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_storybook_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_8_use_1_index_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"../packages/ui/core/components/Icons/FuturoSpot/CloudComputingSpotIcon.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),classnames_1=__importDefault(__webpack_require__("../packages/ui/node_modules/classnames/index.js")),icon_module_css_1=__importDefault(__webpack_require__("../packages/ui/core/components/Icons/FuturoSpot/icon.module.css"));exports.default=function(param){var _param_className=param.className,_param_height=param.height,_param_spotClassName=param.spotClassName,_param_width=param.width;return react_1.default.createElement("svg",{className:(0,classnames_1.default)(icon_module_css_1.default.iconColor,void 0===_param_className?"":_param_className),fill:"none",height:void 0===_param_height?48:_param_height,viewBox:"0 0 48 48",width:void 0===_param_width?48:_param_width,xmlns:"http://www.w3.org/2000/svg"},react_1.default.createElement("g",{id:"cloud-computing"},react_1.default.createElement("path",{className:(0,classnames_1.default)(icon_module_css_1.default.spotColor,void 0===_param_spotClassName?"":_param_spotClassName),d:"M32.25 31.5C40.9485 31.5 48 24.4485 48 15.75C48 7.05152 40.9485 0 32.25 0C23.5515 0 16.5 7.05152 16.5 15.75C16.5 24.4485 23.5515 31.5 32.25 31.5Z",fill:"currentColor",id:"spot"}),react_1.default.createElement("g",{id:"Group"},react_1.default.createElement("path",{clipRule:"evenodd",d:"M9.02016 15.0269C9.39508 8.32206 14.9515 3 21.75 3C26.3735 3 30.4441 5.28556 32.6826 9H33C35.4257 9 37.3253 9.8144 38.6136 11.21C39.7395 12.4298 40.3448 14.035 40.4737 15.78C45.0675 16.1657 48 20.2094 48 24.75C48 30.1345 43.6345 34.5 38.25 34.5V33C42.806 33 46.5 29.306 46.5 24.75C46.5 20.6043 43.7427 17.25 39.75 17.25H39V16.5C39 14.7708 38.4822 13.2792 37.5114 12.2275C36.5497 11.1856 35.0743 10.5 33 10.5H31.8081L31.594 10.1135C29.6858 6.66924 26.0102 4.5 21.75 4.5C15.5372 4.5 10.5 9.53721 10.5 15.75V16.5H9.75C5.19396 16.5 1.5 20.194 1.5 24.75C1.5 29.306 5.19396 33 9.75 33V34.5C4.36554 34.5 0 30.1345 0 24.75C0 19.611 3.97652 15.4002 9.02016 15.0269Z",fill:"currentColor",fillRule:"evenodd",id:"Vector"}),react_1.default.createElement("path",{clipRule:"evenodd",d:"M21.75 9C18.4559 9 15 12.315 15 16.5H13.5C13.5 11.5725 17.5441 7.5 21.75 7.5V9Z",fill:"currentColor",fillRule:"evenodd",id:"Vector_2"}),react_1.default.createElement("path",{clipRule:"evenodd",d:"M21.9955 19.6566C22.6385 19.566 23.3065 19.5 23.9999 19.5C24.6933 19.5 25.3614 19.566 26.0037 19.6566C26.2949 19.6977 26.5352 19.9052 26.6183 20.1872L27.4685 23.072L29.8628 21.2298C30.0959 21.0505 30.4122 21.0239 30.6719 21.1618C31.8629 21.7942 32.9498 22.5916 33.9084 23.5217C34.1191 23.7262 34.1912 24.0348 34.0928 24.3114L33.0827 27.1508L36.0917 27.0678C36.3851 27.0597 36.6563 27.2235 36.7856 27.4869C37.3692 28.6755 37.7914 29.9539 38.0258 31.3009C38.0762 31.5902 37.953 31.8823 37.7108 32.0482L35.2267 33.7501L37.7109 35.4526C37.953 35.6185 38.076 35.9103 38.0259 36.1994C37.7922 37.547 37.3691 38.8254 36.7866 40.0134C36.6573 40.2771 36.386 40.4411 36.0925 40.433L33.0834 40.3499L34.0935 43.1894C34.192 43.4661 34.1198 43.7748 33.909 43.9792C32.9505 44.9084 31.8637 45.7058 30.6726 46.3382C30.4129 46.4761 30.0966 46.4495 29.8636 46.2702L27.4692 44.428L26.6191 47.3128C26.5359 47.5949 26.2956 47.8024 26.0044 47.8434C25.3614 47.934 24.6933 48 23.9999 48C23.3064 48 22.6382 47.934 21.9946 47.8425C21.7037 47.8012 21.4638 47.5938 21.3808 47.312L20.5306 44.4273L18.1363 46.2694C17.9033 46.4486 17.5872 46.4753 17.3276 46.3376C16.1363 45.7059 15.0492 44.9084 14.0906 43.9783C13.8799 43.7738 13.8079 43.4652 13.9063 43.1886L14.9164 40.3492L11.9074 40.4322C11.6138 40.4403 11.3425 40.2764 11.2133 40.0127C10.6306 38.8244 10.2084 37.5461 9.97402 36.1991C9.92368 35.9098 10.0468 35.6177 10.289 35.4518L12.773 33.7499L10.2897 32.0482C10.0475 31.8822 9.92443 31.5902 9.97477 31.3009C10.2092 29.9539 10.6313 28.6756 11.214 27.4873C11.3433 27.2236 11.6147 27.0596 11.9082 27.0678L14.9163 27.1514L13.9063 24.3121C13.8079 24.0355 13.8799 23.7269 14.0906 23.5225C15.0492 22.5924 16.1362 21.7949 17.3272 21.1626C17.5869 21.0247 17.9031 21.0513 18.1362 21.2305L20.5306 23.0721L21.3808 20.1872C21.4639 19.9051 21.7042 19.6976 21.9955 19.6566ZM22.6812 21.0809L21.6601 24.5458C21.5902 24.783 21.4077 24.9705 21.1725 25.047C20.9373 25.1235 20.6795 25.079 20.4834 24.9282L17.6122 22.7199C16.8494 23.163 16.1371 23.6842 15.4843 24.2725L16.6965 27.6801C16.7795 27.9132 16.7421 28.1722 16.5966 28.3724C16.4512 28.5725 16.2164 28.6881 15.9691 28.6812L12.3584 28.5809C12.0041 29.3776 11.7293 30.2159 11.5433 31.0888L14.5239 33.1313C14.7279 33.2712 14.8499 33.5027 14.8499 33.75C14.8499 33.9974 14.7279 34.2289 14.5238 34.3687L11.5426 36.4112C11.7285 37.2842 12.0034 38.1225 12.3577 38.9192L15.9692 38.8195C16.2165 38.8127 16.4513 38.9283 16.5967 39.1284C16.7421 39.3286 16.7795 39.5875 16.6965 39.8206L15.4843 43.2282C16.1371 43.8165 16.8493 44.3376 17.612 44.7802L20.4833 42.5711C20.6794 42.4202 20.9372 42.3758 21.1725 42.4522C21.4077 42.5287 21.5902 42.7162 21.6601 42.9535L22.6813 46.4188C23.1213 46.4691 23.5589 46.5 23.9999 46.5C24.4409 46.5 24.8785 46.4691 25.3187 46.4191L26.3398 42.9542C26.4097 42.717 26.5921 42.5294 26.8274 42.453C27.0626 42.3765 27.3204 42.421 27.5165 42.5718L30.3877 44.7808C31.1504 44.3377 31.8626 43.8166 32.5155 43.2288L31.3033 39.8214C31.2204 39.5883 31.2577 39.3293 31.4031 39.1292C31.5486 38.929 31.7833 38.8135 32.0306 38.8203L35.6422 38.92C35.9967 38.1231 36.2718 37.2847 36.4575 36.412L33.4759 34.3687C33.2719 34.2288 33.1499 33.9973 33.1499 33.7499C33.1499 33.5026 33.2719 33.2711 33.476 33.1313L36.4572 31.0888C36.2713 30.2158 35.9964 29.3774 35.6417 28.5808L32.0299 28.6805C31.7826 28.6873 31.5478 28.5717 31.4024 28.3716C31.257 28.1714 31.2196 27.9125 31.3025 27.6794L32.5148 24.2718C31.862 23.6835 31.1497 23.1623 30.3869 22.7192L27.5158 24.9282C27.3197 25.079 27.0619 25.1235 26.8266 25.047C26.5914 24.9706 26.4089 24.783 26.339 24.5458L25.3179 21.0809C24.8782 21.0308 24.4407 21 23.9999 21C23.559 21 23.1213 21.0309 22.6812 21.0809Z",fill:"currentColor",fillRule:"evenodd",id:"Vector_3"}),react_1.default.createElement("path",{clipRule:"evenodd",d:"M24 27.75C20.6863 27.75 18 30.4363 18 33.75C18 37.0637 20.6863 39.75 24 39.75C27.3137 39.75 30 37.0637 30 33.75C30 30.4363 27.3137 27.75 24 27.75ZM16.5 33.75C16.5 29.6079 19.8579 26.25 24 26.25C28.1421 26.25 31.5 29.6079 31.5 33.75C31.5 37.8921 28.1421 41.25 24 41.25C19.8579 41.25 16.5 37.8921 16.5 33.75Z",fill:"currentColor",fillRule:"evenodd",id:"Vector_4"}),react_1.default.createElement("path",{clipRule:"evenodd",d:"M24 30.75C22.3431 30.75 21 32.0931 21 33.75C21 35.4069 22.3431 36.75 24 36.75C25.6569 36.75 27 35.4069 27 33.75C27 32.0931 25.6569 30.75 24 30.75ZM19.5 33.75C19.5 31.2647 21.5147 29.25 24 29.25C26.4853 29.25 28.5 31.2647 28.5 33.75C28.5 36.2353 26.4853 38.25 24 38.25C21.5147 38.25 19.5 36.2353 19.5 33.75Z",fill:"currentColor",fillRule:"evenodd",id:"Vector_5"}))))}},"../packages/ui/core/pages/LandingPage/TextIcon/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__("./node_modules/react/index.js")),index_module_css_1=__importDefault(__webpack_require__("../packages/ui/core/pages/LandingPage/TextIcon/index.module.css"));exports.default=function(param){var _param_color=param.color,IconComponent=param.IconComponent,_param_size=param.size,subtitle=param.subtitle,title=param.title;return react_1.default.createElement("div",{className:"".concat(index_module_css_1.default[void 0===_param_size?"small":_param_size]," ").concat(index_module_css_1.default[void 0===_param_color?"light":_param_color])},react_1.default.createElement("div",{className:index_module_css_1.default.layout},react_1.default.createElement(IconComponent,{className:index_module_css_1.default.icon,spotClassName:index_module_css_1.default.iconSpot}),react_1.default.createElement("div",null,react_1.default.createElement("div",{className:index_module_css_1.default.title},title),react_1.default.createElement("div",{className:index_module_css_1.default.subtitle},subtitle))))}}}]);
//# sourceMappingURL=Pages-LandingPage-TextIcon-stories.0024e5f2.iframe.bundle.js.map