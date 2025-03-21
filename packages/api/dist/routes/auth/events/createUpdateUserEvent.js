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
*/ import createEventPlugins from './createEventPlugins.js';
function createUpdateUserEvent({ authConfig, logger, plugins }) {
    const updateUserPlugins = createEventPlugins({
        authConfig,
        plugins,
        type: 'updateUser'
    });
    async function updateUserEvent({ user }) {
        logger.info({
            event: 'auth_update_user',
            user: {
                id: user.id,
                roles: user.roles,
                sub: user.sub,
                session_id: user.session_id
            }
        });
        for (const plugin of updateUserPlugins){
            await plugin.fn({
                properties: plugin.properties ?? {},
                user
            });
        }
    }
    return updateUserEvent;
}
export default createUpdateUserEvent;
