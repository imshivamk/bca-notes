# Working with Cookies and Sessions in PHP

---

# 1. Cookies in PHP

---

## 1.1 Introduction to Cookies

1. A cookie is a **small piece of data stored in the user’s browser**.
    
2. Used to:
    
    - Store user preferences
        
    - Track users
        
    - Maintain state across requests
        
3. Cookies are stored **client-side** (browser).
    

---

## 1.2 Setting Cookies in PHP

### Syntax

```php
setcookie(name, value, expiry, path, domain, secure, httponly);
```

---

### Example

```php
<?php
setcookie("username", "Shivam", time() + 3600); // expires in 1 hour
?>
```

### Important Points

1. Must be called **before any HTML output**
    
2. `time() + 3600` → expiry in seconds
    

---

## 1.3 Accessing Cookies

```php
<?php
if (isset($_COOKIE['username'])) {
    echo "Welcome " . $_COOKIE['username'];
}
?>
```

---

## 1.4 Deleting Cookies

### Method: Set expiry in past

```php
<?php
setcookie("username", "", time() - 3600);
?>
```

---

## 1.5 Advantages and Limitations

### Advantages

1. Simple to use
    
2. Stored on client side
    

### Limitations

1. Limited size (~4KB)
    
2. Less secure (can be modified by user)
    

---

# 2. Sessions in PHP

---

## 2.1 Introduction to Sessions

1. Session stores data **on the server**.
    
2. Each user is assigned a **unique session ID**.
    
3. Used for:
    
    - Login systems
        
    - Shopping carts
        
    - Secure data storage
        

---

## 2.2 Starting a Session

### Syntax

```php
session_start();
```

### Example

```php
<?php
session_start();
?>
```

### Important Rule

1. Must be called **before any HTML output**
    

---

## 2.3 Working with Session Variables

### Setting Session Variable

```php
<?php
session_start();

$_SESSION['username'] = "Shivam";
?>
```

---

### Accessing Session Variable

```php
<?php
session_start();

echo $_SESSION['username'];
?>
```

---

### Checking Session Variable

```php
<?php
if (isset($_SESSION['username'])) {
    echo "Logged in";
}
?>
```

---

## 2.4 Passing Session IDs in Query String

1. Session ID can be passed manually in URL.
    

### Example

```php
<?php
session_start();

echo session_id();
?>
```

URL example:

```
page.php?PHPSESSID=abc123
```

### Note

1. Used when cookies are disabled
    
2. Not recommended due to security risks
    

---

## 2.5 Destroying Sessions

---

### 1. Unset Specific Variable

```php
<?php
unset($_SESSION['username']);
?>
```

---

### 2. Destroy Entire Session

```php
<?php
session_start();
session_destroy();
?>
```

---

## 2.6 Complete Session Cleanup

```php
<?php
session_start();

session_unset();  // remove all variables
session_destroy(); // destroy session
?>
```

---

## 2.7 Using Sessions (Login Example)

```php
<?php
session_start();

$_SESSION['user'] = "Shivam";

echo "Session started for " . $_SESSION['user'];
?>
```

---

# 3. Cookies vs Sessions

---

## 3.1 Differences

1. Storage:
    
    - Cookies → Client-side
        
    - Sessions → Server-side
        
2. Security:
    
    - Cookies → Less secure
        
    - Sessions → More secure
        
3. Size:
    
    - Cookies → Limited
        
    - Sessions → Larger data
        

---

# 4. Complete Working Program

## Problem: Simple Login System using Cookies and Sessions

---

```php
<?php
session_start();

// If form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];

    // Set session
    $_SESSION['user'] = $username;

    // Set cookie (valid for 1 hour)
    setcookie("user", $username, time() + 3600);

    echo "Login successful!<br>";
}

// Show session data
if (isset($_SESSION['user'])) {
    echo "Session User: " . $_SESSION['user'] . "<br>";
}

// Show cookie data
if (isset($_COOKIE['user'])) {
    echo "Cookie User: " . $_COOKIE['user'] . "<br>";
}

// Logout
if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();

    setcookie("user", "", time() - 3600);

    echo "Logged out successfully";
}

?>

<!-- HTML Form -->
<form method="POST">
    Username: <input type="text" name="username"><br>
    <input type="submit" value="Login">
</form>

<a href="?logout=true">Logout</a>
```

---

# 5. Quiz (Exam Practice)

---

## Q1. What is a cookie?

Small data stored in browser.

---

## Q2. Which function is used to start a session?

`session_start()`

---

## Q3. Where are sessions stored?

Server-side

---

## Q4. How to delete a cookie?

Set expiry time in past.

---

## Q5. Which is more secure: cookies or sessions?

Sessions

---

# 6. Summary

---

## 6.1 Cookies

1. Stored in browser
    
2. Use `setcookie()`
    
3. Limited and less secure
    

---

## 6.2 Sessions

1. Stored on server
    
2. Use `session_start()`
    
3. Secure and widely used
    

---

## 6.3 Key Functions

1. Cookies:
    
    - setcookie()
        
    - $_COOKIE
        
2. Sessions:
    
    - session_start()
        
    - $_SESSION
        
    - session_destroy()
        
