/*
  Copyright 2020 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import LogoSpinner from './LogoSpinner';
import blockDefaults from '../blockDefaults';

const Loading = ({ properties, methods }) => {
  return (
    <div
      className={methods.makeCssClass({
        height: properties.height || '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: properties.shaded === true && '#f1f1f1',
      })}
    >
      <div style={{ width: properties.size || 50, margin: 'auto', height: properties.size || 50 }}>
        <LogoSpinner
          color={properties.color}
          barColor={properties.barColor || (properties.shaded === true ? '#f1f1f1' : '#fff')}
        />
        <div className={methods.makeCssClass([{ textAlign: 'center' }, properties.style])}>
          {properties.message}
        </div>
      </div>
    </div>
  );
};

export default blockDefaults(Loading);
