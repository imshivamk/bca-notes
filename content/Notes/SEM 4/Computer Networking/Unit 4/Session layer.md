---
dg-publish: true
---

# Session Layer (Layer 5) – OSI Model

## 1. Definition

1. The Session Layer is the 5th layer of the OSI model.
2. It is responsible for establishing, maintaining, and terminating sessions between two communicating hosts.
3. A session is a continuous exchange of information between two applications.

## 2. Functions of Session Layer

1. **Session Establishment** – Initiates a session between sender and receiver.
2. **Session Maintenance** – Maintains the session during data transfer.
3. **Session Termination** – Ends the session once communication is complete.
4. **Synchronization** – Adds checkpoints or recovery points in long data streams to resume from failure points.
5. **Dialog Control** – Manages which device transmits when; supports half-duplex and full-duplex communication.
6. **Session Recovery** – Allows interrupted sessions to resume from the last checkpoint instead of restarting.

## 3. Protocols of Session Layer

1. **NetBIOS** – Used in Windows networks for session-level communication.
2. **RPC (Remote Procedure Call)** – Enables remote function execution.
3. **ASP (AppleTalk Session Protocol)** – Used in older Apple networks.
4. **SQL Session Control** – Manages database session connections.

## 4. Real-life Examples

1. Logging into a website starts a session; logging out or timeout ends it.
2. A Zoom or Skype call involves session initiation, maintenance, and termination.
3. In online banking, user activities are tracked within a session.

## 5. Comparison with Adjacent Layers

1. **Transport Layer (Layer 4)** – Handles data transport, flow control, and reliability (e.g., TCP/UDP).
2. **Session Layer (Layer 5)** – Manages sessions and communication flow.
3. **Presentation Layer (Layer 6)** – Deals with data formatting, encryption, and compression.

## 6. Advantages

1. Allows structured and organized communication.
2. Enables session recovery using checkpoints.
3. Provides dialog control and data synchronization.

## 7. Disadvantages

1. Adds overhead and complexity.
2. Rarely implemented separately in modern protocols.
3. Functionality often merged into transport or application layers.


# REAL-TIME TRANSPORT PROTOCOL (RTP)

### Definition

1. RTP is a protocol designed for delivering real-time audio and video over IP networks.
    
2. It operates at the application layer but is often paired with UDP at the transport layer.
    
3. RTP is responsible for packet sequencing and time-stamping to ensure real-time data integrity.
    

### Features

1. Supports sequence numbering to detect packet loss and ensure correct packet order.
    
2. Uses timestamps to synchronize audio/video playback.
    
3. Payload type field identifies the format of the encoded media.
    
4. SSRC field uniquely identifies the source of the stream.
    
5. Can be used with RTCP to monitor delivery and provide feedback.
    

### Use Cases

1. Internet telephony (VoIP applications like Skype, WhatsApp).
    
2. Video conferencing platforms such as Zoom, Google Meet.
    
3. Live media broadcasting (YouTube Live, Twitch).
    
4. Real-time sensor data streaming in IoT or surveillance.
    

### Examples

1. A Zoom meeting uses RTP to transmit voice and video streams simultaneously.
    
2. IP camera footage streamed live to a security center uses RTP over UDP.
    

---

# RTP SESSION LAYER

### Definition

1. RTP sessions are logical groupings of RTP packet streams exchanged between participants.
    
2. Each session is identified by a pair of IP addresses and port numbers.
    
3. RTP behaves like a session-layer protocol by organizing multiple media streams and maintaining sync.
    

### Structure

1. Each media type (audio, video) can be carried in a separate RTP session.
    
2. Sessions are defined by SSRCs that identify synchronization sources.
    
3. Contributing sources (CSRCs) identify members in a mixed stream (e.g., audio mixing).
    
4. RTCP works in parallel, sharing stats like packet loss, jitter, and latency.
    

### Use Cases

1. A video call that separates audio, camera feed, and screen share into three RTP sessions.
    
2. E-learning platforms where different media components are streamed as separate sessions.
    

### Examples

1. SIP-based VoIP services initiate RTP sessions for audio and video media after session negotiation.
    
2. In live-streaming, the audio and video data may be sent through separate RTP sessions and synchronized on the client side.
    

---

# TOKEN CONCEPT

### Definition

1. A token is a control mechanism used to manage access to shared resources or sessions.
    
2. In networking, it ensures orderly and collision-free transmission.
    
3. In authentication, a token represents user identity and session privileges.
    

### Networking Context

1. In Token Ring, a token circulates and only the holder can transmit data.
    
2. Token Bus forms a logical ring on a physical bus; token is passed sequentially.
    
3. Ensures fair access and avoids simultaneous transmissions.
    
4. Often used in deterministic environments like factory automation.
    

### Session/Authentication Context

1. In web systems, a token is issued after login to maintain session state (e.g., JWT).
    
2. Token-based sessions are stateless; each request contains the token for authentication.
    
3. Improves security by avoiding password reuse and simplifies horizontal scaling.
    

### Use Cases

1. Token Ring and Token Bus networks in industrial automation for real-time data.
    
2. OAuth and JWT tokens in APIs to manage user access securely.
    
3. Multiplayer turn-based games where a logical token controls player actions.
    

### Examples

1. An IBM Token Ring LAN where devices take turns transmitting based on token possession.
    
2. A user logs in to a web app and receives a JWT token used for all subsequent API requests.
    
