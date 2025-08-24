---
dg-publish: true
---

- [[#1. Introduction|1. Introduction]]
- [[#2. General Principles of Congestion|2. General Principles of Congestion]]
	- [[#2. General Principles of Congestion#What Causes Congestion?|What Causes Congestion?]]
	- [[#2. General Principles of Congestion#Effects of Congestion|Effects of Congestion]]
- [[#3. Congestion Prevention Policies|3. Congestion Prevention Policies]]
	- [[#3. Congestion Prevention Policies#A. Open-Loop Congestion Control (Prevention Before It Happens)|A. Open-Loop Congestion Control (Prevention Before It Happens)]]
		- [[#A. Open-Loop Congestion Control (Prevention Before It Happens)#Methods:|Methods:]]
	- [[#3. Congestion Prevention Policies#B. Closed-Loop Congestion Control (After Congestion Occurs)|B. Closed-Loop Congestion Control (After Congestion Occurs)]]
		- [[#B. Closed-Loop Congestion Control (After Congestion Occurs)#Methods:|Methods:]]
- [[#4. Load Shedding|4. Load Shedding]]
	- [[#4. Load Shedding#Definition:|Definition:]]
	- [[#4. Load Shedding#How It Works:|How It Works:]]
	- [[#4. Load Shedding#Example:|Example:]]
	- [[#4. Load Shedding#Advantages:|Advantages:]]
	- [[#4. Load Shedding#Disadvantages:|Disadvantages:]]
- [[#5. Jitter Control|5. Jitter Control]]
	- [[#5. Jitter Control#Definition:|Definition:]]
	- [[#5. Jitter Control#Jitter Control Techniques:|Jitter Control Techniques:]]
	- [[#5. Jitter Control#Example:|Example:]]
- [[#6. Summary|6. Summary]]

# Congestion Control in Networks

## 1. Introduction

Network congestion occurs when too many packets try to pass through a network, leading to packet loss, delays, and reduced performance. Congestion control mechanisms help prevent, detect, and resolve congestion to ensure efficient data transmission.

---

## 2. General Principles of Congestion

### What Causes Congestion?

1. High Traffic Load – More packets than the network can handle.
2. Insufficient Bandwidth – Data transmission exceeds network capacity.
3. Slow Processing – Routers or switches take too long to process packets.
4. Packet Collision – Data packets collide and must be resent.
5. Queuing Delays – Too many packets waiting in buffers.

### Effects of Congestion

- Increased latency (delay).
- Packet loss (data never reaches its destination).
- Low throughput (reduced network performance).

---

## 3. Congestion Prevention Policies

### A. Open-Loop Congestion Control (Prevention Before It Happens)

- Controls traffic flow before congestion occurs.
- Does not react to congestion directly but prevents it.

#### Methods:

1. Traffic Shaping – Limits the rate of data transmission.
    - Example: Leaky Bucket and Token Bucket algorithms.
2. Admission Control – Restricts new connections if the network is busy.
3. Packet Prioritization – Important packets get higher priority.
    - Example: QoS (Quality of Service) in VoIP.
4. Load Balancing – Distributes traffic across multiple routes.
    - Example: CDN (Content Delivery Network) for web services.

### B. Closed-Loop Congestion Control (After Congestion Occurs)

- Detects congestion and adjusts the traffic flow dynamically.

#### Methods:

1. Backpressure – Temporarily stops data flow when congestion is detected.
2. Choke Packets – Router sends a warning (choke packet) to slow down traffic.
3. Explicit Congestion Notification (ECN) – Marks packets to indicate congestion.
4. Window Adjustment – TCP reduces the window size to control traffic.

---

## 4. Load Shedding

### Definition:

Load shedding is a method of reducing congestion by discarding low-priority packets when the network is overloaded.

### How It Works:

- When the buffer is full, routers drop non-essential packets first.
- Critical data (e.g., emergency messages, VoIP calls) is protected.

### Example:

- Streaming services like Netflix drop some video frames if congestion occurs, preventing buffering delays.

### Advantages:

✔ Keeps the network responsive during congestion.  
✔ Prevents total network failure.

### Disadvantages:

✘ Some data is lost permanently.  
✘ May affect low-priority services (e.g., file downloads).

---

## 5. Jitter Control

### Definition:

Jitter is the variation in packet arrival time. High jitter causes choppy audio in VoIP and buffering in video streaming.

### Jitter Control Techniques:

1. Packet Buffers – Store packets temporarily to ensure smooth delivery.
2. Traffic Shaping – Uses algorithms like Token Bucket to regulate packet flow.
3. Priority Scheduling – Assigns higher priority to real-time packets (e.g., VoIP).
4. Network Optimization – Uses faster routing paths to reduce delays.

### Example:

- Zoom and Microsoft Teams use jitter buffers to smooth video calls.

---

## 6. Summary

- Congestion happens when network traffic exceeds capacity.
- Congestion prevention methods include traffic shaping, prioritization, and admission control.
- Load shedding drops low-priority packets to keep the network stable.
- Jitter control ensures smooth transmission for real-time applications.

Would you like a detailed example of TCP congestion control (AIMD, Slow Start, etc.)?