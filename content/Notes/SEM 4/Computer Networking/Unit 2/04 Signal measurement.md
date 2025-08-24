---
dg-publish: true
---
- [[#Signal Measurement in Data Transmission|Signal Measurement in Data Transmission]]
- [[#1. Throughput|1. Throughput]]
	- [[#1. Throughput#Definition|Definition]]
	- [[#1. Throughput#Factors Affecting Throughput|Factors Affecting Throughput]]
	- [[#1. Throughput#Example|Example]]
- [[#2. Propagation Speed and Time|2. Propagation Speed and Time]]
	- [[#2. Propagation Speed and Time#A. Propagation Speed|A. Propagation Speed]]
	- [[#2. Propagation Speed and Time#B. Propagation Time|B. Propagation Time]]
- [[#3. Wavelength|3. Wavelength]]
	- [[#3. Wavelength#Definition|Definition]]
	- [[#3. Wavelength#Examples|Examples]]
- [[#4. Frequency|4. Frequency]]
	- [[#4. Frequency#Definition|Definition]]
	- [[#4. Frequency#Common Frequency Ranges|Common Frequency Ranges]]
	- [[#4. Frequency#Example|Example]]
- [[#5. Bandwidth and Spectrum|5. Bandwidth and Spectrum]]
	- [[#5. Bandwidth and Spectrum#A. Bandwidth|A. Bandwidth]]
	- [[#5. Bandwidth and Spectrum#B. Spectrum|B. Spectrum]]
	- [[#5. Bandwidth and Spectrum#Comparison: Bandwidth vs. Throughput|Comparison: Bandwidth vs. Throughput]]

## Signal Measurement in Data Transmission

Signal measurement involves various parameters that define how efficiently and accurately data is transmitted through a network. These parameters include throughput, propagation speed and time, wavelength, frequency, bandwidth, and spectrum.

---

## 1. Throughput

### Definition

- Throughput refers to the actual amount of data successfully transmitted over a network per second.
- It is measured in bits per second (bps), kilobits per second (Kbps), megabits per second (Mbps), or gigabits per second (Gbps).

### Factors Affecting Throughput

- Network congestion – More users = slower throughput.
- Hardware limitations – Older routers or cables can reduce speed.
- Signal interference – Wireless signals may be affected by obstacles and noise.

### Example

- A 100 Mbps internet connection does not always achieve full speed due to network congestion; actual throughput might be 85 Mbps.

---

## 2. Propagation Speed and Time

### A. Propagation Speed

- The speed at which a signal travels through a medium.
- Depends on the medium type (copper wire, fiber optics, air, etc.).
- Examples:
    - Electrical signals (copper cable): ~2 × 10⁸ m/s (slower than light).
    - Optical fiber (light signals): ~3 × 10⁸ m/s (speed of light in vacuum).
    - Wireless (radio waves): ~3 × 10⁸ m/s.

### B. Propagation Time

- The time taken by a signal to travel from sender to receiver.
- Formula: Propagation Time=DistancePropagation Speed\text{Propagation Time} = \frac{\text{Distance}}{\text{Propagation Speed}}
- Example:
    - If a signal travels 1,000 km (1,000,000 meters) through fiber optic cable (2 × 10⁸ m/s), Propagation Time=1,000,0002×108=5 milliseconds\text{Propagation Time} = \frac{1,000,000}{2 \times 10^8} = 5 \text{ milliseconds}

---

## 3. Wavelength

### Definition

- The distance between two consecutive peaks or troughs of a wave.
- Measured in meters (m), centimeters (cm), or nanometers (nm).
- Formula: Wavelength(λ)=Speed of Light(c)Frequency(f)\text{Wavelength} (\lambda) = \frac{\text{Speed of Light} (c)}{\text{Frequency} (f)}

### Examples

- Radio waves (AM/FM radio): Long wavelength (~100m).
- Microwaves (Wi-Fi, mobile networks): Shorter (~12 cm for 2.4 GHz Wi-Fi).
- Visible light (fiber optics): Extremely short (~500 nm).

---

## 4. Frequency

### Definition

- Number of wave cycles per second, measured in Hertz (Hz).
- Higher frequency = shorter wavelength and higher energy.

### Common Frequency Ranges

| Frequency Range      | Type of Signal             | Example Applications                    |
| -------------------- | -------------------------- | --------------------------------------- |
| 3 kHz – 300 kHz  | Low-frequency (LF)         | AM radio, navigation signals            |
| 300 kHz – 3 MHz  | Medium-frequency (MF)      | AM radio, marine communication          |
| 3 MHz – 30 MHz   | High-frequency (HF)        | Shortwave radio, aircraft communication |
| 30 MHz – 300 MHz | Very high-frequency (VHF)  | FM radio, TV signals                    |
| 300 MHz – 3 GHz  | Ultra high-frequency (UHF) | Wi-Fi, mobile networks, GPS             |
| 3 GHz – 300 GHz  | Super high-frequency (SHF) | 5G networks, satellite communication    |

### Example

- Wi-Fi operates at 2.4 GHz and 5 GHz.
- Higher frequencies (5 GHz) provide faster data rates but shorter range.

---

## 5. Bandwidth and Spectrum

### A. Bandwidth

- The maximum data transfer rate a network can handle.
- Measured in Hertz (Hz) for signals and bps for data transfer.
- Higher bandwidth = higher data transmission speed.

### B. Spectrum

- Range of all possible frequencies used for communication.
- Includes radio, microwave, infrared, visible light, etc..
- Example:
    - FM radio operates in the 88 MHz – 108 MHz range.
    - 5G networks use 600 MHz – 39 GHz frequency bands.

### Comparison: Bandwidth vs. Throughput

|Feature|Bandwidth|Throughput|
|---|---|---|
|Definition|Maximum data capacity|Actual data transmitted|
|Measured In|Hz (signal) or Mbps (network)|Mbps or Gbps|
|Affected By|Medium limitations|Congestion, interference|
|Example|Fiber optic has 1 Gbps bandwidth|Actual throughput may be 900 Mbps|

---


- Throughput: Actual data transmitted per second, affected by congestion and interference.
- Propagation Speed and Time: Determines signal travel time; fiber optics are fastest.
- Wavelength: Inversely proportional to frequency; used in different communication types.
- Frequency: Higher frequency means more data capacity but shorter range.
- Bandwidth and Spectrum: Bandwidth defines network capacity; spectrum covers all frequencies used for communication.
