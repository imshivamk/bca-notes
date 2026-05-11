# Unit: Functions in Python


***

### 1. The def Statement and Returning Values

**Definition:**
A function is a reusable block of organized, related code that performs a specific task.

**Syntax:**

```python
def function_name(parameters):
    """Docstring: Describe what the function does"""
    # function body
    return value  # optional
```

- `def` keyword starts the function definition.
- Function name follows standard identifier rules.
- `parameters` are optional inputs.
- The body is indented.
- `return` passes a value back to the caller (optional).

**Example:**

```python
def greet():
    """Print a greeting message."""
    print("Hello, World!")

greet()
```


***

### 2. Parameters and Arguments

**Parameters:** Variables listed in the function definition.
**Arguments:** Values passed to the function during the call.

**Example:**

```python
def add(a, b):
    return a + b

result = add(3, 5)   # Arguments 3, 5 passed to parameters a, b
print(result)        # Output: 8
```


***

### 3. Local Variables and Other Notes

**Local variables:**
Variables defined inside a function, accessible only within that function.

**Example:**

```python
def func():
    x = 10  # Local variable
    print(x)

func()
# print(x)  # Error! x is not accessible here
```


***

### 4. Global Variables and the global Statement

**Global variables:**
Defined outside functions, accessible throughout.

**Use `global`** keyword to modify global variables inside functions.

```python
x = 5  # Global variable

def modify():
    global x
    x = 10

modify()
print(x)  # Output: 10
```


***

### 5. Docstrings for Functions and Decorators

**Docstrings:**
Multi-line string used to document functions, accessible via `function_name.__doc__`.

```python
def sum_numbers(a, b):
    """Return the sum of two numbers."""
    return a + b
print(sum_numbers.__doc__)
```

**Decorators:**
Functions that modify the behavior of other functions.

```python
def decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@decorator
def greet():
    print("Hello!")

greet()
```


***

### 6. Lambda, Iterators, and Generators

**Lambda expressions:**
Anonymous functions with one expression.

```python
square = lambda x: x * x
print(square(5))  # 25
```

**Iterators:**
Objects that implement `__iter__()` and `__next__()` methods.

**Generators:**
Functions that yield values using `yield`.

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for val in countdown(3):
    print(val)  # 3, 2, 1
```


***

### 7. Modules and Docstrings for Modules

**Modules:**
Python files (`.py`) that contain functions, classes, and variables to be reused.

**Importing modules:**

```python
import math
print(math.sqrt(16))  # 4.0
```

**Docstrings for modules:**
Top of the Python file to document module purpose.

***

### 8. Packages

**Definition:**
A collection of Python modules organized in directories with an `__init__.py` file.

**Usage:**
Use packages to organize related modules into a hierarchy.

***

These notes cover function creation, usage, scope management, documentation, decorators, lambda, iterators/generators, and module/package basics with syntax and examples for thorough understanding.

Say "next" to continue with the "Object-Oriented Programming" unit.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.w3schools.com/python/python_functions.asp

[^2]: https://www.geeksforgeeks.org/python/python-functions/

[^3]: https://www.programiz.com/python-programming/function

[^4]: https://www.freecodecamp.org/news/python-functions-define-and-call-a-function/

[^5]: https://realpython.com/defining-your-own-python-function/

[^6]: https://www.tutorialspoint.com/python/python_functions.htm

[^7]: https://www.simplilearn.com/tutorials/python-tutorial/python-functions

[^8]: https://codeskiller.codingblocks.com/library/articles/functions-in-python-syntax-with-and-without-arguments

[^9]: https://cs.stanford.edu/people/nick/py/python-function.html

