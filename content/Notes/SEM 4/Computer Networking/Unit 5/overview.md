---
dg-publish: true
---

- [[#1. Concept of 5G Networks|1. Concept of 5G Networks]]
- [[#2. Introduction of 802.16 and 802.20|2. Introduction of 802.16 and 802.20]]
	- [[#2. Introduction of 802.16 and 802.20#IEEE 802.16 (WiMAX)|IEEE 802.16 (WiMAX)]]
	- [[#2. Introduction of 802.16 and 802.20#IEEE 802.20 (MBWA)|IEEE 802.20 (MBWA)]]
- [[#3. Bluetooth|3. Bluetooth]]
- [[#4. Infrared Communication|4. Infrared Communication]]
- [[#5. MANET (Mobile Ad-hoc Networks)|5. MANET (Mobile Ad-hoc Networks)]]
	- [[#5. MANET (Mobile Ad-hoc Networks)#5.1 Introductory Concepts|5.1 Introductory Concepts]]
	- [[#5. MANET (Mobile Ad-hoc Networks)#5.2 Destination Sequenced Distance Vector (DSDV)|5.2 Destination Sequenced Distance Vector (DSDV)]]
	- [[#5. MANET (Mobile Ad-hoc Networks)#5.3 Ad-hoc On-Demand Distance Vector (AODV)|5.3 Ad-hoc On-Demand Distance Vector (AODV)]]
- [[#6. Sensor Networks|6. Sensor Networks]]
- [[#7. Technical Issues of Advanced Networks|7. Technical Issues of Advanced Networks]]

### 1. Concept of 5G Networks

1. 5G stands for the Fifth Generation of mobile networks, succeeding 4G LTE.
    
2. It aims to provide faster speeds, lower latency, and more reliable connections.
    
3. 5G supports three key use cases: Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC), and Massive Machine-Type Communications (mMTC).
    
4. It uses a broader range of frequency bands, including sub-6 GHz and millimeter wave (mmWave) spectrum.
    
5. Advanced technologies in 5G include: Massive MIMO (Multiple Input Multiple Output), Beamforming, Network slicing, and Edge computing.
    
6. Applications include autonomous vehicles, smart cities, IoT, remote surgery, and augmented reality.
    

---

### 2. Introduction of 802.16 and 802.20

#### IEEE 802.16 (WiMAX)

1. WiMAX (Worldwide Interoperability for Microwave Access) is a wireless broadband standard based on IEEE 802.16.
    
2. Designed for Metropolitan Area Networks (MANs).
    
3. Operates between 2 GHz and 66 GHz.
    
4. Supports both fixed and mobile broadband connectivity.
    
5. Provides high-speed data transmission over long distances.
    
6. Can be an alternative to cable or DSL for last-mile broadband access.
    

#### IEEE 802.20 (MBWA)

1. IEEE 802.20 stands for Mobile Broadband Wireless Access.
    
2. Designed for high-speed mobile users (up to 250 km/h).
    
3. Operates in licensed bands below 3.5 GHz.
    
4. Supports IP-based voice and data services.
    
5. Competes with 3G/4G technologies and offers handover and mobility support.
    

---

### 3. Bluetooth

1. Bluetooth is a short-range wireless communication technology standardized under IEEE 802.15.1.
    
2. Operates in the 2.4 GHz ISM (Industrial, Scientific, Medical) band.
    
3. Designed for personal area networks (PANs), connecting devices like phones, headsets, and laptops.
    
4. Supports point-to-point and multipoint communication (piconets and scatternets).
    
5. Range typically varies from 10 meters (Class 2) to 100 meters (Class 1).
    
6. Uses frequency hopping spread spectrum (FHSS) to avoid interference.
    
7. Common applications: file transfer, wireless audio, device pairing.
    

---

### 4. Infrared Communication

1. Infrared (IR) communication uses light waves in the infrared spectrum.
    
2. Operates typically in the range of 780 nm to 950 nm wavelength.
    
3. Line-of-sight (LOS) communication is required between devices.
    
4. Range is generally short—usually 1 to 5 meters.
    
5. Commonly used in TV remote controls, IrDA ports on laptops, and some medical devices.
    
6. Advantages: low power consumption, inexpensive.
    
7. Limitations: requires direct alignment, can be disrupted by obstacles.
    

---

### 5. MANET (Mobile Ad-hoc Networks)

#### 5.1 Introductory Concepts

1. A MANET is a decentralized, infrastructure-less wireless network.
    
2. Nodes communicate directly or via intermediate nodes (multi-hop).
    
3. Nodes are mobile and self-configuring, leading to a dynamic topology.
    
4. Each node acts as both a host and a router.
    
5. MANETs are useful in military operations, disaster recovery, and temporary networks.
    
6. Key challenges include routing, scalability, energy efficiency, and security.
    

#### 5.2 Destination Sequenced Distance Vector (DSDV)

1. DSDV is a proactive routing protocol for MANETs.
    
2. Based on the Bellman-Ford algorithm.
    
3. Each node maintains a routing table with all reachable destinations and hop counts.
    
4. Sequence numbers are used to prevent routing loops and stale routes.
    
5. Routes are updated periodically and whenever significant changes occur.
    
6. Pros: Routes are readily available; low latency.
    
7. Cons: High overhead due to periodic updates, not scalable in highly dynamic networks.
    

#### 5.3 Ad-hoc On-Demand Distance Vector (AODV)

1. AODV is a reactive routing protocol; routes are created only when needed.
    
2. Route discovery uses Route Request (RREQ) and Route Reply (RREP) messages.
    
3. Sequence numbers ensure the freshness of routes.
    
4. Route maintenance is performed using Route Error (RERR) messages.
    
5. Intermediate nodes cache routes for future use.
    
6. Pros: Lower overhead, scalable.
    
7. Cons: Higher latency during route discovery.
    

---

### 6. Sensor Networks

1. Wireless Sensor Networks (WSNs) consist of spatially distributed autonomous sensors.
    
2. Sensors collect data such as temperature, humidity, vibration, etc.
    
3. Data is transmitted wirelessly to a base station or sink node.
    
4. Nodes are resource-constrained (limited power, processing, memory).
    
5. Applications include environmental monitoring, industrial automation, healthcare, and military surveillance.
    
6. Sensor nodes must operate in energy-efficient ways to prolong network lifetime.
    
7. Communication protocols are designed for reliability, fault tolerance, and low energy consumption.
    

---

### 7. Technical Issues of Advanced Networks

1. Scalability: Networks must handle growing numbers of devices and users efficiently.
    
2. Security: Protecting data integrity, confidentiality, and access in open wireless environments.
    
3. Mobility Management: Seamless handoff and session continuity as nodes move.
    
4. Quality of Service (QoS): Ensuring latency, bandwidth, jitter, and reliability requirements are met.
    
5. Interoperability: Supporting diverse devices and standards in heterogeneous networks.
    
6. Energy Efficiency: Especially critical in battery-operated nodes like those in WSNs and MANETs.
    
7. Fault Tolerance: Ability of the network to continue functioning despite node failures or link losses.
    
8. Spectrum Management: Efficient utilization of available frequency bands and avoiding interference.
    

---

Would you like this converted into a Word document or PDF for easy printing and revision?