## 1. Python Numeric Data Types

1. **Definition:** Numeric data types in Python are used to store numeric values such as integers, floating-point numbers, and complex numbers.
2. **Types supported:**

3. **int**
        - Definition: Represents whole numbers without decimal points.
        - Features: Unlimited size, positive or negative.
        - Syntax/Example:

```python
a = 42
b = -5
```

4. **float**
        - Definition: Represents real numbers with decimal points.
        - Features: Double-precision floating-point format.
        - Syntax/Example:

```python
pi = 3.14159
temp = -45.6
```

5. **complex**
        - Definition: Represents complex numbers with real and imaginary parts.
        - Features: Imaginary part denoted with 'j'.
        - Syntax/Example:

```python
z = 3 + 4j
```


***

## 2. Iterative Statements in Python

1. **Definition:** Statements that repeatedly execute a block of code while a condition holds or over a sequence.
2. **Types:**

3. **while loop**
        - Syntax:

```python
while condition:
    # code block
```

        - Example:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

4. **for loop**
        - Syntax:

```python
for variable in sequence:
    # code block
```

        - Example:

```python
for i in range(5):
    print(i)
```


***

## 3. Exception in Python

1. **Definition:** An exception is an event that occurs during program execution which disrupts the normal flow of instructions.
2. **Features:**
    - Handled using `try-except` blocks.
    - Can be built-in or user-defined.
3. **Common standard exceptions:**

| No. | Exception | When Raised |
| :-- | :-- | :-- |
| 1 | `ArithmeticError` | Failed numeric calculations |
| 2 | `ZeroDivisionError` | Division or modulo by zero |
| 3 | `AttributeError` | Attribute reference fails |
| 4 | `EOFError` | Unexpected end of input |
| 5 | `ImportError` | Failure to import module |
| 6 | `IndexError` | Sequence index out of range |
| 7 | `KeyError` | Missing dictionary key |
| 8 | `NameError` | Identifier is not found |
| 9 | `TypeError` | Inappropriate operation on type |
| 10 | `ValueError` | Argument has correct type but invalid value |


***

## 4. Variable Number of Arguments in Functions

1. **Definition:** Allows a function to accept arbitrary number of positional or keyword arguments.
2. **Syntax and usage:**
    - `*args`: tuple of positional arguments.
    - `**kwargs`: dictionary of keyword arguments.
3. **Example:**

```python
def example(*args, **kwargs):
    print("Positional:", args)
    print("Keywords:", kwargs)

example(1, 2, 3, name="John", age=30)
```


***

## 5. Objects and Functions in Python

1. **Objects:**
    - Everything in Python is an object that contains data (attributes) and functionality (methods).
    - Example: Strings, lists, functions are all objects.
2. **Functions:**
    - Defined using the `def` keyword.
    - Are first-class objects: can be assigned, passed, and returned.
    - Example:

```python
def greet():
    print("Hello!")

func = greet  # assign function to variable
func()        # call through variable
```


***

## 6. Lists and Tuples

1. **List:**
    - Definition: Mutable ordered collection.
    - Syntax: `my_list = [1][2][3]`
    - Features: Items can be changed, added, removed.
2. **Tuple:**
    - Definition: Immutable ordered collection.
    - Syntax: `my_tuple = (1, 2, 3)`
    - Features: Items cannot be changed; safer for fixed data.
3. **Differences:**

| Feature | List | Tuple |
| :-- | :-- | :-- |
| Mutability | Mutable | Immutable |
| Syntax | `[ ]` | `( )` |
| Performance | Slower | Faster |
| Methods | More (append, remove) | Fewer |

4. **Use case example:**
```python
fruits = ['apple', 'banana']
coordinates = (10.0, 20.0)  # fixed location
```


***

## 7. Short Notes


### 1. Iterators

#### Definition

- An **iterator** is an object that enables traversing through all the elements of a container (like list, tuple) one at a time.
- Provides a way to access elements sequentially without exposing the underlying structure.


#### Key Features

- Implements two special methods: `__iter__()` and `__next__()`.
- `__iter__()` returns the iterator object itself and is called once at the start of iteration.
- `__next__()` returns the next element in the sequence and advances the iterator.
- When no more elements are available, `__next__()` raises `StopIteration` exception to signal the end.


#### Syntax \& Example

```python
class MyNumbers:
    def __iter__(self):
        self.a = 1   # Initialize starting position
        return self

    def __next__(self):
        x = self.a
        self.a += 1  # Move to next number
        if x > 5:    # Stop after 5
            raise StopIteration
        return x

my_iter = iter(MyNumbers())

print(next(my_iter))  # Output: 1
print(next(my_iter))  # Output: 2
# and so on until 5, then StopIteration is raised
```


#### Usage Notes

