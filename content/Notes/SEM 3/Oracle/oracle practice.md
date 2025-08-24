---
dg-publish: true
---
******```sql
CREATE table Salesperson(

    S_no VARCHAR2(6) PRIMARY KEY,

    S_name VARCHAR2(15) NOT NULL,

    S_city VARCHAR2(15),

    Commission NUMBER(8)

);

  

INSERT INTO Salesperson VALUES ('001', 'Ajay Sharma', 'Pune', 1200);

INSERT INTO Salesperson VALUES ('002', 'Vijay Varma', 'Mumbai', 500);

INSERT INTO Salesperson VALUES ('003', 'Dharma Kumar', 'Nagpur', 1500);

INSERT INTO Salesperson VALUES ('004', 'Shivam Kumar', 'Nagpur', 1500);

INSERT INTO Salesperson VALUES ('005', 'Rushikesh Kumar', 'Nagpur', 15000);

  

SELECT S_name FROM Salesperson;

  

SELECT*FROM Salesperson;

  

SELECT S_no, S_name FROM Salesperson;

  

ALTER TABLE Salesperson ADD Telephone NUMBER(10);

  

UPDATE Salesperson SET S_city = 'Chennai' WHERE S_no = '005';

  

DELETE FROM Salesperson WHERE S_city = 'Pune';

  

ALTER TABLE Salesperson MODIFY S_city VARCHAR2(20);

  

SELECT*FROM Salesperson WHERE S_name LIKE '%R';

  

SELECT*FROM Salesperson WHERE S_city IN ('Mumbai', 'Delhi');

  

SELECT*FROM Salesperson WHERE Commission > 100;

  

DESC Salesperson;

  
  

SELECT MIN(Commission) AS Min_Commission,

  

MAX(Commission) AS Max_Commission,

AVG(Commission) AS Avg_Commission

FROM Salesperson;
```