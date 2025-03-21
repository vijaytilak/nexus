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
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _yaml = /*#__PURE__*/ _interop_require_default(require("yaml"));
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getCacheKey(fileData, filePath, options) {
    var optionsString = typeof options === "string" ? options : JSON.stringify(options);
    return _crypto.default.createHash("sha1").update(fileData).update(optionsString).digest("base64");
}
function process(sourceText) {
    return {
        code: "module.exports = ".concat(JSON.stringify(_yaml.default.parse(sourceText), null, "	"))
    };
}
var transformer = {
    getCacheKey: getCacheKey,
    process: process
};
var _default = transformer;
