
# Unit: Exception Handling in Python


***

### 1. What is an Exception?

**Definition:**
An exception is an error that occurs during the execution of a program, disrupting the normal flow of the code.

Examples of exceptions:

- `ZeroDivisionError` (dividing by zero)
- `FileNotFoundError` (attempting to open a file that doesn't exist)
- `ValueError` (invalid value)
- `TypeError` (mismatched data types)

***

### 2. Handling an Exception: try...except Statement

**Purpose:**
To handle exceptions gracefully so the program does not crash.

**Syntax:**

```python
try:
    # code that may raise exception
except ExceptionType1:
    # code to handle exception type 1
except ExceptionType2:
    # code to handle exception type 2
except:
    # code to handle any other exception
```

**Example:**

```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")
except:
    print("Some error occurred.")
```


***

### 3. try...except...else Statement

**Definition:**
`else` block runs if no exception is raised in the `try` block.

**Syntax:**

```python
try:
    # code that may raise exception
except ExceptionType:
    # handle exception
else:
    # code to execute if no exception
```

**Example:**

```python
try:
    num = int(input("Enter a number: "))
except ValueError:
    print("Invalid input.")
else:
    print(f"You entered {num}")
```


***

### 4. try...finally Clause

**Definition:**
`finally` block runs no matter what, ensuring cleanup actions.

**Syntax:**

```python
try:
    # risky code
finally:
    # cleanup code that runs always
```

**Example:**

```python
try:
    f = open("file.txt", "r")
finally:
    f.close()
```


***

### 5. Python Standard Exceptions and Raising Exceptions

- Python includes a set of built-in standard exceptions like `IndexError`, `NameError`, `KeyError`, etc.

**Raising Exceptions:**

```python
raise ExceptionType("Error message")
```

**Example:**

```python
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
```


***

### 6. User-Defined Exceptions

**Definition:**
Custom exceptions created by subclassing the `Exception` class.

**Syntax:**

```python
class CustomError(Exception):
    pass

def func(x):
    if x < 0:
        raise CustomError("Invalid value")
```

**Example:**

```python
try:
    func(-1)
except CustomError as e:
    print(e)  # Output: Invalid value
```


***

This completes a thorough and syllabus-aligned explanation of Python exception handling with practical examples and essential concepts.

Say "next" to move on to the I/O unit.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.w3schools.com/python/python_try_except.asp

[^2]: https://www.geeksforgeeks.org/python/python-try-except/

[^3]: https://docs.python.org/3/tutorial/errors.html

[^4]: https://www.geeksforgeeks.org/python/python-exception-handling/

[^5]: https://www.tutorialspoint.com/python/python_tryexcept_block.htm

[^6]: https://www.programiz.com/python-programming/exception-handling

[^7]: https://serveracademy.com/blog/python-try-except/

[^8]: https://realpython.com/python-exceptions/

[^9]: https://stackoverflow.com/questions/4990718/how-can-i-write-a-try-except-block-that-catches-all-exceptions

