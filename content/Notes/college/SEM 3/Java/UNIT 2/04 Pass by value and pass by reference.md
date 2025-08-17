---
dg-publish: true
---
1. In Java, parameters are always passed by value. 
2. This means that when primitive data types are passed to methods, the original variable remains unchanged. 
3. For object data types, while the reference to the object is passed by value, modifications to the object through that reference do affect the original object.

Here's a detailed overview of **Pass by Value** and **Pass by Reference** in Java, including definitions, characteristics, differences, examples, and conclusion.

### 1. **Definition**
- **Pass by Value**: In Java, all method parameters are passed by value, meaning that a copy of the actual parameter's value is passed to the method. Changes made to the parameter inside the method do not affect the original value.
  
- **Pass by Reference**: This term refers to passing the address of the variable (or the reference) to the method instead of the actual value. In Java, true pass by reference does not exist; however, it can be mimicked with objects, where the reference to the object is passed, allowing modifications to the object itself.

### 2. **Characteristics**

#### **Pass by Value**
- A copy of the variable is created.
- Changes made to the parameter inside the method do not affect the original variable.
- This applies to primitive data types (e.g., `int`, `float`, `char`).

**Example**:
```java
public class Test {
    public void modifyValue(int num) {
        num = num + 10; // Modifies the copy, not the original
    }

    public static void main(String[] args) {
        Test test = new Test();
        int originalValue = 5;
        test.modifyValue(originalValue);
        System.out.println("Original value: " + originalValue); // Outputs: Original value: 5
    }
}
```

#### **Pass by Reference (Object Reference)**
- A reference to the actual object is passed.
- Changes made to the object via the reference affect the original object.
- This applies to object data types.

**Example**:
```java
class Dog {
    String name;

    Dog(String name) {
        this.name = name;
    }
}

public class Test {
    public void modifyDog(Dog dog) {
        dog.name = "Buddy"; // Modifies the original object
    }

    public static void main(String[] args) {
        Test test = new Test();
        Dog myDog = new Dog("Max");
        test.modifyDog(myDog);
        System.out.println("Dog name: " + myDog.name); // Outputs: Dog name: Buddy
    }
}
```

### 3. **Differences between Pass by Value and Pass by Reference**

| Feature                       | Pass by Value                                | Pass by Reference                         |
|-------------------------------|----------------------------------------------|------------------------------------------|
| **Definition**                | Passes a copy of the variable's value.      | Passes the address of the variable.     |
| **Modification Effect**       | Changes do not affect the original variable. | Changes affect the original object.      |
| **Data Types**                | Applies to primitive data types.            | Applies to object references.            |
| **Memory Usage**              | Uses more memory due to copying.            | Uses less memory as only the reference is passed. |
