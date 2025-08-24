---
dg-publish: true
---

- [[#1. IP Protocol (Internet Protocol)|1. IP Protocol (Internet Protocol)]]
	- [[#1. IP Protocol (Internet Protocol)#1.1 Definition:|1.1 Definition:]]
	- [[#1. IP Protocol (Internet Protocol)#1.2 Key Features:|1.2 Key Features:]]
	- [[#1. IP Protocol (Internet Protocol)#1.3 Versions:|1.3 Versions:]]
- [[#2. IP Address Classes (A, B, C, D, E)|2. IP Address Classes (A, B, C, D, E)]]
- [[#3. Broadcast Address|3. Broadcast Address]]
	- [[#3. Broadcast Address#3.1 Definition:|3.1 Definition:]]
	- [[#3. Broadcast Address#3.2 Characteristics:|3.2 Characteristics:]]
	- [[#3. Broadcast Address#3.3 Use Cases:|3.3 Use Cases:]]
- [[#4. Multicast Address|4. Multicast Address]]
	- [[#4. Multicast Address#4.1 Definition:|4.1 Definition:]]
	- [[#4. Multicast Address#4.2 Range|4.2 Range]]
	- [[#4. Multicast Address#4.3 Examples:|4.3 Examples:]]
	- [[#4. Multicast Address#4.4 Applications:|4.4 Applications:]]
- [[#5. Network Mask (Subnet Mask)|5. Network Mask (Subnet Mask)]]
	- [[#5. Network Mask (Subnet Mask)#5.1 Purpose:|5.1 Purpose:]]
	- [[#5. Network Mask (Subnet Mask)#5.2 Common Subnet Masks:|5.2 Common Subnet Masks:]]
	- [[#5. Network Mask (Subnet Mask)#5.3 Example:|5.3 Example:]]
- [[#6. Subnetting|6. Subnetting]]
	- [[#6. Subnetting#6.1 Definition:|6.1 Definition:]]
	- [[#6. Subnetting#6.2 Benefits:|6.2 Benefits:]]
	- [[#6. Subnetting#6.3 Important Formulae:|6.3 Important Formulae:]]
	- [[#6. Subnetting#6.4 Subnetting Example:|6.4 Subnetting Example:]]
- [[#7. Summary|7. Summary]]


## 1. IP Protocol (Internet Protocol)

### 1.1 Definition:  
The Internet Protocol (IP) is a principal protocol in the network layer of the OSI model. It enables communication between computers over a network by addressing and routing packets from source to destination.

### 1.2 Key Features:

- Connectionless: No prior connection is established before data transfer.
- Best-effort delivery: No guarantee of delivery, ordering, or duplicate protection.
- Packet fragmentation and reassembly.
### 1.3 Versions:

- IPv4: 32-bit addresses, represented in dotted decimal format. Example: 192.168.0.1
- IPv6: 128-bit addresses, represented in hexadecimal blocks. Example: 2001:0db8::8a2e:0370:7334

---

## 2. IP Address Classes (A, B, C, D, E)

1. IPv4 addresses are 32-bit numbers, divided into 4 octets (8 bits each).
2. Classes are defined based on the starting bits and first octet value.

| Class | Starting Bits | First Octet Range | Default Subnet Mask | Number of Hosts | Typical Use            |
| ----- | ------------- | ----------------- | ------------------- | --------------- | ---------------------- |
| A     | 0             | 1 – 126           | 255.0.0.0           | ~16 million     | Large networks         |
| B     | 10            | 128 – 191         | 255.255.0.0         | ~65,000         | Medium-sized networks  |
| C     | 110           | 192 – 223         | 255.255.255.0       | 254             | Small networks         |
| D     | 1110          | 224 – 239         | Not defined         | N/A             | Multicasting           |
| E     | 1111          | 240 – 255         | Not defined         | N/A             | Research, experimental |

- 127.0.0.0 to 127.255.255.255 is reserved for loopback testing (localhost).

---

## 3. Broadcast Address

### 3.1 Definition:  
A broadcast address is used to send data to all devices on a local network (subnet).

### 3.2 Characteristics:

- Formed by setting all host bits in the IP address to 1.
- It is the highest address in the subnet.
- For example, in 192.168.1.0/24, the broadcast address is 192.168.1.255.

### 3.3 Use Cases:  
Used in protocols like ARP, DHCP to communicate with all hosts.

---

## 4. Multicast Address

### 4.1 Definition:  
Multicast is a communication method where data is sent from one source to multiple specific receivers.

### 4.2 Range
- IPv4 multicast addresses range from 224.0.0.0 to 239.255.255.255 (Class D).
- IPv6 multicast addresses start with the prefix FF00::/8.

### 4.3 Examples:

- 224.0.0.1 All systems on the local subnet.
- 224.0.0.5: OSPF routers.

### 4.4 Applications:  
Used in IPTV, conferencing, streaming services, and routing protocols.

---

## 5. Network Mask (Subnet Mask)

### 5.1 Purpose:  
A subnet mask separates the IP address into network and host portions.

### 5.2 Common Subnet Masks:

|CIDR Notation|Subnet Mask|Network Bits|Hosts per Subnet|
|---|---|---|---|
|/8|255.0.0.0|8|16,777,214|
|/16|255.255.0.0|16|65,534|
|/24|255.255.255.0|24|254|
|/30|255.255.255.252|30|2|

### 5.3 Example:

- IP Address: 192.168.10.20
- Subnet Mask: 255.255.255.0
- Network Portion: 192.168.10
- Host Portion: 20

---

## 6. Subnetting

### 6.1 Definition:  
Subnetting is the process of dividing a larger network into smaller logical sub-networks, called subnets.

### 6.2 Benefits:

- Efficient IP address usage
- Improved network performance
- Enhanced security and control
- Reduced broadcast traffic

### 6.3 Important Formulae:

- Number of subnets = 2^n (n = number of borrowed bits)
- Hosts per subnet = 2^h - 2 (h = number of host bits; subtract 2 for network and broadcast)

### 6.4 Subnetting Example:

Given Network: 192.168.1.0/24 (256 total IPs)

To create 4 subnets:

- New subnet mask: /26 (255.255.255.192)
- Each subnet has 64 IPs: 62 usable, 1 network address, 1 broadcast address

| Subnet | Address Range    | Usable IP Range               | Broadcast Address |
| ------ | ---------------- | ----------------------------- | ----------------- |
| 1      | 192.168.1.0/26   | 192.168.1.1 – 192.168.1.62    | 192.168.1.63      |
| 2      | 192.168.1.64/26  | 192.168.1.65 – 192.168.1.126  | 192.168.1.127     |
| 3      | 192.168.1.128/26 | 192.168.1.129 – 192.168.1.190 | 192.168.1.191     |
| 4      | 192.168.1.192/26 | 192.168.1.193 – 192.168.1.254 | 192.168.1.255     |

---

## 7. Summary

|Topic|Description|
|---|---|
|IP Address|Unique identifier for devices on a network|
|IP Protocol|Used for addressing and routing data|
|IP Address Classes|Divides IPs into ranges (A–E) based on use and scale|
|Broadcast Address|Address that sends data to all hosts in a subnet|
|Multicast Address|Address used to send data to multiple specific hosts|
|Subnet Mask|Used to identify network and host parts of an IP|
|Subnetting|Technique to divide networks into smaller, manageable parts|
