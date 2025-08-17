
- [[#1. Static Keyword|1. Static Keyword]]
	- [[#1. Static Keyword#Definition|Definition]]
	- [[#1. Static Keyword#Characteristics|Characteristics]]
	- [[#1. Static Keyword#Usage|Usage]]
	- [[#1. Static Keyword#Example|Example]]
- [[#2. Final Keyword|2. Final Keyword]]
	- [[#2. Final Keyword#Definition|Definition]]
	- [[#2. Final Keyword#Characteristics|Characteristics]]
	- [[#2. Final Keyword#Usage|Usage]]
	- [[#2. Final Keyword#Example|Example]]


In Java, the `static` and `final` keywords are used to define the behavior of variables, methods, and classes. Here’s a detailed overview of both keywords, including definitions, characteristics, examples, and use cases.

### 1. Static Keyword

#### Definition
The `static` keyword is used to indicate that a particular member (variable or method) belongs to the class itself rather than to instances of the class. This means that a static member can be accessed without creating an instance of the class.

#### Characteristics
- Class-level Access: Static members belong to the class and can be accessed directly using the class name.
- Single Instance: There is only one copy of a static member, regardless of how many instances of the class exist.
- Memory Management: Static variables are stored in the static memory, making them accessible even when no instances of the class exist.

#### Usage
- Static Variables: Often used for constants or shared resources.
- Static Methods: Used for utility functions that do not depend on instance variables.

#### Example
```java
public class StaticExample {
    static int staticCounter = 0; // Static variable

    public StaticExample() {
        staticCounter++; // Increment the static variable for each instance
    }

    static void displayCounter() { // Static method
        System.out.println("Static counter: " + staticCounter);
    }

    public static void main(String[] args) {
        StaticExample obj1 = new StaticExample();
        StaticExample obj2 = new StaticExample();
        
        StaticExample.displayCounter(); // Outputs: Static counter: 2
    }
}
```

### 2. Final Keyword

#### Definition
The `final` keyword is used to declare constants. When a variable, method, or class is declared as final, it cannot be changed, overridden, or inherited.

#### Characteristics
- Final Variables: Once assigned, their values cannot be changed (immutable).
- Final Methods: Cannot be overridden by subclasses.
- Final Classes: Cannot be subclassed or extended.

#### Usage
- Final Variables: Used for constants that should not be changed.
- Final Methods: Used to prevent method overriding.
- Final Classes: Used to prevent inheritance.

#### Example
```java
public final class FinalClass { // Final class
    final int finalValue; // Final variable

    public FinalClass(int value) {
        this.finalValue = value; // Initialize final variable
    }

    final void displayValue() { // Final method
        System.out.println("Final value: " + finalValue);
    }
}

// Cannot subclass FinalClass
// class SubClass extends FinalClass {} // This would cause a compile-time error

public class Main {
    public static void main(String[] args) {
        FinalClass obj = new FinalClass(100);
        obj.displayValue(); // Outputs: Final value: 100
    }
}
```
