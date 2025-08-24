---
dg-publish: true
---
**INDEX**

- [[#Data types|Data types]]
	- [[#Data types#1. Definition|1. Definition]]
	- [[#Data types#2. Classification of Data Types|2. Classification of Data Types]]
		- [[#2. Classification of Data Types#a. Primitive Data Types|a. Primitive Data Types]]
		- [[#2. Classification of Data Types#b. Reference Data Types|b. Reference Data Types]]
- [[#Wrapper classes|Wrapper classes]]
	- [[#Wrapper classes#1. Definition|1. Definition]]
	- [[#Wrapper classes#2. Wrapper Classes|2. Wrapper Classes]]
	- [[#Wrapper classes#3. Characteristics of Wrapper Classes|3. Characteristics of Wrapper Classes]]
	- [[#Wrapper classes#Advantages of Wrapper Classes|Advantages of Wrapper Classes]]
	- [[#Wrapper classes#Disadvantages of Wrapper Classes|Disadvantages of Wrapper Classes]]
	- [[#Wrapper classes#Conclusion|Conclusion]]

## Data types
### 1. Definition
Data types in Java specify the size and type of values that can be stored in a variable. They determine how the data is represented in memory and the operations that can be performed on it.

### 2. Classification of Data Types
Java data types are categorized into two main groups:

#### a. Primitive Data Types
These are the basic data types provided by Java, representing single values and not objects. There are eight primitive data types:

| Data Type | Size (in bytes) | Description                          |
|-----------|------------------|--------------------------------------|
| `byte`    | 1                | An 8-bit signed integer              |
| `short`   | 2                | A 16-bit signed integer              |
| `int`     | 4                | A 32-bit signed integer              |
| `long`    | 8                | A 64-bit signed integer              |
| `float`   | 4                | A single-precision 32-bit floating point |
| `double`  | 8                | A double-precision 64-bit floating point |
| `char`    | 2                | A single 16-bit Unicode character    |
| `boolean`  | 1 (not precisely defined) | Represents one of two values: `true` or `false` |

#### b. Reference Data Types
1. Reference data types store references (or memory addresses) to objects and arrays rather than the actual values. 
2. Reference data types may introduce additional memory overhead compared to primitive types.
They include:
- Classes: Instances of user-defined classes.
- Interfaces: Definitions of methods that can be implemented by classes.
- Arrays: A collection of elements of the same type.
- Strings: Objects that represent sequences of characters (although they are not primitive, they are frequently treated as such in Java).

- Static Typing: Java is statically typed, meaning the data type of a variable must be declared at compile time. 
- Type Conversion: Java supports automatic (implicit) and manual (explicit) type conversion. For example:
  - Widening Conversion: Automatic conversion from a smaller to a larger data type (e.g., `int` to `long`).
  - Narrowing Conversion: Manual conversion from a larger to a smaller data type (e.g., `double` to `int`), which may result in data loss.

## Wrapper classes

Here’s a structured overview of wrapper classes in Java, including their definition, historical context, characteristics, advantages, and disadvantages:

### 1. Definition
Wrapper classes in Java are special classes that encapsulate (or "wrap") primitive data types into objects. Each primitive data type has a corresponding wrapper class, allowing developers to treat primitive types as objects, enabling them to be used in contexts that require objects, such as collections.

### 2. Wrapper Classes
Here are the eight primitive data types and their corresponding wrapper classes:

| Primitive Type | Wrapper Class  | Example of Wrapper Class Usage      |
|----------------|----------------|-------------------------------------|
| `byte`         | `Byte`         | `Byte b = new Byte((byte) 10);`   |
| `short`        | `Short`        | `Short s = new Short((short) 20);`|
| `int`          | `Integer`      | `Integer i = new Integer(30);`    |
| `long`         | `Long`         | `Long l = new Long(40L);`         |
| `float`        | `Float`        | `Float f = new Float(50.5f);`     |
| `double`       | `Double`       | `Double d = new Double(60.5);`    |
| `char`         | `Character`    | `Character c = new Character('A');`|
| `boolean`      | `Boolean`      | `Boolean bool = new Boolean(true);`|

### 3. Characteristics of Wrapper Classes
- Object-Oriented: They provide a way to use primitive types as objects, allowing them to participate in Java's object-oriented features.
- Immutable: Wrapper class objects are immutable, meaning their values cannot be changed once they are created. Any change creates a new object.
- Methods: Wrapper classes provide methods for converting between different data types, parsing strings into primitives, and performing operations on the wrapped value.

### Advantages of Wrapper Classes
- Compatibility with Collections: Wrapper classes can be used in Java collections (e.g., `ArrayList`, `HashMap`) which require objects.
- Utility Methods: They provide useful utility methods for conversion, comparison, and manipulation of data.
- Type Safety: They provide type-safe operations on primitive values and can help avoid type-related errors.

### Disadvantages of Wrapper Classes
- Performance Overhead: Using wrapper classes can introduce performance overhead due to the creation of objects and the additional memory required compared to primitive types.
- Boxing and Unboxing Costs: Autoboxing and unboxing (the automatic conversion between primitive types and wrapper classes) can lead to additional overhead in performance-sensitive applications.

### Conclusion
1. bridging the gap between primitive data types and the object-oriented nature of Java. 
2. They enable the use of primitive types in collections and provide a wealth of utility methods. 
3. While they offer significant advantages, including type safety and compatibility with the collections framework, developers must also consider the potential performance overhead associated with their use. 