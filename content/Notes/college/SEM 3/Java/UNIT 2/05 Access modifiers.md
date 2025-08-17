---
dg-publish: true
---
1. Access modifiers in Java are keywords that set the accessibility (visibility) of classes, methods, and variables. 
2. They determine how the members of a class can be accessed from other classes or packages. 
3. There are four main access modifiers in Java


| Modifier      | Class | Package | Subclass (Same Package) | Subclass (Different Package) | Outside Package |
|---------------|-------|---------|-------------------------|-------------------------------|------------------|
| `public`      | Yes   | Yes     | Yes                     | Yes                           | Yes              |
| `protected`   | Yes   | Yes     | Yes                     | No                            | No               |
| `private`     | Yes   | No      | No                      | No                            | No               |
| Default   | Yes   | Yes     | Yes                     | No                            | No               |



### 1. Public
- Definition: The `public` access modifier allows a class, method, or variable to be accessible from any other class in any package.
- Usage: Used when you want to provide wide accessibility.

Example:
```java
public class PublicClass {
    public int publicVariable; // Public variable

    public void publicMethod() { // Public method
        System.out.println("This is a public method.");
    }
}
```

### 2. Private
- Definition: The `private` access modifier restricts the visibility to the defining class only. Members declared as private cannot be accessed from outside the class.
- Usage: Used to encapsulate data and provide controlled access through public methods.

Example:
```java
public class PrivateClass {
    private int privateVariable; // Private variable

    public void setPrivateVariable(int value) { // Public method to set private variable
        this.privateVariable = value;
    }

    public int getPrivateVariable() { // Public method to get private variable
        return privateVariable;
    }
}
```

### 3. Protected
- Definition: The `protected` access modifier allows visibility to the defining class, subclasses (inherited classes), and classes in the same package. 
- Usage: Used when you want to allow access to members in subclasses and within the same package.

Example:
```java
public class ProtectedClass {
    protected int protectedVariable; // Protected variable

    protected void protectedMethod() { // Protected method
        System.out.println("This is a protected method.");
    }
}
```

### 4. Default (Package-Private)
- Definition: If no access modifier is specified, the default access level (also known as package-private) is applied. Members with default access are accessible only within the same package.
- Usage: Used to restrict visibility to classes within the same package.

Example:
```java
class DefaultClass { // No access modifier, hence default
    int defaultVariable; // Default variable

    void defaultMethod() { // Default method
        System.out.println("This is a default method.");
    }
}
```

