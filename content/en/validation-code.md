---
title: Validation Error Code
description: "Tool resources"
position: 450
category: Tools
---

This tool allows the validation of an Object that is publicly reachable by the tool: http://dev_devtoolkit.openmobilealliance.org/OEditor/OMNAVerify

- The error codes relevant to single Object Validation are from (403 to 499).
- In addition, the user needs to validate by hand the criteria provided by error codes (400 to 402).
  The information in the OMNA LwM2M Registry is contained in two files:

- DDF.xml: this file contains all the Object information that is displayed in the [OMA LwM2M registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html) with the exception of the Reusable Resources that are contained in the "Common.xml" file.
- Common.xml: this file contains the Reusable Resources information that is displayed in the [OMA LwM2M registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).

### Error Codes

**General Requirements**

<style>
table, th, td {
  border: 1px solid #eff2f7 ;
}

th {
  background: #EAEAEA;
}

td {
  overflow-wrap: anywhere;
}
</style>


<table class="text-left">
  <colgroup>
        <col style="width: 7%">
        <col style="width: 20%">
        <col style="width: 73%">
    </colgroup>
  <thead>
    <tr>
      <th><b>Fault ID</b></th>
      <th><b>Resolve By</b></th>
      <th><b>Description</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Maintainer</td>
      <td>It cannot be downloaded from the Registry API.</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Maintainer</td>
      <td>
        <ol>
          <li>Internal server error, Unknown error code when finding files from the repository to validate.</li>
          <li>Other errors that prevent the validator to validate the remaining tasks.</li>
          <li>The validation tool is configured to not do full validation of external links, for example, the object contains a link to the TS but the validation is requested to ignore validating that.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>005</td>
      <td>Maintainer</td>
      <td>SenML units were not possible to load and therefore not used during validation</td>
    </tr>
    <tr>
      <td>010</td>
      <td>Maintainer</td>
      <td>The API does not return the same number of objects for DDF.XML</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>011</td>
      <td>Maintainer</td>
      <td>The API does not return the same number of resources for Common.XML - NOT SUPPORTED, THE API DOES NOT SUPPORT Common.XML</td>
    </tr>
    <tr>
      <td>021</td>
      <td>Maintainer</td>
      <td>The XML File is NOT 1) well-formatted or 2) valid according to the schema in DDF.XML</td>
    </tr>
    <tr>
      <td>022</td>
      <td>Maintainer</td>
      <td>The XML File is NOT 1) well-formatted or 2) valid according to the schema in Common.XML</td>
    </tr>
    <tr>
      <td>023</td>
      <td>Maintainer</td>
      <td>Validate that the API return MIME Type application/json</td>
    </tr>
    <tr>
      <td>031</td>
      <td>Maintainer</td>
      <td>Validate that the file contains at least one object in DDF.XML</td>
    </tr>
    <tr>
      <td>032</td>
      <td>Maintainer</td>
      <td>Validate that the file contains at least one resource in Common.XML</td>
    </tr>
    <tr>
      <td>041</td>
      <td>Maintainer</td>
      <td>Invalid content or element that is not expected in DDF.XML</td>
    </tr>
    <tr>
      <td>050</td>
      <td>Maintainer</td>
      <td>Indicate that there are one or more files in the repository that does not exist in DDF.xml.</td>
    </tr>
  </tbody>
</table>

**Elements in the DDF.xml**

