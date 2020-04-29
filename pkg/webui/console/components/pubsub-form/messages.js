// Copyright © 2019 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { defineMessages } from 'react-intl'

export default defineMessages({
  idPlaceholder: 'my-new-pubsub',
  messageInfo: 'For each enabled message type, an optional sub-topic can be defined',
  deletePubsub: 'Delete Pubsub',
  modalWarning:
    'Are you sure you want to delete pub-sub "{pubsubId}"? Deleting a pub-sub cannot be undone.',
  headers: 'Headers',
  headersKeyPlaceholder: 'Authorization',
  headersValuePlaceholder: 'Bearer my-auth-token',
  headersAdd: 'Add header entry',
  headersValidateRequired: 'All header entry values are required. Please remove empty entries.',
  usernamePlaceholder: 'my-username',
  passwordPlaceholder: 'my-password',
  natsAddressPlaceholder: 'nats.example.com',
  natsPortPlaceholder: '4222',
  natsConfig: 'NATS configuration',
  mqttConfig: 'MQTT configuration',
  mqttClientIdPlaceholder: 'my-client-id',
  mqttServerUrlPlaceholder: 'mqtts://example.com',
  serverUrl: 'Server URL',
  clientId: 'Client ID',
  subscribeQos: 'Subscribe QoS',
  publishQos: 'Publish QoS',
  tlsCa: 'Server root CA certificate',
  tlsClientCert: 'Client certificate',
  tlsClientKey: 'Client private key',
  selectPemFile: 'Select .pem file…',
  pemFileProvided: '.pem file has been provided',
  useCredentials: 'Use credentials',
})