## 1. Patterns

### Square of Stars

```python
n = 5
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()
```

**Output:**

```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

---

### Right-Angle Triangle

```python
n = 5
for i in range(1, n+1):
    for j in range(i):
        print("*", end=" ")
    print()
```

**Output:**

```
* 
* * 
* * * 
* * * * 
* * * * *
```

---

### Inverted Triangle

```python
n = 5
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

**Output:**

```
* * * * *
* * * * 
* * * 
* * 
*
```

---

### Star Pyramid

```python
n = 5
for i in range(1, n+1):
    for j in range(n-i):
        print(" ", end=" ")
    for j in range(i):
        print("*", end=" ")
    print()
```

**Output:**

```
        * 
      * * 
    * * * 
  * * * * 
* * * * *
```

---

### Inverted Star Pyramid

```python
n = 5
for i in range(n, 0, -1):
    for j in range(n-i):
        print(" ", end=" ")
    for j in range(i):
        print("*", end=" ")
    print()
```

**Output:**

```
* * * * *
  * * * *
    * * *
      * *
        *
```

---

### Number Pyramid

```python
n = 5
for i in range(1, n+1):
    for j in range(n-i):
        print(" ", end=" ")
    for j in range(1, i+1):
        print(j, end=" ")
    print()
```

**Output:**

```
        1 
      1 2 
    1 2 3 
  1 2 3 4 
1 2 3 4 5
```

---

### Diamond Pattern

```python
n = 5
# Upper half
for i in range(1, n+1):
    for j in range(n-i):
        print(" ", end=" ")
    for j in range(2*i-1):
        print("*", end=" ")
    print()
# Lower half
for i in range(n-1, 0, -1):
    for j in range(n-i):
        print(" ", end=" ")
    for j in range(2*i-1):
        print("*", end=" ")
    print()
```

**Output:**

```
        * 
      * * * 
    * * * * * 
  * * * * * * * 
* * * * * * * * *
  * * * * * * * 
    * * * * * 
      * * * 
        *
```

---

## 2. Matrix Programs

### Input and Print Matrix

```python
rows = 2
cols = 3

matrix = []
for i in range(rows):
    row = []
    for j in range(cols):
        val = int(input(f"Enter element at ({i},{j}): "))
        row.append(val)
    matrix.append(row)

print("Matrix is:")
for i in range(rows):
    for j in range(cols):
        print(matrix[i][j], end=" ")
    print()
```

**Input Example:**

```
1 2 3
4 5 6
```

**Output:**

```
Matrix is:
1 2 3 
4 5 6
```

---

### Matrix Addition

```python
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

rows, cols = len(A), len(A[0])
result = []

for i in range(rows):
    row = []
    for j in range(cols):
        row.append(A[i][j] + B[i][j])
    result.append(row)

print("Addition:")
for row in result:
    print(row)
```

**Output:**

```
Addition:
[6, 8]
[10, 12]
```

---

### Matrix Multiplication

```python
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

rows, cols = len(A), len(B[0])
result = [[0]*cols for _ in range(rows)]

for i in range(len(A)):
    for j in range(len(B[0])):
        for k in range(len(B)):
            result[i][j] += A[i][k] * B[k][j]

print("Multiplication:")
for row in result:
    print(row)
```

**Output:**

```
Multiplication:
[19, 22]
[43, 50]
```

---

### Transpose of Matrix

```python
A = [[1, 2, 3], [4, 5, 6]]
rows, cols = len(A), len(A[0])

transpose = []
for i in range(cols):
    row = []
    for j in range(rows):
        row.append(A[j][i])
    transpose.append(row)

print("Transpose:")
for row in transpose:
    print(row)
```

**Output:**

```
Transpose:
[1, 4]
[2, 5]
[3, 6]
```

---

## 3. Basic Number Problems

### Fibonacci Series

```python
n = 10
a, b = 0, 1
for i in range(n):
    print(a, end=" ")
    a, b = b, a+b
```

**Output:**

```
0 1 1 2 3 5 8 13 21 34
```

---

### Factorial

```python
n = 5
fact = 1
for i in range(1, n+1):
    fact *= i
print("Factorial:", fact)
```

**Output:**

```
Factorial: 120
```

---

### Prime Number Check

```python
n = 29
is_prime = True

if n < 2:
    is_prime = False
else:
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break

if is_prime:
    print("Prime")
else:
    print("Not Prime")
```

**Output:**

```
Prime
```

---

### Palindrome Number

```python
n = 121
temp = n
rev = 0

while n > 0:
    d = n % 10
    rev = rev*10 + d
    n //= 10

if temp == rev:
    print("Palindrome")
else:
    print("Not Palindrome")
```

**Output:**

```
Palindrome
```

---

### Armstrong Number

```python
n = 153
temp = n
sum = 0
digits = len(str(n))

while n > 0:
    d = n % 10
    sum += d**digits
    n //= 10

if sum == temp:
    print("Armstrong")
else:
    print("Not Armstrong")
```

**Output:**

```
Armstrong
```

---

## 4. String Problems

### Reverse a String

```python
s = "Python"
rev = ""
for ch in s:
    rev = ch + rev
print("Reversed:", rev)
```

**Output:**

```
Reversed: nohtyP
```

---

### Count Vowels

```python
s = "programming"
vowels = "aeiou"
count = 0

for ch in s:
    if ch in vowels:
        count += 1

print("Vowel count:", count)
```

**Output:**

```
Vowel count: 3
```

---

### Palindrome String

```python
s = "madam"
rev = ""
for ch in s:
    rev = ch + rev

if s == rev:
    print("Palindrome String")
else:
    print("Not Palindrome")
```

**Output:**

```
Palindrome String
```

---

### Anagram Check

```python
s1 = "listen"
s2 = "silent"

if sorted(s1) == sorted(s2):
    print("Anagram")
else:
    print("Not Anagram")
```

**Output:**

```
Anagram
```

---

### Character Frequency

```python
s = "banana"
freq = {}

for ch in s:
    if ch in freq:
        freq[ch] += 1
    else:
        freq[ch] = 1

print("Character frequency:", freq)
```

**Output:**

```
Character frequency: {'b': 1, 'a': 3, 'n': 2}
```

---

⚡ Now you have a **complete set of 25+ Python practice programs** with outputs, covering **patterns, pyramids, matrices, number problems, and string problems**.

Do you want me to also prepare a **mini-question bank (50–60 problems with hints, no solutions)** so you can try them yourself before checking answers?