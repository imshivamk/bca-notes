# MySQL – Creating Web Database and Working with Data

---

# 1. Introduction to MySQL

1. MySQL is a **Relational Database Management System (RDBMS)**.
    
2. Uses **SQL (Structured Query Language)** to manage data.
    
3. Stores data in **tables (rows + columns)**.
    
4. Widely used with PHP for web applications.
    

---

# 2. Using MySQL Monitor

---

## 2.1 Logging into MySQL

```sql
mysql -u root -p
```

1. `-u` → username
    
2. `-p` → password prompt
    

---

## 2.2 Creating Database

```sql
CREATE DATABASE college;
```

---

## 2.3 Selecting Database

```sql
USE college;
```

---

## 2.4 Creating Users

```sql
CREATE USER 'shivam'@'localhost' IDENTIFIED BY 'password123';
```

---

## 2.5 Setting Privileges

```sql
GRANT ALL PRIVILEGES ON college.* TO 'shivam'@'localhost';
FLUSH PRIVILEGES;
```

---

# 3. Column Data Types in MySQL

---

## 3.1 Numeric Types

1. INT → Integer
    
2. FLOAT / DOUBLE → Decimal numbers
    

---

## 3.2 String Types

1. VARCHAR(n) → Variable length string
    
2. CHAR(n) → Fixed length string
    
3. TEXT → Large text
    

---

## 3.3 Date & Time Types

1. DATE → YYYY-MM-DD
    
2. DATETIME → Date + Time
    
3. TIMESTAMP
    

---

## 3.4 Example Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    marks FLOAT
);
```

---

# 4. Working with MySQL Database

---

## 4.1 Inserting Data

```sql
INSERT INTO students (name, age, marks)
VALUES ('Shivam', 21, 85);
```

---

## 4.2 Retrieving Data

```sql
SELECT * FROM students;
```

---

## 4.3 Retrieving Specific Columns

```sql
SELECT name, marks FROM students;
```

---

## 4.4 Retrieving Data with Conditions

```sql
SELECT * FROM students
WHERE marks > 70;
```

---

## 4.5 Retrieving Data in Order

```sql
SELECT * FROM students
ORDER BY marks DESC;
```

---

## 4.6 Updating Records

```sql
UPDATE students
SET marks = 90
WHERE id = 1;
```

---

## 4.7 Deleting Records

```sql
DELETE FROM students
WHERE id = 1;
```

---

# 5. Working with Multiple Tables

---

## 5.1 Creating Another Table

```sql
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_name VARCHAR(50)
);
```

---

## 5.2 Retrieving Data from Multiple Tables (JOIN)

```sql
SELECT students.name, courses.course_name
FROM students
JOIN courses
ON students.id = courses.student_id;
```

---

# 6. Grouping and Aggregate Functions

---

## 6.1 Aggregate Functions

1. COUNT()
    
2. SUM()
    
3. AVG()
    
4. MAX()
    
5. MIN()
    

---

## 6.2 Example

```sql
SELECT AVG(marks) FROM students;
```

---

## 6.3 GROUP BY

```sql
SELECT age, COUNT(*) 
FROM students
GROUP BY age;
```

---

# 7. Subqueries

---

## 7.1 Definition

1. A query inside another query
    

---

## 7.2 Example

```sql
SELECT name FROM students
WHERE marks > (SELECT AVG(marks) FROM students);
```

---

# 8. Dropping Tables and Databases

---

## 8.1 Drop Table

```sql
DROP TABLE students;
```

---

## 8.2 Drop Database

```sql
DROP DATABASE college;
```

---

# 9. Complete Working Program (PHP + MySQL)

---

## Problem: Student Database CRUD

---

```php
<?php

$conn = new mysqli("localhost", "root", "", "college");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert Data
$conn->query("INSERT INTO students (name, age, marks)
VALUES ('Shivam', 21, 85)");

// Retrieve Data
$result = $conn->query("SELECT * FROM students");

echo "<h3>Students:</h3>";

while ($row = $result->fetch_assoc()) {
    echo $row['name'] . " - " . $row['marks'] . "<br>";
}

// Update Data
$conn->query("UPDATE students SET marks=95 WHERE name='Shivam'");

// Delete Data
$conn->query("DELETE FROM students WHERE name='Test'");

$conn->close();

?>
```

---

# 10. Summary

---

## 10.1 Database Creation

1. CREATE DATABASE
    
2. CREATE USER
    
3. GRANT PRIVILEGES
    

---

## 10.2 Data Operations (CRUD)

1. INSERT → Add data
    
2. SELECT → Retrieve data
    
3. UPDATE → Modify data
    
4. DELETE → Remove data
    

---

## 10.3 Advanced Queries

1. JOIN → Multiple tables
    
2. GROUP BY → Group data
    
3. Aggregate functions → COUNT, AVG
    
4. Subqueries → Nested queries
    

---

## 10.4 Important Commands

1. DROP TABLE
    
2. DROP DATABASE
    
