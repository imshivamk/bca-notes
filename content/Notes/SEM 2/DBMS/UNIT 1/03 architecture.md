---
dg-publish: true
---
## Database Architecture:
1. ==representation of DBMS design.==
2. It helps to ==design, develop, implement, and maintain== DBMS
3. <mark style="background: #D2B3FFA6;">A DBMS architecture allows us to divide the database system into individual , modifiable components</mark>
4. A Database stores critical information
5. helps access data quickly and securely
6. Therefore, selecting the <mark style="background: #FFB8EBA6;">correct Architecture of DBMS helps in easy and efficient data management.</mark>
7. The <mark style="background: #FFF3A3A6;">DBMS design depends upon its architecture</mark>
8. The client/server architecture consists of <mark style="background: #FFF3A3A6;">many PCs and a workstation connected in a network.</mark>
9. The<mark style="background: #FFF3A3A6;"> basic client/server architecture is used to deal with a large number of PCs, web servers, database servers and other components that are connected with networks.</mark>
10. DBMS <mark style="background: #BBFABBA6;">architecture depends upon how users are connected to the database.</mark>

![](https://i.imgur.com/yYo4bPS.png)

## Types of DBMS Architecture

### • 1-Tier/single tier Architecture
1. <mark style="background: #FFF3A3A6;">Simplest</mark> DB architecture where <mark style="background: #BBFABBA6;">database is directly available to the user</mark>
2. <mark style="background: #FFB86CA6;">the client, server, and the Database are all present on the same machine.</mark>
4. <mark style="background: #FFB8EBA6;">For Example- </mark><mark style="background: #FFB86CA6;">To learn SQL we set up an SQL server and the database on the local system</mark>.
5. **Can directly interact with the relational database and execute operations**.
6. Used for <mark style="background: #FFB86CA6;">development of the local application</mark>, where programmers can <mark style="background: #FFB86CA6;">directly communicate with the database</mark> for the quick response.
7. The <mark style="background: #BBFABBA6;">industry won’t use this architecture</mark> they logically go for 2-Tier and 3-Tier Architecture. 
![](https://i.imgur.com/DDykKfl.png)

### 2-Tier Architecture
1. similar to a basic client-server model.
2. The <mark style="background: #BBFABBA6;">application at the client's end directly communicates with the database at the server side by establishing a connection</mark>
4. <mark style="background: #FFF3A3A6;">APIs like ODBC and JDBC</mark> are used for this interaction
5. <mark style="background: #FFB86CA6;">presentation layer runs on a client (PC, Mobile</mark>), and <mark style="background: #FFB86CA6;">data is stored on a server called</mark> the second tier
6. <mark style="background: #BBFABBA6;">maintenance and understanding are easier, compatible with existing systems</mark>
7. <mark style="background: #FF5582A6;">However, this model gives poor performance when there are a large number of users. </mark>
8. In the above 2 Tier client-server architecture, we can see that one server is connected with clients 1, 2, and 3.
![](https://i.imgur.com/QnYGfrc.png)
### 3-Tier Architecture
1. <mark style="background: #BBFABBA6;">most popular client server architecture</mark> in DBMS
2. the <mark style="background: #FFB8EBA6;">development and maintenance of</mark> <mark style="background: #FFF3A3A6;">functional processes, logic, data access, data storage, and user interface is done independently as separate modules</mark>
3. Three Tier architecture contains <mark style="background: #BBFABBA6;">a presentation layer</mark> (your PC, Tablet, Mobile, etc.), <mark style="background: #FFF3A3A6;">an application layer</mark> (server), and a <mark style="background: #FFB86CA6;">database server</mark>.
5. application layer : 
	1. communicating the user’s request to the DBMS system and send the response from the DBMS to the user.
	2. another layer between the client and the server
	3. processes functional logic, constraint, and rules before passing data to the user
6. <mark style="background: #FFF3A3A6;">its design is an extension of the 2-tier client server architecture</mark>
7. used in the case of large web applications.
8. • Enhanced scalability: due to distributed deployment of application servers. Now, individual connections need not be made between client and server. 
9. • Data Integrity: is maintained. Since there is a middle layer between the client and the server, data corruption can be avoided/removed.
10. Security is improved. This type of model prevents direct interaction of the client with the server thereby reducing access to unauthorized data.
![](https://i.imgur.com/uvyLhLi.png)
