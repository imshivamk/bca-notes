---
dg-publish: true
---

- [[#WHAT IS DATA COMMUNICATION?|WHAT IS DATA COMMUNICATION?]]
	- [[#WHAT IS DATA COMMUNICATION?#Data Communication System components|Data Communication System components]]
	- message, sender, receiver, transmission media, protocol
- [[#DATA TRANSMISSION|DATA TRANSMISSION]]
	- [[#DATA TRANSMISSION#WHAT IS DATA TRANSMISSION?|WHAT IS DATA TRANSMISSION?]]
	- [[#DATA TRANSMISSION#1. SIMPLEX|1. SIMPLEX]]
	- [[#DATA TRANSMISSION#2. HALF-DUPLEX|2. HALF-DUPLEX]]
	- [[#DATA TRANSMISSION#3. FULL-DUPLEX|3. FULL-DUPLEX]]
- [[#TYPES OF TRANSMISSION MEDIA|TYPES OF TRANSMISSION MEDIA]]
	- [[#TYPES OF TRANSMISSION MEDIA#1. GUIDED MEDIA|1. GUIDED MEDIA]]
		- [[#1. GUIDED MEDIA#TYPES OF GUIDED MEDIA|TYPES OF GUIDED MEDIA]]
	- [[#TYPES OF TRANSMISSION MEDIA#1. TWISTED PAIR CABLE|1. TWISTED PAIR CABLE]]
		- [[#1. TWISTED PAIR CABLE#1. SHIELDED TWISTED|1. SHIELDED TWISTED]]
		- [[#1. TWISTED PAIR CABLE#2. UNSHIELDED TWISTED PAIR|2. UNSHIELDED TWISTED PAIR]]


## WHAT IS DATA COMMUNICATION?

1. Data Communication is defined as <mark style="background: #FFB86CA6;">exchange of data between two devices via some form of transmission</mark> <mark style="background: #ABF7F7A6;">media such as a cable,</mark> wire or it can be air or vacuum also.
2. Data Communication refers to the <mark style="background: #FFB86CA6;">sharing or transfer of collection of facts, figures, etc.</mark>
3. For data communication, communicating <mark style="background: #FFB86CA6;">devices must be a part of communication system</mark> made up of a <mark style="background: #ABF7F7A6;">combination of hardware or software devices and programs.</mark>
4. <mark style="background: #D2B3FFA6;">Computer communications</mark> : A <mark style="background: #D2B3FFA6;">process in which two or more computers or devices transfer data,</mark> instructions, and information.

### Data Communication System components
1. There are mainly five components of a data communication system:
	1. <mark style="background: #ADCCFFA6;">Message</mark>
		1. the information to be exchanged between two points.
		2. texts, numbers, pictures, audio, and videos.
	2. <mark style="background: #ADCCFFA6;">Sender</mark>
		1. It is the node (device) that is intended to send the data
		2. It has<mark style="background: #FFB86CA6;"> mechanisms </mark>of its own that <mark style="background: #FFB86CA6;">make data encoded</mark> in a format that is <mark style="background: #BBFABBA6;">feasible and secure to transfer</mark> on the transmission medium <mark style="background: #ABF7F7A6;">accurately and timely.</mark>
		3. It is simply a<mark style="background: #FFF3A3A6;"> device that sends data messages</mark>. It can be a <mark style="background: #FFF3A3A6;">computer, mobile, telephone</mark>, laptop, video camera, or workstation, etc.
	3. <mark style="background: #ADCCFFA6;">Receiver</mark>
		1. <mark style="background: #FFB86CA6;">receiving the encoded information</mark>
		2. <mark style="background: #ABF7F7A6;">decoding it into a certain format </mark>accurately
		3. <mark style="background: #BBFABBA6;">sending the feedback is the receiver.</mark>
		4. It is a device that <mark style="background: #FFF3A3A6;">receives messages</mark>. It can be a<mark style="background: #FFF3A3A6;"> computer, telephone mobile</mark>, workstation, etc
	4. <mark style="background: #ADCCFFA6;">Transmission Medium</mark>
		1. It is a<mark style="background: #FFB86CA6;"> path such as a cable</mark>
		2. that serves as <mark style="background: #ABF7F7A6;">traveling media</mark> <mark style="background: #FFF3A3A6;">on which the message is transferred from the sender to the receiver</mark> end.
	5. Set of Rules (<mark style="background: #ADCCFFA6;">Protocols</mark>)
		1. The protocol is the <mark style="background: #FFF3A3A6;">rules that are agreed upon between sender and receiver</mark> 
		2. Which <mark style="background: #BBFABBA6;">govern the entire exchange process</mark>.
		3. These protocols <mark style="background: #D2B3FFA6;">make communication possible between two devices</mark> without them may be connected but won’t be communicating.
	![](https://i.imgur.com/YbLpATu.png)

## DATA TRANSMISSION

### WHAT IS DATA TRANSMISSION? 

1. Data transmission is<mark style="background: #FFB86CA6;"> sending and receiving of digital or analog data between devices.</mark>

2. This can be achieved through <mark style="background: #ABF7F7A6;">different mediums, such as cables, optical fibers, or wireless signals</mark>.
3. Data Transmission mode <mark style="background: #FFB86CA6;">defines the direction of the flow of information</mark> between two communication devices.
4. AKA Data Communication/Directional/Transmission Mode.
5. It<mark style="background: #CACFD9A6;"> specifies the direction of data flow from one place to another in a computer network.</mark>
6. <mark style="background: #FFB86CA6;">Each communication channel has a direction associated with it, and transmission media provide the direction. </mark>THUS, direction mode
7. Data Transmission mode is divided into three categories:
	1. Simplex
	2. Half-Duplex
	3. Full Duplex

![](https://i.imgur.com/MoOfeOS.png)

### 1. SIMPLEX
1. Simplex is the data transmission mode in which the<mark style="background: #FFB8EBA6;"> data can flow only in one direction.</mark>
2. the communication is <mark style="background: #FFB8EBA6;">unidirectional</mark>.
3. a <mark style="background: #FFB86CA6;">sender can only send</mark> data but can not receive it.
4.  <mark style="background: #FFB86CA6;">receiver can only receive</mark> data but can not send it.
5. This transmission mode is not so popular because we cannot perform two-way communication between the sender and receiver in this mode.
6. It is mainly used in the business field as in <mark style="background: #ABF7F7A6;">sales</mark> that do not require any corresponding reply.
7. It is similar to a one-way street.
8. For Example, <mark style="background: #FFB86CA6;">Radio and TV transmission</mark>, <mark style="background: #FFF3A3A6;">keyboard</mark>, <mark style="background: #FFF3A3A6;">mouse</mark>, etc.
![](https://i.imgur.com/Tt8A8Ky.png)

### 2. HALF-DUPLEX

1. data can flow in<mark style="background: #FFB86CA6;"> both directions, but in one direction at a time</mark>.
2. AKA <mark style="background: #ABF7F7A6;">semi-duplex</mark>
3. <mark style="background: #BBFABBA6;">each station can both transit and receive data</mark> but <mark style="background: #FF5582A6;">not simultaneously.</mark>
4. <mark style="background: #FFF3A3A6;">when one end is sending data the other can only receive.</mark>
5. <mark style="background: #FFF3A3A6;">entire capacity of the channel can be utilized for each direction.</mark>
6. Transmission lines can carry data in both directions, but the data can be sent only in one direction at a time.
7. This type of data transmission mode can be used in cases where there is no need for communication in both directions at the same time.
8. For Example, <mark style="background: #FFF3A3A6;">Walkie-Talkie, Internet Browsers, chatrooms etc</mark>.
 ![](https://i.imgur.com/2uxoITk.png)

### 3. FULL-DUPLEX

1. Full-Duplex is the data transmission mode in which the <mark style="background: #FFB86CA6;">data can flow in both directions at the same time.</mark>
2. It is <mark style="background: #FFB8EBA6;">bi-directional</mark> in nature.
3. It is <mark style="background: #FFB8EBA6;">two-way communication</mark> in which <mark style="background: #ABF7F7A6;">both the stations can transmit and receive the data simultaneously.</mark>
4. Full-Duplex mode has <mark style="background: #FFB86CA6;">double bandwidth as compared to the half-duplex.</mark>
5. The <mark style="background: #ABF7F7A6;">capacity of the channel is divided between the two directions of communication.</mark>
6. This mode is used when communication in both directions is required simultaneously.
7. For Example, a <mark style="background: #FFF3A3A6;">Telephone Networ</mark>k, in which<mark style="background: #FFF3A3A6;"> both the persons can talk and listen to each other simultaneously</mark>
![](https://i.imgur.com/tMHLboi.png)


## TYPES OF TRANSMISSION MEDIA

1. In data communication terminology, a <mark style="background: #FFB86CA6;">transmission medium is a physical path</mark> <mark style="background: #ABF7F7A6;">between the transmitter and the receiver.</mark>
2. It is the <mark style="background: #FFB86CA6;">channel</mark> <mark style="background: #ABF7F7A6;">through which data is sent</mark> from one place to another.
3. Transmission media, also known as<mark style="background: #FFB86CA6;"> communication channels</mark>, are the physical pathways through which data is transmitted from one location to another in a communication system.
4. There are <mark style="background: #FFF3A3A6;">two main types</mark> of transmission media in computer networks. 
	1. GUIDED
		1. guided media requires physical medium
	2. UNGUIDED
		1.  unguided media requires air for communication.

![](https://i.imgur.com/O9AVGDu.png)

### 1. GUIDED MEDIA
1. It is defined as the physical medium through which the signals are transmitted.
2. It is also referred to as <mark style="background: #FFB86CA6;">Wired or Bounded</mark> transmission media. 
3. <mark style="background: #ABF7F7A6;">Signals being transmitted</mark> are <mark style="background: #FFB86CA6;">directed and confined in a narrow pathway by</mark> <mark style="background: #ABF7F7A6;">using physical links</mark>.
4. Features:
	1. <mark style="background: #FFF3A3A6;">High Speed </mark>
	2. <mark style="background: #BBFABBA6;">Secure</mark> 
	3. Used for comparatively <mark style="background: #FFF3A3A6;">shorter distances</mark>

#### TYPES OF GUIDED MEDIA
Types Of Guided media:
1. Twisted Pair Cable
2. Coaxial Cable
3. Optical Fiber Cable 

### 1. TWISTED PAIR CABLE
1. It consists of<mark style="background: #FFB86CA6;"> 2 separately insulated conductor wires wound about each other.</mark>
2. Generally, s<mark style="background: #FFB86CA6;">everal such pairs are bundled together</mark> in a<mark style="background: #ABF7F7A6;"> protective sheath.</mark>
3. Twisted pair is a <mark style="background: #CACFD9A6;">physical media made up of a pair of cables twisted with each other.</mark>
4. They are the <mark style="background: #FFB8EBA6;">most widely used Transmission Media.</mark>
5. A twisted pair cable is <mark style="background: #BBFABBA6;">cheap</mark> as compared to other transmission media.
6. <mark style="background: #BBFABBA6;">easy Installation</mark>, and it is a <mark style="background: #BBFABBA6;">lightweight</mark> cable.
7. Twisted Pair is of two types:
	1. Shielded Twisted Pair
	2. Unshielded Twisted Pair
#### 1. SHIELDED TWISTED
1. This type of cable <mark style="background: #FFB86CA6;">consists of a special jacket</mark> (a <mark style="background: #ABF7F7A6;">copper braid covering or a foil shield</mark>) 
2. <mark style="background: #D2B3FFA6;">block external interference.</mark>
3. It is used in <mark style="background: #ABF7F7A6;">fast-data-rate Ethernet and in voice and data channels of telephone lines</mark>.
4. <mark style="background: #FFB86CA6;">Better performance</mark> <mark style="background: #FFB8EBA6;">at a higher data rate than Unshielded.</mark>
5. It<mark style="background: #FFB8EBA6;"> Eliminates crosstalk</mark>
6. <mark style="background: #FFB86CA6;">Comparatively faster</mark>


![](https://i.imgur.com/hbSvuD7.png)


#### 2. UNSHIELDED TWISTED PAIR
1. UTP consists of <mark style="background: #FFB86CA6;">two insulated copper wires twisted around one another</mark>.
2. An unshielded twisted pair is<mark style="background: #FFB86CA6;"> widely used in telecommunication.</mark>
3. It is<mark style="background: #FFF3A3A6;"> Least expensive .</mark>
4. It is<mark style="background: #FFF3A3A6;"> Easy to install</mark>
5. <mark style="background: #FFB86CA6;">High-speed capacity</mark>
6. This cable can only be used for<mark style="background: #D2B3FFA6;"> shorter distances</mark> because of <mark style="background: #FF5582A6;">attenuation</mark>.

![](https://i.imgur.com/7i5RZaS.png|10)

### 2. COAXIAL CABLE
1. It has <mark style="background: #FFB86CA6;">an outer plastic covering containing an insulation layer made of PVC or Teflon </mark>and<mark style="background: #ABF7F7A6;"> 2 parallel conductors each having a separate insulated protection cover.</mark>
2. The coaxial cable transmits information in two modes:
	1. <mark style="background: #BBFABBA6;">Baseband</mark> mode(<mark style="background: #FFF3A3A6;">dedicated cable bandwidth</mark>)
	2. <mark style="background: #BBFABBA6;">Broadband</mark> mode(<mark style="background: #FFF3A3A6;">cable bandwidth is split into separate ranges</mark>).
3. <mark style="background: #FFB8EBA6;">Cable TVs and analog television network</mark>s widely use Coaxial cables.
4. It has a <mark style="background: #FFF3A3A6;">higher frequency as compared to Twisted pair cabl</mark>e.
5. The data can be transmitted at <mark style="background: #BBFABBA6;">high speed.</mark>
6. It has<mark style="background: #FFF3A3A6;"> better shielding as compared to</mark> twisted pair cable.
7. <mark style="background: #BBFABBA6;">Easy to install and expand.</mark>
8. It is <mark style="background: #BBFABBA6;">Inexpensive</mark>
9. Single cable failure can disrupt the entire network
![](https://i.imgur.com/JsmeeYI.png)

### 3. OPTICAL FIBRE CABLE

1. It uses the <mark style="background: #BBFABBA6;">concept of refraction of light through a core made up of glass or plastic</mark>
2. The <mark style="background: #FFB86CA6;">core</mark> is surrounded by a l<mark style="background: #ABF7F7A6;">ess dense glass or plastic covering called the cladding.</mark>
3. It is used for <mark style="background: #BBFABBA6;">the transmission of large volumes of data.</mark>
4. Increased <mark style="background: #BBFABBA6;">capacity and bandwidth</mark>
10. It is <mark style="background: #BBFABBA6;">Lightweight</mark>
11. <mark style="background: #FFF3A3A6;">Less signal reduction</mark>

![](https://i.imgur.com/xXMQ7Fm.png|5)



### 2. UNGUIDED MEDIA

1. It is also referred to as <mark style="background: #FFF3A3A6;">Wireless or Unbounded transmission media.</mark>
2. No physical medium is required for the transmission of electromagnetic signals.
3. An unguided transmission <mark style="background: #FFB8EBA6;">transmits the electromagnetic waves without using any physical medium.</mark>
4. Therefore it is also known as <mark style="background: #FFB8EBA6;">wireless transmission.</mark>
5. In unguided media, <mark style="background: #BBFABBA6;">air is the media </mark>through which the electromagnetic energy can flow easily.
6. Unguided transmission is broadly classified into three categories:
	1. Radio waves
	2. Microwaves
	3. Infrared
#### 1. RADIO WAVES

1. These waves are relatively<mark style="background: #FFF3A3A6;"> simple to create and can easily pass through structures.</mark>
2. The transmitting and receiving <mark style="background: #BBFABBA6;">antennas of this do not need to be aligned</mark>.
3. These waves have a frequency range of<mark style="background: #BBFABBA6;"> 3 kHz to 1GHz.</mark>
4. <mark style="background: #FFB86CA6;">In AM and FM radios, these wavelengths are employed for transmission.</mark>

![](https://i.imgur.com/AskFnZK.png)
