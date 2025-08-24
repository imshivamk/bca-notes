---
dg-publish: true
---

# 1. DBMS
A database management system (DBMS)
	1. It's <mark style="background: #FFB8EBA6;">software</mark> that provides methods to
		1. <mark style="background: #FFB86CA6;">create</mark>, 2. <mark style="background: #BBFABBA6;">manage</mark>, 3. <mark style="background: #FFF3A3A6;">access</mark> 
		  a large volume of data
	2. <mark style="background: #FFB8EBA6;">Automate processes</mark> such as
		1. <mark style="background: #FFB86CA6;">adding</mark> new entries, 2. <mark style="background: #BBFABBA6;">modifying</mark> existing entries, 3. <mark style="background: #FF5582A6;">deleting</mark> <mark style="background: #FFF3A3A6;">entries</mark> when necessary
	3. help users <mark style="background: #FFB8EBA6;">find information quickly and efficiently.</mark>
	4. A <mark style="background: #FFB86CA6;">database is an organized collection of data, so that it can be easily accessed and managed</mark>
			1. You can organize data into: <mark style="background: #FFF3A3A6;">tables, rows, columns, index </mark>
			2. it to make it easier to find relevant information
	5. The main purpose of the database is to <mark style="background: #FFB8EBA6;">operate a large amount of information by</mark>
		1. <mark style="background: #BBFABBA6;">storing</mark>
		2. <mark style="background: #FFF3A3A6;">retrieving</mark>
		3. <mark style="background: #ABF7F7A6;">managing </mark>data.
	6. There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server
	7. Modern databases are managed by (DBMS).

# 2. Characteristics of DBMS

[![](https://i.imgur.com/L6i2e5km.png)](https://i.imgur.com/L6i2e5k.png)



1. Real-world entity
	1. DBMS have been designed keeping in mind the needs of business organizations.
	2. They help businesses manage large amounts of data efficiently.
	3. store huge volumes of data
	4. provide easy ways to search through them.
	5. Microsoft Access, Oracle, MySQL, etc. 
2. Relational databases
	1. 1970s.
	2. each record contains <mark style="background: #FFB8EBA6;">fields called attributes</mark>.
	3. <mark style="background: #FFB86CA6;">Each attribute represents one piece of information about a particular object</mark>
	4. For example: To track personal details : attributes <mark style="background: #CACFD9A6;">namely name, address, and phone number</mark>.
	5. All of these attributes together form a <mark style="background: #BBFABBA6;">single row</mark> in a table. 
3. Structured query language(SQL)
	1. 1980s.
	2. write queries against a database
	3. Queries written in SQL are known as structured <mark style="background: #FFF3A3A6;">queries as they use predefined structures to define relationships among entities. </mark>
4. ACID properties
	DBMS follows to the concepts of 
	1. <mark style="background: #BBFABBA6;">Atomicity</mark>
	2. <mark style="background: #BBFABBA6;">Consistency</mark>
	3. <mark style="background: #BBFABBA6;">Isolation</mark>
	4. <mark style="background: #BBFABBA6;">Durability</mark>
	5. These concepts are <mark style="background: #ABF7F7A6;">applied to transactions</mark>
	6. In <mark style="background: #FFF3A3A6;">multi-transactional environments</mark>, ACID properties <mark style="background: #FFB86CA6;">help the database stay healthy in case of failure </mark>

5. Multiuser and concurrent access
	1. Data can be <mark style="background: #BBFABBA6;">accessed and manipulated in parallel</mark> with the help of the DBMS
	2. <mark style="background: #ADCCFFA6;">Users are unaware of the restrictions on transactions when handling the same data item.</mark>
	3. DBMS offers <mark style="background: #FFF3A3A6;">multiple views for various clients</mark>. 
6. Transactional processing
	1. Transactions are an essential part of any application.
	2. Transactions ensure consistency across multiple users accessing the system at the same time
	3. When <mark style="background: #FF5582A6;">transactions fail due to errors</mark>, the <mark style="background: #FFB86CA6;">entire transaction should roll back</mark> so <mark style="background: #ABF7F7A6;">that no changes made during the failed operation remain permanent.</mark>
	4. Ensures that everything remains consistent when there is a problem. 
7. Less redundancy and consistency
	1. The DBMS <mark style="background: #FFF3A3A6;">follows the rules of normalization</mark>, which <mark style="background: #ABF7F7A6;">splits a relation when there is more than one attribute with the same value.</mark>
	2. <mark style="background: #FFF3A3A6;">Normalization is a method of reducing data redundancy.</mark>
	3. <mark style="background: #BBFABBA6;">Every relation in a database is consistent</mark>, that's the state of consistency.
	4. DBMS gives greater consistency than earlier forms of data storage. 
8. Stores Any Kind of Data
	1. DBMS should be able to store any kind of data that exists in the real world 
	2. Because we need to work with all kinds of data that is present around us. 
9. <mark style="background: #FFB86CA6;">Security</mark>
	1. DBMS provides security to the data stored in it because <mark style="background: #ABF7F7A6;">all users have different rights to access database</mark>
	2. Some of the user can access the whole database while other can access a small part of database.
	3. example, computer teacher can access only subject files, HOD can access all files