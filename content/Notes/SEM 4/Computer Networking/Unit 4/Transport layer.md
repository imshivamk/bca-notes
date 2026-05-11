---
dg-publish: true
---
## 1. Transport Service and Service Primitives

### 1.1 Transport Service

The transport layer (Layer 4 in the OSI model) provides **end-to-end communication** between devices. It ensures **reliable** or **unreliable** data transfer depending on the protocol used (TCP/UDP).

Key responsibilities:

- Segmentation and reassembly
    
- Connection management
    
- Error control
    
- Flow control
    
- Congestion control
    

### 1.2 Service Primitives

Service primitives are the basic operations or function calls used to access network services.

Typical service primitives:

- **LISTEN**: Wait for an incoming connection.
    
- **CONNECT**: Establish a connection.
    
- **SEND**: Transmit data.
    
- **RECEIVE**: Accept incoming data.
    
- **DISCONNECT**: Release the connection.
    

---

## 2. Internet and Transport Protocols

### 2.1 TCP (Transmission Control Protocol)

- **Connection-oriented**
- Reliable, ordered delivery
- Performs error checking, flow and congestion control
- Suitable for applications like web browsing (HTTP), email (SMTP), file transfer (FTP)
### 2.2 UDP (User Datagram Protocol)

- **Connectionless**
- Unreliable, no guarantee of delivery or order
- Low overhead, faster
- Suitable for real-time applications like VoIP, DNS, streaming

### 2.3 Remote Procedure Calls (RPC)

- Allows a program to execute a **procedure on a remote system** as if it were local.
- Hides network communication details.
- Used in distributed computing.
- Involves **client**, **server**, **stubs**, and **binding mechanisms**.

### 2.4 RTP (Real-time Transport Protocol)

- Protocol for **delivering audio and video** over IP networks.
- Works over UDP.
- Provides **timestamping**, **sequence numbering**, and **payload type identification**.
- Commonly used in VoIP, video conferencing, and streaming.

---

## 3. Session Layer – Token Concept

### 3.1 Session Layer

- Manages **sessions or dialogs** between applications.
- Responsible for **establishing**, **maintaining**, and **terminating** connections.

### 3.2 Token Management

- A **token** is a control mechanism used to manage which party can send data.
- Used to **avoid collisions** in full-duplex communication.
- Only the party with the token is allowed to transmit.