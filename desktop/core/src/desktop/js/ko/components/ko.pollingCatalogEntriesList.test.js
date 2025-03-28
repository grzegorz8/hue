// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { koSetup } from 'jest/koTestUtils';
import { CancellablePromise } from '../../api/cancellablePromise';
import { NAME } from './ko.pollingCatalogEntriesList';
import * as CatalogApi from 'catalog/api';

describe('ko.pollingCatalogEntriesList.js', () => {
  const setup = koSetup();

  it('should render component', async () => {
    jest
      .spyOn(CatalogApi, 'fetchSourceMetadata')
      .mockImplementation(() => CancellablePromise.reject());

    const element = await setup.renderComponent(NAME, {
      sourceType: 'impala',
      namespace: { id: 'namespaceId' },
      compute: { name: 'sample-compute' }
    });

    expect(element.innerHTML).toMatchSnapshot();
  });
});
