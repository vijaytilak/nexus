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
*/ export default {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Lowdefy Request Schema - ElasticsearchIndex',
    type: 'object',
    description: 'Adds a JSON document to the specified data stream or index and makes it searchable. If the target is an index and the document already exists, the request updates the document and increments its version.',
    required: [
        'body'
    ],
    properties: {
        id: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'number'
                }
            ],
            description: 'Unique identifier for the document.'
        },
        index: {
            type: 'string',
            description: 'The name of the index.'
        },
        if_seq_no: {
            type: 'integer',
            description: 'Only perform the operation if the document has this sequence number. See Optimistic concurrency control.'
        },
        if_primary_term: {
            type: 'integer',
            description: 'Only perform the operation if the document has this primary term. See Optimistic concurrency control.'
        },
        op_type: {
            type: 'string',
            description: 'Set to create to only index the document if it does not already exist (put if absent). If a document with the specified _id already exists, the indexing operation will fail. Same as using the <index>/_create endpoint. Valid values: index, create. If document id is specified, it defaults to index. Otherwise, it defaults to create. If the request targets a data stream, an op_type of create is required. See Add documents to a data stream.',
            enum: [
                'index',
                'create'
            ],
            default: 'create'
        },
        pipeline: {
            type: 'string',
            description: 'ID of the pipeline to use to preprocess incoming documents.'
        },
        refresh: {
            type: 'string',
            description: 'If true, Elasticsearch refreshes the affected shards to make this operation visible to search, if wait_for then wait for a refresh to make this operation visible to search, if false do nothing with refreshes. Valid values: true, false, wait_for. Default: false.',
            enum: [
                'true',
                'false',
                'wait_for'
            ],
            default: false
        },
        routing: {
            description: 'Custom value used to route operations to a specific shard.',
            type: 'string'
        },
        timeout: {
            type: 'string',
            description: 'Period the request waits for the following operations:\n\nAutomatic index creation\nDynamic mapping updates\nWaiting for active shards\nDefaults to 1m (one minute). This guarantees Elasticsearch waits for at least the timeout before failing. The actual wait time could be longer, particularly when multiple waits occur.',
            default: '1m'
        },
        version: {
            description: 'Explicit version number for concurrency control. The specified version must match the current version of the document for the request to succeed.',
            type: 'integer'
        },
        version_type: {
            type: 'string',
            description: 'Specific version type: external, external_gte.',
            enum: [
                'internal',
                'external',
                'external_gte'
            ]
        },
        wait_for_active_shard: {
            type: 'string',
            description: 'The number of shard copies that must be active before proceeding with the operation. Set to all or any positive integer up to the total number of shards in the index (number_of_replicas+1). Default: 1, the primary shard.',
            default: '1'
        },
        require_alias: {
            type: 'boolean',
            description: 'If true, the destination must be an index alias. Defaults to false.',
            default: false
        },
        body: {
            type: 'object',
            description: 'Request body contains the JSON source for the document data.',
            additionalProperties: true
        }
    },
    errorMessage: {
        type: 'ElasticsearchIndex request properties should be an object.',
        required: {
            body: 'ElasticsearchIndex request should have required property "body".'
        }
    }
};
