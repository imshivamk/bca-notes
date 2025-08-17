---
dg-publish: true
---

##### 1. Create the table clients with given columns:

```sql
CREATE TABLE CLIENTS(
Client_no VARCHAR2(5) PRIMARY KEY,
Name VARCHAR2(10) NOT NULL,
City VARCHAR2(10),
State VARCHAR2(10),
Bal_due Number(8,2)
);
```

![](https://i.imgur.com/6QTXyNG.png)

##### 2. Alter table clients add new column Mobile-no

```sql
ALTER TABLE CLIENTS ADD Mobile_No Number(10);
```

![](https://i.imgur.com/A3UeDq5.png)

##### 3. Insert the given details in the table
![](https://i.imgur.com/O9wxdIq.png)

```sql
INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('01', 'Neha Sharma', 'Pune', '100001', 'Maharashtra', 20000, '7755221144');

INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('02', 'Raju Verma', 'Mumbai', '100002', 'Maharashtra', 12000, '9988556633');

INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('03', 'Ajay Sehani', 'Delhi', '100003', 'Delhi', 30000, '7896541234');

INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('04', 'Prince Mehta', 'Pune', '100004', 'Maharashtra', 45000, '9598715879');

INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('05', 'Kiran Mehra', 'Kota', '100005', 'Rajasthan', 40000, '9589647168');

INSERT INTO CLIENTS(Client_no, Name, City, Pincode, State, Bal_due, Mobile_No)
VALUES('06', 'Sunil Kumar', 'Indore', '100006', 'MP', 15000, '9876543215');
SELECT* FROM CLIENTS
```

![](https://i.imgur.com/CsGd5Mf.png)


##### 4. Describe table structure

```SQL
DESC CLIENTS;
```

![](https://i.imgur.com/IIHSXfQ.png)

##### 5. Display records of clients table

```sql
SELECT* FROM CLIENTS;
```

![](https://i.imgur.com/CsGd5Mf.png)
##### 6. Display names of all clients

```sql
SELECT Name from CLIENTS;
```

![](https://i.imgur.com/CktQOfK.png)

##### 7. List all clients from Mumbai

```sql
SELECT * FROM CLIENTS WHERE City = 'Mumbai';
```

![](https://i.imgur.com/eEAvq9C.png)

##### 8. List all different states
```sql
SELECT State FROM CLIENTS;
```

![](https://i.imgur.com/jACOOEL.png)

##### 9. list clients in ascending order of balance due

```sql
SELECT* FROM CLIENTS ORDER BY Bal_due;
```

![](https://i.imgur.com/1hFrm5x.png)
##### 10. print clients whose balance is Bal-due is greater than 10000

```sql
SELECT * 
FROM clients 
WHERE `Bal-due` > 10000;
```

![](https://i.imgur.com/xskCi6I.png)

##### 11. List names, city and states of clients not from Maharashtra

```sql
SELECT name, city, state
FROM clients
WHERE state NOT = 'Maharashtra'
```

![](https://i.imgur.com/E3y04Vo.png)

##### 12. List clients in descending order in their names
```sql
SELECT* FROM CLIENTS ORDER BY Name DESC;
```

![](https://i.imgur.com/6Lfkdal.png)

##### 13. Rename the table to new clients
```sql
ALTER TABLE CLIENTS RENAME TO NewClients;
```
##### 14. create table client-details with c-no, name and Bal-due using create table from table
```sql
CREATE TABLE Client_details AS 
SELECT Client_no, Name, Bal_due FROM NewClients;;
```
##### 15. change city of client 3 to Pune
```sql
UPDATE CLIENTS SET CITY = 'Pune' WHERE Client_no = 03;
```

![](https://i.imgur.com/fWzCndL.png)

##### 16. drop column pin code

```sql
ALTER TABLE CLIENTS DROP COLUMN 'Pincode'
```

![](https://i.imgur.com/cVrLU4h.png)




