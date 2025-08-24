---
dg-publish: true
---
- important role in RDBMS
- It is used to <mark style="background: #FFB86CA6;">uniquely identify any record data from the table. </mark>
- establish and identify relationships between tables. 
- <mark style="background: #FFF3A3A6;">attribute or set of attributes</mark> which <mark style="background: #FFB8EBA6;">helps you to identify a row(tuple) in a relation(table).</mark>
- They allow you to <mark style="background: #FFF3A3A6;">find the relation between two tables</mark>
- e. g ID is used as a key in the Student table because it is unique for each student

1. **Primary Key (PK):**
   -  unique identifier for a record/instance in a table.
   - <mark style="background: #FFB86CA6;">first key</mark> used to identify one and only one instance of an entity uniquely
   - It must contain unique values, and it cannot have NULL values.
   - Each table can have multiple keys but only one most suitable from those becomes primary key. 
   - selection is based upon the developers requirement
   - E. g Employee ID for employee, Roll NO. for student
![](https://i.imgur.com/uDq5IAd.png)


2. **Foreign Key (FK):**
   - A foreign key is a field in a table that refers to the <mark style="background: #FFB86CA6;">primary key in another table.</mark>
   - It <mark style="background: #FFF3A3A6;">establishes a link between the two tables</mark>, enforcing referential integrity.
   - The foreign key ensures that the <mark style="background: #FFF3A3A6;">values in the referencing column correspond to the values in the referenced primary key column.</mark>
   - prevent actions that would destroy links between tables
![](https://i.imgur.com/lCCE2T1.png)


3.  **Candidate Key:**
   - A candidate key is a column or a set of columns that can qualify as a primary key.
   - The Primary key should be selected from the candidate keys.
   - Except for the primary key, the remaining attributes are considered a candidate key. 
   - Like a primary key, it must be unique and not contain NULL values.
   - In a table, there can be multiple candidate keys, and the database designer chooses one of them to be the primary key.
   - ![](https://i.imgur.com/bfZ41Fx.png)


4. **Super Key:**
   - A super key is a <mark style="background: #FFB86CA6;">set of one or more columns</mark> that uniquely identifies each row in a table.
   - It can contain <mark style="background: #FFF3A3A6;">more columns than necessary to uniquely identify a row.</mark>
   - A super key may include candidate keys or other extra columns.
   - ![](https://i.imgur.com/CvlQ8GV.png)


4. **Alternate Key:**
   - <mark style="background: #FFF3A3A6;">one or more attributes or a combination of attributes that uniquely identify each tuple in a relation.</mark>
   - These attributes or combinations of the attributes are called the <mark style="background: #FFB86CA6;">candidate keys.</mark>
   - <mark style="background: #ABF7F7A6;">One key is chosen as the primary key from these candidate keys</mark>, and the <mark style="background: #FFB86CA6;">remaining candidate key, if it exists, is termed the alternate key.</mark>
   ![](https://i.imgur.com/u31VsMk.png)


5. **Artificial Key:**
   - A simple key is a single column that acts as a key by itself, such as a basic attribute.
   - The<mark style="background: #FFB86CA6;"> key created using randomly assigned data are known as artificial keys. </mark>
   - These keys are created <mark style="background: #BBFABBA6;">when a primary key is large and complex </mark>and has <mark style="background: #FF5582A6;">no relationship with many other relations.</mark>
   - The data usually numbered in a serial order.
   - For example, the <mark style="background: #FFF3A3A6;">primary key, which is composed of Emp_ID, Emp_role, and Proj_ID, is large in employee relations.</mark>
   - So it would be better to add a <mark style="background: #FFB86CA6;">new virtual attribute to identify each tuple</mark> in the relation uniquely
	![](https://i.imgur.com/AX01zeL.png)

6. **Composite Key:**
   - A composite key is a <mark style="background: #FFB86CA6;">key that consists of two or more columns to uniquely identify a record.</mark>
   - The <mark style="background: #BBFABBA6;">combination of Attributes creates a unique identifier.</mark>
   - For example, in employee relations, we assume that an <mark style="background: #BBFABBA6;">employee may be assigned multiple roles, and an employee may work on multiple projects </mark>simultaneously.
   - So the primary key will be composed of all three attributes, namely<mark style="background: #ADCCFFA6;"> Emp_ID, Emp_role, and Proj_ID in combination</mark>.

![](https://i.imgur.com/xmHOtoP.png)

7. **Super key**

1. A super key is a<mark style="background: #FFB86CA6;"> group of single or multiple keys which identifies rows in a table.</mark>
2. Super key is an <mark style="background: #BBFABBA6;">attribute set that can uniquely identify a tuple</mark>.
3. A super key is a superset of a candidate key.
![](https://i.imgur.com/vBTQk8u.png)
