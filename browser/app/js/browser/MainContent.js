/*
 * Minio Cloud Storage (C) 2018 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import Header from "./Header"
import SidebarBackdrop from "./SidebarBackdrop"
import ObjectsSection from "../objects/ObjectsSection"
import MainActions from "./MainActions"
import BucketPolicyModal from "../buckets/BucketPolicyModal"
import MakeBucketModal from "../buckets/MakeBucketModal"
import UploadModal from "../uploads/UploadModal"
import Dropzone from "../uploads/Dropzone"

export const MainContent = ({ sidebarOpen }) => (
  <section className="content">
    <Header />
    <Dropzone>
      <ObjectsSection />
    </Dropzone>
    <MainActions />
    <BucketPolicyModal />
    <MakeBucketModal />
    <UploadModal />
    <SidebarBackdrop />
  </section>
)

export default MainContent
