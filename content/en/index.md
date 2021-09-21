---
title: LwM2M Protocol
description: ''
position: 1
category: 'LWM2M'
features:
  - Feature 1
  - Feature 2
  - Feature 3
footer: MIT Licensed | Copyright © 2018-present Evan You
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

### V1.2 Documents

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
            <td>OMA-RD-LightweightM2M-V1_2-20201110-A</td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td>OMA-TS-LightweightM2M_Core-V1_2-20201110-A</td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td>OMA-TS-LightweightM2M_Transport-V1_2-20201110-A</td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td>OMA-SUP-XML_LWM2M-V1_1-20180710-A</td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

### V1.1.1 Functionality

Version 1.1.1 of the LwM2M protocol introduced the following new feature:  

* Support for Concise Binary Object Representation (CBOR) format for use with "Read" and "Write" operations on single resources

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



[Module]() for [NuxtJS](https://nuxtjs.org).

<alert type="success">

Your documentation has been created successfully!

</alert>

## Features

<list :items="features"></list>

<p class="flex items-center">Enjoy light and dark mode:&nbsp;<app-color-switcher class="inline-flex ml-2"></app-color-switcher></p>

new line
