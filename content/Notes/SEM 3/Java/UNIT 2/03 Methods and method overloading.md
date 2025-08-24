---
dg-publish: true
---

- [[#1. Definition of Methods|1. Definition of Methods]]
- [[#2. Characteristics of Methods|2. Characteristics of Methods]]
- [[#3. Defining a Method|3. Defining a Method]]
- [[#4. Calling a Method|4. Calling a Method]]
- [[#5. Method Overloading|5. Method Overloading]]
	- [[#5. Method Overloading#Characteristics of Method Overloading|Characteristics of Method Overloading]]
- [[#6. Examples of Method Overloading|6. Examples of Method Overloading]]
- [[#7. Advantages|7. Advantages]]

### 1. Definition of Methods
In Java, a method is a block of code that performs a specific task. It is used to define the behavior of an object and can accept parameters and return a value. Methods help in organizing code, promoting reusability, and improving readability.

### 2. Characteristics of Methods
- Name: Each method must have a unique name within its class.
- Return Type: A method can return a value of a specific type or `void` if no value is returned.
- Parameters: Methods can accept zero or more parameters, allowing data to be passed into them.
- Access Modifiers: Methods can have access modifiers (`public`, `private`, `protected`, or default) that control visibility.
- Static and Instance Methods: Methods can be static (belonging to the class) or instance methods (belonging to an object of the class).

### 3. Defining a Method
The basic syntax for defining a method in Java is as follows:

```java
access_modifier return_type method_name(parameter_type parameter_name) {
    // method body
}
```

Example:
```java
public class Calculator {
    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }
}
```

### 4. Calling a Method
To call a method, you need to create an instance of the class (for instance methods) or call it directly (for static methods):

Example:
```java
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator(); // Create an instance of Calculator
        int sum = calc.add(5, 10); // Call the add method
        System.out.println("Sum: " + sum); // Outputs: Sum: 15
    }
}
```

### 5. Method Overloading
Method overloading in Java allows a class to have multiple methods with the same name but different parameter lists (different type, number, or both). It enhances the readability of the code and allows methods to perform similar functions on different types or numbers of inputs.

#### Characteristics of Method Overloading
- Same Method Name: All overloaded methods must have the same name.
- Different Parameter Lists: The methods must differ in parameter type, number of parameters, or both.
- Return Type: The return type can be the same or different, but it does not contribute to method overloading.

### 6. Examples of Method Overloading
Example:
```java
public class Calculator {
    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method to add two double values
    public double add(double a, double b) {
        return a + b;
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum of 5 and 10: " + calc.add(5, 10)); // Outputs: Sum of 5 and 10: 15
        System.out.println("Sum of 5, 10, and 15: " + calc.add(5, 10, 15)); // Outputs: Sum of 5, 10, and 15: 30
        System.out.println("Sum of 5.5 and 10.5: " + calc.add(5.5, 10.5)); // Outputs: Sum of 5.5 and 10.5: 16.0
    }
}
```

### 7. Advantages 
- Improved Readability: Methods with the same name performing similar functions can make the code easier to read and understand.
- Code Reusability: Allows the same method name to be used for different purposes, reducing redundancy.
- Flexibility: Provides the ability to perform the same operation with different data types or numbers of inputs.

