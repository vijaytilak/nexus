/*
  Copyright 2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/ import React from 'react';
import { blockDefaultProps } from '@lowdefy/block-utils';
import AgGrid from '../../AgGrid.js';
const AgGridMaterial = ({ blockId, events, loading, methods, properties })=>/*#__PURE__*/ React.createElement("div", {
        id: blockId,
        className: `ag-theme-material ${methods.makeCssClass({
            width: '100%',
            height: properties.height ?? 500,
            ...properties.style
        })}`
    }, /*#__PURE__*/ React.createElement(AgGrid, {
        events: events,
        loading: loading,
        methods: methods,
        properties: properties
    }));
AgGridMaterial.defaultProps = blockDefaultProps;
AgGridMaterial.meta = {
    category: 'display',
    icons: [],
    styles: [
        'blocks/AgGridMaterial/style.less'
    ]
};
export default AgGridMaterial;
