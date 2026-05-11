---
dg-publish: true
---

- [[#Key Features of Inheritance|Key Features of Inheritance]]
- [[#Types of Inheritance|Types of Inheritance]]
- [[#Multi-Level Inheritance|Multi-Level Inheritance]]
- [[#Example of Multi-Level Inheritance|Example of Multi-Level Inheritance]]
- [[#Explanation of the Example|Explanation of the Example]]
- [[#Advantages of Multi-Level Inheritance|Advantages of Multi-Level Inheritance]]
- [[#Conclusion|Conclusion]]

## Inheritance

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


