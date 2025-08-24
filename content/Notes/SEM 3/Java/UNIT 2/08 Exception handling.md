---
dg-publish: true
---
### Exception Handling in Java

Exception handling in Java is a mechanism to handle runtime errors, ensuring the normal flow of a program. It uses five key keywords: `try`, `catch`, `finally`, `throw`, and `throws`.

### 1. Definition of an Exception
An exception is an event that disrupts the normal flow of a program's execution. It occurs during runtime when the program encounters an unexpected condition (like dividing by zero or accessing an invalid array index).

### Keywords Used in Exception Handling

#### a. try
A block of code that you want to monitor for exceptions is enclosed in a `try` block.
```java
try {
    // Code that may cause an exception
    int result = 10 / 0; // This will cause ArithmeticException
}
```

#### b. catch
A `catch` block is used to handle exceptions. It catches exceptions that are thrown inside the `try` block.
```java
catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
```

#### c. finally
A `finally` block contains code that must be executed whether an exception is caught or not. It is typically used for clean-up operations (e.g., closing a file or releasing resources).
```java
finally {
    System.out.println("Finally block is always executed.");
}
```

#### d. throw
The `throw` keyword is used to explicitly throw an exception.
```java
throw new ArithmeticException("Division by zero");
```

#### e. throws
The `throws` keyword is used in method declarations to indicate the exceptions that a method can throw.
```java
public void divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Cannot divide by zero");
    }
}
```

### 5. Example of Exception Handling

```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // Causes ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds!");
        } finally {
            System.out.println("This will always be printed.");
        }
    }
}
```
Output:
```
Array index is out of bounds!
This will always be printed.
```

### 6. Custom Exceptions
Java allows the creation of custom exceptions by extending the `Exception` class.

Example:
```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class TestCustomException {
    public static void main(String[] args) {
        try {
            throw new CustomException("Custom exception occurred!");
        } catch (CustomException e) {
            System.out.println(e.getMessage());
        }
    }
}
```



### 7. Common Exceptions in Java
- NullPointerException: When you try to use a null reference.
- ArithmeticException: When an arithmetic operation (like division by zero) is illegal.
- ArrayIndexOutOfBoundsException: When trying to access an invalid index of an array.
- FileNotFoundException: When an attempt to open a file that doesn't exist fails.

### Conclusion
Exception handling in Java ensures that runtime errors are dealt with systematically. It helps prevent program crashes and allows recovery from errors. Proper exception handling is critical for creating robust and reliable applications.
