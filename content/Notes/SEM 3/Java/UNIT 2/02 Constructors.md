---
dg-publish: true
---

- [[#Constructor in Java|Constructor in Java]]
- [[#Types of Constructors|Types of Constructors]]
	- [[#Types of Constructors#1. Default Constructor|1. Default Constructor]]
	- [[#Types of Constructors#2. Parameterized Constructor|2. Parameterized Constructor]]
- [[#Key Points|Key Points]]
- [[#Advantages of Using Constructors|Advantages of Using Constructors]]
- [[#Disadvantages of Using Constructors|Disadvantages of Using Constructors]]

## What is a constructer? Explain it's types in detail

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


