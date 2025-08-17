---
dg-publish: true
---
- [[#1. Introduction|1. Introduction]]
- [[#2. Functions of the Network Layer|2. Functions of the Network Layer]]
	- [[#2. Functions of the Network Layer#A. Logical Addressing|A. Logical Addressing]]
	- [[#2. Functions of the Network Layer#B. Routing|B. Routing]]
	- [[#2. Functions of the Network Layer#C. Packet Forwarding|C. Packet Forwarding]]
	- [[#2. Functions of the Network Layer#D. Fragmentation and Reassembly|D. Fragmentation and Reassembly]]
- [[#3. Protocols Used in the Network Layer|3. Protocols Used in the Network Layer]]
- [[#4. How the Network Layer Works|4. How the Network Layer Works]]
- [[#5. Example Scenario|5. Example Scenario]]
	- [[#5. Example Scenario#Sending an Email (Network Layer in Action)|Sending an Email (Network Layer in Action)]]
- [[#6. Advantages and Disadvantages|6. Advantages and Disadvantages]]
	- [[#6. Advantages and Disadvantages#Advantages|Advantages]]
	- [[#6. Advantages and Disadvantages#Disadvantages|Disadvantages]]
- [[#7. Summary|7. Summary]]

## 1. Introduction

The Network Layer (Layer 3) of the OSI model is responsible for routing, addressing, and delivering data packets across different networks. It ensures that packets reach the correct destination, even if multiple networks and intermediate devices (e.g., routers) are involved.

---

## 2. Functions of the Network Layer

### A. Logical Addressing

- The Network Layer assigns IP addresses to devices.
- It uses logical addressing (IP addresses) to uniquely identify each device on a network.
- Example: IPv4 (e.g., 192.168.1.1) and IPv6 (e.g., 2001:db8::1).

### B. Routing

- Determines the best path for data packets to travel from the source to the destination.
- Uses routing algorithms like Dijkstra’s shortest path or distance vector algorithms.
- Example: Routers use OSPF (Open Shortest Path First) and BGP (Border Gateway Protocol).

### C. Packet Forwarding

- Once the route is selected, packets are forwarded to the next device using the routing table.
- Example: Routers forward packets between different subnets.

### D. Fragmentation and Reassembly

- If a packet is too large for a network, it is broken into smaller fragments.
- The receiving device reassembles the fragments into the original packet.
- Example: MTU (Maximum Transmission Unit) defines the largest possible packet size.

---

## 3. Protocols Used in the Network Layer

|Protocol|Purpose|Example Use Case|
|---|---|---|
|IP (Internet Protocol)|Assigns IP addresses & routes packets|IPv4, IPv6|
|ICMP (Internet Control Message Protocol)|Error reporting & diagnostics|Ping, Traceroute|
|IGMP (Internet Group Management Protocol)|Manages multicast groups|Live video streaming|
|ARP (Address Resolution Protocol)|Resolves IP to MAC addresses|LAN communication|
|RIP, OSPF, BGP|Routing protocols|Finding the best path|

---

## 4. How the Network Layer Works

1. Encapsulation: The Transport Layer segments data into packets and passes them to the Network Layer.
2. Addressing: The Network Layer assigns source and destination IP addresses to the packet.
3. Routing: The packet is forwarded through routers based on routing tables.
4. Fragmentation (if needed): If the packet is too large, it is divided into smaller packets.
5. Delivery: The packet reaches the destination, where it is reassembled if necessary.

---

## 5. Example Scenario

### Sending an Email (Network Layer in Action)

1. You send an email from your laptop (192.168.1.10) to a server (203.0.113.25).
2. The Network Layer adds IP addresses to the data packet.
3. Your router checks its routing table and forwards the packet to an ISP router.
4. The packet hops through multiple routers until it reaches the destination.
5. The email arrives at the server, and the Network Layer delivers it to the application layer.

---

## 6. Advantages and Disadvantages

### Advantages

✔ Ensures correct packet delivery across networks.  
✔ Supports multiple routing protocols for efficient communication.  
✔ Handles fragmentation to support different network types.

### Disadvantages

✘ Overhead due to routing and addressing.  
✘ Prone to congestion if routing is inefficient.  
✘ Security risks (IP spoofing, DDoS attacks) if not properly secured.

---

- The Network Layer (Layer 3) is responsible for routing, logical addressing, and packet forwarding.
- It uses protocols like IP, ICMP, and ARP to manage network communication.
- Routers operate at this layer to find the best path for data packets.
- Fragmentation and reassembly ensure packets fit different network standards.
