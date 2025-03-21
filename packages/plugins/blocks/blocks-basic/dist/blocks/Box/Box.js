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
import { blockDefaultProps } from '@lowdefy/block-utils';
const Box = ({ blockId, content, events, methods, properties })=>{
    return /*#__PURE__*/ React.createElement("div", {
        id: blockId,
        "data-testid": blockId,
        onClick: ()=>methods.triggerEvent({
                name: 'onClick'
            }),
        onPaste: ()=>methods.triggerEvent({
                name: 'onPaste'
            }),
        className: methods.makeCssClass([
            {
                outline: 'none',
                cursor: events.onClick && 'pointer'
            },
            properties.style
        ])
    }, properties.content || content.content && content.content());
};
Box.defaultProps = blockDefaultProps;
Box.meta = {
    category: 'container',
    icons: [],
    styles: []
};
export default Box;
