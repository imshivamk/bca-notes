---
dg-publish: true
---
A database schema and a database instance are fundamental concepts in database management systems (DBMS). Let's define each term:

### 1. **Database Schema:**
1. The <mark style="background: #FFB8EBA6;">overall design</mark> of a database is called schema. 
2. It represents the l<mark style="background: #FFF3A3A6;">ogical view of the entire database.</mark>
3. A schema contains schema <mark style="background: #ADCCFFA6;">objects like table, foreign key, primary key, views, columns, data types, stored procedure, </mark>etc. 
4. The<mark style="background: #BBFABBA6;"> basic structure of how the data will be stored in the database </mark>is called schema.
**Types of Schema**
1. Physical schema 
	1. It is a <mark style="background: #FFF3A3A6;">database design at the physical level.</mark>
	2. It is hidden <mark style="background: #FFF3A3A6;">below the logical schema</mark> and<mark style="background: #BBFABBA6;"> can be changed easily without affecting </mark>the application programs. 
	
2. Logical schema − It is a <mark style="background: #FFB8EBA6;">database design at the logical level.</mark> Programmers construct applications using logical schema.
3. External − It is schema at <mark style="background: #D2B3FFA6;">view level</mark>. It is the highest level of a schema which defines the views for end users.

![](https://i.imgur.com/2XuwWO4.png)





### 2. Database Instance

- <mark style="background: #FFB86CA6;">At a particular moment the data stored in database is called the instance, </mark>
- this <mark style="background: #ABF7F7A6;">changes over time as and when we add, delete or update data </mark>in the database.
   1. The data which is stored in the database at a particular moment of time is called an instance of the database.
   2. The <mark style="background: #BBFABBA6;">instances can be changed by certain operations as like addition, deletion of data.</mark> 
   3. Database <mark style="background: #FFF3A3A6;">schema defines the attributes in tables</mark> that belong to a particular database. 
   4. The <mark style="background: #FFB86CA6;">value of these attributes at a moment of time is called the instance</mark> of that database.
   5. Example:
	   1. We have a single table student in the database, <mark style="background: #FFF3A3A6;">today the table has 100 records, and so today the instance of the database has 100 records.</mark>
	   2. We are going to <mark style="background: #BBFABBA6;">add another 100 records in this table by tomorrow so the instance of database tomorrow will have 200 records in table.</mark>
	 

