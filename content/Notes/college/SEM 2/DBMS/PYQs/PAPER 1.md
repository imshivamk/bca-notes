---
dg-publish: true
---
**INDEX**

- [[#QUE 1) explain three tier architecture of database management systems?|QUE 1) explain three tier architecture of database management systems?]]
- [[#Que 2) explain entity and its type ,attribute and its type ,relationships in er diagram|Que 2) explain entity and its type ,attribute and its type ,relationships in er diagram]]
- [[#QUE 3)define primary key , foreign key .list properties of primary key and foreign key?|QUE 3)define primary key , foreign key .list properties of primary key and foreign key?]]
- [[#QUE 4)explain lock and lock based protocols for concurrencey control?==|QUE 4)explain lock and lock based protocols for concurrencey control?==]]
- [[#QUE 5)explain basic data security principles?==|QUE 5)explain basic data security principles?==]]
- [[#QUE 6what is sql ? explain various DDL commands of sql with examples?|QUE 6what is sql ? explain various DDL commands of sql with examples?]]
- [[#QUE 7)write short note about|QUE 7)write short note about]]
- [[#QUE 8)Write SQL Queries i) Create following tables with appropriate constraint Product (pid, prodnm, category, price, qty) (20) Customer (cid, pid, custname, city) ) Add two records in both tables. ii Display product names in ascending order. v) iv) Add mobileno column in customer table. Display product whose names starting from letter 'C'.|QUE 8)Write SQL Queries i) Create following tables with appropriate constraint Product (pid, prodnm, category, price, qty) (20) Customer (cid, pid, custname, city) ) Add two records in both tables. ii Display product names in ascending order. v) iv) Add mobileno column in customer table. Display product whose names starting from letter 'C'.]]
- [[#QUE 9)Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the noemalization rules|QUE 9)Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the noemalization rules]]
	- [[#QUE 9)Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the noemalization rules#Entities and Relationships:|Entities and Relationships:]]
	- [[#QUE 9)Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the noemalization rules#Normalization Steps:|Normalization Steps:]]
- [[#QUE 10)Draw E-R diagram for following- Employee working in an organization. Organization has various departments located at various places. Organization is working with various projects. Various projects are assigned to employees.|QUE 10)Draw E-R diagram for following- Employee working in an organization. Organization has various departments located at various places. Organization is working with various projects. Various projects are assigned to employees.]]

## QUE 1) explain three tier architecture of database management systems?

---

ANS:

1. **What is Three-Tier Architecture?**
    
    - The **three-tier architecture** is a widely used client-server architectural approach for designing and developing applications that work with databases.
    - It divides an application’s components into three distinct tiers or layers, each with its own set of responsibilities.
2. **Three Tiers in Three-Tier Architecture**:
    
    - **Presentation Layer (Tier 1)**:
        - Also known as the **client layer**.
        - Responsible for handling user interactions and displaying information.
        - Includes user interfaces, web browsers, mobile apps, and other front-end components.
    - **Application Layer (Tier 2)**:
        - Also called the **business logic layer**.
        - Manages application logic, processing, and communication between the presentation layer and the data layer.
        - Contains application servers, APIs, and services.
    - **Data Layer (Tier 3)**:
        - Also known as the **database layer**.
        - Handles data storage, retrieval, and management.
        - Includes database servers, file systems, and data storage mechanisms.
3. **Advantages of Three-Tier Architecture**:
    
    - **Scalability**: Each tier can be scaled independently.
    - **Flexibility**: Changes in one tier do not affect the others.
    - **Security**: Isolates sensitive data in the data layer.
    - **Maintenance**: Easier to maintain and update.
4. **Example**:
    
    - Consider an online shopping application:
        - **Presentation Layer**: Web browser or mobile app where users browse products and place orders.
        - **Application Layer**: Handles order processing, inventory management, and payment processing.
        - **Data Layer**: Stores product details, customer information, and order history in databases.

## Que 2) explain entity and its type ,attribute and its type ,relationships in er diagram


ANS: Certainly! Let’s dive into the fundamental concepts of **Entity-Relationship (ER) diagrams**:

1. **Entity**:
    
    - An **entity** represents a real-world object, concept, or thing that we want to model in a database.
    - Entities can be people, places, events, or any other tangible or intangible item.
    - In an ER diagram, entities are represented as **rectangles**.
    - There are two main types of entities:
    
    a. **Strong Entity**: - A **strong entity** is an independent entity that has its own existence. - It has a **primary key** that uniquely identifies it. - Strong entities do not depend on other entities for their existence. - Example: A “Student” entity with a unique student ID.
    
    b. **Weak Entity**: - A **weak entity** depends on another entity (called the **parent entity**) for its existence. - It does not have a unique identifier on its own. - Weak entities have a **partial key** that includes the primary key of the parent entity. - Example: An “Enrollment” entity that cannot exist without a corresponding student.
    
2. **Attribute**:
    
    - An **attribute** represents a property or characteristic of an entity.
    - Attributes describe the data associated with an entity.
    - In an ER diagram, attributes are represented as **ovals**.
    - There are several types of attributes:
    
    a. **Simple Attribute**: - Cannot be further subdivided. - Example: The “Roll Number” attribute of a student.
    
    b. **Composite Attribute**: - Can be split into smaller components. - Example: The “Address” attribute (composed of street, city, state, etc.).
    
    c. **Single-Valued Attribute**: - Takes only one value for each entity instance. - Example: The “Age” attribute of a person.
    
    d. **Multi-Valued Attribute**: - Takes multiple values for each entity instance. - Example: The “Phone Number” attribute (landline and mobile).
    
    e. **Derived Attribute**: - Calculated from other attributes. - Example: The “Total Marks” attribute derived from individual subject marks.
    
3. **Relationship**:
    
    - A **relationship** defines how two or more entities are related to each other.
    - Relationships represent associations between entities.
    - In an ER diagram, relationships are represented as **diamond shapes**.
    - There are different types of relationships:
    
    a. **One-to-One (1:1)**: - One record of an entity is directly related to another record of another entity. - Example: A “Person” has one “Passport.”
    
    b. **One-to-Many (1:N)**: - One record of an entity is related to one or more records of another entity. - Example: A “Department” has many “Employees.”
    
    c. **Many-to-Many (N:M)**: - Many records of one entity can be related to many records of another entity. - Requires an intermediate entity (often called an “associative entity”). - Example: “Students” enroll in “Courses.”
    

In summary, ER diagrams visually represent entities, attributes, and relationships in a database system, helping us understand the data structure and interactions

## QUE 3)define primary key , foreign key .list properties of primary key and foreign key? 

ANS:  
Certainly! Let’s dive into the definitions and properties of **primary keys** and **foreign keys** in the context of **database management systems (DBMS)**:

1. **Primary Key**:
    
    - A **primary key** is a unique identifier assigned to each record within a database table.
    - It ensures that each row in the table can be uniquely identified.
    - Properties of a primary key:
        - **Uniqueness**: Each value in the primary key column must be unique across all rows.
        - **Non-null**: No value in the primary key column can be null (empty).
        - **Stability**: The primary key value should not change over time.
        - **Minimal**: The primary key should consist of the minimum number of attributes needed to uniquely identify a row.
2. **Foreign Key**:
    
    - A **foreign key** establishes a link between two tables by enforcing referential integrity.
    - It refers to the **primary key** of another table.
    - Properties of a foreign key:
        - **Referential Integrity**: Ensures that values in the foreign key column exist in the referenced primary key column.
        - **Relationship**: Represents associations between tables.
        - **Child Table**: The table with the foreign key is called the child table.
        - **Parent Table**: The table with the primary key being referenced is called the parent table.

In summary, primary keys uniquely identify records, while foreign keys establish relationships between tables in a database

## QUE 4)explain lock and lock based protocols for concurrencey control?==  
ANS:  
Certainly! Let’s delve into the concepts of **locks** and **lock-based protocols** for **concurrency control** in database management systems (DBMS):

1. **Locks**:
    
    - A **lock** is a mechanism used to control concurrent access to data items (such as records, tables, or other resources) by multiple transactions.
    - Locks prevent conflicts and ensure data consistency during concurrent execution.
    - Types of locks:
        - **Shared Lock (S)**: Allows multiple transactions to read the same data item simultaneously.
        - **Exclusive Lock (X)**: Grants exclusive access for writing or modifying data.
2. **Lock-Based Protocols**:
    
    - Lock-based protocols manage the order of conflicting pairs among transactions during execution.
    - These protocols use locks to control access to data items.
    - Common lock-based protocols:
    
    a. **Basic Two-Phase Locking (2PL)**: - Transactions acquire locks before accessing data and release them after completing their work. - Two phases: - **Growing Phase**: Acquire locks. - **Shrinking Phase**: Release locks. - Ensures serializability but may lead to deadlocks.
    
    b. **Conservative Two-Phase Locking (Conservative 2PL)**: - Similar to basic 2PL but with stricter rules. - Transactions must declare all locks they need at the beginning. - Prevents deadlocks but may reduce concurrency.
    
    c. **Strict Two-Phase Locking (Strict 2PL)**: - Transactions must release all locks only after committing. - Ensures serializability and prevents cascading rollbacks.
    
3. **Advantages of Lock-Based Protocols**:
    
    - Simple to implement.
    - Provides fine-grained control over data access.
    - Ensures data consistency.
4. **Drawbacks**:
    
    - Deadlocks can occur.
    - Lock contention may reduce concurrency.
    - Requires careful design and management.

In summary, lock-based protocols use locks to manage concurrent access to data, ensuring consistency and preventing conflicts among transactions[1](https://www.geeksforgeeks.org/lock-based-concurrency-control-protocol-in-dbms/)[2](https://www.tutorialspoint.com/dbms/dbms_concurrency_control.htm)[3](https://www.guru99.com/dbms-concurrency-control.html). 🌐🔒

## QUE 5)explain basic data security principles?==  
ANS:  
Certainly! Let’s explore some **basic data security principles** that organizations should follow to protect sensitive information:

1. **Inventory Data Regularly**:
    
    - Understand what data your system contains and who has access to it.
    - Track information sources and implement access control policies.
    - Compliance with legal obligations is easier when you can identify your sensitive data.
2. **Only Keep Business-Critical Data**:
    
    - Scale down data collection and retain only necessary information.
    - Store data only if it serves a legitimate business need.
    - Limit the risk of exposure by minimizing unnecessary data storage.
3. **Safeguard Stored Information**:
    
    - Encrypt sensitive data at rest and in transit.
    - Implement access controls, authentication, and authorization mechanisms.
    - Regularly audit and monitor access to prevent unauthorized use.
4. **Dispose and Destroy Obsolete Data Properly**:
    
    - Develop data retention policies.
    - Safely delete or archive data that is no longer needed.
    - Properly destroy physical media (e.g., hard drives, tapes) to prevent data leaks.
5. **Create a Security Breach Response Plan**:
    
    - Prepare for security incidents.
    - Define roles, responsibilities, and communication channels.
    - Respond promptly to breaches, minimize damage, and notify affected parties.

Remember, data security is crucial for protecting valuable assets and maintaining trust with customers and stakeholders[1](https://www.whymeridian.com/blog/5-Key-Principles-for-Data-Security)[2](https://www.imperva.com/learn/data-security/information-security-infosec/)[3](https://thedigitalworkplace.com/articles/a-ceos-guide-to-basic-data-security-principles/). 🌐🔒

## QUE 6what is sql ? explain various DDL commands of sql with examples?  

ANS:  
**SQL (Structured Query Language)** is a domain-specific language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, allowing users to perform tasks such as querying data, inserting records, updating information, and defining database structures.

In SQL, **Data Definition Language (DDL)** commands are used to create, modify, and manage the structure of database objects. Let’s explore various DDL commands along with examples:

1. **CREATE Command**:
    
    - The `CREATE` command is used to create databases, tables, indexes, views, and other database objects.
        
    - Examples:
        
        a. Creating a new database:
        
        ```sql
        CREATE DATABASE Books;
        ```
        
        b. Creating a new table (e.g., “Student”):
        
        ```sql
        CREATE TABLE Student (
            Roll_No INT,
            First_Name VARCHAR(20),
            Last_Name VARCHAR(20),
            Age INT,
            Marks INT
        );
        ```
        
        c. Creating an index on the combination of “City” and “State” fields:
        
        ```sql
        CREATE INDEX index_city_State ON Student (City, State);
        ```
        
2. **DROP Command**:
    
    - The `DROP` command removes database objects (tables, indexes, views, etc.) from the database.
        
    - Examples:
        
        a. Dropping a table (e.g., “Employee”):
        
        ```sql
        DROP TABLE Employee;
        ```
        
        b. Dropping an index:
        
        ```sql
        DROP INDEX index_city_State ON Student;
        ```
        
3. **ALTER Command**:
    
    - The `ALTER` command modifies existing database objects.
        
    - Examples:
        
        a. Adding a new column (“Email”) to the “Employee” table:
        
        ```sql
        ALTER TABLE Employee
        ADD Email VARCHAR(50);
        ```
        
        b. Modifying the data type of an existing column (“Age”) in the “Student” table:
        
        ```sql
        ALTER TABLE Student
        ALTER COLUMN Age FLOAT;
        ```
        
4. **TRUNCATE Command**:
    
    - The `TRUNCATE` command removes all records from a table but keeps the table structure intact.
        
    - Example:
        
        ```sql
        TRUNCATE TABLE Student;
        ```
        
5. **RENAME Command**:
    
    - The `RENAME` command changes the name of a database object.
        
    - Example:
        
        ```sql
        RENAME TABLE OldTable TO NewTable;
        ```
        

In summary, DDL commands allow you to create, modify, and manage the structure of your database objects. They play a crucial role in defining the schema and ensuring data consistency[1](https://www.javatpoint.com/ddl-commands-in-sql)[2](https://www.educba.com/sql-ddl-commands/)[3](https://www.sqlshack.com/sql-server-training/sql-server-basics/data-definition-language-ddl/). 🌐🔍📊

## QUE 7)write short note about  
a)data abstraction  
b) functional dependancey  
c) check points  
d) log based recovrey?**==  
ANS:  
Certainly! Let’s explore each of these concepts:

1. **Data Abstraction**:
    
    - **Data abstraction** is a fundamental concept in database management systems (DBMS).
    - It involves hiding unnecessary and irrelevant details from end users.
    - Key points:
        - **Purpose**: To store information in a way that allows users to access necessary data without revealing implementation details.
        - **Levels of Abstraction**:
            - **Physical or Internal Level**: Defines how data is stored in the database, including data structures and access methods. Hidden from users.
            - **Logical or Conceptual Level**: Describes what data is present in the database and their relationships. Used by programmers to design tables and relationships.
            - **View or External Level**: Provides multiple views of the same database for simplification. Easiest to understand for users.
    - Example: When you buy clothes, you focus on color, size, and material, not where they were made or the material source[1](https://www.geeksforgeeks.org/what-is-data-abstraction-in-dbms/)[2](https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Structure_and_Interpretation_of_Computer_Programs_%28Abelson_Sussman_and_Sussman%29/02%3A_Building_Abstractions_with_Data/2.01%3A_New_Page).
2. **Functional Dependency**:
    
    - A **functional dependency** specifies the relationship between two sets of attributes in a relation.
    - It is denoted as X → Y, where X (determinant) determines the value of Y (dependent).
    - Types of functional dependencies:
        - **Trivial Functional Dependency**: When Y is a subset of X.
        - **Non-Trivial Functional Dependency**: When Y is not a subset of X.
        - **Multivalued Functional Dependency**: When X determines a set of attributes, not just Y.
        - **Transitive Functional Dependency**: When X → Y and Y → Z imply X → Z.
    - Example: In a student table, roll_no → {name, dept_name, dept_building} is a valid functional dependency[3](https://www.geeksforgeeks.org/types-of-functional-dependencies-in-dbms/).
3. **Checkpoints**:
    
    - **Checkpoints** are used to declare points before which the DBMS was in a consistent state and all transactions were committed.
    - Purpose:
        - To reduce storage space used by transaction logs.
        - To maintain data consistency.
    - Types:
        - **Automatic Checkpoint**: Occurs at regular intervals (e.g., hourly or daily).
        - **Manual Checkpoint**: Set manually by the database administrator.
    - Example: After a checkpoint, the log file is destroyed by saving its updates to the database[4](https://www.geeksforgeeks.org/checkpoints-in-dbms/).
4. **Log-Based Recovery**:
    
    - **Log-based recovery** ensures database consistency after system failures.
    - Key components:
        - **Transaction Logs**: Records all updated activities in the database.
        - **Undo Operation**: Sets data items to old values using log records.
        - **Redo Operation**: Sets data items to new values using log records.
    - Example: After a crash, the system consults the log to redo or undo transactions[5](https://www.geeksforgeeks.org/log-based-recovery-in-dbms/).

In summary, these concepts play crucial roles in database management, ensuring data security, consistency, and recoverability[1](https://www.geeksforgeeks.org/what-is-data-abstraction-in-dbms/)[3](https://www.geeksforgeeks.org/types-of-functional-dependencies-in-dbms/)[4](https://www.geeksforgeeks.org/checkpoints-in-dbms/)[5](https://www.geeksforgeeks.org/log-based-recovery-in-dbms/). 🌐🔍📊

## QUE 8)Write SQL Queries i) Create following tables with appropriate constraint Product (pid, prodnm, category, price, qty) (20) Customer (cid, pid, custname, city) ) Add two records in both tables. ii Display product names in ascending order. v) iv) Add mobileno column in customer table. Display product whose names starting from letter 'C'.

ANS:  
Certainly! Let’s break down the tasks step by step:

1. **Create Tables**:
    
    ```sql
    CREATE TABLE Product (
        pid INT PRIMARY KEY,
        prodnm VARCHAR(50),
        category VARCHAR(20),
        price DECIMAL(10, 2),
        qty INT
    );
    
    CREATE TABLE Customer (
        cid INT PRIMARY KEY,
        pid INT,
        custname VARCHAR(50),
        city VARCHAR(30),
        FOREIGN KEY (pid) REFERENCES Product(pid)
    );
    ```
    
2. **Insert Records**:
    
    ```sql
    INSERT INTO Product (pid, prodnm, category, price, qty)
    VALUES (1, 'Laptop', 'Electronics', 800.00, 10),
           (2, 'Mobile Phone', 'Electronics', 500.00, 20);
    
    INSERT INTO Customer (cid, pid, custname, city)
    VALUES (101, 1, 'John Doe', 'New York'),
           (102, 2, 'Alice Smith', 'Los Angeles');
    ```
    
3. **Display Product Names in Ascending Order**:
    
    ```sql
    SELECT prodnm
    FROM Product
    ORDER BY prodnm;
    ```
    
4. **Add Mobile Number Column to Customer Table**:
    
    ```sql
    ALTER TABLE Customer
    ADD mobileno VARCHAR(15);
    ```
    
5. **Display Products Starting with Letter ‘C’**:
    
    ```sql
    SELECT prodnm
    FROM Product
    WHERE prodnm LIKE 'C%';
    ```
    

## QUE 9)Students are taken admission in college, office procedure is completed by office employee, students attending class, they have library card with them. Students are making a project practice in laboratory with the help of above information. Design a database schema for Student Admission System by following the noemalization rules

ANS:  
Certainly! Let’s design a database schema for the Student Admission System by following normalization rules. We’ll start by identifying the entities and their relationships. Then we’ll proceed with normalization steps.

### Entities and Relationships:

1. **Student**:
    
    - Attributes: `StudentID`, `Name`, `DateOfBirth`, `Phone`, `Email`, `LibraryCardNumber`
    - Relationships: Enrolls in Courses, Attends Classes
2. **Course**:
    
    - Attributes: `CourseID`, `CourseName`, `Department`, `Credits`
    - Relationships: Offered by College, Enrolled by Students
3. **Class**:
    
    - Attributes: `ClassID`, `Date`, `Time`, `Location`
    - Relationships: Belongs to Course, Attended by Students
4. **College**:
    
    - Attributes: `CollegeID`, `CollegeName`, `Address`, `Phone`

### Normalization Steps:

1. **First Normal Form (1NF)**:
    
    - Ensure atomicity of attributes (no multivalued attributes).
    - Example: Split `Name` into `FirstName` and `LastName`.
2. **Second Normal Form (2NF)**:
    
    - Remove partial dependencies (attributes dependent on part of the primary key).
    - Example: Move `Department` from `Course` to a separate table.
3. **Third Normal Form (3NF)**:
    
    - Remove transitive dependencies (attributes dependent on non-key attributes).
    - Example: Move `Phone` from `Student` to a separate table.
4. **Additional Normalization (if needed)**:
    
    - Apply higher normal forms (BCNF, 4NF, etc.) as necessary.

Remember that normalization ensures data integrity, reduces redundancy, and prevents anomalies in the database[1](https://www.databasestar.com/database-normalization/). 🌐🔍📊

## QUE 10)Draw E-R diagram for following- Employee working in an organization. Organization has various departments located at various places. Organization is working with various projects. Various projects are assigned to employees.

ANS:  
Certainly! Let’s create an **Entity-Relationship (E-R) diagram** for the given scenario. We’ll identify the entities, their attributes, and their relationships:

1. **Entities**:
    
    - **Employee**: Attributes: `EmployeeID`, `Name`, `Address`, `Phone`, `Email`
    - **Department**: Attributes: `DepartmentID`, `DepartmentName`, `Location`
    - **Project**: Attributes: `ProjectID`, `ProjectName`, `StartDate`, `EndDate`
2. **Relationships**:
    
    - **WorksIn**: Many employees work in one department, but each employee works in only one department.
    - **Manages**: Each department has one manager.
    - **AssignedTo**: Many employees are assigned to multiple projects, and each project is assigned to multiple employees.
3. **E-R Diagram**: !E-R Diagram
    

In this E-R diagram:

- The diamond shape represents relationships.
- The rectangles represent entities.
- The ovals represent attributes.

Remember that E-R diagrams help visualize the structure of a database and its relationships, making it easier to design and understand the system[1](https://www.geeksforgeeks.org/er-diagram-of-a-company/). 🌐📊