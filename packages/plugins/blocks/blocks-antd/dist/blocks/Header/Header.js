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
import { Layout } from 'antd';
import { blockDefaultProps } from '@lowdefy/block-utils';
const Header = Layout.Header;
const HeaderBlock = ({ blockId, content, methods, properties })=>/*#__PURE__*/ React.createElement(Header, {
        id: blockId,
        className: `${methods.makeCssClass([
            {
                backgroundColor: properties.theme === 'light' && '#fff'
            },
            properties.style
        ])} hide-on-print`
    }, content.content && content.content());
HeaderBlock.defaultProps = blockDefaultProps;
HeaderBlock.meta = {
    category: 'container',
    icons: [],
    styles: [
        'blocks/Header/style.less'
    ]
};
export default HeaderBlock;
