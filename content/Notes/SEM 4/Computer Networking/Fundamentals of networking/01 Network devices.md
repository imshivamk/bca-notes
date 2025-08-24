---
dg-publish: true
---

- [[#1. Host|1. Host]]
- [[#2. Client|2. Client]]
- [[#3. Server|3. Server]]
- [[#4. Repeater|4. Repeater]]
- [[#5. Hub|5. Hub]]
- [[#6. Bridge|6. Bridge]]
- [[#7. Switch|7. Switch]]
	- [[#7. Switch#Definition :|Definition :]]
	- [[#7. Switch#Role|Role]]
- [[#8. Router|8. Router]]
	- [[#8. Router#Definition :|Definition :]]
	- [[#8. Router#Role|Role]]
- [[#Summary of Key Differences:|Summary of Key Differences:]]


### 1. Host

- Definition: A host is <mark style="background: #FFA500;">any device connected to a network</mark> that can <mark style="background: #FFA500;">send, receive, or process data</mark>, that can request or serve data.
- act as end-points in a network, either as clients (requesting data/services) or servers (providing data/services).
- Examples: Computers, smartphones, tablets, printers, IoT devices

### 2. Client

- Definition: A client is a device or program that requests services or resources from a server over a network.
- Examples: Web browsers (Chrome, Firefox), email clients, file-sharing applications.
- Role: Clients initiate communication by sending requests to servers. The server responds to these requests by providing data or services.

### 3. Server

- Definition: A server is a device or software that provides services, resources, or data to other devices (clients) in a network.
- Examples: Web servers, file servers, database servers, email servers.
- Role: Servers host applications and services that clients connect to. They wait for client requests and respond with appropriate resources.

### 4. Repeater

- Definition: A repeater is a networking device that<mark style="background: #FFA500;"> amplifies or regenerates signals in a network to extend the transmission distance.</mark>
- Role: A repeater is used in networks when the signal strength weakens over a long distance, like in wireless or wired networks. It picks up the weak signal, boosts it, and sends it out again.
- Use Case: For example, in long-range Ethernet networks or Wi-Fi networks, repeaters extend the range of the signal, allowing data to travel longer distances.

### 5. Hub

- Definition: A hub is a basic networking device that <mark style="background: #1E90FF;">connects multiple devices in a network</mark>, often within a local area network (LAN). 
- It operates at the <mark style="background: #1E90FF;">physical layer</mark> (Layer 1) of the OSI model.
- It can be also called a multi-port repeater
- Role: <mark style="background: #1E90FF;">A hub takes data packets from one device and broadcasts them to all other connected devices</mark>. 
- It doesn’t have any intelligence to filter or route data, so all devices on the hub receive all the data.
- Limitations: Hubs can lead to data collisions and security issues because all devices on the network see all traffic.
- Use Case: Hubs are <mark style="background: #FFA500;">rarely used</mark> today, as switches have largely replaced them due to their limited functionality.

![](https://i.imgur.com/QUlEpnC.png)


### 6. Bridge

- Definition: A bridge is a device that <mark style="background: #1E90FF;">connects and filters traffic between two or more network segments</mark>, helping to segment a larger network into smaller, more manageable pieces.
- Role: A bridge operates at the data link layer (Layer 2) of the OSI model and helps reduce network traffic by only forwarding packets to the relevant segment.
- Use Case: For instance, if a network has high traffic, a bridge can divide the network into segments, reducing congestion. It can also be used to connect networks with different physical media, like wired and wireless networks.

![](https://i.imgur.com/OC4S1hG.png)

### 7. Switch
#### Definition :
- A switch is a <mark style="background: #FFA500;">networking device that connects multiple devices within a network and facilliates communication</mark>, similar to a hub, but with more advanced features.
- Switching : the process of moving data within a network
#### Role 
- It operates at the data link layer (Layer 2) but can also operate at the network layer (Layer 3) in the case of Layer 3 switches.
- Role: A switch examines the MAC addresses of devices in the network and forwards data only to the device it is intended for, rather than broadcasting it to all devices like a hub. 
- This <mark style="background: #FF69B4;">reduces congestion and improves network performance</mark>.
- Use Case: Switches are commonly used in <mark style="background: #FFFF00;">Ethernet networks</mark> and are essential for efficiently managing <mark style="background: #FFFF00;">large networks</mark>, ensuring that data is only delivered to the intended recipient.

![](https://i.imgur.com/ynfMhVX.png)

### 8. Router

#### Definition :
- A networking device which facilliates <mark style="background: #32CD32;">communication among different networks</mark>.    
- A router is a device that routes data between different networks, such as a local network (LAN) and the internet (WAN).
- Routing : the process of moving data between networks
#### Role 
- Routers learn which networks they are attatched to and those paths are called routes, stored in a <mark style="background: #FF69B4;">routing table</mark> (contains all the networks the router knows)
- IP address: Routers themselves have an IP address in each network they are attached to
- Serves as a gateway for the hosts out of their own networks for the host 172.16.20.33 the gateway would be 172.16.20.1 (router's IP address)
- <mark style="background: #32CD32;">determines the best path for forwarding data packets between networks using IP addresses. </mark>
- provide a <mark style="background: #32CD35;">traffic control points</mark> and features like Network Address Translation (NAT), firewall , and DHCP

Here the router has the IP address 172.16.20.1 in first network and 172.16.30.254 in the other network

![](https://i.imgur.com/Rtl75PH.png)

Creates the heirarchy in networks and the internet

![](https://i.imgur.com/04wMHeQ.png)


- Routers operate at the <mark style="background: #FFFF00;">network layer</mark> (Layer 3) of the OSI model.
- Use Case: Routers are used to connect a home or office network to the internet. 
- They also help direct traffic between different departments in large enterprise networks or between a company's internal network and remote locations.

![](https://i.imgur.com/wKn3Jso.png)


### Summary of Key Differences:

| Device   | Layer (OSI Model) | Primary Function                                             |
| -------- | ----------------- | ------------------------------------------------------------ |
| Host     | Application Layer | End-user devices that send/receive data                      |
| Client   | Application Layer | Requests services/data from servers                          |
| Server   | Application Layer | Provides services/data to clients                            |
| Repeater | Physical Layer    | Extends signal range by amplifying/boosting signals          |
| Hub      | Physical Layer    | Broadcasts data to all connected devices                     |
| Bridge   | Data Link Layer   | Connects network segments and filters traffic                |
| Switch   | Data Link Layer   | Forwards data to specific devices (more efficient than hubs) |
| Router   | Network Layer     | Routes data between different networks/subnets               |

Each device plays a unique role in managing, controlling, and facilitating data transfer in a network. They are typically deployed together to create a functional and efficient network.