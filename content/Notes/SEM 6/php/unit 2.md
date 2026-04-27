# Functions and Arrays in PHP

---

# 1. Functions in PHP

---

## 1.1 What is a Function

1. A function is a **block of reusable code** that performs a specific task.
    
2. It helps in:
    
    - Code reusability
        
    - Modularity
        
    - Easy debugging
        

---

## 1.2 Function Declaration and Definition

### Syntax

```php
function functionName(parameters) {
    // code
    return value;
}
```

### Example

```php
<?php
function greet() {
    echo "Hello, PHP!";
}
?>
```

---

## 1.3 Calling a Function

1. Function must be called to execute.
    

```php
<?php
greet();
?>
```

---

## 1.4 Functions with Parameters

```php
<?php
function add($a, $b) {
    return $a + $b;
}

echo add(5, 3);
?>
```

---

## 1.5 Default Parameters

```php
<?php
function greet($name = "User") {
    echo "Hello $name";
}

greet();        // Hello User
greet("Shivam"); // Hello Shivam
?>
```

---

## 1.6 Return Values

1. Functions can return values using `return`.
    

```php
<?php
function square($n) {
    return $n * $n;
}

$result = square(4);
echo $result;
?>
```

---

## 1.7 User Defined Functions

1. Functions created by programmers are called **user-defined functions**.
    

```php
<?php
function isEven($num) {
    return $num % 2 == 0;
}

if (isEven(4)) {
    echo "Even";
}
?>
```

---

## 1.8 Variable Scope

### Types of Scope

---

### 1. Local Scope

1. Variable declared inside function
    
2. Accessible only within function
    

```php
<?php
function test() {
    $x = 10;
    echo $x;
}
test();
?>
```

---

### 2. Global Scope

1. Declared outside function
    
2. Not directly accessible inside function
    

```php
<?php
$x = 10;

function test() {
    global $x;
    echo $x;
}

test();
?>
```

---

### 3. Static Scope

1. Retains value between function calls
    

```php
<?php
function counter() {
    static $count = 0;
    $count++;
    echo $count;
}

counter(); //1
counter(); //2
?>
```

---

# 2. Arrays in PHP

---

## 2.1 What is an Array

1. An array is a **data structure** that stores multiple values in a single variable.
    

---

## 2.2 Types of Arrays

---

### 1. Indexed Array

```php
<?php
$colors = ["red", "blue", "green"];
echo $colors[0];
?>
```

---

### 2. Associative Array

```php
<?php
$student = [
    "name" => "Shivam",
    "age" => 21
];

echo $student["name"];
?>
```

---

### 3. Multidimensional Array

```php
<?php
$students = [
    ["Shivam", 21],
    ["Rahul", 22]
];

echo $students[0][0];
?>
```

---

## 2.3 Creating Arrays

```php
<?php
$arr1 = array(1, 2, 3);
$arr2 = [4, 5, 6];
?>
```

---

## 2.4 Sorting Arrays

---

### 1. sort() – Ascending

```php
<?php
$arr = [3, 1, 2];
sort($arr);
print_r($arr);
?>
```

---

### 2. rsort() – Descending

```php
<?php
rsort($arr);
?>
```

---

### 3. asort() – Associative (value sort)

```php
<?php
asort($student);
?>
```

---

### 4. ksort() – Key sort

```php
<?php
ksort($student);
?>
```

---

## 2.5 Reordering Arrays

---

### 1. array_reverse()

```php
<?php
$arr = [1, 2, 3];
print_r(array_reverse($arr));
?>
```

---

### 2. shuffle()

```php
<?php
shuffle($arr);
print_r($arr);
?>
```

---

### 3. array_merge()

```php
<?php
$a = [1, 2];
$b = [3, 4];

$c = array_merge($a, $b);
print_r($c);
?>
```

---

# 3. PHP Classes (Introduction)

---

## 3.1 What is a Class

1. A class is a **blueprint for creating objects**.
    
2. It contains:
    
    - Properties (variables)
        
    - Methods (functions)
        

---

## 3.2 Creating a Class

```php
<?php
class Student {
    public $name;
    public $age;

    function display() {
        echo $this->name . " " . $this->age;
    }
}
?>
```

---

## 3.3 Creating Object

```php
<?php
$s1 = new Student();

$s1->name = "Shivam";
$s1->age = 21;

$s1->display();
?>
```

---

# 4. Complete Working Program

### Problem: Student Management System

### Concepts Covered

- Functions
    
- Arrays
    
- Sorting
    
- Variable scope
    
- Classes
    

---

```php
<?php

// Class
class Student {
    public $name;
    public $marks;

    function __construct($name, $marks) {
        $this->name = $name;
        $this->marks = $marks;
    }

    function getAverage() {
        return array_sum($this->marks) / count($this->marks);
    }
}

// Function
function printResult($student) {
    $avg = $student->getAverage();

    if ($avg >= 75) {
        $grade = "A";
    } elseif ($avg >= 60) {
        $grade = "B";
    } else {
        $grade = "C";
    }

    echo "Name: " . $student->name . "<br>";
    echo "Average: $avg <br>";
    echo "Grade: $grade <br><br>";
}

// Array of objects
$students = [
    new Student("Shivam", [80, 70, 90]),
    new Student("Rahul", [60, 50, 65]),
    new Student("Amit", [85, 95, 90])
];

// Sort students by average
usort($students, function($a, $b) {
    return $b->getAverage() <=> $a->getAverage();
});

// Output
foreach ($students as $s) {
    printResult($s);
}

?>
```

---

## 6. Summary

1. Functions improve code reuse and modularity. 
    
2. Types:
    
    - User-defined
        
    - Parameterized
        
3. Scope:
    
    - Local
        
    - Global
        
    - Static
        
4. Arrays:
    
    - Indexed
        
    - Associative
        
    - Multidimensional
        
5. Array operations:
    
    - Sorting (sort, rsort, ksort, asort)
        
    - Reordering (reverse, shuffle, merge)
        
6. Classes introduce object-oriented programming in PHP
    
