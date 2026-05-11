
# 📘 **Basic Number Programs**

## 1️⃣ Check if a Number is Positive, Negative, or Zero

```python
num = float(input("Enter a number: "))
if num > 0:
    print("Positive number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")
```

## 2️⃣ Check if a Number is Odd or Even

```python
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")
```

## 3️⃣ Check Leap Year

```python
year = int(input("Enter a year: "))
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("Leap Year")
else:
    print("Not a Leap Year")
```

## 4️⃣ Check Prime Number

```python
num = int(input("Enter a number: "))
if num > 1:
    for i in range(2, num):
        if num % i == 0:
            print("Not Prime")
            break
    else:
        print("Prime Number")
else:
    print("Not Prime")
```

## 5️⃣ Print All Prime Numbers in an Interval

```python
lower = int(input("Enter lower range: "))
upper = int(input("Enter upper range: "))
for num in range(lower, upper + 1):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                break
        else:
            print(num)
```

## 6️⃣ Find Factorial of a Number

```python
num = int(input("Enter a number: "))
factorial = 1
if num < 0:
    print("No factorial for negative numbers")
else:
    for i in range(1, num + 1):
        factorial *= i
    print("Factorial:", factorial)
```

## 7️⃣ Display Multiplication Table

```python
num = int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")
```

## 8️⃣ Print Fibonacci Sequence

```python
n_terms = int(input("How many terms? "))
n1, n2 = 0, 1
count = 0
while count < n_terms:
    print(n1)
    nth = n1 + n2
    n1 = n2
    n2 = nth
    count += 1
```

---

# 📗 **Intermediate Programs**

## 9️⃣ Check Armstrong Number

```python
num = int(input("Enter a number: "))
sum = 0
temp = num
n = len(str(num))
while temp > 0:
    digit = temp % 10
    sum += digit ** n
    temp //= 10
if num == sum:
    print("Armstrong Number")
else:
    print("Not Armstrong")
```

## 🔟 Find Armstrong Numbers in an Interval

```python
lower = int(input("Enter lower range: "))
upper = int(input("Enter upper range: "))
for num in range(lower, upper + 1):
    n = len(str(num))
    sum = 0
    temp = num
    while temp > 0:
        digit = temp % 10
        sum += digit ** n
        temp //= 10
    if num == sum:
        print(num)
```

## 1️⃣1️⃣ Sum of Natural Numbers

```python
n = int(input("Enter a number: "))
sum = 0
for i in range(1, n + 1):
    sum += i
print("Sum:", sum)
```

---

# 📙 **Operations on Strings, Lists, Tuples, Arrays**

## ✅ Create Lists/Tuples/Arrays and Access Elements

```python
lst = [10, 20, 30, 40]
tpl = (1, 2, 3, 4)

print(lst[2])     # List index
print(tpl[-1])    # Tuple negative index
```

## ✅ Extract Specific Elements

```python
print(lst[1:3])   # Slicing
```

## ✅ Len(), del(), remove(), range() Functions

```python
print(len(lst))
del lst[1]
lst.remove(40)
print(list(range(5)))
```

## ✅ Searching and Sorting

```python
lst = [3, 1, 4, 2]
lst.sort()
print(lst)
print(3 in lst)
```

## ✅ Dictionaries Creation and Access

```python
d = {"name": "Alice", "age": 25}
print(d["name"])
```

## ✅ Operations with Dictionaries

```python
d["city"] = "Pune"
print(d.keys())
print(d.values())
```

## ✅ Usage of map(), filter()

```python
nums = [1, 2, 3, 4]

squared = list(map(lambda x: x**2, nums))
print(squared)

even = list(filter(lambda x: x % 2 == 0, nums))
print(even)
```

---

# 📘 **Miscellaneous Programs**

## 1️⃣2️⃣ Find LCM

```python
def lcm(x, y):
    if x > y:
        greater = x
    else:
        greater = y
    while True:
        if (greater % x == 0) and (greater % y == 0):
            return greater
        greater += 1

n1 = int(input("Enter first number: "))
n2 = int(input("Enter second number: "))
print("LCM:", lcm(n1, n2))
```

## 1️⃣3️⃣ Find HCF

```python
def hcf(x, y):
    while(y):
        x, y = y, x % y
    return x

n1 = int(input("Enter first number: "))
n2 = int(input("Enter second number: "))
print("HCF:", hcf(n1, n2))
```

## 1️⃣4️⃣ Convert Decimal to Binary, Octal, Hexadecimal

```python
num = int(input("Enter a number: "))
print("Binary:", bin(num))
print("Octal:", oct(num))
print("Hexadecimal:", hex(num))
```

## 1️⃣5️⃣ Find ASCII Value

```python
ch = input("Enter a character: ")
print("ASCII value:", ord(ch))
```

## 1️⃣6️⃣ Simple Calculator

```python
def add(x, y):
    return x + y
def subtract(x, y):
    return x - y
def multiply(x, y):
    return x * y
def divide(x, y):
    return x / y

print("Select operation: +, -, *, /")
choice = input("Enter choice: ")

num1 = float(input("First number: "))
num2 = float(input("Second number: "))

if choice == '+':
    print(add(num1, num2))
elif choice == '-':
    print(subtract(num1, num2))
elif choice == '*':
    print(multiply(num1, num2))
elif choice == '/':
    print(divide(num1, num2))
else:
    print("Invalid input")
```

## 1️⃣7️⃣ Display Calendar

```python
import calendar
yy = int(input("Enter year: "))
mm = int(input("Enter month: "))
print(calendar.month(yy, mm))
```

## 1️⃣8️⃣ Fibonacci Using Recursion

```python
def recur_fibo(n):
    if n <= 1:
        return n
    else:
        return(recur_fibo(n-1) + recur_fibo(n-2))

n_terms = int(input("How many terms? "))
for i in range(n_terms):
    print(recur_fibo(i))
```

## 1️⃣9️⃣ Factorial Using Recursion

```python
def recur_factorial(n):
    if n == 1:
        return 1
    else:
        return n * recur_factorial(n - 1)

num = int(input("Enter a number: "))
print("Factorial:", recur_factorial(num))
```

## 2️⃣0️⃣ Get Class Name of Instance

```python
class MyClass:
    pass

obj = MyClass()
print(type(obj).__name__)
```

## 2️⃣1️⃣ Differentiate between type() and isinstance()

```python
a = 5
print(type(a))
print(isinstance(a, int))
```

---

# 📕 **File Operations & Exception Handling**

## ✅ File Read/Write/Search

```python
# Write
with open("test.txt", "w") as f:
    f.write("Hello, World!")

# Read
with open("test.txt", "r") as f:
    print(f.read())

# Search
with open("test.txt", "r") as f:
    content = f.read()
    if "World" in content:
        print("Found")
```

## ✅ Exception Handling Example

```python
try:
    num = int(input("Enter number: "))
    print(10 / num)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid input!")
finally:
    print("Done.")
```

---
