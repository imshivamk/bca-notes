---
dg-publish: true
---
- [[#Multiplexing and Demultiplexing|Multiplexing and Demultiplexing]]
- [[#1. Introduction|1. Introduction]]
- [[#2. Frequency Division Multiplexing (FDM)|2. Frequency Division Multiplexing (FDM)]]
	- [[#2. Frequency Division Multiplexing (FDM)#Definition|Definition]]
	- [[#2. Frequency Division Multiplexing (FDM)#How It Works|How It Works]]
	- [[#2. Frequency Division Multiplexing (FDM)#Example|Example]]
	- [[#2. Frequency Division Multiplexing (FDM)#Advantages|Advantages]]
	- [[#2. Frequency Division Multiplexing (FDM)#Disadvantages|Disadvantages]]
- [[#3. Wavelength Division Multiplexing (WDM)|3. Wavelength Division Multiplexing (WDM)]]
	- [[#3. Wavelength Division Multiplexing (WDM)#Definition|Definition]]
	- [[#3. Wavelength Division Multiplexing (WDM)#How It Works|How It Works]]
	- [[#3. Wavelength Division Multiplexing (WDM)#Example|Example]]
	- [[#3. Wavelength Division Multiplexing (WDM)#Advantages|Advantages]]
	- [[#3. Wavelength Division Multiplexing (WDM)#Disadvantages|Disadvantages]]
- [[#4. Time Division Multiplexing (TDM)|4. Time Division Multiplexing (TDM)]]
	- [[#4. Time Division Multiplexing (TDM)#Definition|Definition]]
	- [[#4. Time Division Multiplexing (TDM)#How It Works|How It Works]]
	- [[#4. Time Division Multiplexing (TDM)#Types of TDM|Types of TDM]]
		- [[#Types of TDM#1. Synchronous TDM|1. Synchronous TDM]]
		- [[#Types of TDM#2. Asynchronous (Statistical) TDM|2. Asynchronous (Statistical) TDM]]
	- [[#4. Time Division Multiplexing (TDM)#Example|Example]]
	- [[#4. Time Division Multiplexing (TDM)#Advantages|Advantages]]
	- [[#4. Time Division Multiplexing (TDM)#Disadvantages|Disadvantages]]
- [[#5. Comparison Table|5. Comparison Table]]

## Multiplexing and Demultiplexing

## 1. Introduction

Multiplexing is a technique that allows multiple signals to share a single transmission medium, increasing efficiency and reducing costs. The reverse process, demultiplexing, separates these combined signals at the receiver end.

Applications of Multiplexing:

- Telecommunications – Multiple phone calls over one fiber optic cable.
- Broadcasting – Radio and TV signals transmitted on different frequencies.
- Computer Networks – Multiple data streams over a single communication link.



There are three main types of multiplexing: FDM (Frequency Division Multiplexing), WDM (Wavelength Division Multiplexing), and TDM (Time Division Multiplexing).

---

## 2. Frequency Division Multiplexing (FDM)

### Definition

- FDM assigns different frequency bands to multiple signals, allowing them to be transmitted simultaneously over the same medium.
- Each signal is modulated onto a separate frequency within a shared bandwidth.

### How It Works

1. Multiple signals are modulated to different frequency ranges.
2. These signals are combined and transmitted over a single communication channel.
3. At the receiver end, a demultiplexer (Demux) separates them using bandpass filters.

![[Pasted image 20250515212750.png]]
### Example

- FM Radio:
    - Radio stations operate at different frequencies (88 MHz – 108 MHz).
    - A receiver tunes in to a specific frequency (e.g., 101.1 MHz for a music station).

### Advantages

✔ Efficient for analog signals.  
✔ Supports continuous data transmission.

### Disadvantages

✘ Requires large bandwidth.  
✘ Interference (crosstalk) may occur between frequency bands.

---

## 3. Wavelength Division Multiplexing (WDM)

### Definition

- WDM is a specialized form of FDM used in fiber optic communication.
- Instead of different frequencies, it uses different light wavelengths (colors) in a single optical fiber.

### How It Works

1. Multiple laser beams of different wavelengths (colors) are combined into a single optical fiber.
2. A WDM multiplexer merges these signals for transmission.
3. At the receiver end, a demultiplexer separates signals based on wavelength.

### Example

- Fiber Optic Networks:
    - Dense Wavelength Division Multiplexing (DWDM) allows hundreds of light signals in a single fiber.
    - Used in high-speed internet backbones and submarine cables.

### Advantages

✔ High data capacity over long distances.  
✔ Minimal interference since light waves do not overlap.

### Disadvantages

✘ Requires expensive optical components (lasers, filters, multiplexers).  
✘ Complex installation and maintenance.

---

## 4. Time Division Multiplexing (TDM)

### Definition

- TDM allocates time slots to different signals on a shared channel.
- Each user gets a fixed time interval to transmit data.

### How It Works

1. The available channel is divided into time slots.
2. Each sender transmits data in its assigned time slot.
3. The receiver extracts data by reading slots in sequence.

![[Pasted image 20250515212813.png]]
### Types of TDM

#### 1. Synchronous TDM

- Each user gets an equal time slot, even if no data is available.
- Example: Old telephone networks (T1, E1 lines).

#### 2. Asynchronous (Statistical) TDM

- Time slots are assigned dynamically based on demand.
- Example: Modern digital networks (Ethernet, DSL, LTE).

### Example

- Computer Networks:
    - In Ethernet, multiple users send data using time-sharing mechanisms.
    - In 4G/5G, time slots dynamically adjust based on traffic.

### Advantages

✔ Efficient for digital transmission.  
✔ No frequency interference like in FDM.

### Disadvantages

✘ Delay in data transmission if time slots are not optimized.  
✘ Unused time slots waste bandwidth in Synchronous TDM.

---

## 5. Comparison Table

|Feature|FDM|WDM|TDM|
|---|---|---|---|
|Technique|Frequency-based|Wavelength-based|Time-based|
|Used in|Analog systems (Radio, TV)|Fiber optics|Digital systems (Networks, Telephony)|
|Interference|Yes (adjacent frequency overlap)|No (light waves do not interfere)|No (time slots are separate)|
|Efficiency|High for continuous signals|Best for high-speed fiber networks|High for digital communication|
|Cost|Moderate|High (expensive optical equipment)|Low|

---

## 6. Summary

- Multiplexing improves channel utilization by allowing multiple signals on a single medium.
- FDM uses different frequency bands (e.g., FM radio, TV broadcasting).
- WDM uses different light wavelengths in fiber optics.
- TDM assigns time slots for digital data transmission (used in networks and telephony).

Would you like examples of real-world implementations of these multiplexing techniques?