---
title: LwM2M Tools
description: 'this section is dedicated to list all the existing LwM2M Tools '
position: 15
category: 'LWM2M'
---
OMA has developed several tools to support the adoption of LightWeightM2M Specifications.

## LwM2M Editor
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>LwM2M Editor<strong></td>
            <td>
                <p>Although it is called <a href="https://devtoolkit.openmobilealliance.org/OEditor/Default" target="_blank">LwM2M Editor</a> in reality this application is formed by four tools that complement each other:</p>
                <ul>
                    <li>
                        <p><a href="https://testdevtoolkit.openmobilealliance.org/OEditor/LWMOEdit" target="_blank">Resource Editor</a></p>
                        <p>This part of the tool allows to define and export a LwM2M Resource</p>
                    </li>
                    <li>
                        <p><a href="https://testdevtoolkit.openmobilealliance.org/OEditor/LWMOEdit" target="_blank"> Object Editor v1.0</a> or <a href="https://testdevtoolkit.openmobilealliance.org/OEditor/LWMOEdit" target="_blank">v1.1</a></p>
                        <p>LwM2M Protocol has currently define two schemas <a href="https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/LWM2M.xsd" target="_blank">v1.0</a> and <a href="https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/LWM2M-v1_1.xsd" target="_blank">v1.1</a>. LwM2M Objects are created using one of these two schemas.</p>
                    </li>
                    <li>
                        <p><a href="https://testdevtoolkit.openmobilealliance.org/OEditor/License" target="_blank">License Editor</a></p>
                        <p>Each LwM2M Object needs include a license. The tool allows to insert the license once the Object is uploaded to the Editor. OMA publishes its Objects under <strong>BSD-3 License</strong>. We recommend to use the same License on Objects defined privately, in this way the Objects can be shared with other Standards Organizations.</p>
                    </li>
                    <li>
                        <p><a href="https://testdevtoolkit.openmobilealliance.org/OEditor/OMNAVerify?Current=1" target="_blank">Object Validator</a></p>
                        <p>See comments in next tool <strong>Object Validator</strong></p>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## LwM2M Validator

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>LwM2M Editor<strong></td>
            <td>
                <ul>
                    <li>
                        <p><a href="https://testdevtoolkit.openmobilealliance.org/OEditor/OMNAVerify?Current=1" target="_blank">Object Validator</a></p>
                        <p>OMA has defined several validation tools. The <a href="https://testdevtoolkit.openmobilealliance.org/OEditor/OMNAVerify?Current=1" target="_blank">Object Validator</a> allows to validate an Object once it is uploaded to the Editor.</p>
                        <p>The second validation tool is incorporated into the <a href="https://github.com/OpenMobileAlliance/lwm2m-registry" target="_blank">LwM2M Registry</a> as CI/CD validation. The Object is validated at the time to submit a Pull Request, see <a href="https://github.com/OpenMobileAlliance/lwm2m-registry#readme" target="_blank">README</a> file in the <a href="https://github.com/OpenMobileAlliance/lwm2m-registry" target="_blank">LwM2M Registry</a> for further details.</p>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## LwM2M Service API

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>LwM2M Service API<strong></td>
            <td>
                <ul>
                    <li>                      
                        <p><a href="https://wiki.openmobilealliance.org/display/TOOL/Registry+API" target="_blank">LwM2M API</a></p>
                        <p>This Service API allows Internet appliances to enquiry the LwM2M Objects registry in the <a href="https://github.com/OpenMobileAlliance/lwm2m-registry" target="_blank">OMA LwM2M Registry</a>, (also called <i>OMNA LwM2M Registry</i>)</p>
                        <p>For instance this link <a href="http://www.openmobilealliance.org/api/lwm2m/v1/Object?ObjectID=12&ObjectVersion=latest" target="_blank">lwm2m/v1/Object?ObjectID=12&ObjectVersion=latest</a> will interrogate the <a href="https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/DDF.xml" target="_blank">DDF.xml</a> file and will return latest version of Object 12.</p>
                        <alert>The <a href="https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/DDF.xml" target="_blank">DDF.xml</a> file contains a reference to all the Objects published in the <a href="https://github.com/OpenMobileAlliance/lwm2m-registry" target="_blank">LwM2M Registry</a> </alert>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## LwM2M DevToolKit

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>LwM2M DevKit<strong></td>
            <td>
                <ul>
                    <li>
                        <p><a href="https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit" target="_blank">LwM2M DevKit</a></p>
                        <p>This is similar to a Protocol Analyzer tool. It shows the content of the messages exchanged between the LwM2M Client and LwM2M Server. </p>
                    </li>
                </ul>
            </td>
        </tr> 
    </tbody>
</table>