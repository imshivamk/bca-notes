---
dg-publish: true
---


### 1. **Definition**

1. An **interface** in Java is a reference type that defines a set of abstract methods (and constants) that a class can implement. 
2. It is similar to a class but ==can only contain method declarations(abstract methods) and fields (constants). 
3. Interfaces allow you to define a contract for what a class can do, ==without dictating how it does it.
4. allows for abstraction and multiple inheritance
5. define a contract that implementing classes must adhere to, specifying a set of methods without providing their implementation. 

### 2. **Characteristics of Interfaces**
- **No Method Bodies**: All methods in an interface are abstract by default (except static and default methods in Java 8 and later), meaning they do not have a body.
- **Constants**: Fields in an interface are implicitly `public`, `static`, and `final`.
- **Multiple Inheritance**: A class can implement multiple interfaces, overcoming the limitation of single inheritance in Java.
- **Public Access**: All methods in an interface are implicitly public, and they must be implemented as public in the implementing class.

### 3. **Syntax**
The basic syntax for declaring an interface is as follows:
```java
interface InterfaceName {
    // Constant declaration
    int CONSTANT_NAME = value;

    // Abstract method declaration
    void methodName();
}
```

### 4. **Example of an Interface**
Here's an example demonstrating the use of an interface:

```java
// Interface declaration
interface Animal {
    // Abstract method
    void makeSound();

    // Default method (Java 8 and later)
    default void eat() {
        System.out.println("This animal eats food.");
    }
}

// Implementing the interface in a class
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog();
        dog.makeSound(); // Outputs: Woof
        dog.eat(); // Outputs: This animal eats food.

        Animal cat = new Cat();
        cat.makeSound(); // Outputs: Meow
        cat.eat(); // Outputs: This animal eats food.
    }
}
```


```java
interface Vehicle {
    // Abstract method
    void start();

    // Default method
    default void stop() {
        System.out.println("Vehicle stopped.");
    }

    // Static method
    static void honk() {
        System.out.println("Honk! Honk!");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.start(); // Output: Car started.
        car.stop();  // Output: Vehicle stopped.
        
        Vehicle.honk(); // Output: Honk! Honk!
    }
}
```