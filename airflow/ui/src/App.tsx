/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Navigate, Route, Routes } from "react-router-dom";

import { DagsList } from "src/pages/DagsList";

import { BaseLayout } from "./layouts/BaseLayout";

// Note: When changing routes, make sure to update init_react_ui.py too
export const App = () => (
  <Routes>
    <Route element={<BaseLayout />} path="/">
      <Route element={<Navigate to="dags" />} index />
      <Route element={<DagsList />} path="dags" />
    </Route>
  </Routes>
);
