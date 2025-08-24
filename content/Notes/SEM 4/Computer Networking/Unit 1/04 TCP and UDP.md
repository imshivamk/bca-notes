---
dg-publish: true
---
# **TCP and UDP in Computer Networks**

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two major transport layer protocols in networking. They define how data is transmitted between devices over a network.

---

## **1. Transmission Control Protocol (TCP)**

TCP is a **connection-oriented** protocol that ensures **reliable and ordered** data transmission between devices.

### **Characteristics of TCP:**

- **Connection-Oriented:** Establishes a connection before data transfer.
- **Reliable Transmission:** Ensures data reaches its destination without errors.
- **Ordered Data Delivery:** Data arrives in the correct sequence.
- **Error Detection & Correction:** Uses checksums and retransmissions.
- **Flow Control:** Prevents sender from overwhelming the receiver.
- **Congestion Control:** Adapts to network traffic to prevent congestion.

### **How TCP Works:**

1. **Connection Establishment (Three-Way Handshake)**
    
    - Client sends a **SYN** (synchronize) request to the server.
    - Server responds with **SYN-ACK** (synchronize-acknowledge).
    - Client replies with **ACK** (acknowledge), and the connection is established.

2. **Data Transmission**
    - Data is sent in **segments** with sequence numbers.
    - Receiver sends **ACKs** to confirm receipt.

3. **Connection Termination (Four-Way Handshake)**
    
    - Client sends **FIN** (finish) to indicate termination.
    - Server responds with **ACK**.
    - Server then sends **FIN**, and the client responds with **ACK**.

### **Example of TCP Usage:**

- **Web Browsing (HTTP, HTTPS)** – Ensures webpages load correctly.
- **File Transfers (FTP, SFTP)** – Prevents data corruption during download/upload.
- **Emails (SMTP, IMAP, POP3)** – Ensures emails are delivered without errors.

### **Advantages of TCP:**

- Ensures data is **delivered reliably and in order**.
- Provides **error checking and correction**.
- Manages **congestion and flow control** to optimize network performance.

### **Disadvantages of TCP:**

- **Slower** due to connection setup and reliability checks.
- **Higher overhead** as it maintains session states.

---

## **2. User Datagram Protocol (UDP)**

UDP is a **connectionless** protocol designed for **fast, lightweight, and unreliable** data transmission.

### **Characteristics of UDP:**

- **Connectionless:** No connection setup; data is sent immediately.
- **Unreliable Transmission:** No guarantee of delivery or order.
- **No Error Checking:** Packets may be lost or arrive out of sequence.
- **No Flow or Congestion Control:** Sender transmits regardless of network conditions.
- **Low Latency:** Ideal for real-time applications.

### **How UDP Works:**

1. Sender **transmits datagrams** without establishing a connection.
2. Receiver **processes incoming packets** as they arrive.
3. If a packet is lost or arrives out of order, there is **no automatic retransmission**.

### **Example of UDP Usage:**

- **Live Streaming (YouTube, Twitch, Netflix)** – Small delays are acceptable, but speed is critical.
- **Online Gaming (Multiplayer Games, VoIP)** – Low latency is prioritized over reliability.
- **DNS (Domain Name System)** – Quick request-response mechanism without overhead.

### **Advantages of UDP:**

- **Faster** than TCP since there is no connection overhead.
- **Low latency** makes it ideal for real-time applications.
- **Less bandwidth usage** as there are no acknowledgments or retransmissions.

### **Disadvantages of UDP:**

- **No reliability** – packets may be lost.
- **No order guarantee** – packets may arrive out of sequence.
- **No congestion control** – can cause network congestion if overused.

---

## **3. Key Differences Between TCP and UDP**

|Feature|TCP (Transmission Control Protocol)|UDP (User Datagram Protocol)|
|---|---|---|
|**Type**|Connection-oriented|Connectionless|
|**Reliability**|Reliable (ensures data delivery)|Unreliable (no guarantee of delivery)|
|**Ordering**|Ensures ordered packet delivery|Packets may arrive out of order|
|**Error Checking**|Yes (retransmits lost packets)|No (lost packets are ignored)|
|**Speed**|Slower due to reliability mechanisms|Faster due to low overhead|
|**Flow Control**|Uses flow control to prevent congestion|No flow control|
|**Applications**|Web browsing, file transfer, email|Streaming, VoIP, gaming, DNS|
|**Example Protocols**|HTTP, FTP, SMTP|DNS, DHCP, VoIP, Online gaming|

---

## **4. When to Use TCP vs. UDP**

- **Use TCP when reliability is needed**
    
    - Web browsing (HTTP, HTTPS)
    - File transfers (FTP, SFTP)
    - Emails (SMTP, IMAP, POP3)
- **Use UDP when speed is more important than reliability**
    
    - Live streaming (Netflix, YouTube)
    - Online gaming (PUBG, Call of Duty, etc.)
    - Voice over IP (Skype, Zoom, VoIP calls)

---

## **5. Conclusion**

- **TCP is best for applications that require reliable and ordered data transmission**, but it has higher overhead and latency.
- **UDP is ideal for real-time applications that prioritize speed over reliability**, but it does not guarantee data delivery or order.

Would you like a deeper explanation of **congestion control in TCP**?