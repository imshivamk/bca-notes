# Unit: Object-Oriented Programming (OOP) in Python


***

### Overview of OOP

**Definition:**
Object-Oriented Programming is a paradigm that organizes software design around data, or objects, rather than functions and logic. An object contains data (attributes) and code (methods) that act on the data.

Python supports OOP, allowing for modular, reusable, and scalable code.

**Four Pillars of OOP:**

- **Encapsulation:** Bundling data and methods that operate on the data within one unit (class).
- **Inheritance:** Mechanism to create a new class from an existing class, inheriting attributes and methods.
- **Polymorphism:** Ability to use a single interface to represent different data types or classes.
- **Abstraction:** Hiding complex implementation details and exposing only functionalities.

***

### Creating Classes and Objects

**Class:**
A blueprint for creating objects, defines attributes (data) and methods (functions).

**Object:**
An instance of a class representing a specific entity with its own data.

**Syntax:**

```python
class ClassName:
    class_attribute = value  # Shared among all instances

    def __init__(self, param1, param2):
        self.param1 = param1  # Instance attribute unique to each object
        self.param2 = param2

    def method(self):
        # define behavior
        print(self.param1)

# Creating objects (instances)
obj1 = ClassName(value1, value2)
obj2 = ClassName(value3, value4)

obj1.method()
obj2.method()
```

**Example:**

```python
class Dog:
    species = "Canine"  # Class attribute

    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age

    def speak(self):
        print(f"{self.name} says Woof!")

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

dog1.speak()  # Buddy says Woof!
dog2.speak()  # Max says Woof!
```


***

### Accessing Attributes and Built-In Class Attributes

- Access instance attributes with `object.attribute`.
- Access class attributes with `ClassName.attribute` or `object.attribute`.
- Special built-in attributes like `__dict__` (shows object attributes).

***

### Destroying Objects

- Python uses garbage collection to automatically manage memory.
- Objects are destroyed when no references exist.
- Manual destruction can be done using `del` keyword.
- Special method `__del__` can be defined for cleanup during destruction.

```python
class Person:
    def __del__(self):
        print(f"Deleting object {self}")

p = Person()
del p  # Explicitly deletes object, calls __del__
```


***

### Summary

OOP in Python helps model complex real-world entities as objects, combining data and functionality, providing clean and maintainable code.

***

Say “next” to move on to the Exception Handling unit.
<span style="display:none">[^1][^2][^3][^4][^5][^6][^7]</span>

<div style="text-align: center">⁂</div>

[^1]: https://realpython.com/python3-object-oriented-programming/

[^2]: https://www.geeksforgeeks.org/python/python-oops-concepts/

[^3]: https://www.w3schools.com/python/python_oop.asp

[^4]: https://www.youtube.com/watch?v=JeznW_7DlB0

[^5]: https://kinsta.com/blog/python-object-oriented-programming/

[^6]: https://www.programiz.com/python-programming/object-oriented-programming

[^7]: https://www.pythoncheatsheet.org/cheatsheet/oop-basics

