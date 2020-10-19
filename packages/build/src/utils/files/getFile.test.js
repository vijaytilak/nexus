/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
import getFile, { getExt } from './getFile';

describe('getExt', () => {
  test('getExt a.b', () => {
    expect(getExt('a.b')).toBe('b');
  });

  test('getExt a.b.c', () => {
    expect(getExt('a.b.c')).toBe('c');
  });

  test('getExt a', () => {
    expect(getExt('a')).toBe(null);
  });
});

describe('getFile', () => {
  test('getFile jsonFile.json', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/jsonFile.json');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: {
        fileName: 'jsonFile.json',
        test: true,
      },
    });
  });

  test('getFile yamlFile.yaml', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/yamlFile.yaml');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: {
        fileName: 'yamlFile.yaml',
        test: true,
      },
    });
  });

  test('getFile ymlFile.yml', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/ymlFile.yml');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: {
        fileName: 'ymlFile.yml',
        test: true,
      },
    });
  });

  test('getFile doesNotExist.txt', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/doesNotExist.txt');
    await expect(getFile(filePath)).rejects.toThrow('ENOENT: no such file or directory');
  });

  test('getFile null', async () => {
    await expect(getFile(null)).rejects.toThrow(
      'Tried to get file with file path null, but file path should be a string'
    );
  });

  test('getFile markdown.md', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/markdown.md');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: `### Title

Hello there
`,
    });
  });

  test('getFile html.html', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/html.html');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: `<h1>Heading</h1>
<p>Hello there</p>
`,
    });
  });

  test('getFile text.txt', async () => {
    const filePath = path.resolve(process.cwd(), 'src/test/text.txt');
    const file = await getFile(filePath);
    expect(file).toEqual({
      filePath,
      content: `Hello

This is a txt file.`,
    });
  });
});
