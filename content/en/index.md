---
title: Protocol
description: ''
position: 1
category: 'LWM2M'
---
### V1.2 Functionality

Version 1.2 of the LwM2M protocol introduced the following new features:

* New transports for LwM2M; this allows LwM2M messaging to be conveyed over MQTT and over HTTP.

* Optimizations for the bootstrapping interface; this reduces the amount of data and the number of messages transmitted during the bootstrapping exchange.

* Optimizations for the registration interface; this reduces the amount of data transmitted during registration exchanges.

* Optimizations for the information reporting interface; observation attributes may now be included in an Observe operation.

* Support for LwM2M gateway functionality; this allows non-LwM2M IoT devices as well as LwM2M devices behind a gateway to be connected to the LwM2M ecosystem and to manage those devices remotely.

* New, highly optimized encoding format based on CBOR called LwM2M CBOR.

* Enhanced functionality for firmware updates.

* Definition of new notification attributes (edge, confirmable notification, and maximum historical queue). Edge allows notifications to be triggered on rising and falling edges. Confirmable notifications allow the control of reliable transmissions of notifications. Maximum historical queue allows the control of time-series data usage.

* Clarifications of object versioning rules.

* Updates to use the latest communication security protocols based on TLS and DTLS 1.3 (as well as the use of the Connection ID).

* Flexibility to control the use of TLS and DTLS 1.3 through configuration information.

* Untangling the relationship of security credentials and their server configuration.

#### V1.2 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.2</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-RD-LightweightM2M-V1_2-20201110-A.pdf" target="_blank">OMA-RD-LightweightM2M-V1_2-20201110-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.pdf" target="_blank">OMA-TS-LightweightM2M_Core-V1_2-20201110-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf" target="_blank">OMA-TS-LightweightM2M_Transport-V1_2-20201110-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.2 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-ERP-LightweightM2M-V1_2-20201110-A.zip)

#### OMNA Considerations
For LwM2M v1.2:
New LwM2M Objects are listed in Appendix E of [LightweightM2M_TS_Core](https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.pdf)

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.2: 
OMA is requesting IANA to register a new media type for LwM2M CBOR in the "Media Types" registry and in the "CoAP Content-Formats" registry.:

* Type name: application
* Subtype name: vnd.oma.lwm2m+cbor
* Required parameters: none
* Optional parameters: none
* Encoding considerations: binary

### V1.1.1 Functionality

Version 1.1.1 of the LwM2M protocol introduced the following new feature:  

* Support for Concise Binary Object Representation (CBOR) format for use with "Read" and "Write" operations on single resources

#### V1.1.1 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.1.1</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-RD-LightweightM2M-V1_1-20180710-A.pdf" target="_blank">OMA-RD-LightweightM2M-v1_1-20180710-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf" target="_blank">OMA-TS-LightweightM2M-Core-v1_1_1-20190617-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Transport-V1_1_1-20190617-A.pdf" target="_blank">OMA-TS-LightweightM2M-Transport-v1_1_1-20190617-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.1.1 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-ERP-LightweightM2M-V1_1_1-20190617-A.zip)

#### OMNA Considerations
For LwM2M v1.1:
* LWM2M-v1_1.xsd new LightweightM2M schema for v1.1 protocol.

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.1: 
* OMA is requesting IANA to register a new SenML Label for LwM2M object links in the "Sensor Measurement Lists (SenML) Parameters" registry, "SenML Labels" sub-registry:

    * Name: Object Link Value
    * Label: vlo
    * JSON type: String
    * XML type: string
    * Reference: LwM2M TS v1.1


### V1.1 Functionality

Version 1.1 of the LwM2M protocol introduced the following new features:  

* Enhancement of the LwM2M bootstrapping capabilities allowing for incremental upgrades.  

* Improved support for Public Key Infrastructure (PKI) deployments. 

* Introduction of enhanced registration sequence mechanisms by the LwM2M Client to LwM2M Server(s).

* Support for LwM2M over TCP/TLS to better support firewall and NAT traversal. 

* Better support of LwM2M over Low Power WANs, including 3GPP CIoT & LoRaWAN.

* Extended LwM2M commands to enable Resource Instance level access.

* Performance improvement for retrieving and updating Resources of multiple objects.

* Support for JSON using SenML with CBOR serialization for compressed payload with highly efficient transmission.

* Addition of new data types.

#### V1.1 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.1</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-ERP-LightweightM2M-V1_1-20180710-A-PDF.zip" target="_blank">OMA-RD-LightweightM2M-v1_1-20180710-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-TS-LightweightM2M_Core-V1_1-20180710-A.pdf" target="_blank">OMA-TS-LightweightM2M-Core-v1_1-20180710-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-TS-LightweightM2M_Transport-V1_1-20180710-A.pdf" target="_blank">OMA-TS-LightweightM2M-Transport-v1_1-20180710-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.1 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-ERP-LightweightM2M-V1_1-20180710-A-PDF.zip)

#### OMNA Considerations
For LwM2M v1.1:
* LWM2M-v1_1.xsd new LightweightM2M schema for v1.1 protocol.

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.1: 
IANA has registered the following media types for use with LwM2M:

* application/vnd.oma.lwm2m+json
* application/vnd.oma.lwm2m+tlv

OMA is requesting IANA to register a new SenML Label for LwM2M object links in the "Sensor Measurement Lists (SenML) Parameters" registry, "SenML Labels" sub-registry:

   * Name: Object Link Value
   * Label: vlo
   * JSON type: String
   * XML type: string
   * Reference: LwM2M TS v1.1

### V1.0 Functionality
Lightweight M2M 1.0 enabler introduces the following features below for the initial release.

* Simple Object based resource model

* Resource operations of creation/retrieval/update/deletion/configuration of attribute

* Resource observation/notification

* TLV/JSON/Plain Text/Opaque data format support

* UDP and SMS transport layer support

* DTLS based security

* Queue mode for NAT/Firewall environment

* Multiple LwM2M Server support

* Basic M2M functionalities: LwM2M Server, Access Control, Device, Connectivity, Firmware Update, Location, Connectivity Statistics 

