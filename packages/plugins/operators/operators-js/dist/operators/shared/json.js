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
*/ import { serializer } from '@lowdefy/helpers';
import { runClass } from '@lowdefy/operators';
function parse(input) {
    if (input === 'undefined') return undefined;
    return serializer.deserializeFromString(input);
}
function stringify(input, options) {
    return serializer.serializeToString(input, {
        space: 2,
        isoStringDates: true,
        ...options
    });
}
const functions = {
    parse,
    stringify
};
const meta = {
    stringify: {
        namedArgs: [
            'on',
            'options'
        ],
        validTypes: [
            'object',
            'array'
        ]
    },
    parse: {
        singleArg: true,
        validTypes: [
            'string'
        ]
    }
};
function _json({ params, location, methodName }) {
    return runClass({
        functions,
        location,
        meta,
        methodName,
        operator: '_json',
        params
    });
}
export default _json;
