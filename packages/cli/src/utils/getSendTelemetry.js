/*
  Copyright 2020-2021 Lowdefy, Inc

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

import axios from 'axios';
function getSendTelemetry({ appId, cliVersion, command, disableTelemetry, lowdefyVersion }) {
  if (disableTelemetry) {
    return () => {};
  }
  async function sendTelemetry({ data = {} } = {}) {
    try {
      await axios.request({
        method: 'post',
        url: 'https://api.lowdefy.net/telemetry/cli',
        headers: {
          'User-Agent': `Lowdefy CLI v${cliVersion}`,
        },
        data: {
          ...data,
          appId,
          cliVersion,
          command,
          lowdefyVersion,
        },
      });
    } catch (error) {
      // pass
    }
  }
  return sendTelemetry;
}

export default getSendTelemetry;
