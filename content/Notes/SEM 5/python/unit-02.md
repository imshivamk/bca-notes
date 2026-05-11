# Statements and Control Structures in Python


***

### 1. Assignment Statement

**Definition:**
Assigns a value to a variable.

**Syntax:**

```python
variable_name = value
```

**Example:**

```python
x = 10
name = "Alice"
pi = 3.1416
```


***

### 2. Import Statement

**Definition:**
Used to include external modules or libraries in the program for additional functionalities.

**Syntax:**

```python
import module_name
```

**Example:**

```python
import math
print(math.sqrt(16))  # Output: 4.0
```

**Import specific functions:**

```python
from math import sqrt
print(sqrt(25))  # Output: 5.0
```


***

### 3. Print Statement

**Definition:**
Outputs information or variables to the console.

**Syntax:**

```python
print(value1, value2, ..., sep='separator', end='end')
```

**Examples:**

```python
print("Hello, World!")
print("Python", "is", "fun", sep="-")  # Output: Python-is-fun
print("Hi", end="!")                    # Output: Hi!
print(10, 20, 30)
```


***

### 4. if: elif: else: Statement

**Definition:**
Used for decision making; executes code based on conditions.

**Syntax:**

```python
if condition1:
    # block 1
elif condition2:
    # block 2
else:
    # block 3
```

**Example:**

```python
score = 85
if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
else:
    print("Grade C")
```


***

### 5. for Statement and while Statement

**for Loop:**
Repeatedly executes a block for each item in a sequence.

**Syntax:**

```python
for variable in iterable:
    # block
```

**Example:**

```python
for i in range(5):
    print(i)  # Outputs 0 to 4
```

**while Loop:**
Repeats as long as a condition is true.

**Syntax:**

```python
while condition:
    # block
```

**Example:**

```python
count = 0
while count < 5:
    print(count)
    count += 1
```


***

### 6. continue and break Statements

**continue:**
Skips the current iteration and moves to the next loop iteration.

**Example:**

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
# Output: 0 1 3 4
```

**break:**
Stops the loop entirely when called.

**Example:**

```python
for i in range(5):
    if i == 3:
        break
    print(i)
# Output: 0 1 2
```


***

### 7. try: except Statement

**Definition:**
Used for exception handling; code in `try` block runs, exceptions caught in `except`.

**Syntax:**

```python
try:
    # code that might cause exception
except ExceptionType:
    # code to handle exception
```

**Example:**

```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```


***

### 8. raise Statement and with Statement

**raise:**
Manually triggers an exception.

**Syntax:**

```python
raise ExceptionType("Error message")
```

**Example:**

```python
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
```

**with:**
Simplifies exception handling with resources (like files), ensuring cleanup.

**Syntax:**

```python
with open("file.txt", "r") as file:
    content = file.read()
```


***

### 9. del and case Statement

**del:**
Deletes variables, list items, dictionary entries, or object attributes.

**Syntax:**

```python
del variable
del list[index]
del dict[key]
```

**Example:**

```python
x = 10
del x
my_list = [1, 2, 3]
del my_list[^1]
```

**case Statement:**
Python doesn't have a built-in `case` statement like some languages, but Python 3.10+ has `match-case` for pattern matching.

**Syntax:**

```python
match variable:
    case pattern1:
        # block
    case pattern2:
        # block
    case _:
        # default block
```

**Example:**

```python
def number_to_string(num):
    match num:
        case 1:
            return "One"
        case 2:
            return "Two"
        case _:
            return "Other"

print(number_to_string(2))  # Output: Two
```


***

This completes the detailed, syntax-rich notes for the "Statements and Control Structures" unit with definitions, usage, and examples.

Say "next" to continue to the next unit: list/tuple/range.
<span style="display:none">[^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.w3schools.com/python/python_conditions.asp

[^2]: https://www.codingal.com/coding-for-kids/blog/control-structures-in-python/

[^3]: https://realpython.com/python-control-flow/

[^4]: https://unstop.com/blog/control-statement-in-python

[^5]: https://www.geeksforgeeks.org/dsa/loops-and-control-statements-continue-break-and-pass-in-python/

[^6]: https://www.pickl.ai/blog/control-statements-in-python/

[^7]: https://www.kdnuggets.com/python-basics-syntax-data-types-and-control-structures

[^8]: https://docs.python.org/3/tutorial/controlflow.html

[^9]: https://www.geeksforgeeks.org/python/conditional-statements-in-python/

