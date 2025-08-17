---
dg-publish: true
---
### Q. Why do we need Normalization in DBMS?

Database Normalization helps you design and structure your table properly so that you have proper relationships between tables. It helps you with the following:

1. Data Integrity
2. Data consistency
3. Better relationship between tables
4. More scalable design for tables.
5. No large tables, small tables with a proper relationship.
6. Removing dependencies, like Partial Dependency, Transitive Dependency, Join Dependency, etc.
    

### Q. What are the different Normal Forms in DBMS?

Following are the different Database Normal Forms:

1. First Normal Form also known as 1NF
2. Second Normal Form or 2NF
3. Third Normal Form or 3NF
4. Boyce-Codd Normal Form or BCNF
5. Fourth Normal Form or 4NF
6. Fifth Normal Form or 5NF or PJNF (Project-Join Normal Form)
    

### Q. What is a Primary Key in DBMS?

A **Primary key** is a column that can be used to uniquely identify each row in a table. It can be a single column, or it can be multiple columns together. Yes, a primary key can have two columns or even more than two columns in it.

### Q. What are non-key attribute in a Table?

All the columns that are not a primary key or not a part of the primary key are called as non-Key columns in a Table.

For example, if we have a table **Students** with columns _student_id_, _student_name_, _student_address_, and _student_id_ is the **primary key** in this table, then _student_name_ and _student_address_ will be the **non-Key attributes**.

### Q. What is the fullform of BCNF?

BCNF stands for <mark style="background: #BBFABBA6;">Boyce-Codd Normal Form</mark>. BCNF is a higher version of the Third Normal Form.

### Q. Is BCNF and Third Normal Form the same?

No. BCNF is a higher version of the Third Normal Form. The purpose of the Third Normal Form or 3NF is to remove Transitive dependency whereas BCNF is more strict than 3NF, and it focuses on removing all non-trivial functional dependencies.

### Q. What is PJNF?

PJNF stands for Project-Join Normal Form. This is a name given to the Fifth Normal Form because the Fifth Normal Form or 5NF is used to fix Join dependency in tables.

### Q. Which Normal Form is called PJNF?

The Fifth Normal Form is also known as PJNF or Project-Join Normal Form. The fifth normal form fixes the Join dependency in tables hence it is called PJNF. This is an advanced Normal form that helps in reducing Data redundancy and Updation anomaly.
