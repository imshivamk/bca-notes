---
dg-publish: true
---
### What is Mobile IP?

1. Mobile IP is a protocol that allows users to move across different networks without changing their IP address. 
2. It supports mobility in traditional IP-based networks.
3. Problem it solves: In standard IP networks, an IP address is tied to a fixed location. 
4. If a device moves (e.g., a laptop from home to university), its IP changes, breaking ongoing connections.
5. Mobile IP introduces two main components:
    - Home Agent (HA): Located in the home network, keeps track of the mobile device's current location.
    - Foreign Agent (FA): Located in the visited network, helps deliver packets to the mobile device.
6. How it works:
    - The mobile node gets a temporary address in the foreign network (Care-of Address).
    - The HA intercepts traffic destined for the mobile node’s home address and tunnels it to the FA.
    - The FA then delivers it to the mobile node.
7. Mobile IP supports uninterrupted communication across different networks — useful in vehicular networks, mobile computing, and satellite communication.
    

- 

