---
dg-publish: true
---
- [[#Types of databases|Types of databases]]
	- [[#Types of databases#Centralized Database|Centralized Database]]
	- [[#Types of databases#Distributed|Distributed]]
	- [[#Types of databases#Relational database|Relational database]]
	- [[#Types of databases#NOSQL database|NOSQL database]]
	- [[#Types of databases#Cloud database|Cloud database]]
	- [[#Types of databases#Object oriented databases|Object oriented databases]]
	- [[#Types of databases#Hierarchical database|Hierarchical database]]


## Types of databases

![](https://i.imgur.com/gZP0Pxf.png)
There are various types of databases used for storing different varieties of data

### Centralized Database

1. It is the type of database that stores data at a centralized database system.
2. It comforts the users to access the stored data from different locations through several applications.
3. These applications contain the authentication process to let users access data securely.
4. An example of a Centralized database can be Central Library that carries a central database of each library in a college/university.

**PROS**
1. It has decreased the risk of data management, i.e., manipulation of data will not affect the core data.
2. Data consistency is maintained as it manages data in a central repository.
3. It provides better data quality, which enables organizations to establish data standards.
4. It is less costly because fewer vendors are required to handle the data sets.

**CONS**

1. The size of the centralized database is large, which increases the response time for fetching the data
2. It is not easy to update such a wide database system.
3. If any server failure occurs, entire data will be lost, which could be a huge loss.

### Distributed

1. Unlike a centralized database system, in distributed systems, data is distributed among different database systems of an organization.
2. These database systems are connected via communication links.
3. Such links help the end-users to access the data easily.
4. There are two kinds of distributed database, viz. homogenous and heterogeneous.

![](https://i.imgur.com/WqBIpVf.png)
- Homogeneous DDB: Those database systems which execute on the same operating system and use the same application process and carry the same hardware devices.
- Heterogeneous DDB: Those database systems which execute on different operating systems under different application procedures, and carries different hardware devices.

**PROS**
1. Modular development is possible in a distributed database, i.e., the system can be expanded by including new computers and connecting them to the distributed system. 
2. One server failure will not affect the entire data set

### Relational database

1. Considered the most mature of all databases
2. these databases lead in the production line along with their management systems.
3. In this database, every piece of information has a relationship with every other piece of information.
4. This is on account of every data value in the database having a unique identity in the form of a record. -Note that all data is tabulated in this model.
5. Therefore, every row of data in the database is linked with another row using a primary key.
6. Similarly, every table is linked with another table using a foreign key.
7. This database is based on the relational data model, which stores data in the form of rows(tuple) and columns(attributes), and together forms a table(relation).
8. Examples of Relational databases are MySQL, Microsoft SQL Server, Oracle, etc.

![](https://i.imgur.com/qtJyDQd.png)
### NOSQL database

1. A NoSQL originally referring to non SQL or non-relational is a database that provides a mechanism for storage and retrieval of data.
2. Non-SQL/Not Only SQL is a type of database that is used for storing a wide range of data sets.
3. It came into existence when the demand for building modern applications increased.
4. Thus, NoSQL presented a wide variety of database technologies in response to the demands.

- Key-value storage: It is the simplest type of database storage where it stores every single item as a key (or attribute name) holding its value, together. 
- Document-oriented Database: A type of database used to store data as JSON-like document. It helps developers in storing data by using the same document-model format as used in the application code.
- Graph Databases: It is used for storing vast amounts of data in a graph-like structure. Most commonly, social networking websites use the graph database.
- Wide-column stores: It is similar to the data represented in relational databases. Here, data is stored in large columns together, instead of storing in rows

![](https://i.imgur.com/eaDg33n.png)
- Advantages of NoSQL Database 
1. It enables good productivity in the application development as it is not required to store data in a structured format
2. It is a better option for managing and handling large data sets.
3. It provides high scalability.
4. Users can quickly access data from the database through key-value.

### Cloud database

1. A type of database where data is stored in a virtual environment and executes over the cloud computing platform.
2. It provides users with various cloud computing services for accessing the database.
3. There are numerous cloud platforms, but the best options are: - - 
	1. Amazon Web Services (AWS)
	2. Microsoft Azure 
	3. Google Cloud SQL

### Object oriented databases

1. The type of database that uses the object-based data model approach for storing data in the database system.
2. The data is represented and stored as objects which are similar to the objects used in the object-oriented programming language.

### Hierarchical database

1. stores data in the form of parent-children relationship nodes.
2. it organizes data in a tree-like structure
3. Data get stored in the form of records that are connected via links.
4. Each child record in the tree will contain only one parent. 
5. each parent record can have multiple child records.

![](https://i.imgur.com/ixvcRSb.png)
