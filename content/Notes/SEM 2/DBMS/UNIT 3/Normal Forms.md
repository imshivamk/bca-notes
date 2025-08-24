---
dg-publish: true
---
- [[#Types of DBMS Normal forms|Types of DBMS Normal forms]]
	- [[#Types of DBMS Normal forms#1. First Normal Form (1NF)|1. First Normal Form (1NF)]]
		- [[#1. First Normal Form (1NF)#1. Create Separate tables for Employee and Employee Skills|1. Create Separate tables for Employee and Employee Skills]]
		- [[#1. First Normal Form (1NF)#2. Add Multiple rows for Multiple skills|2. Add Multiple rows for Multiple skills]]
	- [[#Types of DBMS Normal forms#2. Second Normal Form (2NF)|2. Second Normal Form (2NF)]]
		- [[#2. Second Normal Form (2NF)#What is Partial Dependency?|What is Partial Dependency?]]
	- [[#Types of DBMS Normal forms#3. Third Normal Form (3NF)|3. Third Normal Form (3NF)]]
		- [[#3. Third Normal Form (3NF)#What is Transitive Dependency?|What is Transitive Dependency?]]
		- [[#3. Third Normal Form (3NF)#How to Transitive Dependency?|How to Transitive Dependency?]]
	- [[#Types of DBMS Normal forms#4. Boyce-Codd Normal Form (BCNF)|4. Boyce-Codd Normal Form (BCNF)]]
	- [[#Types of DBMS Normal forms#5. Fourth Normal Form (4NF)|5. Fourth Normal Form (4NF)]]
	- [[#Types of DBMS Normal forms#5. Fifth Normal Form (5NF)|5. Fifth Normal Form (5NF)]]

## Types of DBMS Normal forms

Normalization rules are divided into the following normal forms:

1. First Normal Form    
2. Second Normal Form
3. Third Normal Form
4. BCNF
5. Fourth Normal Form
6. Fifth Normal Form

Let's cover all the Database Normal forms one by one with some basic examples to help you understand the DBMS normal forms.

### 1. First Normal Form (1NF)

For a table to be in the First Normal Form, it should follow the following 4 rules:

1. It should only have single(**atomic**) valued attributes/columns.

2. Values stored in a column should be of the same domain.
    
3. All the columns in a table should have unique names.
    
4. And the order in which data is stored should not matter.
    


Let's see an example.

If we have an **Employee** table in which we store the _employee information_ along with the _employee skillset_, the table will look like this:

|emp_id|emp_name|emp_mobile|emp_skills|
|---|---|---|---|
|1|John Tick|9999957773|Python, JavaScript|
|2|Darth Trader|8888853337|HTML, CSS, JavaScript|
|3|Rony Shark|7777720008|Java, Linux, C++|

The above table has 4 columns:

- All the columns have different names.
    
- All the columns hold values of the same type like **emp_name** has all the names, **emp_mobile** has all the contact numbers, etc.
    
- The order in which we save data doesn't matter
    
- But the **emp_skills** column holds _multiple comma-separated values_, while as per the First Normal form, each column should have a single value.
    

Hence the above table fails to pass the First Normal form.

So how do you fix the above table? There are two ways to do this:

1. Remove the **emp_skills** column from the **Employee** table and keep it in some other table.
    
2. Or add multiple rows for the employee and each row is linked with one skill.
    

#### 1. Create Separate tables for Employee and Employee Skills

So the **Employee** table will look like this,

|emp_id|emp_name|emp_mobile|
|---|---|---|
|1|John Tick|9999957773|
|2|Darth Trader|8888853337|
|3|Rony Shark|7777720008|

And the new **Employee_Skill** table:

|emp_id|emp_skill|
|---|---|
|1|Python|
|1|JavaScript|
|2|HTML|
|2|CSS|
|2|JavaScript|
|3|Java|
|3|Linux|
|3|C++|

#### 2. Add Multiple rows for Multiple skills

You can also _simply add multiple rows_ to add multiple skills. This will lead to repetition of the data, but that can be handled as you further Normalize your data using the Second Normal form and the Third Normal form.

|emp_id|emp_name|emp_mobile|emp_skill|
|---|---|---|---|
|1|John Tick|9999957773|Python|
|1|John Tick|9999957773|JavaScript|
|2|Darth Trader|8888853337|HTML|
|2|Darth Trader|8888853337|CSS|
|2|Darth Trader|8888853337|JavaScript|
|3|Rony Shark|7777720008|Java|
|3|Rony Shark|7777720008|Linux|
|3|Rony Shark|7777720008|C++|

If you want to learn about the First Normal Form in detail, check out [**DBMS First Normal Form**](https://www.studytonight.com/dbms/first-normal-form.php) tutorial.

### 2. Second Normal Form (2NF)

For a table to be in the Second Normal Form,

1. It should be in the First Normal form.
    
2. And, it should not have **Partial Dependency**.

#### What is Partial Dependency?

When a table has a primary key that is made up of two or more columns, then all the columns(not included in the primary key) in that table should depend on the entire primary key and not on a part of it. If any column(which is not in the primary key) depends on a part of the primary key then we say we have Partial dependency in the table.

Confused? Let's take an example.

If we have two tables Students and Subjects, to store student information and information related to subjects.

**Student** table:

|student_id|student_name|branch|
|---|---|---|
|1|Akon|CSE|
|2|Bkon|Mechanical|

**Subject** Table:

|subject_id|subject_name|
|---|---|
|1|C Language|
|2|DSA|
|3|Operating System|

And we have another table **Score** to store the marks scored by students in any subject like this,

|student_id|subject_id|marks|teacher_name|
|---|---|---|---|
|1|1|70|Miss. C|
|1|2|82|Mr. D|
|2|1|65|Mr. Op|

Now in the above table, the primary key is **student_id + subject_id**, because both these information are required to select any row of data.

But in the **Score** table, we have a column **teacher_name**, which depends on the subject information or just the **subject_id**, so we _should not keep_ that information in the **Score** table.

The column **teacher_name** should be in the **Subjects** table. And then the entire system will be Normalized as per the Second Normal Form.

Updated **Subject** table:

|subject_id|subject_name|teacher_name|
|---|---|---|
|1|C Language|Miss. C|
|2|DSA|Mr. D|
|3|Operating System|Mr. Op|

Updated **Score** table:

|student_id|subject_id|marks|
|---|---|---|
|1|1|70|
|1|2|82|
|2|1|65|


### 3. Third Normal Form (3NF)

A table is said to be in the Third Normal Form when,

1. It satisfies the First Normal Form and the Second Normal form.
    
2. And, it doesn't have Transitive Dependency.
    

#### What is Transitive Dependency?

In a table we have some column that acts as the primary key and other columns depends on this column. But what if a column that is not the primary key depends on another column that is also not a primary key or part of it? Then we have Transitive dependency in our table.

Let's take an example. We had the **Score** table in the Second Normal Form above. If we have to store some extra information in it, like,

1. **exam_type**
    
2. **total_marks**
    

To store the type of exam and the total marks in the exam so that we can later calculate the percentage of marks scored by each student.

The **Score** table will look like this,

|student_id|subject_id|marks|exam_type|total_marks|
|---|---|---|---|---|
|1|1|70|Theory|100|
|1|2|82|Theory|100|
|2|1|42|Practical|50|

- In the table above, the column **exam_type** depends on both **student_id** and **subject_id**, because,
    
    - a student can be in the CSE branch or the Mechanical branch,
        
    - and based on that they may have different exam types for different subjects.
        
    - The CSE students may have both Practical and Theory for Compiler Design,
        
    - whereas Mechanical branch students may only have Theory exams for Compiler Design.
        
- But the column **total_marks** just depends on the **exam_type** column. And the **exam_type** column is not a part of the primary key. Because the primary key is **student_id + subject_id**, hence we have a Transitive dependency here.
    

#### How to Transitive Dependency?

You can create a separate table for **ExamType** and use it in the **Score** table.

New **ExamType** table,

|exam_type_id|exam_type|total_marks|duration|
|---|---|---|---|
|1|Practical|50|45|
|2|Theory|100|180|
|3|Workshop|150|300|

We have created a new table **ExamType** and we have added more related information in it like **duration**(duration of exam in mins.), and now we can use the **exam_type_id** in the **Score** table.

### 4. Boyce-Codd Normal Form (BCNF)

- **Boyce and Codd Normal Form** is a higher version of the Third Normal Form.
    
- This form deals with a certain type of anomaly that is not handled by 3NF.
    
- A 3NF table that does not have **multiple overlapping candidate keys** is said to be in BCNF.
    
- For a table to be in BCNF, the following conditions must be satisfied:
    
    - R must be in the 3rd Normal Form
        
    - and, for each functional dependency ( X → Y ), X should be a Super Key.
        

### 5. Fourth Normal Form (4NF)

A table is said to be in the Fourth Normal Form when,

1. It is in the Boyce-Codd Normal Form.
    
2. And, it doesn't have Multi-Valued Dependency.

### 5. Fifth Normal Form (5NF)

- The fifth normal form is also called the **PJNF** - **Project-Join Normal Form**
    
- It is the most advanced level of Database Normalization.
    
- Using Fifth Normal Form you can fix **Join dependency** and reduce data redundancy.
    
- It also helps in fixing **Update anomalies** in DBMS design.
    






