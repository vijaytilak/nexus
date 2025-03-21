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
*/ import { nunjucksFunction } from '@lowdefy/nunjucks';
function createCheckDuplicateId({ message }) {
    const template = nunjucksFunction(message);
    const ids = new Set();
    function checkDuplicateId({ id, blockId, eventId, menuId, pageId }) {
        if (ids.has(id.toLowerCase())) throw new Error(template({
            id,
            blockId,
            eventId,
            menuId,
            pageId
        }));
        ids.add(id.toLowerCase());
    }
    return checkDuplicateId;
}
export default createCheckDuplicateId;
