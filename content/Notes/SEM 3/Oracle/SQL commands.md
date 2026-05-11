## BASIC SQL COMMANDS

- CREATE DB

```sql
CREATE DATABASE myDB;
```

- CREATE A TABLE

```sql
USE myDB;

CREATE TABLE emp(
	empID INT PRIMARY KEY,
	firstName VARCHAR(25) NOT NULL,
	lastName VARCHAR(25),
	age INT
)
```

- INSERT INTO TABLE

```sql
INSERT INTO emp
VALUES (1, 'Raj', 'Kapoor', 95),
	   (2, 'Ram', 'Khanna', 75),
	   (3, 'Aman', 'Khanna', 75),
	   (2, 'Salman', 'Khan', 65);
```

```sql
INSERT INTO emp(firstName, lastName)
VALUES ('ajay', 'sharma');
```

```sql
SELECT*FROM emp
WHERE empID != 1;
```

```sql
SELECT*
FROM emp
WHERE age IS NOT NULL;
```

```SQL
UPDATE emp
SET age = 20
WHERE empID = 1;
```

```sql
DELETE FROM emp
WHERE salary < 10000;
```

```sql
SET AUTOCOMMIT = OFF;
```

```sql
ALTER TABLE emp 
DROP COLUMN age;
```

```sql
ALTER TABLE emp
MODIFY email VARCHAR(100)
AFTER lastName;
```

## AUTOCOMMIT

- turn off auto commit so we manually manage save states like a game i. e save and rollback from a checkpoint;

```sql
SET AUTOCOMMIT = OFF;
```

- manual commit command

```SQL
COMMIT;
```

- restore to previous safe-point

```sql
ROLLBACK;
```



## DATE AND TIME

- CURRENT_DATE() AND CURRENT_TIME are SQL functions which return the current date and time
- NOW( ) returns both

```sql
CREATE TABLE datetime(myDate DATE, )

INSERT INTO dateTime
VALUES(
	CURRENT_DATE(),
	CURRENT_TIME(),
	NOW()
);
```


## CONSTRAINT

### UNIQUE

```sql
CREATE TABLE products(
product_ID INT PRIMARY KEY,
productName VARCHAR(25) UNIQUE,
)
```

```SQL
ALTER TABLE products
ADD CONSTRAINT
UNIQUE(productName);
```

### NOT NULL

```sql
CREATE TABLE product(
productID INT PRIMARY KEY,
productName VARCHAR(25),
price DECIMAL(4,2) NOT NULL
);
```

```SQL
ALTER TBALE products
MODIFY price DECIMAL(4,2) NOT NULL;
```

### CHECK

add the check constraint while creating a table

```sql
CREATE TABLE emp(
	empid INT PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	hourlyPay DECIMAL(5,2),
	hireDate DATE,
	CONSTRAINT checkHourlyRate CHECK (hourlyPay >= 10.00)
);
```

or , to add the check constraint after creating the table

```sql
ALTER TBALE emp
ADD CONSTRAINT checkHourlyPay CHECK (hourlyPay >= 5.99);
```

- TO DELETE THE CHECK CONSTRAINT

```sql
ALTER TBALE emp
DROP CHECK checkHourlyPay;
``` 

### DEFAULT 

- to add default value to columns

```sql
CREATE TABLE products(
	productID INT,
	productName VARCHAR(25),
	price DECIMAL(5,2) DEFAULT 0
);
```

- TO ADD constraint to already existing table

```sql
ALTER TABLE products
ALTER price SET DEFAULT 10.00;
```

e. g
```sql
CREATE TABLE transactions(
	tn_ID INT,
	amount DECIMAL(5,2),
	tn_date DATETIME DEFAULT NOW;
)
CRETE TABLE emp (empid int, empname varchar);
CREATE TABLE emp

```