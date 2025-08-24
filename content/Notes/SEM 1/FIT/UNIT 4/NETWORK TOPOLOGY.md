---
dg-publish: true
---
- [[#network topology|network topology]]
	- [[#network topology#1. _==Star Topology==:_|1. _==Star Topology==:_]]
	- [[#network topology#2. _==Bus Topology==:_|2. _==Bus Topology==:_]]
	- [[#network topology#3. ==_Ring Topology_==_:_|3. ==_Ring Topology_==_:_]]
	- [[#network topology#4. ==_Mesh Topology_==_:_|4. ==_Mesh Topology_==_:_]]
	- [[#network topology#5. _==Hybrid Topology:==_|5. _==Hybrid Topology:==_]]
	- [[#network topology#6. _==Tree (Hierarchical) Topology==:_|6. _==Tree (Hierarchical) Topology==:_]]
	- [[#network topology#7. _==Point-to-Point Topology==:_|7. _==Point-to-Point Topology==:_]]
	- [[#network topology#8. _==Wireless Topology==:_|8. _==Wireless Topology==:_]]

## network topology
1. It refers to the physical or logical arrangement of devices and links in a computer network.
2. <mark style="background: #FFB86CA6;">The arrangement of a network that comprises nodes and connecting lines via sender and receiver is referred to as Network Topology.</mark>
3. It defines how devices are connected and communicate with each other.
4. There are several different network topologies used in computer networks, each with its own advantages and disadvantages.
5. Here are some of the most common network topologies:

## 1. STAR
    
In a star topology, all devices are connected to a <mark style="background: #FFB86CA6;">==central hub or switch==.</mark>
    - The central hub acts as a ==mediator for data traffic==
    - ROBUST
    - <mark style="background: #FFB8EBA6;">Failure of one device does not affect the others, but the central hub is critical</mark>
    - Common in ==Ethernet LAN==s.
    - <mark style="background: #FFB86CA6;">Easy to fault identification and fault isolation.</mark>
![](https://i.imgur.com/Uz2sP8t.png)


## 2. POINT TO POINT
1. Point-to-Point Topology is a type of topology that works on the functionality of the sender and receiver.
2. It is the simplest communication between two nodes, in which one is the sender and the other one is the receiver.
3. Point-to-Point provides high bandwidth.

![](https://i.imgur.com/dI1Md6m.png)


### 2. BUS
    
In a bus topology, all devices are connected to a ==single central cable or backbone of COAXIAL CABLES
    - Data is ==transmitted along the cable==, and ==all devices on the network can see the data.
    - It's a ==simple and inexpensive== topology but can suffer from ==cable failures.==
    - It is <mark style="background: #FFB86CA6;">bi-directional. It is a multi-point connection</mark> and a non-robust topology because if the backbone fails the topology crashes.
- ![](https://i.imgur.com/nltmFGK.png)

### 3. ==_Ring Topology_==_:_
    
In a ring topology, devices are connected in a ==closed loop==.
    - ==Data circulates around the ring until it reaches its destination==.
    - Less common in modern LANs due to its ==vulnerability to cable failures==.
    - 

![](https://i.imgur.com/tASyEaS.png)

### 4. ==_Mesh Topology_==_:_
    
In a full mesh topology, ==every device is connected to every other device==.
    - It provides ==redundancy and high fault tolerance== but can be ==expensive and complex to manage==.
    - Partial mesh topologies are more common, ==where not every device connects to every other device.==
    - ROBUST
    - VERY FAST BETWEEN NODES
![](https://i.imgur.com/IgULNZj.png)

### 5. _==Hybrid Topology:==_
    
    - 
hybrid topology is a ==combination of two or more different topologies==.
    - It is often used to ==leverage the strengths of multiple topologies== in a single network.
    - For example, a combination of ==star and bus== topologies.

![](https://i.imgur.com/ghDCjV7.png)

### 6. _==Tree (Hierarchical) Topology==:_
    
 A tree topology is a ==combination of star topologies connected in a hierarchical manner==.
    - It's ==commonly used in large networks, such as the Internet==, where there are ==multiple levels of hierarchy.==

![](https://i.imgur.com/jTMB5cm.png)
### 8. _==Wireless Topology==:_

 - In wireless networks, there is ==no physical cabling, and devices communicate over the air using radio waves==.
 - It's ==common in Wi-Fi networks and cellular networks==.

The choice of network topology depends on factors like the network's size, scalability, fault tolerance requirements, and cost. Different applications and scenarios may require different topologies. For example, a small office might use a star topology for simplicity, while a data center may use a mesh or hybrid topology for redundancy and fault tolerance.

## UP NEXT:
[[TRANSMISSION MEDIA]]
