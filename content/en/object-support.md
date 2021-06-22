---
title: 22 - Object Observe Notify
description: 'This is the description of Object 22'
position: 2
category: 'Object Guidelines'
---
## Scope
This document defines an Object to be used to flexibly report resources across different objects in a single client notification
message under different conditions and rules.

## Introduction
The Information Reporting Interface is used by a LwM2M Server to observe any changes of resources on a registered
LwM2M Client, receiving notifications when new values are available. In LightweightM2M version 1.0, a single notification
message can only include resources in a single object. In LightweightM2M version 1.1, the LwM2M Enabler can surport a
mechanism for atomic reporting of resources across different objects in a single notification. However, the conditions and
rules of a notification message are too simple to satisfy complex scenarios that described as follows:
* The notification message can only be sent when multiple subscription conditions are met at the same time.
* Only some of the observed resources are included in the notification message, and other resources are only used as
subscription conditions.
* Compared with the last notification message, this notification message only contains the changed resources.
In order to satisfy the requirements described above, this specification defines an Object to realize flexibly reporting
resources across different objects in a single client notification message under different conditions and rules.

### Version 1.0
Version 1.0 of the Virtual Observe Notify object is used to support following functionalities.
1. Reporting resources across different objects in a single client notification message.
2. Supporting AND conditions for subscription, that is, a single client notification can be sent just when multiple
subscription conditions are met at the same time.
3. Using resources as only the condition for Observe operation.
4. Reporting changed resources by a notification message.


## Virtual Observe Notify Use cases
### Overview
The Virtual Observe Notify Object provides a mechanism to observe and notify multiple resources by less messages between
LwM2M Client and Server which are in one object/object instance or across multiple objects/object instances. This
mechanism can reduce the message numbers and improve communication efficiency between LwM2M Client and LwM2M
Server.

### Observe and Notify Multiple Resources
This use case descripts the procedure when the LwM2M Server wants to get the report of multiple Resources of different
Objects. It specifies the usage of Resource “ObserveLinks” and “Report”.
The LwM2M Server initiates a Write request for changes of the Resource ObserveLinks (/22/0/0), which includes the
Resources within an Object or different Objects within the LwM2M Client.
For example, the LwM2M Server wants to get the report of the Radio Signal Strength (/4/0/2) and Battery Level (/3/0/9)
resources when the Radio Signal Strength is less than -120dBm or the Battery Level is less than 50%.

Image Figure 1

Step 1: The LwM2M Server sends the Write-Composite request to LwM2M Client to observe multiple resources which are
included in the Resource ObserveLinks (/22/0/0). The payload in the request is an array of application/link-format CoRE
Links. In this example, the payload includes Radio Signal Strength (/4/0/2) and Batter Level (/3/0/9) with their “lt”
Attributes.
Step 2: The LwM2M Client sends the ACK to the LwM2M Server and starts to observe the two resources. When any of the
two resource meets its condition set by the LwM2M Server using R-Attributes, the LwM2M Client writes the two resources
into the Resource Report (/22/0/1).
Step 3: The LwM2M Server sends the Write-attribute request to the LwM2M Client to update the Attributes attached to the
Resource /22/0/1 (Report). 
OMA-TS-LWM2M_VirtualObserveNotify-V1_0-20190711-A Page 9 (17)
© 2019 Open Mobile Alliance.
Used with the permission of the Open Mobile Alliance under the terms as stated in this document. [OMA-Template-Spec-20190101-I]
Step 4: The LwM2M Client sends the ACK to the LwM2M Server.
Step 5: The LwM2M Server initiates an observation request for changes of the Resource Report (/22/0/1) within the LwM2M
Client.
Step 6: The LwM2M Client sends the ACK to the LwM2M Server.
Step 7: The LwM2M Client sends the Notify message to the LwM2M Server when the timer expires.
Step 8: The LwM2M Server sends Cancel Observation operation to the LwM2M Client to stop the observation of the
Resource Report within the LwM2M Client.
Step 9: The LwM2M Server sends Write  request to LwM2M Client to stop the observation of the resources which are
included in the Resource ObserveLinks.

### Observe Multiple Resources and Notify Changed Resources
This use case descripts the procedure when the LwM2M Server wants to get the changed Resources in the multiple Resources. It specifies the usage of Resource “ResourceFilter”.

The LwM2M Server initiates a Write request for changes of the Object Instant (/22/0), the payload includes ObserveLinks (/22/0/0) and ResourceFilter (/22/0/2).

For example, the DM server (LwM2M Server) needs changed Resources of the Device Object (/3/0) and Connectivity Monitoring Object (/4/0) of the water meter (LwM2M Client) via NB-IoT to monitor the device.


Figure 2 - Example flow for Observing Multiple Resources and Notifying Changed Resources

Step 1: The LwM2M Server sends the Write-Composite request to LwM2M Client to observe multiple resources which are included in the Resource ObserveLinks (/22/0/0). The request payload includes the Resource ObserveLinks (/22/0/0) and
Resource ResourceFilter (/22/0/2). In this example, the value of the Resource ObserveLinks are Device Object Instance 0 and Connectivity Monitoring Object Instance 0; the value of the Resource ResourceFilter is 1.

Step 2: The LwM2M Client sends the ACK to the LwM2M Server and starts to observe the two object instance. When any Resource of two Objects is changed compared with the last notification message and meets its condition set by the LwM2M
Server using R-Attributes, the LwM2M Client writes the changed Resources into the Resource Report (/22/0/1). The Resources which are not changed compared with the last notification aren’t written into the Resource Report (/22/0/1).
Note: If any Resource of two Objects is not changed which is compared with the value in the last notification message, the LwM2M Client doesn’t write any Resource into the Resource Report (/22/0/1).

