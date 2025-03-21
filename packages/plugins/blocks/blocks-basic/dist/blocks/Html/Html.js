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
*/ import React from 'react';
import { blockDefaultProps, HtmlComponent } from '@lowdefy/block-utils';
const HtmlBlock = ({ blockId, events, properties, methods })=>/*#__PURE__*/ React.createElement(HtmlComponent, {
        div: true,
        events: events,
        html: properties.html,
        id: blockId,
        methods: methods,
        style: properties.style
    });
HtmlBlock.defaultProps = blockDefaultProps;
HtmlBlock.meta = {
    category: 'display',
    icons: [],
    styles: []
};
export default HtmlBlock;
