# Unit: Lists/Tuples/Ranges in Python


***

### 1. Introduction

Python provides several built-in data structures to store collections of data: lists, tuples, ranges, sets, and dictionaries. Lists and tuples are sequence types differing mainly in mutability.

***

### 2. Lists in Python

**Definition:**
A list is an ordered, mutable collection of elements, enclosed in square brackets `[ ]`. Lists can contain mixed data types.

**Syntax:**

```python
my_list = [10, "hello", 3.14]
```

**Important Operations:**

- Access: `my_list`  (indexing starts at 0)
- Modify: `my_list = "world"`[^1]
- Append: `my_list.append(5)`
- Remove: `my_list.remove("hello")`
- Length: `len(my_list)`

**Example:**

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[^1])     # banana
fruits.append("date")
print(fruits)        # ['apple', 'banana', 'cherry', 'date']
fruits[^0] = "apricot"
print(fruits)        # ['apricot', 'banana', 'cherry', 'date']
```


***

### 3. Understanding Iterators

**Definition:**
An iterator is an object representing a stream of data. It uses the `iter()` function to get an iterator and `next()` to fetch next item.

**Syntax and Example:**

```python
my_iter = iter([1, 2, 3])
print(next(my_iter))  # 1
print(next(my_iter))  # 2
```

All sequence types (lists, tuples, strings) are iterable by default.

***

### 4. Generators

**Definition:**
Generators are special iterators created using functions with `yield` statements that generate values on the fly and save memory.

**Syntax:**

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1
```

**Usage:**

```python
for num in countdown(3):
    print(num)  # 3, 2, 1
```


***

### 5. Comprehensions and Lambda Expressions

**Comprehensions:**
A concise way to create lists, tuples, sets, or dictionaries.

**List comprehension example:**

```python
squares = [x*x for x in range(5)]  # [0, 1, 4, 9, 16]
```

**Lambda expressions:**
Anonymous functions defined without a name, used for short throwaway functions.

**Syntax and Example:**

```python
square = lambda x: x*x
print(square(5))  # 25
```


***

### 6. Generators and Yield, Next and Ranges

- `yield` creates generators producing values lazily.
- `next(generator)` retrieves next value from generator.

**Ranges:**
Immutable sequence of numbers, usually used in for-loops.

**Syntax:**

```python
range(start, stop, step)
```

**Example:**

```python
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
```


***

### 7. Understanding and Using Ranges

Ranges support iteration without storing the whole sequence in memory.

**Example:**

```python
print(list(range(5)))  # [0, 1, 2, 3, 4]
print(tuple(range(3, 9, 2)))  # (3, 5, 7)
```


***

### 8. Ordered Sets with Tuples

**Definition:**
Tuples are ordered, immutable sequences enclosed in parentheses `( )`.

**Syntax:**

```python
my_tuple = (1, "hello", 3.14)
```

**Key points:**

- Tuples are immutable (cannot be changed after creation).
- Can contain duplicates, mixed types.
- Useful for fixed data sets.

**Single-item tuple syntax:**

```python
single = (5,)  # comma needed, otherwise it's just an int
```

**Example:**

```python
colors = ("red", "green", "blue")
print(colors[^2])  # blue
```


***

### 9. Introduction to Python Dictionaries (Brief)

**Definition:**
Dictionaries store key-value pairs. Keys must be immutable types (e.g., strings, numbers, or tuples).

**Syntax:**

```python
my_dict = {"name": "Alice", "age": 25}
```


***

### 10. Python Sets

**Definition:**
Sets are unordered collections of unique elements.

**Syntax:**

```python
my_set = {1, 2, 3}
my_set.add(4)
```


***

These notes cover detailed concepts, syntax, and examples for your syllabus on lists, tuples, ranges, iterators, generators, comprehensions, and basic dictionaries and sets.

Say "next" when ready to move on to the "Functions" unit.
<span style="display:none">[^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://docs.python.org/3/tutorial/datastructures.html

[^2]: https://www.dataquest.io/blog/data-structures-in-python/

[^3]: https://realpython.com/python-lists-tuples/

[^4]: https://www.w3schools.com/python/python_tuples.asp

[^5]: https://www.topcoder.com/thrive/articles/python-data-structures-list-and-tuples

[^6]: https://www.geeksforgeeks.org/python/python-data-structures/

[^7]: https://www.mssqltips.com/sqlservertip/7127/python-list-tuple-range-dictionary-and-set-data-type-examples/

[^8]: https://www.youtube.com/watch?v=gOMW_n2-2Mw

[^9]: https://www.w3schools.com/python/python_lists.asp

