---
dg-publish: true
---
## 1. Hierarchical Routing

### Definition

Hierarchical routing divides the network into regions or levels, allowing routing to be managed more efficiently in large-scale networks.

- Each router knows full details of its own region.
- It maintains only summary info about other regions.

### Key Concepts

- Two types of routing:
    - Intra-region routing (within the same region)
    - Inter-region routing (between different regions)

- Reduces the size of routing tables and simplifies route management.

### Advantages

- Scalable for large networks like the Internet.
- Faster routing table updates and reduced complexity.
- Examples:
    - OSPF within an AS (Autonomous System)
    - BGP between ASes

---

## 2. Broadcast Routing

### Definition

Broadcast routing is used to send data packets to all nodes in a network.

### Techniques

- Flooding: Packet is sent to all neighbors; can cause congestion.
    
- Controlled Flooding: Uses techniques like sequence numbers to prevent loops.
    
- Spanning Tree: Builds a loop-free path ensuring each node gets the packet once.
    
- Reverse Path Forwarding (RPF): Forwards packets only on the shortest path from the source.
    

### Use Cases

- ARP requests
    
- Routing updates (e.g., RIP)
    
- Network discovery
    

### Drawbacks

- High bandwidth consumption.
    
- Can lead to broadcast storms if not controlled properly.
    

---

## 3. Multicast Routing

### Definition

Multicast routing is used to send packets to a group of interested receivers, not to everyone.

### Key Concepts

- Uses multicast IP addresses (e.g., 224.0.0.0/4).
    
- Efficient: single transmission serves multiple hosts.
    

### Multicast Trees

- Source-based Tree: One tree per sender.
    
- Shared Tree (Core-Based): One common tree for all senders through a central router.
    

### Protocols

- IGMP: Hosts use it to join/leave multicast groups.
    
- PIM:
    
    - Dense Mode (PIM-DM): Flood and prune model.
        
    - Sparse Mode (PIM-SM): Builds paths only where needed.
        

### Applications

- Live video streaming
    
- Online gaming
    
- Real-time financial updates
    

### Advantages

- Efficient bandwidth use.
    
- Reduces server load.
    

### Disadvantages

- Complex setup and maintenance.
    
- Requires multicast-aware network infrastructure.
    

---

Let me know if you want a diagram or comparison table for these!