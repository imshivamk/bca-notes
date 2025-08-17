---
dg-publish: true
---

- [[#1. bank account program|1. bank account program]]
- [[#2. What is a constructer? Explain it's types in detail|2. What is a constructer? Explain it's types in detail]]
	- [[#2. What is a constructer? Explain it's types in detail#Constructor in Java|Constructor in Java]]
	- [[#2. What is a constructer? Explain it's types in detail#Types of Constructors|Types of Constructors]]
		- [[#Types of Constructors#1. Default Constructor|1. Default Constructor]]
		- [[#Types of Constructors#2. Parameterized Constructor|2. Parameterized Constructor]]
	- [[#2. What is a constructer? Explain it's types in detail#Key Points|Key Points]]
	- [[#2. What is a constructer? Explain it's types in detail#Advantages of Using Constructors|Advantages of Using Constructors]]
	- [[#2. What is a constructer? Explain it's types in detail#Disadvantages of Using Constructors|Disadvantages of Using Constructors]]
- [[#3. What is method overloading? Explain with suitable examples|3. What is method overloading? Explain with suitable examples]]
	- [[#3. What is method overloading? Explain with suitable examples#Method Overloading|Method Overloading]]
	- [[#3. What is method overloading? Explain with suitable examples#Characteristics of Method Overloading|Characteristics of Method Overloading]]
	- [[#3. What is method overloading? Explain with suitable examples#Advantages of Method Overloading|Advantages of Method Overloading]]
	- [[#3. What is method overloading? Explain with suitable examples#Examples of Method Overloading|Examples of Method Overloading]]
	- [[#3. What is method overloading? Explain with suitable examples#Conclusion|Conclusion]]
- [[#4. Briefly explain the features of Java|4. Briefly explain the features of Java]]
	- [[#4. Briefly explain the features of Java#1. Platform Independence|1. Platform Independence]]
	- [[#4. Briefly explain the features of Java#2. Object-Oriented|2. Object-Oriented]]
	- [[#4. Briefly explain the features of Java#3. Robustness|3. Robustness]]
	- [[#4. Briefly explain the features of Java#4. Security|4. Security]]
	- [[#4. Briefly explain the features of Java#5. Multithreading|5. Multithreading]]
	- [[#4. Briefly explain the features of Java#6. Rich Standard Library|6. Rich Standard Library]]
	- [[#4. Briefly explain the features of Java#7. High Performance|7. High Performance]]
	- [[#4. Briefly explain the features of Java#8. Dynamic and Extensible|8. Dynamic and Extensible]]
	- [[#4. Briefly explain the features of Java#9. Networking Capabilities|9. Networking Capabilities]]
	- [[#4. Briefly explain the features of Java#10. Community and Ecosystem|10. Community and Ecosystem]]
- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example|5. What is inheritance ? Explain multi-level inheritance in detail with an example]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Inheritance|Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Key Features of Inheritance|Key Features of Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Types of Inheritance|Types of Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Multi-Level Inheritance|Multi-Level Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Example of Multi-Level Inheritance|Example of Multi-Level Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Explanation of the Example|Explanation of the Example]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Advantages of Multi-Level Inheritance|Advantages of Multi-Level Inheritance]]
	- [[#5. What is inheritance ? Explain multi-level inheritance in detail with an example#Conclusion|Conclusion]]
- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples|6. What is a loop? Describe 'for' and 'while' loops with suitable examples]]
	- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples#Loop in Java|Loop in Java]]
	- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples#Types of Loops in Java|Types of Loops in Java]]
		- [[#Types of Loops in Java#1. For Loop|1. For Loop]]
		- [[#Types of Loops in Java#2. While Loop|2. While Loop]]
	- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples#Key Differences|Key Differences]]
	- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples#Advantages of Using Loops|Advantages of Using Loops]]
	- [[#6. What is a loop? Describe 'for' and 'while' loops with suitable examples#Disadvantages of Using Loops|Disadvantages of Using Loops]]
- [[#7. What is an array? explain 1d array in detail|7. What is an array? explain 1d array in detail]]


## 1. bank account program 

```java
public class pyq1 {  
    public static void main(String[] args) {  
        BankAccount a = new BankAccount();  
        // will show not set values  
        a.showInfo();  
        // set the values  
        a.setName();  
        a.setAccountNumber();  
        a.setAccountType();  
        a.balance();  
        // show info  
        a.showInfo();  
        a.deposit();  
        a.withdraw();  
    }  
}  
```

```java
import java.util.Scanner;  
  
public class BankAccount{  
  
    private double balance;  
    private int AccountNumber;  
    private  String name;  
    private String AccountType;  
  
    Scanner sc = new Scanner(System.in);  
  
    public BankAccount(){  
        this.balance = 0;  
        this.AccountType = "Not set";  
        this.name = "Not set";  
        this.AccountNumber = 0;  
    }  
  
    public void deposit(){  
        System.out.println("Enter deposit amount");  
        double amount = Integer.valueOf(sc.nextLine());  
        this.balance = this.balance + amount;  
        System.out.println("Deposited " + amount + " Rs");  
        System.out.println("Current balance: " + this.balance);  
    }  
    public void withdraw(){  
        System.out.println("Enter withdrawl amount");  
        double amount = Integer.valueOf(sc.nextLine());  
        this.balance = this.balance - amount;  
        System.out.println("Withdrew " + amount + " Rs");  
        System.out.println("Current balance: " + this.balance);  
    }  
  
    public void setName(){  
        System.out.println("Enter name");  
        String name = sc.nextLine();  
        this.name = name;  
    }  
    public void setBalance(){  
        System.out.println("Enter balance");  
        double balance = Integer.valueOf(sc.nextLine());  
        this.balance = balance;  
    }  
    public void setAccountNumber(){  
        System.out.println("Enter acc number");  
        int accountNo = Integer.valueOf(sc.nextLine());  
        this.AccountNumber = accountNo;  
    }  
    public void setAccountType(){  
        System.out.println("Enter type");  
        String type = sc.nextLine();  
        this.AccountType = type;  
    }  
  
    public void balance(){  
        System.out.println("Current balance: " + this.balance);  
    }  
    public void showInfo(){  
        System.out.println("Depositer name: " + this.name);  
        System.out.println("Account number: " + this.AccountNumber);  
        System.out.println("Account type: " + this.AccountType);  
        System.out.println("Current balance: " + this.balance);  
    }  
  
  
}
```

## 2. What is a constructer? Explain it's types in detail

### Constructor in Java

A constructor is a special method in a Java class that is called when an object of the class is instantiated. Constructors are used to initialize the object's attributes and allocate memory for the object. They have the same name as the class and do not have a return type, not even `void`.

### Types of Constructors

There are two main types of constructors in Java:

1. Default Constructor
2. Parameterized Constructor

#### 1. Default Constructor

- Definition: A default constructor is a constructor that does not take any arguments. If no constructor is explicitly defined in a class, the Java compiler automatically provides a default constructor.
  
- Usage: It is primarily used to initialize instance variables with default values (e.g., `0`, `null`, or `false`).

- Example:
  ```java
  public class Car {
      String model;
      int year;

      // Default Constructor
      public Car() {
          model = "Unknown";
          year = 2020;
      }
      
      void display() {
          System.out.println("Model: " + model + ", Year: " + year);
      }
  }

  public class Main {
      public static void main(String[] args) {
          Car car = new Car(); // Calls the default constructor
          car.display(); // Output: Model: Unknown, Year: 2020
      }
  }
  ```

#### 2. Parameterized Constructor

- Definition: A parameterized constructor is a constructor that takes parameters. It allows the user to provide initial values for object attributes at the time of object creation.

- Usage: This constructor is used to create objects with specific values for their attributes.

- Example:
  ```java
  public class Car {
      String model;
      int year;

      // Parameterized Constructor
      public Car(String model, int year) {
          this.model = model; // 'this' refers to the current object's model
          this.year = year;
      }
      
      void display() {
          System.out.println("Model: " + model + ", Year: " + year);
      }
  }

  public class Main {
      public static void main(String[] args) {
          Car car1 = new Car("Toyota", 2021); // Calls the parameterized constructor
          Car car2 = new Car("Honda", 2022); // Calls the parameterized constructor
          
          car1.display(); // Output: Model: Toyota, Year: 2021
          car2.display(); // Output: Model: Honda, Year: 2022
      }
  }
  ```

### Key Points

- No Return Type: Constructors do not have a return type, not even `void`.
- Name: They must have the same name as the class.
- Overloading: Constructors can be overloaded, meaning you can have multiple constructors in the same class with different parameter lists.
  
### Advantages of Using Constructors

- Initialization: They allow for proper initialization of objects when they are created.
- Overloading: They support constructor overloading, providing flexibility in object creation.
- Encapsulation: Constructors can enforce encapsulation by controlling how an object's state is initialized.

### Disadvantages of Using Constructors

- Complexity: Overloading constructors can lead to complex code if not managed properly.
- Limited Functionality: Constructors cannot return values or have any return types, limiting their functionality.

Constructors play a crucial role in object-oriented programming by ensuring that objects are created with valid states.



## 3. What is method overloading? Explain with suitable examples

### Method Overloading

Definition:
Method overloading is a feature in Java that allows a class to have more than one method with the same name but different parameters (different type, number, or both). It enhances the readability of the code and allows methods to perform similar but slightly different functions.

### Characteristics of Method Overloading
- Same Method Name: All overloaded methods must have the same name.
- Different Parameters: The methods must differ in the type, number, or order of parameters.
- Return Type: The return type can be different, but it alone does not distinguish overloaded methods.
- Compile-Time Polymorphism: Method overloading is a compile-time polymorphism because the method to be executed is determined at compile time based on the method signature.

### Advantages of Method Overloading
- Improved Readability: Makes the code more intuitive and easier to understand.
- Code Reusability: Promotes the use of the same method name for similar operations, reducing redundancy.
- Ease of Maintenance: Changes in method implementation can be managed easily without altering the method name.

### Examples of Method Overloading

Example 1: Different Number of Parameters

```java
class MathOperations {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations math = new MathOperations();
        
        // Calling the add method with two arguments
        System.out.println("Sum of 5 and 10: " + math.add(5, 10));
        
        // Calling the overloaded add method with three arguments
        System.out.println("Sum of 5, 10, and 15: " + math.add(5, 10, 15));
    }
}
```

Output:
```
Sum of 5 and 10: 15
Sum of 5, 10, and 15: 30
```

Example 2: Different Parameter Types

```java
class Display {
    // Method to display an integer
    void show(int a) {
        System.out.println("Integer: " + a);
    }

    // Overloaded method to display a double
    void show(double b) {
        System.out.println("Double: " + b);
    }

    // Overloaded method to display a string
    void show(String c) {
        System.out.println("String: " + c);
    }
}

public class Main {
    public static void main(String[] args) {
        Display display = new Display();
        
        // Calling the show method with different parameter types
        display.show(10);          // Calls the method with an integer
        display.show(10.5);        // Calls the method with a double
        display.show("Hello");     // Calls the method with a string
    }
}
```

Output:
```
Integer: 10
Double: 10.5
String: Hello
```

### Conclusion
Method overloading in Java allows for flexibility and improved code management by enabling multiple methods to share the same name while differing in their parameters. This feature enhances both readability and maintainability in software development.

## 4. Briefly explain the features of Java

Java is a widely used programming language known for its robustness, portability, and versatility. Here are some key features of Java:

### 1. Platform Independence
   - Write Once, Run Anywhere: Java code is compiled into bytecode, which can run on any system with a Java Virtual Machine (JVM), making it platform-independent.

### 2. Object-Oriented
   - Encapsulation, Inheritance, and Polymorphism: Java is built around the concept of objects, which allows for modular code and reusability.

### 3. Robustness
   - Strong Memory Management: Java has automatic garbage collection, which helps manage memory and avoid memory leaks.
   - Exception Handling: It provides a robust exception handling mechanism to manage runtime errors.

### 4. Security
   - Built-in Security Features: Java provides a secure environment through features like bytecode verification, which helps protect against malicious code.

### 5. Multithreading
   - Concurrent Execution: Java supports multithreading, allowing multiple threads to run simultaneously, improving the efficiency of applications.

### 6. Rich Standard Library
   - Extensive API: Java has a comprehensive standard library (Java API) that provides various classes and methods for tasks such as networking, data manipulation, and GUI development.

### 7. High Performance
   - Just-In-Time Compiler (JIT): Java's JIT compiler converts bytecode into native machine code at runtime, enhancing performance.

### 8. Dynamic and Extensible
   - Dynamic Loading of Classes: Java allows classes to be loaded dynamically at runtime, which makes it flexible and adaptable.

### 9. Networking Capabilities
   - Built-in Networking Support: Java simplifies the development of networked applications, offering libraries for communication over the internet.

### 10. Community and Ecosystem
   - Strong Community Support: A vast community and numerous resources, libraries, and frameworks make development in Java easier and more productive.

These features make Java a popular choice for various applications, ranging from web development to enterprise solutions and mobile applications.

## 5. What is inheritance ? Explain multi-level inheritance in detail with an example

### Inheritance

Definition:
Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (called the child or subclass) to inherit properties and behaviors (methods) from another class (called the parent or superclass). It promotes code reusability, establishes a hierarchical relationship between classes, and helps in implementing polymorphism.

### Key Features of Inheritance
- Reusability: Child classes can reuse the methods and attributes of the parent class, reducing redundancy.
- Method Overriding: Child classes can provide specific implementations of methods defined in the parent class.
- Access Modifiers: Inheritance respects access modifiers, determining the visibility of inherited members (public, protected, private).

### Types of Inheritance
1. Single Inheritance: A class inherits from one superclass.
2. Multiple Inheritance: A class inherits from more than one superclass (not supported directly in Java).
3. Multilevel Inheritance: A class is derived from another derived class, forming a chain.
4. Hierarchical Inheritance: Multiple classes inherit from the same superclass.

### Multi-Level Inheritance

Definition:
Multi-level inheritance occurs when a class inherits from another class, which is also a subclass of another class. In this type of inheritance, a chain of classes is formed where each class derives from the one above it.

### Example of Multi-Level Inheritance

Consider a scenario where we have three classes: `Animal`, `Mammal`, and `Dog`. 

1. `Animal` is the base class.
2. `Mammal` is a subclass of `Animal`.
3. `Dog` is a subclass of `Mammal`.

Here’s how we can implement this in Java:

```java
// Base class
class Animal {
    void eat() {
        System.out.println("Animal is eating.");
    }
}

// Intermediate class
class Mammal extends Animal {
    void walk() {
        System.out.println("Mammal is walking.");
    }
}

// Derived class
class Dog extends Mammal {
    void bark() {
        System.out.println("Dog is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        
        // Calling methods from different levels of inheritance
        dog.eat();   // Method from Animal class
        dog.walk();  // Method from Mammal class
        dog.bark();  // Method from Dog class
    }
}
```

Output:
```
Animal is eating.
Mammal is walking.
Dog is barking.
```

### Explanation of the Example
- Class `Animal`: This is the base class with a method `eat()`.
- Class `Mammal`: This class extends `Animal` and adds a method `walk()`.
- Class `Dog`: This class extends `Mammal` and adds a method `bark()`.

When we create an object of the `Dog` class, we can access methods from both `Animal` and `Mammal`, demonstrating multi-level inheritance. This structure allows the `Dog` class to inherit properties and behaviors from both its parent (`Mammal`) and grandparent (`Animal`).

### Advantages of Multi-Level Inheritance
- Logical Structure: It provides a clear and logical structure for organizing classes.
- Code Reusability: Promotes reusability through shared methods and attributes across multiple levels.
- Flexibility: Allows for extending functionality at different levels of the hierarchy without altering existing code.

### Conclusion
Inheritance, particularly multi-level inheritance, is a powerful feature in Java that supports the creation of a hierarchical relationship between classes, facilitating code reuse and better organization of related classes.



## 6. What is a loop? Describe 'for' and 'while' loops with suitable examples

### Loop in Java

A loop is a control flow statement that allows code to be executed repeatedly based on a specified condition. Loops are essential for performing repetitive tasks efficiently without having to write the same code multiple times.

### Types of Loops in Java

The two most commonly used loops in Java are the for loop and the while loop.

#### 1. For Loop

- Definition: The `for` loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.

- Syntax:
  ```java
  for (initialization; condition; increment/decrement) {
      // Code to be executed
  }
  ```

- Example:
  ```java
  public class ForLoopExample {
      public static void main(String[] args) {
          // Print numbers from 1 to 5
          for (int i = 1; i <= 5; i++) {
              System.out.println("Number: " + i);
          }
      }
  }
  ```
  Output:
  ```
  Number: 1
  Number: 2
  Number: 3
  Number: 4
  Number: 5
  ```

#### 2. While Loop

- Definition: The `while` loop is used when the number of iterations is not known and depends on a condition. The loop continues as long as the specified condition is true.

- Syntax:
  ```java
  while (condition) {
      // Code to be executed
  }
  ```

- Example:
  ```java
  public class WhileLoopExample {
      public static void main(String[] args) {
          int i = 1;
          // Print numbers from 1 to 5
          while (i <= 5) {
              System.out.println("Number: " + i);
              i++; // Increment i to avoid infinite loop
          }
      }
  }
  ```
  Output:
  ```
  Number: 1
  Number: 2
  Number: 3
  Number: 4
  Number: 5
  ```

### Key Differences

| Feature            | For Loop                                 | While Loop                             |
|--------------------|-----------------------------------------|---------------------------------------|
| Initialization | Typically done in the loop statement.  | Must be done before the loop.        |
| Condition      | Checked before each iteration.          | Checked before each iteration.       |
| Increment      | Typically part of the loop statement.   | Must be handled within the loop body.|
| Use Case       | When the number of iterations is known. | When the number of iterations is unknown.|

### Advantages of Using Loops

- Efficiency: Loops reduce redundancy and improve code efficiency by allowing the same block of code to run multiple times.
- Control: They provide control over the flow of execution based on conditions.
- Flexibility: Different types of loops can be used based on the requirements of the task.

### Disadvantages of Using Loops

- Complexity: Nested loops or complex conditions can make the code harder to read and maintain.
- Infinite Loops: Improperly defined loops can lead to infinite loops, causing the program to hang.

Loops are fundamental in programming, allowing for efficient data processing and task automation.

## 7. What is an array? explain 1d array in detail
