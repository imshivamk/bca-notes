---
dg-publish: true
---

- [[#1. Transmission Media and Their Characteristics|1. Transmission Media and Their Characteristics]]
	- [[#1. Transmission Media and Their Characteristics#1.1 Characteristics of Transmission Media|1.1 Characteristics of Transmission Media]]
- [[#2. Guided and Unguided Transmission Media|2. Guided and Unguided Transmission Media]]
	- [[#2. Guided and Unguided Transmission Media#2.1 Guided Media (Wired)|2.1 Guided Media (Wired)]]
		- [[#2.1 Guided Media (Wired)#a. Twisted Pair Cable|a. Twisted Pair Cable]]
		- [[#2.1 Guided Media (Wired)#b. Coaxial Cable|b. Coaxial Cable]]
		- [[#2.1 Guided Media (Wired)#c. Optical Fiber Cable|c. Optical Fiber Cable]]
	- [[#2. Guided and Unguided Transmission Media#2.2 Unguided Media (Wireless)|2.2 Unguided Media (Wireless)]]
		- [[#2.2 Unguided Media (Wireless)#a. Radio Waves|a. Radio Waves]]
		- [[#2.2 Unguided Media (Wireless)#b. Microwaves|b. Microwaves]]
		- [[#2.2 Unguided Media (Wireless)#c. Infrared|c. Infrared]]
		- [[#2.2 Unguided Media (Wireless)#d. Satellite Communication|d. Satellite Communication]]
- [[#3. Synchronous and Asynchronous Transmission|3. Synchronous and Asynchronous Transmission]]
	- [[#3. Synchronous and Asynchronous Transmission#3.1 Asynchronous Transmission|3.1 Asynchronous Transmission]]
		- [[#3.1 Asynchronous Transmission#Advantages:|Advantages:]]
		- [[#3.1 Asynchronous Transmission#Disadvantages:|Disadvantages:]]
	- [[#3. Synchronous and Asynchronous Transmission#3.2 Synchronous Transmission|3.2 Synchronous Transmission]]
		- [[#3.2 Synchronous Transmission#Advantages:|Advantages:]]
		- [[#3.2 Synchronous Transmission#Disadvantages:|Disadvantages:]]

## 1. Transmission Media and Their Characteristics

definition

1. Transmission media refer to the physical pathway or channel through which data is transmitted from one point to another in a communication system. 
2. It can be wired (guided) or wireless (unguided).

### 1.1 Characteristics of Transmission Media

1. Bandwidth: Refers to the capacity of the medium to carry data, measured in Hz or bps.
2. Delay: Time taken for data to travel from source to destination (propagation delay).
3. Noise: Unwanted signals that interfere with the transmission, causing data corruption.
    
4. Attenuation: Signal loss over distance; requires amplification or repeaters.
    
5. Cost and Installation: Depends on the type of media; fiber optics are expensive, while twisted pair is cheaper.
    
6. Transmission Impairments: Includes distortion, attenuation, and interference.
    
7. Security: Wired media are more secure than wireless as they are harder to tap.
    

---

## 2. Guided and Unguided Transmission Media

### 2.1 Guided Media (Wired)

Data signals are transmitted through a physical medium like cables.

#### a. Twisted Pair Cable

- Consists of pairs of insulated copper wires twisted together.
- Types: UTP (Unshielded), STP (Shielded).
- Use: Telephony, LANs.
- Pros: Cheap, easy to install.
- Cons: Prone to interference, limited bandwidth.
- Bandwidth: Up to 100 Mbps or more (Cat6/Cat7).
- This is the least expensive and most widely used guided transmission medium.
- In twisted pair technology, two copper wires are strung between two points.
- The two wires are typically twisted together in a helix to reduce interference between the two conductors.
- Twisting decreases the cross-talk interference between adjacent pairs in a cable.
- Typically, a number of pairs are bundled together into a helix


![[Pasted image 20250515211623.png]]

#### b. Coaxial Cable

- Copper core with insulation, metallic shielding, and outer cover.
- Use: Cable TV, early Ethernet.
- Pros: Better shielding than twisted pair.
- Cons: Bulky, more expensive.
- Bandwidth: Up to 1 Gbps.
- Coaxial cable consists of a stiff copper wire as the core, surrounded by an insulating material.
- A cylindrical conductor encases the insulator, often as a closely woven braided mesh.
- This is enclosed in a protective plastic sheath.
- The Signal is transmitted by the inner copper wire and is electrically shielded by the outer metal sleeve.
- Two kinds of coax are widely used:
– (Base band coaxial cable) used for digital transmission. 
– (Broad band coaxial cable) used for analog transmission.

![[Pasted image 20250515211739.png]]
#### c. Optical Fiber Cable

- Uses light to transmit data through glass or plastic fibers.
- Types: Single-mode (long distance), Multi-mode (short distance).
- Use: Backbone networks, high-speed ISPs.
- Pros: High speed, low attenuation, immune to EMI.
- Cons: Expensive, fragile, needs skilled installation.
- Bandwidth: Tens of Gbps over long distances.
- The source is a laser which emits light when an electrical current is applied. • The detector converts light energy to electrical signal. • The core and cladding are designed such that the light signal is trapped inside the core and does not escape outside.
- In fiber optic technology, the medium consists of a hair-width strand of silicon or glass, and the signal consists of pulses of light.
- For instance, a pulse of light means ``1'', lack of pulse means ``0''.
- It has a cylindrical shape and consists of three concentric sections: the core, the cladding, and the jacket as shown in following figure.
- Optical fibers may be single mode or multimode.
- Single mode fibers allow the light to travel in a straight line and require Laser as source.

![[Pasted image 20250515212106.png]]

---

### 2.2 Unguided Media (Wireless)

Data is transmitted through air or vacuum using electromagnetic waves.

#### a. Radio Waves

- Frequency: 3 kHz – 1 GHz.
    
- Use: AM/FM radio, mobile phones, wireless LANs.
    
- Pros: Covers long distance, omnidirectional.
    
- Cons: Subject to interference.
    

#### b. Microwaves

- Frequency: 1 GHz – 300 GHz.
    
- Use: Satellite, cellular networks, microwave links.
    
- Pros: High frequency, used in point-to-point links.
    
- Cons: Requires line-of-sight, affected by weather.
    

#### c. Infrared

- Frequency: 300 GHz – 400 THz.
    
- Use: Remote controls, short-range communication.
    
- Pros: Secure, line-of-sight, no interference.
    
- Cons: Short range, cannot pass through walls.
    

#### d. Satellite Communication

- Uses geostationary or low-earth orbit satellites.
    
- Use: Global communication, TV broadcast, GPS.
    
- Pros: Wide coverage.
    
- Cons: High cost, propagation delay.
    

---

## 3. Synchronous and Asynchronous Transmission

These are two methods of transmitting data between devices.

### 3.1 Asynchronous Transmission

1. Data sent one byte at a time, each with a start and stop bit.
    
2. No clock signal is shared; receiver uses the start/stop bits for timing.
    
3. Slower and less efficient due to extra bits.
    
4. Suitable for low-speed, infrequent data transfer.
    
5. Example: Keyboard to computer communication, RS-232 protocol.
    

#### Advantages:

- Simple and cost-effective.
    
- Ideal for small amounts of data.
    

#### Disadvantages:

- Lower efficiency.
    
- Higher overhead due to start/stop bits.
    

---

### 3.2 Synchronous Transmission

1. Data sent in blocks or frames without start/stop bits.
    
2. Requires synchronized clocks between sender and receiver.
    
3. Efficient for large data volumes and high-speed transmission.
    
4. Used in networks and high-speed communication systems.
    
5. Example: Ethernet, HDLC protocol.
    

#### Advantages:

- High efficiency and speed.
    
- Suitable for real-time applications.
    

#### Disadvantages:

- Complex setup with synchronization.
    
- More expensive hardware.
    

---

Let me know if you’d like diagrams or comparisons in tabular form for quick revision.