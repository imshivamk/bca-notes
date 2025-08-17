---
dg-publish: true
---
### **Application Layer Protocols and Services**

---

#### **1. Domain Name Service (DNS)**

1. Translates human-readable domain names (e.g., `www.google.com`) into IP addresses (e.g., `142.250.190.4`).
2. It is a distributed and hierarchical naming system with root servers, TLD servers, and authoritative servers.
3. Uses **UDP** port **53** (sometimes TCP for large queries).
4. DNS queries can be **recursive** (server resolves everything) or **iterative** (server refers to another server).
5. Supports records like **A**, **AAAA**, **MX**, **CNAME**, and **NS**.
---

#### **2. Telnet**

1. Allows remote login to another computer over a network.
2. Works over **TCP port 23**.
3. Transfers data in **plaintext**, making it insecure.
4. Mostly replaced by **SSH** due to security concerns.
5. Useful for early network administration via command-line interface.
    

---

#### **3. FTP (File Transfer Protocol)**

1. Used to transfer files between computers over a network.
2. Uses **TCP ports 20 (data)** and **21 (control)**.
3. Supports both **active** and **passive** file transfer modes.
4. No encryption; secure versions include **FTPS** and **SFTP**.
5. Enables file operations like upload, download, and delete.

---

#### **4. SMTP (Simple Mail Transfer Protocol)**

1. Sends and forwards email from client to mail server and between servers.
2. Operates on **TCP port 25** (or 587 for secure submission).
3. **Push protocol** – used only for sending, not receiving emails.
4. Works in combination with **POP3** or **IMAP** for mail retrieval.
5. Can use **STARTTLS** for encryption.

---

#### **5. SNMP (Simple Network Management Protocol)**

1. Used for monitoring and managing network devices like routers, switches, and servers.
2. Uses **UDP port 161** for requests and **162** for traps/alerts.
3. Relies on a structured database called **MIB (Management Information Base)**.
4. Versions:
    - SNMPv1: Simple, no encryption
    - SNMPv2: More efficient
    - SNMPv3: Adds encryption and authentication
5. Involves managers (monitoring systems) and agents (on devices).
---

#### **6. MIME (Multipurpose Internet Mail Extensions)**

1. Extends the email format to support non-text content (images, audio, video).
2. Works with **SMTP** to send multimedia email attachments.
3. Adds headers to indicate content type and encoding (e.g., `Content-Type: image/png`).
4. Allows splitting message bodies into multiple parts with boundaries.
5. Widely used in both **email** and **web forms**.

---

#### **7. POP (Post Office Protocol – Version 3)**

1. Used to retrieve emails from a server to a local computer.
2. Works on **TCP port 110** (or 995 for encrypted POP3S).
3. Typically downloads and deletes messages from the server.
4. Simple and fast, but not ideal for accessing mail from multiple devices.
5. Lacks features like folder syncing or server-side search.

---

#### **8. IMAP (Internet Message Access Protocol)**

1. Also used to retrieve emails, but keeps them stored on the server.
2. Uses **TCP port 143** (or 993 for encrypted IMAPS).
3. Allows accessing the same mailbox from multiple devices.
4. Supports folders, labels, and message flags.
5. Ideal for modern email usage with synchronization.
---

#### **9. WWW (World Wide Web)**

1. A system of interlinked hypertext documents accessed via the Internet.
2. Uses **HTTP/HTTPS** as the communication protocol.
3. Information is viewed using web browsers.
4. Resources are identified using **URLs**.
5. Invented by **Tim Berners-Lee** in 1989.

---

#### **10. HTTP (Hypertext Transfer Protocol)**

1. Protocol for transferring hypermedia documents (web pages) on the web.
2. Uses **TCP port 80** (or **443** for secure **HTTPS**).
3. Follows a **client-server request/response model**.
4. Common methods include:
    - GET: retrieve data
    - POST: submit data
    - PUT: update data
    - DELETE: remove data
5. Stateless by default; uses **cookies** or **sessions** for state management.