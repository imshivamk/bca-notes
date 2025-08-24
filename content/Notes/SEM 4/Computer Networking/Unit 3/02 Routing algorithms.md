---
dg-publish: true
---

- [[#Functions of Routing|Functions of Routing]]
- [[#Static and Dynamic Routing|Static and Dynamic Routing]]
- [[#Static and Dynamic Routing#Static Routing|Static Routing]]
	- [[#Static Routing#How it works:|How it works:]]
	- [[#Static Routing#Advantages of Static Routing|Advantages of Static Routing]]
	- [[#Static Routing#Disadvantages of Static Routing|Disadvantages of Static Routing]]
- [[#Static and Dynamic Routing#Dynamic Routing|Dynamic Routing]]
	- [[#Dynamic Routing#How it works:|How it works:]]
	- [[#Dynamic Routing#Advantages of Dynamic Routing|Advantages of Dynamic Routing]]
	- [[#Dynamic Routing#Disadvantages of Dynamic Routing|Disadvantages of Dynamic Routing]]
- [[#Direct and Indirect Routing|Direct and Indirect Routing]]
- [[#Direct and Indirect Routing#Direct Routing|Direct Routing]]
	- [[#Direct Routing#Example:|Example:]]
- [[#Direct and Indirect Routing#Indirect Routing|Indirect Routing]]
	- [[#Indirect Routing#Example:|Example:]]
- [[#Shortest Path Routing (Dijkstra’s Algorithm)|Shortest Path Routing (Dijkstra’s Algorithm)]]
	- [[#Indirect Routing#How it works:|How it works:]]
	- [[#Indirect Routing#Example:|Example:]]
	- [[#Indirect Routing#Advantages of Dijkstra’s Algorithm|Advantages of Dijkstra’s Algorithm]]
	- [[#Indirect Routing#Disadvantages of Dijkstra’s Algorithm|Disadvantages of Dijkstra’s Algorithm]]
- [[#Flooding|Flooding]]
- [[#Flooding#Types of Flooding|Types of Flooding]]
	- [[#Types of Flooding#Example:|Example:]]
	- [[#Types of Flooding#Advantages of Flooding|Advantages of Flooding]]
	- [[#Types of Flooding#Disadvantages of Flooding|Disadvantages of Flooding]]
- [[#Distance Vector Routing|Distance Vector Routing]]
	- [[#Types of Flooding#How it works:|How it works:]]
	- [[#Types of Flooding#Example:|Example:]]
	- [[#Types of Flooding#Advantages of Distance Vector Routing|Advantages of Distance Vector Routing]]
	- [[#Types of Flooding#Disadvantages of Distance Vector Routing|Disadvantages of Distance Vector Routing]]
- [[#Link-State Routing|Link-State Routing]]
	- [[#Types of Flooding#How it works:|How it works:]]
	- [[#Types of Flooding#Advantages of Link-State Routing|Advantages of Link-State Routing]]
	- [[#Types of Flooding#Disadvantages of Link-State Routing|Disadvantages of Link-State Routing]]
- [[#Summary|Summary]]

# Routing in Computer Networks

1. Routing is the process of selecting the best path for data packets to travel from a source to a destination across a network. 
2. It is essential for <mark style="background: #1E90FF;">inter-network communication</mark> ensuring data reaches the correct destination efficiently.

### Functions of Routing

- Determines the optimal path for data transmission.
- Directs packets based on network topology and conditions.
- Uses routing tables and algorithms to update network paths dynamically.
- Ensures fault tolerance by rerouting traffic when failures occur.

---

## Static and Dynamic Routing

### Static Routing

- Routes are manually configured by the network administrator.
- Works best in small networks with limited routes.
- Does not change automatically if the network topology changes.

#### How it works:

1. The administrator manually sets routing entries.
2. If a route fails, manual intervention is required to update it.
3. Typically used in **small and stable networks** where changes are infrequent.

#### Advantages of Static Routing

- Simple to implement and requires little processing power.
- No bandwidth overhead since no routing updates are exchanged.
- More secure, as routes are not dynamically learned.

#### Disadvantages of Static Routing

- Does not adapt to network failures.
- Manual configuration can be time-consuming in large networks.
- Not scalable for dynamic and complex networks.

### Dynamic Routing

- Routes are automatically learned and updated by routers.
- Uses routing protocols to exchange information between routers.
- Suitable for large, complex, and frequently changing networks.

#### How it works:

1. Routers exchange network topology updates with each other.
2. Routing algorithms determine the best paths dynamically.
3. If a link fails, routers adjust their paths automatically.

#### Advantages of Dynamic Routing

- Adapts to network topology changes automatically.
- Reduces manual configuration effort.
- Scales well with large and growing networks.

#### Disadvantages of Dynamic Routing

- Requires additional processing power and memory.
- May introduce routing loops if not configured properly.
- Uses bandwidth to exchange routing updates.

---

## Direct and Indirect Routing

### Direct Routing

- The source and destination are within the same network.
- No router is required for communication.
- Packets are sent directly between devices using MAC addresses.

#### Example:

- A computer (192.168.1.10) sending data to a printer (192.168.1.20) in the same local network.

### Indirect Routing

- Used when the source and destination are in different networks.
- Packets must pass through one or more routers to reach their destination.

#### Example:

- A computer in one city (New York) accessing a website hosted in another city (London).

---

## Shortest Path Routing (Dijkstra’s Algorithm)

- Used to find the shortest path between two nodes in a network.
- Commonly used in **OSPF (Open Shortest Path First)** routing protocol.

#### How it works:

1. Assign a cost (weight) to each network link (e.g., distance, delay).
2. Mark the source node and initialize costs to all other nodes as infinity.
3. Choose the next closest node and update the shortest path.
4. Repeat until all nodes have been visited.

#### Example:

- Network with the following topology:
    
    ```
    A ---5--- B ---2--- C
    A ---1--- D ---6--- C
    ```
    
- The shortest path from A to C is **A → B → C (cost = 7)** instead of **A → D → C (cost = 7)**.
    

#### Advantages of Dijkstra’s Algorithm

- Guarantees the most efficient route.
- Used in high-speed routing protocols.

#### Disadvantages of Dijkstra’s Algorithm

- Requires more processing power for large networks.

---

## Flooding

- Every packet received is forwarded to all outgoing links.
- Ensures delivery even if some links fail.

### Types of Flooding

- **Uncontrolled Flooding** – Packets are sent indefinitely, causing congestion.
- **Controlled Flooding** – Uses techniques like Time-To-Live (TTL) to limit packet propagation.

#### Example:

- **ARP request** in a local network uses controlled flooding to find a device’s MAC address.

#### Advantages of Flooding

- Ensures that packets reach their destination.
- Used in robust network communication systems.

#### Disadvantages of Flooding

- Consumes too much bandwidth.
- Causes excessive traffic and potential congestion.

---

## Distance Vector Routing

- Each router shares its routing table with neighboring routers.
- Uses **hop count** as the metric for the shortest path.
- Commonly used in **RIP (Routing Information Protocol)**.

#### How it works:

1. Each router maintains a table of the best-known distances to other networks.
2. Periodically, routers exchange these tables with their direct neighbors.
3. The shortest path is determined based on the lowest hop count.

#### Example:

- If Router A has a path to a network via Router B (3 hops) and via Router C (5 hops), it chooses **Router B** because it has fewer hops.

#### Advantages of Distance Vector Routing

- Simple to implement and understand.
- Works well in small networks.

#### Disadvantages of Distance Vector Routing

- **Slow convergence** – updates take time to propagate.
- **Routing loops** can occur if not managed properly.

---

## Link-State Routing

- Each router maintains a **complete map** of the network topology.
- Uses **Dijkstra’s Algorithm** to calculate the shortest path.
- Commonly used in **OSPF (Open Shortest Path First)** protocol.

#### How it works:

1. Each router **collects information** about the entire network.
2. It builds a **topology map** of all routers and links.
3. It uses **Dijkstra’s Algorithm** to compute the shortest path.

#### Advantages of Link-State Routing

- Faster convergence compared to distance vector routing.
- More scalable for large networks.

#### Disadvantages of Link-State Routing

- Requires more memory and processing power.

---

## Summary

- **Static Routing** is manually configured and best for small networks.
- **Dynamic Routing** automatically updates and adapts to network changes.
- **Direct Routing** occurs within the same network without routers.
- **Indirect Routing** involves multiple routers to reach the destination.
- **Dijkstra’s Algorithm** finds the shortest path and is used in OSPF.
- **Flooding** ensures packet delivery but causes congestion.
- **Distance Vector Routing** uses hop count and is used in RIP.
- **Link-State Routing** builds a full network map and is used in OSPF.

