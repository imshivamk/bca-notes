# Intro Unit
***

### 1. History of Python

**Definition:**
Python is a high-level, interpreted programming language created by Guido van Rossum in late 1980s, first released in 1991. It was designed to emphasize code readability with its use of significant indentation.

**Highlights:**

- Named after the British TV show "Monty Python’s Flying Circus"
- Developed as a successor to the ABC language
- Supports multiple programming paradigms: procedural, object-oriented, functional
- Widely used in web development, data science, automation, AI, and more

***

### 2. Unique Features of Python

- **Easy to learn and use:** Simple syntax similar to English
- **Interpreted:** Executes code line by line (no compilation needed)
- **Dynamically typed:** No need to declare variable types explicitly
- **Code readability:** Uses indentation instead of braces `{}` for blocks
- **Extensive standard library:** Built-in modules for many functions
- **Portability:** Runs on Windows, macOS, Linux without modification
- **Open source:** Free to use and distribute
- **Supports multiple programming styles:** procedural, OOP, functional
- **Automatic memory management:** Garbage collection for reclaiming memory
- **Interactive mode:** Allows testing and debugging one line at a time
- **Embeddable and Extensible:** Can integrate with other languages like C, C++
- **Wide community support:** Rich ecosystem and libraries.[^5][^11]

***

### 3. Python Identifiers

**Definition:**
Names used to identify variables, functions, classes, modules, etc.

**Rules:**

- Must begin with a letter (A-Z, a-z) or underscore `_`
- Can contain letters, digits (0-9), and underscores
- Cannot start with a digit
- Cannot be a Python keyword or reserved word
- Case-sensitive (`var`, `Var`, and `VAR` are different)
- No spaces or special characters allowed

**Examples:**

```python
my_var = 10
_name = "Python"
user123 = True
```

**Invalid examples:**

```python
1var = 5       # Starts with a digit
my-var = 3     # Contains hyphen
for = 10       # Keyword is reserved
```


***

### 4. Keywords and Indentation

**Keywords:**
Reserved words with special meaning embedded in Python syntax. These cannot be used as identifiers. Examples include:
`if`, `else`, `elif`, `for`, `while`, `break`, `continue`, `def`, `class`, `try`, `except`, `import`, `raise`, `with`, etc.

**Indentation:**

- Python uses whitespace indentation to define blocks of code instead of braces `{}`
- Consistent indentation is mandatory; typically 4 spaces per level
- Incorrect or inconsistent indentation leads to errors

**Example:**

```python
if x > 10:
    print("x is greater than 10")
else:
    print("x is 10 or less")
```


***

### 5. Comments and Documentation

**Comments:**
Ignored by Python interpreter, used to explain code.

- Single-line comment starts with `#`
- Multi-line comments use triple quotes `''' ... '''` or `""" ... """`

**Single-line:**

```python
# This is a single-line comment
print("Hello")  # This is an inline comment
```

**Multi-line:**

```python
"""
This is a multi-line comment
or a documentation string (docstring).
"""
```

**Docstrings:**

- Special multi-line comments for documenting modules, functions, classes
- Accessible via `.__doc__` attribute

**Example:**

```python
def add(a, b):
    """Return the sum of a and b."""
    return a + b

print(add.__doc__)  # Output: Return the sum of a and b.
```


***

### 6. Getting User Input Python

**Syntax:**

```python
variable = input(prompt)
```

**Details:**

- `input()` takes an optional prompt string
- Always returns a string type; needs conversion if number expected

**Example:**

```python
name = input("Enter your name: ")
print("Hello,", name)

age = input("Enter your age: ")
age = int(age)  # converting string to integer
print("Your age is", age)
```


***

### 7. Data Types and Variables

**Variables:**
Names given to data storage. No explicit declaration required.

**Basic Data Types:**


| Data Type | Description | Example |
| :-- | :-- | :-- |
| int | Integer numbers (whole) | `x = 5` |
| float | Floating-point numbers | `pi = 3.1415` |
| str | Sequence of characters | `name = "Alice"` |
| bool | Boolean values (True/False) | `flag = True` |
| complex | Complex numbers | `z = 3 + 4j` |

**Type checking \& conversion:**

```python
x = 5
print(type(x))  # <class 'int'>

y = float(x)
print(y)        # 5.0
print(type(y))  # <class 'float'>
```


***

### 8. Python Core Objects

Core objects include numbers, strings, lists, dictionaries, tuples, sets, and functions.

- **Numbers:** int, float, complex
- **Strings:** Text enclosed in quotes
- **Lists:** Ordered, mutable collections
- **Tuples:** Ordered, immutable collections
- **Dictionaries:** Key-value mappings
- **Sets:** Unordered unique elements
- **Functions:** Blocks of reusable code

***

### 9. Functions Number

Python has built-in functions for mathematical operations:


| Function | Description | Syntax and Example |
| :-- | :-- | :-- |
| `abs()` | Absolute value | `abs(-5)  # Output: 5` |
| `pow()` | Power function | `pow(2, 3)  # Output: 8` |
| `round()` | Rounds float to nearest integer | `round(3.14159, 2)  # 3.14` |
| `max()` | Returns max of arguments | `max(1, 5, 3)  # 5` |
| `min()` | Returns min of arguments | `min(10, -2, 7)  # -2` |


***

### 10. Maths

Basic arithmetic operations:


| Operation | Symbol | Description | Example | Output |
| :-- | :-- | :-- | :-- | :-- |
| Addition | `+` | Adds two values | `3 + 5` | 8 |
| Subtraction | `-` | Subtracts right from left | `10 - 4` | 6 |
| Multiplication | `*` | Multiplies two values | `2 * 4` | 8 |
| Division | `/` | Divides left by right | `10 / 3` | 3.3333 |
| Floor Division | `//` | Division rounded down | `10 // 3` | 3 |
| Modulus | `%` | Remainder of division | `10 % 3` | 1 |
| Exponentiation | `**` | Raises left to power right | `2 ** 3` | 8 |

**Example:**

```python
a = 15
b = 4
print(a + b)   # 19
print(a / b)   # 3.75
print(a // b)  # 3
print(a % b)   # 3
```

Advanced math uses the `math` module:

```python
import math
print(math.sqrt(16))  # 4.0
print(math.sin(math.pi/2))  # 1.0
```


***

This completes a fully detailed, exam-ready intro unit report including all syllabus topics with definitions, syntax, and examples for effective understanding.

Say “next” to proceed with the next unit: Statements and Control Structures.
<span style="display:none">[^1][^10][^2][^3][^4][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.geeksforgeeks.org/python/python-programming-language-tutorial/

[^2]: https://docs.python.org/3/tutorial/index.html

[^3]: https://www.w3schools.com/python/

[^4]: https://www.youtube.com/watch?v=H2EJuAcrZYU

[^5]: https://www.tutorialspoint.com/python/index.htm

[^6]: https://www.python.org/about/gettingstarted/

[^7]: https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg

[^8]: https://www.learnpython.org

[^9]: https://www.codechef.com/learn/course/python

[^10]: https://www.codecademy.com/catalog/language/python

[^11]: https://www.w3schools.com/python/python_intro.asp

