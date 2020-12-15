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

import path from 'path';
import { readFile, writeFile } from '@lowdefy/node-utils';
import { v4 as uuid } from 'uuid';

async function getCliJson({ baseDirectory }) {
  const filePath = path.resolve(baseDirectory, './.lowdefy/cli.json');
  const cliJson = await readFile(filePath);
  if (!cliJson) {
    const appId = uuid();
    await writeFile({ filePath, content: JSON.stringify({ appId }, null, 2) });
    return { appId };
  }
  return JSON.parse(cliJson);
}

export default getCliJson;
