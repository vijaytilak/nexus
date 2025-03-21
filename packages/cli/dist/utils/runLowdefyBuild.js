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
*/ import { spawnProcess } from '@lowdefy/node-utils';
import createStdOutLineHandler from './createStdOutLineHandler.js';
async function runLowdefyBuild({ context, directory }) {
    context.print.spin('Running Lowdefy build.');
    try {
        await spawnProcess({
            args: [
                'run',
                'build:lowdefy'
            ],
            command: context.pnpmCmd,
            stdOutLineHandler: createStdOutLineHandler({
                context
            }),
            processOptions: {
                cwd: directory,
                // https://nodejs.org/en/blog/vulnerability/april-2024-security-releases-2#command-injection-via-args-parameter-of-child_processspawn-without-shell-option-enabled-on-windows-cve-2024-27980---high
                shell: process.platform === 'win32',
                env: {
                    ...process.env,
                    LOWDEFY_BUILD_REF_RESOLVER: context.options.refResolver,
                    LOWDEFY_DIRECTORY_CONFIG: context.directories.config,
                    LOWDEFY_LOG_LEVEL: context.options.logLevel,
                    LOWDEFY_LICENSE_ENTITLEMENTS: JSON.stringify(context.license.entitlements)
                }
            }
        });
    } catch (error) {
        throw new Error('Lowdefy build failed.');
    }
    context.print.log('Lowdefy build successful.');
}
export default runLowdefyBuild;
