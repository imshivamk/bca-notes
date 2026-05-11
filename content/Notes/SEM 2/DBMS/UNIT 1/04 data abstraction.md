---
dg-publish: true
---
## Data Abstraction

1. Database systems include <mark style="background: #FF5582A6;">complex data structures</mark>.
2. developers use abstraction To make the system 
	1. make the system <mark style="background: #FFB86CA6;">efficient in data retrieval</mark>
	2. <mark style="background: #FFB86CA6;">reduce complexity for users by hiding irrelevant details.</mark>
3. <mark style="background: #BBFABBA6;">Keep away the complex data</mark> from the user and <mark style="background: #BBFABBA6;">remove the complications</mark>
4. So that the <mark style="background: #FFB86CA6;">user can comfortably access the data they want</mark>
5. The main purpose of data abstraction is to hide irrelevant data and provide an abstract view of the data.
6. With the help of data abstraction, developers hide irrelevant data from the user and provide them the relevant data.
7. By doing this, users can access the data without any trouble, and the system will also work efficiently
8. In DBMS, data abstraction is performed in layers which means there are levels of data abstraction.

## Levels of Data Abstractions in DBMS

### 1. Physical or Internal Level: 

1. The physical or internal layer is the <mark style="background: #FFB86CA6;">lowest level</mark> of data abstraction in DBMS
2. It is the layer that <mark style="background: #BBFABBA6;">defines how data is actually stored in the database.</mark>
3. It defines <mark style="background: #BBFABBA6;">methods to access the data in the database</mark>
4. <mark style="background: #FFB8EBA6;">where the data is actually stored</mark>, the <mark style="background: #FFF3A3A6;">actual location</mark> of the data that is being stored by the user.
5. DBA decide that <mark style="background: #FFF3A3A6;">which data should be kept at which particular disk drive</mark>, how the data has to be fragmented, where it has to be stored etc.
6. They <mark style="background: #BBFABBA6;">decide if the data has to be centralized or distributed.</mark>
7. data here is actually <mark style="background: #ABF7F7A6;">stored in the form of files only.</mark>
8. The DBA's role is to manage the data in the database at the physical or internal level.
### 2. Logical or Conceptual Level:

1. The logical or conceptual level is <mark style="background: #FFF3A3A6;">the intermediate or next level</mark> of data abstraction.
2. After taking the <mark style="background: #ABF7F7A6;">raw data from internal level</mark>, the <mark style="background: #FFB86CA6;">structure of data is defined at logical level</mark>. 
3. It explains,
	1. <mark style="background: #FFF3A3A6;">what data is to be stored</mark> in the database
	2. <mark style="background: #BBFABBA6;">relationship is between them</mark>.
4. describes the <mark style="background: #FFF3A3A6;">structure of the entire data in the form of tables</mark>
5. The logical level or conceptual level is <mark style="background: #FFF3A3A6;">less complex than the physical level</mark>.
6. With the help of the logical level, Data Administrators (DBA) <mark style="background: #BBFABBA6;">abstract data from raw data present at the physical level.</mark>


### 3. View or External Level:

1. View or External Level is the <mark style="background: #BBFABBA6;">highest level</mark> of data abstraction.
2. There are <mark style="background: #FFF3A3A6;">different views</mark> at this level <mark style="background: #BBFABBA6;">That define the parts of the overall data of the database.</mark>
3. This level is <mark style="background: #FFB86CA6;">for the end-user interaction</mark>
4. at this level, end users can access the data based on their queries.
5. He/she does not get the entire database, but depending on the queries made from the front-end the user gets to see the data.
6. It <mark style="background: #BBFABBA6;">may be a single data</mark> from the entire database or a <mark style="background: #FFF3A3A6;">collection of data in tabular format.</mark>
7. <mark style="background: #FFF3A3A6;">Multiple views of the same data</mark> are available to the user
8. the representation can be a <mark style="background: #BBFABBA6;">table, a graph, or a pie</mark> chart.

![](https://i.imgur.com/b8Jq7g5.png)
