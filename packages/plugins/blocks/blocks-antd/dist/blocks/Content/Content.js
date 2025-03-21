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
const Content = Layout.Content;
const ContentBlock = ({ blockId, content, methods, properties })=>/*#__PURE__*/ React.createElement(Content, {
        id: blockId,
        className: methods.makeCssClass(properties.style)
    }, content.content && content.content());
ContentBlock.defaultProps = blockDefaultProps;
ContentBlock.meta = {
    category: 'container',
    icons: [],
    styles: [
        'blocks/Content/style.less'
    ]
};
export default ContentBlock;
