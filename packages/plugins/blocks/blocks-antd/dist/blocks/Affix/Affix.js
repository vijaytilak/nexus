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
import { Affix } from 'antd';
import { get } from '@lowdefy/helpers';
import { blockDefaultProps } from '@lowdefy/block-utils';
const AffixBlock = ({ blockId, content, methods, properties, rename })=>/*#__PURE__*/ React.createElement(Affix, {
        id: blockId,
        className: methods.makeCssClass(properties.style),
        offsetBottom: properties.offsetBottom,
        offsetTop: properties.offsetTop,
        onChange: (affixed)=>{
            methods.triggerEvent({
                name: get(rename, 'events.onChange', {
                    default: 'onChange'
                }),
                event: {
                    affixed
                }
            });
        }
    }, content.content && content.content());
AffixBlock.defaultProps = blockDefaultProps;
AffixBlock.meta = {
    category: 'container',
    icons: [],
    styles: [
        'blocks/Affix/style.less'
    ]
};
export default AffixBlock;
