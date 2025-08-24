---
excalidraw-plugin: null
dg-publish: true
---


### 1. Definition
1. Polymorphism comes from the Greek words "poly" (meaning many) and "morph" (meaning form).
2. t refers to the ability of different classes to be treated as instances of the same class through a common interface.
3. This allows methods to be defined in a way that they can operate on objects of different classes.
4. primarily achieved through method overriding and method overloading. 

- Method Overloading: Defining multiple methods with the same name but different parameters (different type, number, or both).
- method overriding : **Method Overriding** occurs when a subclass defines a method that has the same name, return type, and parameters as a method in its superclass. The new implementation in the subclass is used when the method is called on an instance of the subclass.

Example of Method Overloading:
```java
class MathUtils {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method to add two doubles
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        System.out.println(math.add(5, 10));         // Outputs: 15
        System.out.println(math.add(5, 10, 15));     // Outputs: 30
        System.out.println(math.add(5.5, 10.5));     // Outputs: 16.0
    }
}
```


Example of Method Overriding:
```java
class SuperClass {
    void display() {
        System.out.println("Display from SuperClass");
    }
}

class SubClass extends SuperClass {
    @Override
    void display() { // Overriding the display method
        System.out.println("Display from SubClass");
    }
}

```

- Interfaces and Polymorphism: Interfaces in Java also facilitate polymorphism. A class can implement multiple interfaces, allowing objects of that class to be treated as instances of the interfaces.

### 4. Benefits of Polymorphism
- Code Reusability: Polymorphism allows for the reuse of methods across different classes.
- Flexibility: New classes can be introduced with minimal changes to existing code.
- Maintainability: It simplifies code maintenance and reduces complexity.

### 5. Real-world Applications
- Frameworks and Libraries: Java frameworks (like Spring) often use polymorphism to define behaviors that can be overridden in user-defined classes.

