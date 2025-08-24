---
dg-publish: true
---
- [[#1. Types of Networks|1. Types of Networks]]
	- [[#1. Types of Networks#A. Based on Coverage Area|A. Based on Coverage Area]]
		- [[#A. Based on Coverage Area#1. Personal Area Network (PAN)|1. Personal Area Network (PAN)]]
		- [[#A. Based on Coverage Area#2. Local Area Network (LAN)|2. Local Area Network (LAN)]]
		- [[#A. Based on Coverage Area#3. Metropolitan Area Network (MAN)|3. Metropolitan Area Network (MAN)]]
		- [[#A. Based on Coverage Area#4. Wide Area Network (WAN)|4. Wide Area Network (WAN)]]
	- [[#1. Types of Networks#B. Based on Ownership|B. Based on Ownership]]
		- [[#B. Based on Ownership#1. Private Network|1. Private Network]]
		- [[#B. Based on Ownership#2. Public Network|2. Public Network]]
	- [[#1. Types of Networks#C. Based on Connectivity|C. Based on Connectivity]]
		- [[#C. Based on Connectivity#1. Wired Networks|1. Wired Networks]]
		- [[#C. Based on Connectivity#2. Wireless Networks|2. Wireless Networks]]
- [[#2. Network Topologies|2. Network Topologies]]
	- [[#2. Network Topologies#1. Bus Topology|1. Bus Topology]]
	- [[#2. Network Topologies#2. Star Topology|2. Star Topology]]
	- [[#2. Network Topologies#3. Ring Topology|3. Ring Topology]]
	- [[#2. Network Topologies#4. Mesh Topology|4. Mesh Topology]]
	- [[#2. Network Topologies#5. Tree (Hierarchical) Topology|5. Tree (Hierarchical) Topology]]
	- [[#2. Network Topologies#6. Hybrid Topology|6. Hybrid Topology]]
- [[#Summary|Summary]]

## 1. Types of Networks

A network is a group of devices connected to share resources, communicate, and exchange data. Networks can be classified based on their size, geographical coverage, and purpose.

### A. Based on Coverage Area

#### 1. Personal Area Network (PAN)

A **Personal Area Network (PAN)** is the smallest type of network, typically used for connecting personal devices within a short range. It allows devices such as smartphones, laptops, tablets, and smartwatches to communicate wirelessly or via wired connections.

- **Range**: Usually up to **10 meters**
- **Examples**: Bluetooth connections, Infrared communication, Wireless USB
- **Applications**:
    - Connecting a smartphone to wireless earbuds
    - Syncing data between a phone and a smartwatch
    - Transferring files between two devices using Bluetooth

#### 2. Local Area Network (LAN)

A **Local Area Network (LAN)** is a network that connects multiple computers and devices within a **small geographical area** such as a home, office, school, or a single building. LANs are widely used for **file sharing, resource sharing (like printers), and internet access**.

- **Range**: Covers up to **a few kilometers**
- **Examples**: Ethernet networks in offices, Wi-Fi networks at home
- **Applications**:
    - Sharing printers, files, and applications within an office
    - Providing internet access to multiple devices in a home or school
    - Gaming networks in cybercafés

#### 3. Metropolitan Area Network (MAN)

A **Metropolitan Area Network (MAN)** covers a **larger geographical area** than a LAN, typically spanning a **city or a large campus**. It connects multiple LANs to facilitate communication and resource sharing over a broader area.

- **Range**: Covers **several kilometers**
- **Examples**: City-wide Wi-Fi, cable TV networks, metro fiber networks
- **Applications**:
    - Connecting different university campuses within a city
    - Providing broadband internet access across urban areas
    - Linking various government offices in a metropolitan region

#### 4. Wide Area Network (WAN)

A **Wide Area Network (WAN)** is the largest type of network, covering a **country, continent, or even the entire world**. It interconnects multiple LANs and MANs, usually using **public or private telecommunication networks**.

- **Range**: Spans **hundreds to thousands of kilometers**
- **Examples**: The Internet, MPLS networks, leased lines
- **Applications**:
    - Providing global communication through the Internet
    - Connecting multinational corporations’ branch offices
    - Enabling secure communication via Virtual Private Networks (VPNs)

### B. Based on Ownership

#### 1. Private Network

A **private network** is controlled and managed by a single organization, providing secure and restricted access to authorized users.

- **Examples**:
    - Corporate intranets used within companies
    - VPNs (Virtual Private Networks) for secure remote access

#### 2. Public Network

A **public network** is accessible to **anyone** and is typically managed by **telecom providers or ISPs (Internet Service Providers)**.

- **Examples**:
    - The **Internet**, which is available to users worldwide
    - Public Wi-Fi hotspots in airports and cafés

## 2. Network Topologies

Network topology refers to **how devices (nodes) are arranged** in a network. The choice of topology affects **network performance, scalability, cost, and fault tolerance**.

### 1. Bus Topology

In a **bus topology**, all devices are connected to a **single central cable (backbone)** that carries data.

- **Advantages**:
    
    - **Cost-effective** (requires minimal cabling)
    - **Simple to set up and expand**
- **Disadvantages**:
    
    - **If the backbone cable fails, the entire network stops working**
    - **Performance degrades** as more devices are added
- **Example**: **Early Ethernet networks** used a bus topology

![](https://i.imgur.com/X83QxVS.png)


### 2. Star Topology

In a **star topology**, all devices are connected to a **central hub or switch**, which manages data transmission.

- **Advantages**:
    
    - **Easy to troubleshoot** (fault in one device does not affect others)
    - **Scalable** (new devices can be easily added)
- **Disadvantages**:
    
    - **Failure of the central hub can disrupt the network**
    - **More cabling is required** compared to a bus topology
- **Example**: Most **modern Ethernet LANs** use a star topology

![](https://i.imgur.com/Uf7TSDu.png)

### 3. Ring Topology

In a **ring topology**, devices are connected in a **circular fashion**, and data travels in one or both directions.

- **Advantages**:
    
    - **Efficient data transmission** (no data collisions)
    - **Predictable performance** under high loads
- **Disadvantages**:
    
    - **A single node failure can disrupt the network** (unless a dual-ring is used)
    - **Slower compared to star topology**
- **Example**: **FDDI (Fiber Distributed Data Interface) networks**

![](https://i.imgur.com/LHc8FAb.png)
 

### 4. Mesh Topology

In a **mesh topology**, every device is connected to **every other device** in the network, ensuring multiple communication paths.

- **Advantages**:
    
    - **High redundancy** (if one path fails, another is used)
    - **Fast and reliable communication**
- **Disadvantages**:
    
    - **Very expensive** due to extensive cabling
    - **Complex setup and maintenance**
- **Example**: **Military communication networks**, IoT applications

![](https://i.imgur.com/rFIO98x.png)


### 5. Tree (Hierarchical) Topology

A **tree topology** combines characteristics of **star and bus topologies**, with multiple star networks connected to a central backbone.

- **Advantages**:
    
    - **Scalable** (easy to expand the network)
    - **Well-structured and organized**
- **Disadvantages**:
    
    - **If the backbone fails, the entire network is affected**
    - **High cabling and maintenance costs**
- **Example**: **Large corporate or university networks**

![](https://i.imgur.com/a9HannV.png)


### 6. Hybrid Topology

A **hybrid topology** is a combination of **two or more topologies**, depending on network needs.

- **Advantages**:
    
    - **Highly flexible and scalable**
    - **Optimized for different types of communication**
- **Disadvantages**:
    
    - **Complex and expensive to set up**
- **Example**: **Data centers combining star and mesh topologies**
    
![](https://i.imgur.com/HY8VAkB.png)