<table>
  <colgroup>
    <col style="width: 6%">
    <col style="width: 14%">
    <col style="width: 15%">
    <col style="width: 65%">
  </colgroup>
  <thead>
    <tr>
      <th>Fault ID</th>
      <th>Resolve By</th>
      <th>Elements</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200</td>
      <td>Maintainer</td>
      <td rowspan="3"><strong>ObjectID</strong></td>
      <td>Version is the same between two objects with the same Object ID</td>
    </tr>
    <tr>
      <td>201</td>
      <td>Maintainer</td>
      <td>Name is different for a different version of the same Object ID</td>
    </tr>
    <tr>
      <td>202</td>
      <td>Maintainer</td>
      <td>The description is different for a different version of the same Object ID</td>
    </tr>
    <tr>
      <td>210</td>
      <td>Maintainer</td>
      <td><strong>URN</strong></td>
      <td>
        The <strong>URN</strong> or <strong>ObjectID</strong> is not correct according to the Technical Specification<br>
        The <strong>URN</strong> or <strong>Source</strong> category is not correct according to the Technical Specification<br>
        The <strong>URN</strong> or <strong>Ver</strong> is not correct according to the Technical Specification<br>
        The <strong>ID</strong> is not in the range allowed by <strong>Source</strong>
      </td>
    </tr>
    <tr>
      <td>220</td>
      <td>Maintainer</td>
      <td><strong>Name</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>230</td>
      <td>Maintainer</td>
      <td><strong>Description</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>240</td>
      <td>Maintainer</td>
      <td><strong>Owner</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>250</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>Source</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>251</td>
      <td>Maintainer</td>
      <td>Must be either "0", "1" or "2" without quotes</td>
    </tr>
    <tr>
      <td>260</td>
      <td>Maintainer</td>
      <td><strong>Ver</strong></td>
      <td>Must be 
        <span style="color:#ff00ff"><s>either empty or</s></span> 3 with the format &lt;Digit&gt;.&lt;Digit&gt; according to the Technical Specification</td>
    </tr>
    <tr>
      <td>270</td>
      <td>Submitter</td>
      <td><strong>DDF</strong></td>
      <td>Must be either Empty or a valid link that does not return HTTP 404 (Not Found) and any error while downloading the object or processing the object</td>
    </tr>
    <tr>
      <td>271</td>
      <td>Maintainer</td>
      <td></td>
      <td>The MIME type of the response must be text/xml</td>
    </tr>
    <tr>
      <td>272</td>
      <td>Submitter</td>
      <td></td>
      <td>The link contains an invalid Object</td>
    </tr>
    <tr>
      <td>273</td>
      <td>Submitter</td>
      <td></td>
      <td>The link should contain an Object with a minimum of one resource</td>
    </tr>
    <tr style="color:#ff0000;">
      <td>274</td>
      <td>Maintainer</td>
      <td></td>
      <td>
        For each entry in the &lt;DDF&gt; element there MUST be a file name &lt;ObjectID&gt;-&lt;Ver&gt; in the "version_history" folder. "The error is the file for this ObjectID is missing from the "version_history" folder" or the content of both Objects are not the same.<br>
        <p>In addition these are possible issues:</p>
        <ol>
          <li>Object that is not the latest version MUST be prefixed with "version_history"</li>
          <li>An Object that is the latest version MUST NOT be prefixed with "version_history"</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>275</td>
      <td>Maintainer</td>
      <td></td>
      <td>Previous version exist twice, which is not allowed</td>
    </tr>
    <tr>
      <td>276</td>
      <td>Maintainer</td>
      <td></td>
      <td>Previous version missing. For example if an object contains ver 2.4, then the following version must exist: 2.3, 2.2, 2.1, 2.0, 1.0</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>280</td>
      <td>n/a</td>
      <td>LWM2M</td>
      <td>
        (Void)<br>
        Must either be empty if DDF is empty or a valid link to the tool with the URL to load the object into the tool<br>
        A valid URL must start with the call to the tool:<br>
        <a href="http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=">http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=</a><br>
        Followed by the URL, (URL-encoded), to the Object.<br>
        For example <a href="http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=http%3A%2F%2Fwww.openmobilealliance.org%2Ftech%2Fprofiles%2FLWM2M_APN_connection_profile-v1_0.xml">http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=http%3A%2F%2Fwww.openmobilealliance.org%2Ftech%2Fprofiles%2FLWM2M_APN_connection_profile-v1_0.xml</a><br>
        Note: this error code is no longer in use. The element that contained the link to the LwM2M Editor was removed from the DDF.
      </td>
    </tr>
    <tr>
      <td>290</td>
      <td>Maintainer</td>
      <td><strong>Vorto</strong></td>
      <td>Must be either Empty or a valid link that does not return HTTP 404 (Not Found)</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>291</td>
      <td>n/a</td>
      <td></td>
      <td>DISABLED - The MIME Type of the response must not be "html" to avoid web page with HTTP 404</td>
    </tr>
    <tr>
      <td>300</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>DDFLink</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>301</td>
      <td>Maintainer</td>
      <td>Must be either "0", or "1" without the quotes</td>
    </tr>
    <tr>
      <td>310</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>TS</strong></td>
      <td>Technical Specification (TS) must be either empty or a valid link that does not return HTTP 404 (Not Found)</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>311</td>
      <td>n/a</td>
      <td>DISABLED - The MIME Type of the response must not be "html" to avoid web page with HTTP 404</td>
    </tr>
    <tr>
      <td>320</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>TSLink</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>321</td>
      <td>Maintainer</td>
      <td>Must be either "0", or "1" without the quotes</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>330</td>
      <td>Submitter</td>
      <td>LicenseType</td>
      <td>
       <p>Under development</p>
       <p>Must either be empty or string - Will not be verified, empty or non-existing is treated equally</p>
       <p>Note: to be changed to, it cannot be empty</p>
      </td>
    </tr>
    <tr>
      <td>400</td>
      <td>Submitter</td>
      <td rowspan="12"><strong>Content of Object</strong></td>
      <td>"<strong>ObjectID</strong>" inside the object is not the same as in the <strong>DDF.XML</strong> File</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Submitter</td>
      <td>"<strong>Object URN</strong>" inside the object is not the same as in the <strong>DDF.XML</strong> File</td>
    </tr>
    <tr>
      <td>402</td>
      <td>Submitter</td>
      <td>"<strong>Object Name</strong>" inside the object is not the same as in the <strong>DDF.XML</strong> File</td>
    </tr>
    <tr>
      <td>403</td>
      <td>Submitter</td>
      <td>Incorrect content of <strong>LWM2MVersion</strong></td>
    </tr>
    <tr>
      <td>404</td>
      <td>Submitter</td>
      <td>Non-existent xml schema reference</td>
    </tr>
    <tr>
      <td>405</td>
      <td>Submitter</td>
      <td>Invalid XML schema reference.</td>
    </tr>
    <tr>
      <td>406</td>
      <td>Submitter</td>
      <td>The object is missing Line Feed (<strong>LF</strong>) characters in the end of the file</td>
    </tr>
    <tr>
      <td>407</td>
      <td>Submitter</td>
      <td>Object contains Carriage Return (<strong>CR</strong>) which is not allowed in LwM2M Object and Resource Registry and is required in Object XML files</td>
    </tr>
    <tr>
      <td>408</td>
      <td>Submitter</td>
      <td>Object missing several Line Feed (<strong>LF</strong>), which is not allowed</td>
    </tr>
    <tr>
      <td>700</td>
      <td>Submitter</td>
      <td>Invalid XML characters in <strong>Description1</strong>, e.g. usage of smart quotes (“ExtDevInfo”) rather than straight quotes ("ExtDevInfo")</td>
    </tr>
    <tr>
      <td>701</td>
      <td>Maintainer</td>
      <td>The <strong>Description1</strong> in the DDF and in the Object doesn't match</td>
    </tr>
    <tr>
      <td>705</td>
      <td>Submitter</td>
      <td>Invalid XML characters in <strong>Description2</strong>, e.g. usage of smart quotes (“ExtDevInfo”) rather than straight quotes ("ExtDevInfo")</td>
    </tr>
    <tr>
      <td>410</td>
      <td>Submitter</td>
      <td rowspan="10"><strong>Content of the objects resources</strong></td>
      <td>Empty Name</td>
    </tr>
    <tr>
      <td>411</td>
      <td>Submitter</td>
      <td>Invalid Operations according to the Technical Specification (<strong>TS</strong>)</td>
    </tr>
    <tr>
      <td>412</td>
      <td>Submitter</td>
      <td>Invalid Type according to the Technical Specification (<strong>TS</strong>)</td>
    </tr>
    <tr>
      <td>413</td>
      <td>Submitter</td>
      <td>Invalid Type for an resource with Operation = "<strong>E</strong>" (Execute). Also, "<strong>E</strong>" operation, MUST have "Single" as value of the "Instances" field as indicated in the TS.</td>
    </tr>
    <tr>
      <td>414</td>
      <td>Submitter</td>
      <td>Invalid <strong>MultipleInstances</strong> value</td>
    </tr>
    <tr>
      <td>415</td>
      <td>Submitter</td>
      <td>Invalid <strong>Mandatory</strong> value</td>
    </tr>
    <tr>
      <td>416</td>
      <td>Submitter</td>
      <td>Empty <strong>Description</strong></td>
    </tr>
    <tr>
      <td>420</td>
      <td>Submitter</td>
      <td>Invalid XML characters in <strong>Description</strong>, e.g. usage of smart quotes (“ExtDevInfo”) rather than straight quotes ("ExtDevInfo")</td>
    </tr>
    <tr>
      <td>417</td>
      <td>Submitter</td>
      <td>Invalid Unit value according to <strong>SenML</strong></td>
    </tr>
    <tr>
      <td>418</td>
      <td>Submitter</td>
      <td><p>In the description of a range it is not possible to use "-" or "to" instead it should be used ".."</p>
        <ul>
          <li>Correct Example: "0..23"</li>
          <li>Incorrect: "0 to 23"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>450</td>
      <td>Submitter</td>
      <td rowspan="8"><strong>Content of the object's reusable resources</strong></td>
      <td>The object uses a non existing reusable resource</td>
    </tr>
    <tr>
      <td>451</td>
      <td>Submitter</td>
      <td>Same reusable resource already included</td>
    </tr>
    <tr>
      <td>460</td>
      <td>Submitter</td>
      <td>Mismatch with reusable resources on: <strong>Name</strong></td>
    </tr>
    <tr>
      <td>461</td>
      <td>Submitter</td>
      <td>Mismatch with reusable resources on: <strong>Operation</strong></td>
    </tr>
    <tr>
      <td>462</td>
      <td>Submitter</td>
      <td>Mismatch with reusable resources on: <strong>Type</strong></td>
    </tr>
    <tr>
      <td>463</td>
      <td>Submitter</td>
      <td>Mismatch with reusable resources on: <strong>RangeEnumeration</strong></td>
    </tr>
    <tr>
      <td>464</td>
      <td>Submitter</td>
      <td>Mismatch with reusable resources on: <strong>Unit</strong></td>
    </tr>
    <tr>
      <td>465</td>
      <td>Submitter</td>
      <td><p>Mismatch with reusable resources on: <strong>Description</strong></p>
        <ul>
          <li>Ignore blank space, tab character, line feed and new line character.</li>
          <li>This rule implies that description doesn't change the meaning.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

