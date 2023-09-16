---
title: Utility Busines Cases
description: 'This provides utility business cases'
position: 200
category: Utility
---

<alert><p style="color:DodgerBlue;">Download the White Paper: <a href="" target="_blan">South East Water Corporation - Use of LwM2M for Water Utility Management</a></p></alert>
 

Business Case: _**South East Water Corporation's Use of LightweightM2M (LwM2M) for Water Utility Management**_

## Executive Summary
This business case outlines how South East Water Corporation effectively utilized LightweightM2M (LwM2M) to develop a comprehensive suite of LwM2M Water Utility Objects. These objects are designed to manage and monitor water-related IoT devices, improving operational efficiency and ensuring reliable water utility management.

## Background
South East Water Corporation operates within the water utility sector and manages water supply and distribution networks. To enhance its operations and monitor its infrastructure efficiently, the corporation adopted the LwM2M protocol to develop Water Utility Objects.

## Objectives
- Develop standardized LwM2M Water Utility Objects for efficient water utility management.
- Enhance data collection and analysis capabilities to optimize resource allocation.
- Improve real-time monitoring and reporting of water-related parameters.
- Enhance responsiveness to alarms and anomalies within the water distribution network.

## LightweightM2M (LwM2M) Water Utility Objects
South East Water Corporation created and registered with OMA Naming Authority (OMNA) a set of LwM2M Water Utility Objects, categorized based on LwM2M primary capabilities:

### Data Delivery Objects:
1. Interval Data Delivery - 10262: Provides optimized means for managing the delivery of interval data from multiple Interval Data Object instances.
2. Event Data Delivery - 10263: Offers a simple means for managing the delivery of event data from multiple Event Data Object instances.
3. Delivery Schedule - 10264: Enables control of the periodic delivery of interval and event data to the LwM2M server.

### Measurement Objects:
4. Leakage Detection Configuration - 10265: Configures the timing and sampling frequency of a vibration-based network leak detector.
5. Water Flow Readings – 10266: Measures water flow in regular intervals.
6. Daily Maximum Flow Rate Reading - 10267: Records the maximum flow rate and timestamp for a specified period.
7. Temperature Reading – 10268: Provides periodic temperature measurements.
8. Pressure Reading - 10269: Offers periodic pressure measurements.
9. Battery Level Reading - 10270: Records periodic battery level measurements.
10. Communications Activity Time Readings - 10271: Measures the total duration that the meter was activating its radio for packet transmission or receipt, enabling monitoring for excess power usage over time.

### Alarm Objects:
11. Water Meter Customer Leakage Alarm - 10272: Detects continual usage and potential leaks.
12. Water Meter Reverse Flow Alarm - 10273: Alerts on reverse flow and estimates the volume of water flowing in the reverse direction.
13. Water Meter Empty Pipe Alarm - 10274: Alerts when no liquid is detected in the pipe.
14. Water Meter Tamper Alarm - 10275: Detects tampering or interference.
15. Water Meter High-Pressure Alarm - 10276: Raises alarms for high pressure.
16. Water Meter Low-Pressure Alarm - 10277: Raises alarms for low pressure.
17. High-Temperature Alarm - 10278: Raises alarms for high temperature.
18. Low-Temperature Alarm - 10279: Raises alarms for low temperatures.
19. Water Network Leak Alarm - 10280: Identifies upstream network leaks based on vibration sensor/accelerometer data.
20. Low Battery Alarm - 10281: Alerts when the battery voltage drops below a defined level.
21. DaughterBoard Failure Alarm - 10282: Indicates meter MCU communication failure with a daughter board.
22. Device Reboot Event - 10283: This binary status should indicate that the meter MCU can no longer communicate with a daughterboard.
23. Time Synchronization Event - 10284: Records time synchronization events.

## Benefits
- Enhanced Monitoring: Real-time monitoring of water flow, temperature, pressure, and other critical parameters.
- Efficient Data Delivery: Optimized data delivery and control of data transmission schedules.
- Proactive Alerts: Immediate detection and alerting for anomalies, leaks, and equipment failures.
- Resource Optimization: Improved resource allocation based on accurate data.
- Data Analysis: Historical data for analysis and decision-making.
- Compliance: Ensuring compliance with regulatory standards.

## Conclusion
South East Water Corporation's development and implementation of LightweightM2M (LwM2M) Water Utility Objects represent a significant advancement in water utility management. These standardized objects offer efficient data management, real-time monitoring, and proactive alarm capabilities, ultimately improving service quality and resource utilization. Adopting LwM2M has positioned South East Water Corporation as a leader in the water utility industry, setting the standard for reliable and efficient water distribution and management.

## About
***About Open Mobile Alliance (OMA):**
The Open Mobile Alliance (OMA) is a leading standards organization dedicated to developing open and interoperable standards for mobile and wireless technologies. Established by industry leaders, OMA's mission is to drive innovation in mobile communication by creating a framework of standards that promote the seamless integration of various mobile services, devices, and networks. With a focus on ensuring global interoperability and enhancing the mobile user experience, OMA collaborates with industry stakeholders to define standards and best practices that shape the future of mobile technology.*

***About Open Mobile Alliance Naming Authority (OMNA):**
The Open Mobile Alliance Naming Authority (OMNA) is a vital component of the Open Mobile Alliance (OMA) ecosystem. OMNA is responsible for managing and overseeing the allocation of unique identifiers, including Object IDs and URIs (Uniform Resource Identifiers), within the context of OMA standards. These identifiers are critical in ensuring the integrity and compatibility of OMA's standards and specifications across diverse mobile and IoT (Internet of Things) devices and services. OMNA's role is essential in maintaining the order and consistency of OMA's standards, fostering interoperability, and facilitating the growth of the mobile and IoT industries.*

***About OMA LightweightM2M (LwM2M):**
OMA LightweightM2M (LwM2M) is a specialized protocol developed by the Open Mobile Alliance (OMA) to address the unique requirements of managing Internet of Things (IoT) and Machine-to-Machine (M2M) devices. LwM2M is designed to provide efficient and standardized communication between resource-constrained IoT devices and management platforms. It offers features such as device registration, remote firmware updates, data reporting, and configuration management, making it an ideal choice for managing IoT deployments. LwM2M's lightweight and efficient nature ensures that even devices with limited processing power and memory can benefit from standardized and secure device management, contributing to the scalability and reliability of IoT solutions.*
