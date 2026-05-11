# I/O (Input/Output) in Python

***

### 1. File Objects

**Definition:**
A file object represents an open file and provides methods and attributes to interact with the file's content.

***

### 2. Creating a File Object

**Syntax:**

```python
file_object = open(filename, mode)
```

- `filename`: String path of the file
- `mode`: Specifies file operation
    - `'r'` – read (default)
    - `'w'` – write (creates/overwrites file)
    - `'a'` – append
    - `'b'` – binary mode (can be combined with other modes, e.g., `'rb'`)
    - `'+'` – read and write

**Example:**

```python
f = open("example.txt", "r")
```


***

### 3. Reading File Contents

**Methods:**

- `read()` – reads entire file
- `readline()` – reads one line at a time
- `readlines()` – reads all lines as a list

**Example:**

```python
with open("example.txt", "r") as f:
    content = f.read()
    print(content)
```


***

### 4. Writing Data into a File

**Methods:**

- `write(string)` – writes a string to file
- `writelines(list_of_strings)` – writes multiple strings

**Example:**

```python
with open("output.txt", "w") as f:
    f.write("Hello, world!\n")
    f.writelines(["Line 1\n", "Line 2\n"])
```


***

### 5. Reading and Writing CSV Files

Python’s `csv` module supports reading and writing CSV files, which are commonly used for tabular data.

**Reading CSV:**

```python
import csv

with open('data.csv', mode='r', newline='') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)  # each row is a list of strings
```

**Writing CSV:**

```python
import csv

data = [
    ['Name', 'Age', 'City'],
    ['Alice', '30', 'New York'],
    ['Bob', '25', 'Los Angeles']
]

with open('output.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)
```


***

### 6. Using with Clause

**Definition:**
`with` statement is a context manager that ensures proper acquisition and release of resources, such as automatically closing files after usage.

**Example:**

```python
with open("file.txt", "r") as f:
    data = f.read()
# file is automatically closed here
```


***

### 7. Using Exception Handling with File Operations

File operations can raise exceptions (e.g., `FileNotFoundError`). These should be handled gracefully.

**Example:**

```python
try:
    with open("nonexistent.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
```


***

These detailed notes cover basics of file handling, safe file opening/closing, reading/writing text and CSV files, and handling exceptions in Python I/O.

This completes the last unit as per your syllabus. If needed, more elaborations or additional example sets can be provided.
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://www.geeksforgeeks.org/python/reading-and-writing-csv-files-in-python/

[^2]: https://docs.python.org/3/library/csv.html

[^3]: https://www.programiz.com/python-programming/csv

[^4]: https://realpython.com/python-csv/

[^5]: https://www.geeksforgeeks.org/python/working-csv-files-python/

[^6]: https://dev.to/jenad88/day-39-40-reading-and-writing-csv-files-in-python-4j3o

[^7]: https://heycoach.in/blog/file-handling-with-open-and-csv/

[^8]: https://www.pythonforall.com/python/filehandling/fcsv

[^9]: https://www.w3schools.com/python/pandas/pandas_csv.asp

[^10]: https://www.teachoo.com/21958/4560/CSV-File/category/Concepts/