- You mostly do not create iterators manually; instead, use Python’s `iter()` function and `for` loops that implicitly use iterators.
- Example iterating a list:

```python
my_list = [10, 20, 30]
it = iter(my_list)                   # Get iterator
print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30
# next(it) now raises StopIteration
```


***

### 2. Lambda Expressions

#### Definition

- An anonymous, small inline function defined with the keyword `lambda`.
- Useful for short, throwaway functions without a formal `def` block.


#### Features

- Can take any number of arguments but only a single expression.
- Automatically returns the result of the expression.
- Commonly used with functions like `map()`, `filter()`, `sorted()`, or as callbacks.


#### Syntax

```python
lambda arguments: expression
```


#### Examples

```python
square = lambda x: x * x
print(square(5))  # Output: 25

add = lambda x, y: x + y
print(add(3, 4))  # Output: 7

# Using lambda with map()
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x*x, numbers))
print(squares)  # Output: [1, 4, 9, 16]
```


***

### 3. Range Function

#### Definition

- Generates a sequence of integers, commonly used for looping a defined number of times.


#### Features

- Returns an iterable sequence starting from `start` (inclusive) to `stop` (exclusive) with `step` increments.
- Default `start` is 0, and default `step` is 1.


#### Syntax

```python
range(stop)
range(start, stop[, step])
```


#### Examples

```python
for i in range(5):
    print(i)
# Output: 0 1 2 3 4

for i in range(2, 10, 2):
    print(i)
# Output: 2 4 6 8
```


***

### 4. Function Decorators

#### Definition

- A **decorator** is a function that modifies or enhances the behaviour of another function without modifying its source code.
- Applied with `@decorator_name` syntax above the target function definition.


#### Features

- Takes a function as input and returns a new function, usually a wrapped version.
- Used for logging, access control, timing, caching, etc.


#### Syntax

```python
def decorator(func):
    def wrapper():
        # Code before function call
        func()
        # Code after function call
    return wrapper

@decorator
def say_hello():
    print("Hello!")
```


#### Example

```python
def uppercase_decorator(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@uppercase_decorator
def greet():
    return "hello world"

print(greet())  # Output: HELLO WORLD
```


#### Explanation

- The `greet` function is passed to `uppercase_decorator`.
- The returned `wrapper` function calls original `greet()`, modifies its output, and returns the modified result.
- When calling `greet()`, the decorated version runs.

***

## 8. Python Matrix Addition Program (with Validation)

```python
def input_matrix(rows, cols):
    matrix = []
    for i in range(rows):
        row = input(f"Row {i+1} values: ").split()
        if len(row) != cols:
            raise ValueError("Incorrect number of columns")
        matrix.append([int(x) for x in row])
    return matrix

def add_matrices(a, b):
    return [[a[i][j] + b[i][j] for j in range(len(a[0]))] for i in range(len(a))]

r = int(input("Rows: "))
c = int(input("Cols: "))

try:
    matrix1 = input_matrix(r, c)
    matrix2 = input_matrix(r, c)
    result = add_matrices(matrix1, matrix2)

    print("Matrix 1:")
    for row in matrix1:
        print(row)
    print("Matrix 2:")
    for row in matrix2:
        print(row)
    print("Result:")
    for row in result:
        print(row)
except Exception as e:
    print("Error:", e)
```


***

## 9. Fraction Class with Arithmetic

```python
class Fraction:
    def __init__(self, numerator=0, denominator=1):
        self.numerator = numerator
        self.denominator = denominator

    def set_fraction(self, numerator, denominator):
        self.numerator = numerator
        self.denominator = denominator

    def get_fraction(self):
        return f"{self.numerator}/{self.denominator}"

    def add(self, other):
        num = self.numerator * other.denominator + other.numerator * self.denominator
        den = self.denominator * other.denominator
        return Fraction(num, den)

    def subtract(self, other):
        num = self.numerator * other.denominator - other.numerator * self.denominator
        den = self.denominator * other.denominator
        return Fraction(num, den)
```


***

## 10. Fibonacci Series Function and Print

```python
def fibonacci(m):
    a, b = 0, 1
    if m == 1:
        return a
    elif m == 2:
        return b
    for _ in range(3, m+1):
        a, b = b, a + b
    return b

n = int(input("Number of terms: "))
for i in range(1, n+1):
    print(fibonacci(i), end=" ")
```


***

## 11. File Reading: Count Characters, Words, Lines

```python
filename = input("Enter filename: ")

try:
    with open(filename, 'r') as f:
        content = f.read()
        characters = len(content)
        words = len(content.split())
        f.seek(0)
        lines = len(f.readlines())

    print("Characters:", characters)
    print("Words:", words)
    print("Lines:", lines)
except FileNotFoundError:
    print("Error: File not found.")
```

