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
*/ /* eslint-disable max-classes-per-file */ let ConfigurationError = class ConfigurationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ConfigurationError';
    }
};
let RequestError = class RequestError extends Error {
    constructor(message){
        super(message);
        this.name = 'RequestError';
    }
};
let ServerError = class ServerError extends Error {
    constructor(message){
        super(message);
        this.name = 'ServerError';
    }
};
export { ConfigurationError, RequestError, ServerError };
