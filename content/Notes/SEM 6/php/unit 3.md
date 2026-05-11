# String Manipulation, Date & Time, Forms, and File Handling in PHP

---

# 1. String Manipulation in PHP

---

## 1.1 Working with Strings

1. A string is a **sequence of characters** enclosed in quotes.
    
2. Types:
    
    - Single quotes `' '` → no variable parsing
        
    - Double quotes `" "` → variables are parsed
        

### Example

```php
<?php
$name = "Shivam";

echo 'Hello $name'; // No parsing
echo "Hello $name"; // Parsing
?>
```

---

## 1.2 Common String Functions

---

### 1. strlen() – Length of string

```php
<?php
echo strlen("Hello"); // 5
?>
```

---

### 2. str_word_count() – Count words

```php
<?php
echo str_word_count("Hello World PHP");
?>
```

---

### 3. strrev() – Reverse string

```php
<?php
echo strrev("PHP");
?>
```

---

### 4. strtoupper() / strtolower()

```php
<?php
echo strtoupper("php");
echo strtolower("PHP");
?>
```

---

### 5. strpos() – Find position

```php
<?php
echo strpos("Hello PHP", "PHP");
?>
```

---

### 6. str_replace() – Replace substring

```php
<?php
echo str_replace("World", "PHP", "Hello World");
?>
```

---

## 1.3 String Concatenation

```php
<?php
$first = "Hello";
$second = "World";

echo $first . " " . $second;
?>
```

---

## 1.4 String Manipulation Summary

1. Strings support multiple built-in functions
    
2. Used heavily in:
    
    - Form data processing
        
    - File handling
        
    - Output formatting
        

---

# 2. Date and Time in PHP

---

## 2.1 date() Function

### Syntax

```php
date(format, timestamp)
```

---

### Example

```php
<?php
echo date("Y-m-d"); // 2026-04-26
echo date("H:i:s"); // current time
?>
```

---

## 2.2 Common Format Characters

1. Y → Year (2026)
    
2. m → Month (01–12)
    
3. d → Day
    
4. H → Hour (24-hour)
    
5. i → Minutes
    
6. s → Seconds
    

---

## 2.3 time() Function

```php
<?php
echo time(); // current timestamp
?>
```

---

## 2.4 strtotime()

1. Converts string to timestamp
    

```php
<?php
echo date("Y-m-d", strtotime("next Sunday"));
?>
```

---

## 2.5 Example: Formatting Date

```php
<?php
echo date("l, d M Y"); // Sunday, 26 Apr 2026
?>
```

---

# 3. Working with Forms in PHP

---

## 3.1 Creating a Simple Input Form

### HTML Form

```html
<form method="POST" action="process.php">
    Name: <input type="text" name="username">
    <input type="submit" value="Submit">
</form>
```

---

## 3.2 Processing Form Data

```php
<?php
$name = $_POST['username'];
echo "Hello " . $name;
?>
```

---

## 3.3 GET vs POST

1. GET:
    
    - Data visible in URL
        
    - Less secure
        
2. POST:
    
    - Data hidden
        
    - More secure
        
    - Used for forms
        

---

## 3.4 Form Validation Example

```php
<?php
if (empty($_POST['username'])) {
    echo "Name is required";
} else {
    echo "Hello " . $_POST['username'];
}
?>
```

---

# 4. File Handling in PHP

---

## 4.1 Introduction

1. File handling is used to:
    
    - Store data
        
    - Retrieve data
        
    - Process files
        

---

## 4.2 Opening a File

### Syntax

```php
fopen(filename, mode)
```

### Example

```php
<?php
$file = fopen("data.txt", "w");
?>
```

---

## 4.3 File Modes

1. "r" → Read
    
2. "w" → Write (overwrite)
    
3. "a" → Append
    
4. "r+" → Read + Write
    

---

## 4.4 Writing to a File

```php
<?php
$file = fopen("data.txt", "w");
fwrite($file, "Hello PHP");
fclose($file);
?>
```

---

## 4.5 Reading from a File

```php
<?php
$file = fopen("data.txt", "r");
echo fread($file, filesize("data.txt"));
fclose($file);
?>
```

---

## 4.6 Closing a File

```php
fclose($file);
```

---

## 4.7 Other Useful File Functions

---

### 1. file_get_contents()

```php
<?php
echo file_get_contents("data.txt");
?>
```

---

### 2. file_put_contents()

```php
<?php
file_put_contents("data.txt", "New Content");
?>
```

---

### 3. file_exists()

```php
<?php
if (file_exists("data.txt")) {
    echo "File exists";
}
?>
```

---

### 4. unlink() – Delete file

```php
<?php
unlink("data.txt");
?>
```

---

# 5. Example: Bob’s Order (File Handling Application)

---

## Problem

Store and retrieve customer order data.

---

## Complete Program

```php
<?php

// Form processing
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $item = $_POST['item'];
    $quantity = $_POST['quantity'];

    // Prepare string
    $order = "Name: $name | Item: $item | Quantity: $quantity\n";

    // Save to file
    file_put_contents("orders.txt", $order, FILE_APPEND);

    echo "Order saved successfully!<br>";
}

// Display stored orders
if (file_exists("orders.txt")) {
    echo "<h3>All Orders:</h3>";
    echo nl2br(file_get_contents("orders.txt"));
}

?>

<!-- HTML Form -->
<form method="POST">
    Name: <input type="text" name="name"><br>
    Item: <input type="text" name="item"><br>
    Quantity: <input type="number" name="quantity"><br>
    <input type="submit" value="Place Order">
</form>
```

---

# 6. Summary

---

## 6.1 String Manipulation

1. Strings are essential for text processing
    
2. Functions:
    
    - strlen, strpos, str_replace, strtoupper
        

---

## 6.2 Date & Time

1. `date()` formats output
    
2. `time()` gives timestamp
    
3. `strtotime()` parses text dates
    

---

## 6.3 Forms

1. Used to collect user input
    
2. Methods:
    
    - GET
        
    - POST
        
3. Data accessed using `$_GET`, `$_POST`
    

---

## 6.4 File Handling

1. Used for persistent storage
    
2. Steps:
    
    - Open → Read/Write → Close
        
3. Important functions:
    
    - fopen, fwrite, fread
        
    - file_get_contents, file_put_contents
        

---

If you want next:

- **Sessions & Cookies**
    
- **PHP + MySQL (very important exam topic)**
    
- **Security (XSS, SQL Injection basics)**