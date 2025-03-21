/*
  Copyright 2020-2024 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/ // Derived from https://github.com/ant-design/ant-design/blob/master/components/form/FormItemLabel.tsx
// MIT Copyright (c) 2015-present Ant UED, https://xtech.antfin.com/ - 2020-09-08
import React from 'react';
import { blockDefaultProps, renderHtml } from '@lowdefy/block-utils';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import labelLogic from './labelLogic.js';
const validationKeyMap = {
    error: 'errors',
    warning: 'warnings'
};
let iconMap;
const Label = ({ blockId, components: { Icon }, content, methods, properties, required, validation })=>{
    const { extraClassName, feedbackClassName, iconClassName, label, labelClassName, labelCol, labelColClassName, rowClassName, showExtra, showFeedback, wrapperCol } = labelLogic({
        blockId,
        content,
        methods,
        properties,
        required,
        validation
    });
    if (!iconMap) {
        iconMap = {
            error: ()=>/*#__PURE__*/ React.createElement(Icon, {
                    properties: "AiFillCloseCircle"
                }),
            success: ()=>/*#__PURE__*/ React.createElement(Icon, {
                    properties: "AiFillCheckCircle"
                }),
            validating: ()=>/*#__PURE__*/ React.createElement(Icon, {
                    properties: "AiOutlineLoading"
                }),
            warning: ()=>/*#__PURE__*/ React.createElement(Icon, {
                    properties: "AiFillExclamationCircle"
                })
        };
    }
    const IconNode = validation.status && iconMap[validation.status];
    const icon = validation.status && IconNode ? /*#__PURE__*/ React.createElement("span", {
        className: iconClassName
    }, /*#__PURE__*/ React.createElement(IconNode, null)) : null;
    return /*#__PURE__*/ React.createElement(Row, {
        id: blockId,
        className: rowClassName
    }, label && /*#__PURE__*/ React.createElement(Col, {
        ...labelCol,
        className: labelColClassName
    }, /*#__PURE__*/ React.createElement("label", {
        htmlFor: `${blockId}_input`,
        className: labelClassName,
        title: label
    }, renderHtml({
        html: label,
        methods
    }))), /*#__PURE__*/ React.createElement(Col, {
        ...wrapperCol,
        className: "ant-form-item-control"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "ant-form-item-control-input"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "ant-form-item-control-input-content"
    }, content.content && content.content()), icon), (showFeedback || showExtra) && /*#__PURE__*/ React.createElement(CSSMotion, {
        visible: showFeedback || showExtra,
        motionName: "show-help",
        motionAppear: true,
        removeOnLeave: true
    }, ({ className: motionClassName })=>/*#__PURE__*/ React.createElement("div", {
            className: classNames(extraClassName, motionClassName)
        }, showFeedback ? /*#__PURE__*/ React.createElement("div", {
            className: classNames(feedbackClassName)
        }, validation[validationKeyMap[validation.status]] && validation[validationKeyMap[validation.status]].length > 0 && validation[validationKeyMap[validation.status]][0]) : renderHtml({
            html: properties.extra,
            methods
        })))));
};
Label.defaultProps = blockDefaultProps;
Label.meta = {
    category: 'container',
    icons: [
        'AiFillCloseCircle',
        'AiFillCheckCircle',
        'AiOutlineLoading',
        'AiFillExclamationCircle'
    ],
    styles: [
        'blocks/Label/style.less'
    ]
};
export default Label;