Step 3: The LwM2M Server sends the Write-attribute request to the LwM2M Client to update the Attributes’ values of Resource Report (/22/0/1).

Step 4: The LwM2M Client sends the ACK to the LwM2M Server.

Step 5: The LwM2M Server initiates an observation request for changes of the Resource Report (/22/0/1) within the LwM2M Client.

Step 6: The LwM2M Client sends the ACK to the LwM2M Server.

Step 7: The LwM2M Client sends the Notify message to the LwM2M Server including the changed resources in the Resource ObserveLink.

### Observe Multiple Resources and Notify Different Resources
This use case descripts the procedure when the LwM2M Server wants to get the different Resources from observed the multiple Resources. It specifies the usage of Resource “ReportLinks” and “ObserveRelation”.

The LwM2M Server initiates a Write request for changes of the Object Instant (/22/0), the payload includes ObserveLinks (/22/0/0), ReportLinks (/22/0/3) and ObserveRelation (/22/0/4).

For example, the shared bike operator need protect the shared bike security. The LwM2M Server needs location (/6/0/1 and /6/0/2) of Device Object (/6/0) when the state of the lock is switched-off and the speed of the client is more than 1. The notification may trigger the LwM2M Server to trace the client and or do other processing.

Figure 3 - Example flow for Observing Multiple Resources and Notifying Different Resources

Step 1: The LwM2M Server sends the Write-Composite request to LwM2M Client to observe multiple resources which are included in the Resource ObserveLinks (/22/0/0). The request payload includes the Resource ObserveLinks (/22/0/0), ReportLinks (/22/0/3) and ObserveRelation (/22/0/4). In this example, the value of the Resource ObserveLinks are the Resource Speed (/6/0/6) of Location Object (/6/0) with the “gt” attribute, and the Digital Input State resource (/3342/0/5500) of On/Off switch Object (/3342/0) with the “lt” attribute. The value of the Resource ReportLinks are the Resource Latitude (/6/0/0) and the Resource Longitude (/6/0/1. The value of ObserveRelation is 1.

Step 2: The LwM2M Client sends the ACK to the LwM2M Server and starts to observe the two resources. When the Digital Input State resource and the Resource Speed meet its condition set by the LwM2M Server using R-Attributes at the same time, that is the state of the lock is switched-off and the Speed of the bike is more than 1, the LwM2M Client writes the value of the Resource Latitude (/6/0/0) and Resource Longitude (/6/0/1) into the Resource Report (/22/0/1).

Step 3: The LwM2M Server sends the Write-attribute request to the LwM2M Client to update the Attributes’ values of Resource /22/0/1 (Report).

Step 4: The LwM2M Client sends the ACK to the LwM2M Server.

Step 5: The LwM2M Server initiates an observation request for changes of the Resource Report (/22/0/1) within the LwM2M Client.

Step 6: The LwM2M Client sends the ACK to the LwM2M Server.

Step 7: The LwM2M Client sends the Notify message to the LwM2M Server including the resources in the Resource ReportLinks.

### Observe Multiple Resources and Notify Partial Resources
This use case descripts the procedure when the LwM2M Server wants to get the partial Resources in the multiple Resources. It specifies the usage of Resource “ReportLinks” and “ObserveRelation”.

The LwM2M Server initiates a Write request for changes of the Object Instant (/22/0), the payload includes ObserveLinks (/22/0/0), ReportLinks (/22/0/3) and ObserveRelation (/22/0/4).

For example, the LwM2M Server want to check the NB-IoT network coverage, and ask the LwM2M Client to report Radio Signal Strength when Network Bearer is NB-IoT and Radio Signal Strength is less than one threshold.

Figure 4 - Example flow for Observing Multiple Resources and Notifying Partial Resources

Step 1: The LwM2M Server sends the Write-Composite request to LwM2M Client to observe multiple resources which are included in the Resource ObserveLinks (/22/0/0). The request payload includes the Resource ObserveLinks (/22/0/0), ReportLinks (/22/0/3) and ObserveRelation (/22/0/4). In this example, the value of the Resource ObserveLinks are the Resource Network Bearer (/4/0/0) of Connectivity Monitoring (/4/0) with the “gt” and “lt” attribute, and the Resource Radio Signal Strength (/4/0/2) of Connectivity Monitoring (/4/0) with the “lt” attribute . The value of the Resource ReportLinks are the Resource Radio Signal Strength (/4/0/2). The value of ObserveRelation is 1.

Step 2: The LwM2M Client sends the ACK to the LwM2M Server and starts to observe the two resources. When the Network Bearer and Radio Signal Strength respectively meets its condition set by the LwM2M Server using R-Attributes and meets the report conditions which is the value of the ObserveRelation Resource, the LwM2M Client writes the value of the Resource Radio Signal Strength (/4/0/2) into the Resource Report (/22/0/1).

Step 3: The LwM2M Server sends the Write-attribute request to the LwM2M Client to update the Attributes’ values of Resource /22/0/1 (Report).

Step 4: The LwM2M Client sends the ACK to the LwM2M Server.

Step 5: The LwM2M Server initiates an observation request for changes of the Resource Report (/22/0/1) within the LwM2M Client.

Step 6: The LwM2M Client sends the ACK to the LwM2M Server.

Step 7: The LwM2M Client sends the Notify message to the LwM2M Server.