**Elements in the Common.xml**
<table>
  <colgroup>
    <col style="width: 6%">
    <col style="width: 14%">
    <col style="width: 15%">
    <col style="width: 65%">
  </colgroup>
  <thead>
    <tr>
      <th>Fault ID</th>
      <th>Resolve By</th>
      <th>Elements</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>500</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>ObjectID</strong></td>
      <td>The <strong>ID</strong> is already used in another registration, it must be unique</td>
    </tr>
    <tr>
      <td>501</td>
      <td>Maintainer</td>
      <td>The <strong>ID</strong> is not in the range of (2048 - 26240)</td>
    </tr>
    <tr>
      <td>510</td>
      <td>Maintainer</td>
      <td><strong>Name</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>520</td>
      <td>Submitter</td>
      <td><strong>Operations</strong></td>
      <td>Invalid Operations according to the Technical Specification, ,<strong>TS</strong></td>
    </tr>
    <tr>
      <td>530</td>
      <td>Submitter</td>
      <td rowspan="2"><strong>Type</strong></td>
      <td>Invalid Type according to the Technical Specification, TS</td>
    </tr>
    <tr>
      <td>531</td>
      <td>Submitter</td>
      <td>Invalid Type for an resource with Operation = ",<strong>E</strong>" (Executable)</td>
    </tr>
    <tr>
      <td>540</td>
      <td>n/a</td>
      <td rowspan="2"><strong>Range Enumeration</strong></td>
      <td>N/A, No validation done</td>
    </tr>
    <tr>
      <td>541</td>
      <td>Submitter</td>
      <td>In the description of a range it is not possible to use "-" or "to" instead it should be used ".."
        <ul>
          <li>Correct Example: "0..23"</li>
          <li>Incorrect: "0 to 23"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>551</td>
      <td>Submitter</td>
      <td><strong>Units</strong></td>
      <td>Invalid Unit according to <strong>SenML</strong></td>
    </tr>
    <tr>
      <td>570</td>
      <td>Submitter	</td>
      <td rowspan="2"><strong>Description</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr style="color:#c0c0c0;">
      <td>571</td>
      <td>Maintainer</td>
      <td>VOID. Description is not CDATA encoded</td>
    </tr>
    <tr>
      <td>580</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>TS</strong></td>
      <td>Technical Specification (TS), must be either Empty or a valid link that does not return HTTP 404 (Not Found)</td>
    </tr>
    <tr>
      <td>581</td>
      <td>Maintainer</td>
      <td>The MIME Type of the response must not be "html" to avoid web page with HTTP 404</td>
    </tr>
    <tr>
      <td>590</td>
      <td>Maintainer</td>
      <td rowspan="2"><strong>TSLink</strong></td>
      <td>Is not allowed to be empty</td>
    </tr>
    <tr>
      <td>591</td>
      <td>Maintainer</td>
      <td>Must be either "0" or "1" without quotes</td>
    </tr>
    <tr>
      <td>601</td>
      <td>Submitter		</td>
      <td><strong>Name</strong></td>
      <td>Invalid XML characters in <strong>Name</strong>, e.g. "smart quotes"</td>
    </tr>
    <tr>
      <td>602</td>
      <td>Submitter</td>
      <td><strong>Description</strong></td>
      <td>Invalid XML characters in <strong>Description</strong>, e.g. "smart quotes"</td>
    </tr>
    <tr>
      <td>603</td>
      <td>Submitter</td>
      <td><strong>TS Link</strong></td>
      <td>Invalid XML characters in <strong>TS Link</strong></td>
    </tr>
    <tr>
      <td>604</td>
      <td>Submitter</td>
      <td><strong>Operations</strong></td>
      <td>Invalid XML characters in <strong>Operations</strong> according to the Microsoft XML parser in addition "smart quotes" will generate this error.</td>
    </tr>
    <tr>
      <td>605</td>
      <td>Submitter</td>
      <td><strong>TS</strong></td>
      <td>Invalid XML characters in Technical Specification (<strong>TS</strong>), e.g. "smart quotes"</td>
    </tr> 
  </tbody>
</table>

**Elements inside of the Object**
<table>
  <colgroup>
    <col style="width: 6%">
    <col style="width: 14%">
    <col style="width: 15%">
    <col style="width: 65%">
  </colgroup>
  <thead>
    <tr>
      <th>Fault ID</th>
      <th>Resolve By</th>
      <th>Elements</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>800</td>
      <td>Submitter</td>
      <td><strong>LwM2MVersion</strong>  or <strong>ObjectVersion</strong></td>
      <td>One or both of these elements (LwM2MVersion, ObjectVersion) are missing from the Object.</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
