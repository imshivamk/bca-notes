---
dg-publish: true
---
- [[#1. What Do You Understand By Normalization? Explain the process of Normalization in detail:|1. What Do You Understand By Normalization? Explain the process of Normalization in detail:]]
- [[#2. What is Two Phase Locking in DBMS ? How Does it Work?|2. What is Two Phase Locking in DBMS ? How Does it Work?]]
- [[#3. Explain shadow paging technique with examples|3. Explain shadow paging technique with examples]]
- [[#4. What do you understand by lossy and lossless decomposition?|4. What do you understand by lossy and lossless decomposition?]]
- [[#5. What is concurrency control? Explain it's need in database management|5. What is concurrency control? Explain it's need in database management]]

### 1. What Do You Understand By Normalization? Explain the process of Normalization in detail:

#### What is Normalization?

1. Normalization is a process used in databases to organize data efficiently and reduce redundancy.
2. Structuring a relational database in such a way that minimizes redundancy and dependency by organizing fields and table of a database.
3. The main objective of normalization is to eliminate redundant data and ensure data dependencies make sense, leading to a more efficient and error-free database structure.
4. Normalization also helps in ensuring data integrity and consistency.
5. Redundancy in relation may cause insertion, deletion, and update anomalies. So, it helps to minimize the redundancy in relations by eliminating the characteristics like insertion or deletion anomalies.
6. . Normalization divides the larger table into smaller and links them using relationships.
7. The normal form is used to reduce redundancy from the database table.
8. Normalization is the process of minimizing redundancy from a relation or set of relations.

#### The Normalization Process:
  t777777777777777
The normalization process typically involves several normal forms, each addressing a specific kind of data redundancy or dependency. The most common normal forms are First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), Boyce-Codd Normal Form (BCNF), and Fourth Normal Form (4NF). Let's discuss these normal forms briefly:

1. **First Normal Form (1NF):**
    - In 1NF, each column in a table must contain atomic values, meaning each value in a column should be indivisible. It eliminates repeating groups within individual tables.
2. **Second Normal Form (2NF):**
    - 2NF builds on 1NF. It requires that each non-key attribute is fully functionally dependent on the primary key. This means that no partial dependencies should exist; every non-key attribute must depend on the whole primary key.
3. **Third Normal Form (3NF):**
    - 3NF builds on 2NF. It requires that no transitive dependencies exist. In other words, if A depends on B, and B depends on C, then A should not depend on C indirectly. This helps to remove any dependencies that are not directly related to the primary key.
4. **Boyce-Codd Normal Form (BCNF):**
    - BCNF is a stricter version of 3NF. It requires that every determinant (attribute that determines another attribute) is a candidate key. It eliminates all redundancy and ensures that the database is in the most efficient form.
5. **Fourth Normal Form (4NF):**
    - 4NF addresses multi-valued dependencies. It removes any multi-valued dependencies by creating separate tables for such dependencies.

The process of normalization involves several steps:

1. **Identifying the entities:** Identify the entities or objects that need to be stored in the database.
2. **Defining the attributes:** Define the attributes or properties of each entity.
3. **Identifying the primary key:** Choose a primary key for each entity. The primary key uniquely identifies each record in the table.
4. **Apply First Normal Form (1NF):** Ensure that each table meets the requirements of 1NF by eliminating repeating groups and ensuring atomic values.
5. **Apply Second Normal Form (2NF):** Ensure that each table meets the requirements of 2NF by eliminating partial dependencies.
6. **Apply Third Normal Form (3NF):** Ensure that each table meets the requirements of 3NF by eliminating transitive dependencies.
7. **Apply Boyce-Codd Normal Form (BCNF):** Ensure that each table meets the requirements of BCNF by ensuring that every determinant is a candidate key.
8. **Apply Fourth Normal Form (4NF):** Ensure that each table meets the requirements of 4NF by eliminating multi-valued dependencies.
    

By following these steps and normalizing the database, redundancy is reduced, data integrity is improved, and the database structure becomes more efficient and easier to maintain. However, it's essential to strike a balance between normalization and performance, as excessive normalization can lead to complex queries and decreased performance.
b
### 2. What is Two Phase Locking in DBMS ? How Does it Work?

Two-Phase Locking (2PL) is a concurrency control mechanism used in database management systems (DBMS) to ensure serializability of transactions. It is designed to prevent conflicts between transactions that might access the same data concurrently, thereby ensuring the consistency and correctness of the database.

Here's how Two-Phase Locking works:

1. **Growing Phase:**
   - During this phase, transactions acquire locks on the data items they need to access. These locks can be either shared (read) locks or exclusive (write) locks.
   - When a transaction wants to read a data item, it acquires a shared lock on that item. Shared locks allow multiple transactions to read the same data simultaneously without conflicting with each other.
   - When a transaction wants to modify (write) a data item, it acquires an exclusive lock on that item. Exclusive locks prevent other transactions from reading or writing to the same data item concurrently, ensuring that only one transaction can modify the data at a time.
   - As transactions progress, they continue to acquire locks on the data items they access until they reach a point where they no longer need to acquire any new locks (referred to as the "lock point").

2. **Shrinking Phase:**
   - During this phase, transactions release the locks they have acquired in reverse order of acquisition.
   - Once a transaction releases a lock on a data item, other transactions can acquire locks on that item and access it.
   - Transactions continue to release locks until they have released all the locks they acquired during the growing phase.

The two-phase nature of this locking protocol ensures that transactions follow a strict locking protocol: they acquire all the locks they need before starting any modifications (growing phase), and they release all the locks they acquired before committing or aborting (shrinking phase).

Two-Phase Locking ensures several properties in a multi-transaction environment:

1. **Conflict Serializability:** Two transactions that conflict in their access to data cannot execute concurrently, ensuring that the final state of the database is equivalent to some serial execution of the transactions.
  
2. **Deadlock Prevention:** By ensuring that transactions acquire all their locks before releasing any, Two-Phase Locking prevents deadlock situations where transactions are waiting indefinitely for locks held by other transactions.

Despite its effectiveness in ensuring serializability and preventing deadlocks, Two-Phase Locking can lead to lock contention and reduced concurrency in heavily concurrent systems. To address these issues, various optimization techniques like deadlock detection, deadlock avoidance, and lock escalation are often employed in conjunction with Two-Phase Locking. Additionally, more advanced concurrency control mechanisms such as Multi-Version Concurrency Control (MVCC) and optimistic concurrency control can be used in modern database systems to improve concurrency and performance.
### 3. Explain shadow paging technique with examples

Shadow paging is a crash recovery technique used in database management systems (DBMS) to ensure data consistency and recoverability in case of system failures. It works by maintaining a shadow (or duplicate) copy of the database, which is used exclusively for recovery purposes.

Here's how shadow paging works with an example:

Suppose we have a simple database with three data pages: Page 1, Page 2, and Page 3.

1. **Initial State:**
   - Initially, we have the following state:
     ```
     Page 1:
     | Record A1 | Record A2 |

     Page 2:
     | Record B1 | Record B2 |

     Page 3:
     | Record C1 | Record C2 |
     ```

2. **Shadow Page Directory:**
   - We create a shadow page directory that keeps track of the pages in the database.
     ```
     Shadow Page Directory:
     | Page 1 | Page 2 | Page 3 |
     ```

3. **Shadow Pages:**
   - We create shadow copies of each data page.
     ```
     Shadow Page 1:
     | Record A1 | Record A2 |

     Shadow Page 2:
     | Record B1 | Record B2 |

     Shadow Page 3:
     | Record C1 | Record C2 |
     ```

4. **Transaction Modification:**
   - Suppose a transaction modifies Record B2 on Page 2 and adds Record D1.
     ```
     Page 2 (after modification):
     | Record B1 | Record B2' | Record D1 |
     ```

5. **Shadow Page Update:**
   - Instead of directly modifying the original database, we make the changes to the shadow copy of the affected page.
     ```
     Shadow Page 2 (after modification):
     | Record B1 | Record B2' | Record D1 |
     ```

6. **Commit:**
   - Once the transaction is complete, we update the page directory to point to the shadow copy of the modified page.
     ```
     Shadow Page Directory:
     | Page 1 | Page 2 | Page 3 |
     ```

7. **Crash and Recovery:**
   - Suppose a crash occurs after the commit but before the changes are applied to the original database.
   - During recovery, we use the shadow page directory to restore the database to a consistent state.
     ```
     Page 1:
     | Record A1 | Record A2 |

     Page 2:
     | Record B1 | Record B2' | Record D1 |

     Page 3:
     | Record C1 | Record C2 |
     ```

Shadow paging ensures crash recovery by maintaining a consistent snapshot of the database. It requires additional space to store the shadow copy of the database, but it provides a simple and efficient mechanism for recovery. Additionally, care must be taken to ensure that the shadow copy is updated atomically to avoid inconsistencies during recovery.

### 4. What do you understand by lossy and lossless decomposition?

In the context of database design, decomposition refers to the process of breaking down a relation (table) schema into multiple smaller schemas to achieve desirable properties such as minimizing redundancy, reducing anomalies, or facilitating efficient query processing. Lossy and lossless decomposition are two approaches to decomposing a relation, each with its characteristics:

1. **Lossless Decomposition**:
   - In lossless decomposition, the original relation can be reconstructed (joined) from the smaller relations without losing any information. 
   - This means that all functional dependencies present in the original relation are preserved in the decomposed relations.
   - Lossless decomposition ensures that there is no loss of information during the decomposition process.
   - Algorithms such as the Boyce-Codd Normal Form (BCNF) decomposition or the Third Normal Form (3NF) decomposition aim to achieve lossless decomposition while minimizing redundancy.

2. **Lossy Decomposition**:
   - In contrast, lossy decomposition may result in the loss of some information from the original relation.
   - It typically involves breaking down a relation into smaller relations in such a way that certain dependencies or attributes are lost.
   - Lossy decomposition may be acceptable in some cases where the lost information is not critical or can be derived from the remaining data.
   - However, it is generally avoided in database design unless there are specific performance or storage requirements that necessitate it.

In summary, lossless decomposition ensures that no information is lost during the decomposition process, while lossy decomposition may sacrifice some information for other design considerations such as performance or storage efficiency. Lossless decomposition is typically preferred in database design to maintain data integrity and consistency.

### 5. What is concurrency control? Explain it's need in database management

Concurrency control is a fundamental concept in database management systems (DBMS) that ensures multiple transactions can execute concurrently without interfering with each other. In a multi-user environment where multiple transactions (queries, updates, etc.) are executed simultaneously, concurrency control mechanisms prevent data corruption or inconsistency that could arise from concurrent access to the database.

The need for concurrency control arises due to the following reasons:

1. **Data Consistency**: Maintaining data consistency is critical in any database system. Concurrent transactions should not leave the database in an inconsistent state where data integrity is compromised. For example, if two transactions are withdrawing money from the same account simultaneously, it's essential to ensure that the final balance reflects both withdrawals accurately.

2. **Isolation**: Each transaction should be executed as if it is the only transaction accessing the database. However, in reality, multiple transactions may be executing concurrently. Concurrency control ensures that each transaction sees a consistent view of the database, isolated from the effects of other transactions occurring simultaneously.

3. **Concurrency**: By allowing multiple transactions to execute concurrently, database systems can utilize resources more efficiently and improve overall system throughput. Without proper concurrency control, transactions might need to wait for exclusive access to data, leading to decreased performance and throughput.

4. **Correctness**: Without concurrency control, concurrent execution of transactions can lead to various problems such as lost updates, uncommitted data, or inconsistent reads. Concurrency control mechanisms prevent such anomalies, ensuring that transactions maintain correctness even when executed concurrently.

Concurrency control is typically implemented using various techniques such as locking, timestamping, and optimistic concurrency control. These techniques ensure that transactions are executed in a controlled manner, preventing conflicts and maintaining data consistency and integrity.