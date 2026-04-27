# Introduction to PHP

---

## 1. What is PHP

1. PHP (Hypertext Preprocessor) is a **server-side scripting language** used to build dynamic web applications.
    
2. It is executed on the server and returns **HTML output** to the browser.
    
3. Widely used with databases like MySQL for **full-stack web development**.
    

### Key Features

1. Open source
    
2. Platform independent
    
3. Embedded in HTML
    
4. Supports databases (MySQL, PostgreSQL, etc.)
    
5. Interpreted language (no compilation required)
    

---

## 2. Installing and Configuring PHP

### 2.1 Using XAMPP (Recommended for beginners)

1. Download XAMPP
    
2. Install and open XAMPP Control Panel
    
3. Start:
    
    - Apache (Web Server)
        
    - MySQL (Database)
        
4. Place PHP files inside:
    

```
C:\xampp\htdocs\
```

5. Run in browser:
    

```
http://localhost/filename.php
```

---

### 2.2 Verify Installation

Create file: `test.php`

```php
<?php
phpinfo();
?>
```

Open in browser → displays PHP configuration details.

---

## 3. Building Blocks of PHP

---

## 3.1 PHP Tags

PHP code is written inside special tags.

### Types of PHP Tags

1. Standard Tag (Recommended)
    

```php
<?php
echo "Hello World";
?>
```

2. Short Tag (Not always enabled)
    

```php
<?
echo "Hello";
?>
```

3. Echo Tag
    

```php
<?= "Hello World"; ?>
```

---

## 3.2 Variables in PHP

### Definition

Variables are used to store data.

### Rules

1. Starts with `$`
    
2. Must begin with letter or underscore
    
3. Cannot start with number
    
4. Case-sensitive
    

### Example

```php
<?php
$name = "Shivam";
$age = 21;

echo $name;
echo $age;
?>
```

---

## 3.3 Data Types in PHP

### Types

1. **String**
    

```php
$name = "PHP";
```

2. **Integer**
    

```php
$age = 21;
```

3. **Float (Double)**
    

```php
$price = 99.99;
```

4. **Boolean**
    

```php
$isActive = true;
```

5. **Array**
    

```php
$colors = array("red", "blue", "green");
```

6. **NULL**
    

```php
$x = null;
```

---

## 3.4 Constants

### Definition

Constants are values that **cannot be changed** once defined.

### Syntax

```php
define("PI", 3.14);
echo PI;
```

---

## 3.5 Operators in PHP

### 1. Arithmetic Operators

```php
$a = 10;
$b = 5;

echo $a + $b; // 15
echo $a - $b; // 5
echo $a * $b; // 50
echo $a / $b; // 2
```

### 2. Assignment Operator

```php
$x = 10;
$x += 5; // x = 15
```

### 3. Comparison Operators

```php
$a == $b   // equal
$a != $b   // not equal
$a > $b
$a < $b
```

### 4. Logical Operators

```php
($a > 5 && $b < 10)
($a > 5 || $b < 10)
!($a > 5)
```

---

## 3.6 Expressions

### Definition

An expression is a combination of variables, values, and operators that produces a result.

```php
$result = ($a + $b) * 2;
```

---

## 4. Control Structures

---

## 4.1 Conditional Statements

### 1. if Statement

```php
<?php
$age = 18;

if ($age >= 18) {
    echo "Eligible to vote";
}
?>
```

---

### 2. if-else Statement

```php
if ($age >= 18) {
    echo "Adult";
} else {
    echo "Minor";
}
```

---

### 3. if-elseif-else

```php
$marks = 75;

if ($marks >= 90) {
    echo "A Grade";
} elseif ($marks >= 60) {
    echo "B Grade";
} else {
    echo "Fail";
}
```

---

## 4.2 Switch Statement

### Definition

Used when multiple conditions are based on same variable.

```php
$day = 2;

switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    default:
        echo "Invalid";
}
```

---

## 4.3 Loops in PHP

---

### 1. for Loop

```php
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
```

---

### 2. while Loop

```php
$i = 1;

while ($i <= 5) {
    echo $i;
    $i++;
}
```

---

### 3. do-while Loop

```php
$i = 1;

do {
    echo $i;
    $i++;
} while ($i <= 5);
```

---

### 4. foreach Loop (for arrays)

```php
$colors = ["red", "blue", "green"];

foreach ($colors as $color) {
    echo $color;
}
```

---

# 5. Complete Working Program

### Problem: Student Result System

### Features Covered

- Variables
    
- Data types
    
- Constants
    
- Operators
    
- Conditional statements
    
- Switch
    
- Loops
    

---

```php
<?php

// Constant
define("PASS_MARKS", 40);

// Variables
$name = "Shivam";
$marks = [85, 72, 60, 30, 90];

// Calculate total
$total = 0;

foreach ($marks as $m) {
    $total += $m;
}

// Calculate average
$average = $total / count($marks);

// Output
echo "Name: $name <br>";
echo "Total Marks: $total <br>";
echo "Average: $average <br>";

// Result using if-else
if ($average >= 75) {
    $grade = "A";
} elseif ($average >= 60) {
    $grade = "B";
} elseif ($average >= PASS_MARKS) {
    $grade = "C";
} else {
    $grade = "Fail";
}

echo "Grade: $grade <br>";

// Switch example
switch ($grade) {
    case "A":
        echo "Excellent Performance";
        break;
    case "B":
        echo "Good Performance";
        break;
    case "C":
        echo "Average Performance";
        break;
    default:
        echo "Needs Improvement";
}

// Loop example
echo "<br>Marks:<br>";
for ($i = 0; $i < count($marks); $i++) {
    echo "Subject " . ($i + 1) . ": " . $marks[$i] . "<br>";
}

?>
```

---

# 6. Summary

1. PHP is a server-side scripting language for web development
    
2. Installed easily using XAMPP
    
3. Core building blocks:
    
    - Tags
        
    - Variables
        
    - Data types
        
    - Constants
        
    - Operators
        
    - Expressions
        
4. Control structures:
    
    - if, else, elseif
        
    - switch
        
    - loops (for, while, do-while, foreach)
        
5. Used to build dynamic, database-driven web applications
    

---
