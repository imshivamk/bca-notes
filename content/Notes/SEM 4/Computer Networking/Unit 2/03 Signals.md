---
dg-publish: true
---

**INDEX**

- [[#Signals in Data Transmission|Signals in Data Transmission]]
- [[#1. Types of Signals|1. Types of Signals]]
	- [[#1. Types of Signals#A. Analog Signals|A. Analog Signals]]
		- [[#A. Analog Signals#Characteristics of Analog Signals|Characteristics of Analog Signals]]
		- [[#A. Analog Signals#Example Representation of Analog Signal|Example Representation of Analog Signal]]
	- [[#1. Types of Signals#B. Digital Signals|B. Digital Signals]]
		- [[#B. Digital Signals#Characteristics of Digital Signals|Characteristics of Digital Signals]]
		- [[#B. Digital Signals#Example Representation of Digital Signal|Example Representation of Digital Signal]]
- [[#2. Data Rate (Bit Rate and Baud Rate)|2. Data Rate (Bit Rate and Baud Rate)]]
	- [[#2. Data Rate (Bit Rate and Baud Rate)#A. Bit Rate|A. Bit Rate]]
	- [[#2. Data Rate (Bit Rate and Baud Rate)#B. Baud Rate|B. Baud Rate]]
	- [[#2. Data Rate (Bit Rate and Baud Rate)#Difference Between Bit Rate and Baud Rate|Difference Between Bit Rate and Baud Rate]]
- [[#3. Transmission Impairments|3. Transmission Impairments]]
	- [[#3. Transmission Impairments#A. Attenuation|A. Attenuation]]
	- [[#3. Transmission Impairments#B. Noise|B. Noise]]
	- [[#3. Transmission Impairments#C. Distortion|C. Distortion]]
	- [[#3. Transmission Impairments#D. Jitter|D. Jitter]]

## Signals in Data Transmission

1. signals are electrionic representation of data
2. Signals are used to transmit data over communication channels. They can be classified based on their form, characteristics, and how they carry information.

---

## 1. Types of Signals

### A. Analog Signals

- An analog signal is a continuous wave that varies in amplitude, frequency, or phase over time.
- It can take infinite values within a given range.
- Used in traditional telephony, radio broadcasting, and audio signals.

#### Characteristics of Analog Signals

- <mark style="background: #1E90FF;">Continuous</mark> in time and value.
- Affected by noise and interference.
- Examples:
    - Sound waves in human speech.
    - AM/FM radio signals.
    - Analog TV broadcasts.

#### Example Representation of Analog Signal

A sine wave is a common representation of an analog signal:

- Amplitude: Strength of the signal.
- Frequency: Number of oscillations per second (Hertz, Hz).
- Phase: Position of the waveform at a given time.

---

### B. Digital Signals

- A digital signal is a discrete wave that represents data in binary form (0s and 1s).
- Used in computer networks, digital telephony, and modern electronics.

#### Characteristics of Digital Signals

- Discrete (stepwise) changes in voltage.
- Less affected by noise, making them more reliable.
- Easier to process and store than analog signals.
- Examples:
    - Data transmission over Ethernet.
    - Digital video and audio files (MP3, MP4).
    - Computer networks (Wi-Fi, optical fiber).

#### Example Representation of Digital Signal

A square wave is a typical representation of a digital signal:

- High (1) and Low (0) voltage levels.
- Clock synchronization required for interpretation.

---

## 2. Data Rate (Bit Rate and Baud Rate)

### A. Bit Rate

- The number of bits transmitted per second (bps).
- Determines how fast data is sent.
- Higher bit rate = faster transmission speed.
- Example:
    - Ethernet: 100 Mbps, 1 Gbps, 10 Gbps.
    - Wi-Fi: 300 Mbps, 1.2 Gbps, etc.

### B. Baud Rate

- The number of signal changes per second.
- One baud may represent multiple bits in modern systems.
- Example:
    - If each symbol represents 2 bits, then baud rate = bit rate / 2.

### Difference Between Bit Rate and Baud Rate

|Feature|Bit Rate|Baud Rate|
|---|---|---|
|Definition|Number of bits per second|Number of signal changes per second|
|Relation|Bit rate = Baud rate × Bits per symbol|Baud rate ≤ Bit rate|
|Example|2400 bps modem|1200 baud rate (if each signal change carries 2 bits)|

---

## 3. Transmission Impairments

Transmission impairments are factors that reduce the quality of signals during data transmission.

### A. Attenuation

- Weakening of a signal over distance.
- energy loss
- More significant in long-distance wired and wireless communication.
- Solution:
    - Amplifiers (for analog signals).
    - Repeaters (for digital signals).
    - Use fiber optics to minimize signal loss.

### B. Noise

- Unwanted signals that interfere with communication.
- Types of noise:
    - Thermal noise: Caused by heat in electronic circuits.
    - Intermodulation noise: Overlapping frequencies create interference.
    - Crosstalk: Signal leakage between adjacent wires.
- Solution:
    - Shielding cables.
    - Using error detection and correction techniques.

### C. Distortion

- Occurs when different signal components travel at different speeds, causing a phase shift.
- change/ alteration in data form
- Common in optical fiber and high-frequency signals.
- Solution:
    - Equalization techniques.
    - Adaptive signal processing.

### D. Jitter (lag)

- Variation in signal arrival time.
- Common in real-time communication (VoIP, video streaming).
- Solution:
    - Buffering and synchronization techniques.

---


- Analog signals are continuous and used in traditional broadcasting.
- Digital signals are discrete and used in modern communication.
- Bit rate determines transmission speed, while baud rate defines signal changes per second.
- Transmission impairments (attenuation, noise, distortion, jitter) affect data integrity.
- Solutions include amplifiers, repeaters, shielding, and error correction methods.
