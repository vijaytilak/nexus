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
const BlockSchemaErrors = ({ schemaErrors })=>{
    if (!schemaErrors || schemaErrors.length === 0) return '';
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            padding: 10,
            fontSize: '0.8rem',
            border: '1px solid red',
            background: '#fBB',
            width: '100%'
        }
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "Schema Errors")), schemaErrors.map((error, i)=>/*#__PURE__*/ React.createElement("div", {
            key: i
        }, /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "keyword:"), " ", error.keyword), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "message:"), " ", error.message), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "params:"), " ", JSON.stringify(error.params)), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "dataPath:"), " ", error.dataPath), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("b", null, "schemaPath:"), " ", error.schemaPath))));
};
export default BlockSchemaErrors;
