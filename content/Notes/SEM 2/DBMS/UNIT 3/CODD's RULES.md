---
dg-publish: true
---
1. Codd’s rules are proposed by a computer scientist named <mark style="background: #ABF7F7A6;">Dr. Edgar F. Codd.</mark>
2. he also <mark style="background: #ABF7F7A6;">invented the relational model</mark> for database management.
3. These rules are made to <mark style="background: #D2B3FFA6;">ensure data integrity, consistency, and usability</mark>.
4. This set of rules basically signifies the characteristics and requirements of RDBMS.

## **Codd’s Rules in DBMS***

### ***Rule 1: The Information Rule***

1. All information, whether it is user <mark style="background: #FFB86CA6;">information</mark> or metadata, that is stored in a database <mark style="background: #FFB86CA6;">must be entered as a value in a cell of a table.</mark>
2. Everything within the database is organized in a <mark style="background: #ABF7F7A6;">table layout</mark>.

### ***Rule 2: The Guaranteed Access Rule**

1. Each data element is g<mark style="background: #ABF7F7A6;">uaranteed to be accessible logically</mark> with a combination of the t<mark style="background: #D2B3FFA6;">able name, primary key (row value), and attribute name (column value). </mark>
2. with proper column , row and table, u can access anything

### **Rule 3: Systematic Treatment of NULL Values***

<mark style="background: #BBFABBA6;">Every Null value in a database must be given a systematic and uniform treatment. </mark>

### **Rule 4: Active Online Catalog Rule***

<mark style="background: #FFB86CA6;">The database catalog, containing the metadata about the database, must be stored and accessed using the same RDBMS.</mark>

### **Rule 5: The Comprehensive Data Sublanguage Rule***

A crucial component of any efficient database system is its ability to offer an <mark style="background: #BBFABBA6;">easily understandable data manipulation language  that facilitates defining, querying, and modifying information within the database.</mark>

### ***Rule 6: The View Updating Rule***

<mark style="background: #FFB86CA6;">All views that are theoretically updatable must also be updatable by the system.</mark>

### **Rule 7: High-level Insert, Update, and Delete***

A successful database system must possess the<mark style="background: #ABF7F7A6;"> feature of facilitating high-level insertions, updates, and deletions that can grant users the ability to conduct these operations with ease through a single query.</mark>

### **Rule 8: Physical Data Independence***

<mark style="background: #FFF3A3A6;">Application programs and activities should remain unaffected when changes are made to the physical storage structures </mark>or methods.

### **Rule 9: Logical Data Independence***

Application programs and activities should remain <mark style="background: #FFF3A3A6;">unaffected when changes are made to the logical structure of the data, such as adding or modifying tables.</mark>

### **Rule 10: Integrity Independence**

<mark style="background: #FFB86CA6;">Integrity constraints should be specified separately from application programs and stored in the catalog.</mark>
They should be automatically enforced by the database system.

### ***Rule 11: Distribution Independence***

The <mark style="background: #BBFABBA6;">distribution of data across multiple locations should be invisible to users</mark>, and the database system should <mark style="background: #ADCCFFA6;">handle the distribution transparently</mark>.

### **Rule 12: Non-Subversion Rule***

<mark style="background: #ADCCFFA6;">If the interface of the system is providing access to low-level record</mark>s, then th<mark style="background: #ABF7F7A6;">e interface must not be able to damage the system and bypass security and integrity constraints.</mark>