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
import { Progress } from 'antd';
import { blockDefaultProps } from '@lowdefy/block-utils';
const ProgressBlock = ({ blockId, properties })=>/*#__PURE__*/ React.createElement(Progress, {
        gapDegree: properties.gapDegree,
        gapPosition: properties.gapPosition,
        id: blockId,
        percent: properties.percent,
        showInfo: properties.showInfo,
        status: properties.status,
        steps: properties.steps,
        strokeColor: properties.strokeColor,
        strokeLinecap: properties.strokeLinecap,
        strokeWidth: properties.strokeWidth,
        success: properties.success,
        trailColor: properties.trailColor,
        type: properties.type,
        width: properties.width
    });
ProgressBlock.defaultProps = blockDefaultProps;
ProgressBlock.meta = {
    category: 'display',
    icons: [],
    styles: [
        'blocks/Progress/style.less'
    ]
};
export default ProgressBlock;
