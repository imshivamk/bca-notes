
# Paper A — Questions and Answers

## 1. Explain .NET Framework with its main components.

1. **Definition**
    
    - .NET Framework is a software development platform by Microsoft that provides an execution environment (CLR), a large class library (FCL), language interoperability and services for building Windows applications, web apps, and services.
        
2. **Main components**
    
    - **Common Language Runtime (CLR)**
        
        - Execution engine: loads and runs programs, performs JIT compilation (IL → native), handles memory management (Garbage Collector), exception handling, security enforcement and thread management.
            
    - **Framework Class Library (FCL) / Base Class Library (BCL)**
        
        - Large reusable library of types for I/O, collections, networking, data access (ADO.NET), XML, UI (WinForms, WPF), web (ASP.NET) etc.
            
    - **Common Type System (CTS)**
        
        - Defines data types and how they are represented in memory; enables cross-language type compatibility.
            
    - **Common Language Specification (CLS)**
        
        - A set of rules that language compilers follow so code in different languages can interoperate.
            
    - **Assemblies & Metadata**
        
        - Units of deployment (DLL/EXE) containing MSIL, metadata and manifest. Manifest includes versioning and dependency info.
            
    - **Just-In-Time (JIT) compiler**
        
        - Converts MSIL to native code when methods are first called.
            
    - **Security and Versioning**
        
        - Code Access Security (CAS) (older .NET), strong-named assemblies, GAC (Global Assembly Cache) for shared assemblies.
            
3. **How it works (high-level)**
    
    - Source code → compiler (e.g., csc) → MSIL + metadata → assembly → CLR loads assembly → JIT compiles IL to native code → executes managed code under CLR services.
        
4. **Use-cases**
    
    - Desktop apps, Web apps, enterprise systems, services, and libraries.
        

---

## 2. Write difference between overloading and overriding.

1. **Method Overloading**
    
    - Definition: Multiple methods in the same class with the same name but different parameter lists (signature).
        
    - Compile-time polymorphism (resolved at compile time).
        
    - Same class (or derived class can overload base methods).
        
    - Return type may differ but cannot be sole differentiator.
        
    - Example: `void Print(int x)`, `void Print(string s)`.
        
2. **Method Overriding**
    
    - Definition: Derived class provides a new implementation for a method declared `virtual` or `abstract` in base class using `override`.
        
    - Run-time polymorphism (dynamic dispatch).
        
    - Requires inheritance; method signature must match base method.
        
    - Access modifiers and return type must be compatible.
        
    - Example: `public virtual void Show()` in base and `public override void Show()` in derived.
        
3. **Tabular differences**
    
    - Time: Overloading → compile-time; Overriding → runtime.
        
    - Scope: Overloading → within same class (or derived); Overriding → base & derived across inheritance hierarchy.
        
    - Keywords: Overloading → none (or optional `new`); Overriding → `virtual` (base) and `override` (derived).
        
    - Purpose: Overloading → convenience/variations; Overriding → change behaviour in subclass.
        

---

## 3. What is inheritance? Explain.

1. **Definition**
    
    - Inheritance is an OOP mechanism where a class (derived/subclass) acquires fields and methods of another class (base/superclass). It enables code reuse and hierarchical classification.
        
2. **Types**
    
    - **Single inheritance**: one base class.
        
    - **Multilevel inheritance**: chain of inheritance (A → B → C).
        
    - **Hierarchical inheritance**: multiple derived classes from one base.
        
    - (C# does not support multiple class inheritance — supports multiple interface inheritance.)
        
3. **Advantages**
    
    - Reusability, extensibility, polymorphism, cleaner code, easier maintenance.
        
4. **Example (C#)**
    
    ```csharp
    class Animal {
        public void Eat() { Console.WriteLine("Eating"); }
    }
    
    class Dog : Animal {
        public void Bark() { Console.WriteLine("Bark"); }
    }
    
    // Usage:
    Dog d = new Dog();
    d.Eat(); // inherited
    d.Bark();
    ```
    
5. **When to use**
    
    - Use inheritance for "is-a" relationships (Dog is an Animal). Prefer composition for "has-a" when behaviour reuse without tight coupling is needed.
        

---

## 4. What is delegate in C#? Explain with example.

1. **Definition**
    
    - A delegate is a type-safe object that references a method (or multiple methods). It encapsulates a method signature and allows methods to be passed as parameters, stored and invoked.
        
2. **Key points**
    
    - Type-safe: signature must match.
        
    - Supports multicast (combining delegates with `+=`).
        
    - Useful for callbacks, event handling, and implementing observer patterns.
        
3. **Syntax & example**
    
    ```csharp
    // Delegate type declaration
    public delegate int MathOp(int a, int b);
    
    // Methods matching the signature
    public class Calculator {
        public static int Add(int x, int y) => x + y;
        public static int Multiply(int x, int y) => x * y;
    }
    
    // Usage
    MathOp op = Calculator.Add;
    int result = op(3, 4); // 7
    
    // Multicast (only last return value returned for non-void delegates)
    op += Calculator.Multiply;
    foreach (MathOp d in op.GetInvocationList()) {
        Console.WriteLine(d(3,4));
    }
    ```
    
4. **Events**
    
    - Delegates are the basis of events: `public event EventHandler MyEvent;`
        

---

## 5. Explain the concept of operator overloading with example.

1. **Definition**
    
    - Operator overloading allows user-defined types (classes/structs) to provide custom implementations for standard operators (`+`, `-`, `*`, etc.) by defining `operator` methods.
        
2. **Rules**
    
    - Overload must be declared `public static`.
        
    - At least one operand must be a user-defined type.
        
    - Not all operators can be overloaded (e.g., `?:` cannot).
        
3. **Example: Complex number + and -**
    
    ```csharp
    public class Complex {
        public double Real { get; }
        public double Imag { get; }
    
        public Complex(double r, double i) { Real = r; Imag = i; }
    
        public static Complex operator +(Complex a, Complex b) {
            return new Complex(a.Real + b.Real, a.Imag + b.Imag);
        }
    
        public static Complex operator -(Complex a, Complex b) {
            return new Complex(a.Real - b.Real, a.Imag - b.Imag);
        }
    
        public override string ToString() => $"{Real} + {Imag}i";
    }
    
    // Usage:
    var c1 = new Complex(1, 2), c2 = new Complex(3, 4);
    var sum = c1 + c2; // uses overloaded +
    ```
    
4. **Use-cases**
    
    - Mathematical types, domain-specific DSLs, simplifying client code.
        

---

## 6. Explain exception handling with example.

1. **Purpose**
    
    - Exception handling provides structured mechanism to detect and respond to runtime errors, enabling graceful recovery or controlled termination.
        
2. **Key constructs (C#)**
    
    - `try` block: code that may throw exceptions.
        
    - `catch` block(s): handle specific exceptions.
        
    - `finally` block: executes regardless of exception (cleanup).
        
    - `throw`: rethrow or throw new exceptions.
        
    - Custom exceptions: derive from `Exception`.
        
3. **Example**
    
    ```csharp
    try {
        int a = 10, b = 0;
        int c = a / b; // throws DivideByZeroException
        Console.WriteLine(c);
    }
    catch (DivideByZeroException ex) {
        Console.WriteLine("Cannot divide by zero: " + ex.Message);
    }
    catch (Exception ex) {
        Console.WriteLine("Some error: " + ex.Message);
    }
    finally {
        Console.WriteLine("Cleanup code runs here.");
    }
    ```
    
4. **Guidelines**
    
    - Catch specific exceptions first, then general `Exception`.
        
    - Avoid empty catches.
        
    - Use `finally` for releasing resources or use `using` statement for `IDisposable`.
        

---

## 7. Write a short note on any TWO: (choose any two)

I’ll answer all three briefly; exam asks for any two.

### a) Static keyword

1. **Meaning**
    
    - `static` marks members (fields, methods, constructors, classes) that belong to the type itself rather than an instance.
        
2. **Usage**
    
    - `static int Counter;` shared across all instances.
        
    - `static void Main(string[] args)` program entry.
        
    - `static class Utilities { ... }` cannot be instantiated; contains only static members.
        
3. **Static constructor**
    
    - Executes once before first access, used to initialize static state.
        

### b) out parameters

1. **Purpose**
    
    - `out` allows a method to return additional values by reference; the called method must assign a value before returning.
        
2. **Example**
    
    ```csharp
    bool TryParseInt(string s, out int value) {
        return int.TryParse(s, out value);
    }
    
    if (TryParseInt("123", out int v)) {
        Console.WriteLine(v); // 123
    }
    ```
    
3. **Difference from `ref`**
    
    - `ref`: variable must be initialized before call.
        
    - `out`: variable need not be initialized; callee must assign.
        

### c) DataAdapter (ADO.NET)

1. **Definition**
    
    - `DataAdapter` acts as a bridge between a `DataSet` (in-memory) and a data source (e.g., database). It uses commands (`SelectCommand`, `InsertCommand`, `UpdateCommand`, `DeleteCommand`).
        
2. **Usage**
    
    - Fill a `DataTable` or `DataSet`: `adapter.Fill(dataSet)`.
        
    - Persist changes from `DataSet`: `adapter.Update(dataSet)`.
        
3. **Advantage**
    
    - Disconnected data access model: work offline and sync changes later.
        

---

## 8. Create a delegate that can call two different methods: first is subtraction and second is division.

1. **Delegate & methods**
    
    ```csharp
    using System;
    
    public delegate void MathAction(double a, double b);
    
    class Program {
        static void Subtract(double x, double y) {
            Console.WriteLine($"Subtraction: {x} - {y} = {x - y}");
        }
    
        static void Divide(double x, double y) {
            if (y == 0) Console.WriteLine("Division: Cannot divide by zero");
            else Console.WriteLine($"Division: {x} / {y} = {x / y}");
        }
    
        static void Main() {
            MathAction actions = Subtract;
            actions += Divide; // multicast delegate
            actions(10, 2);
            // Output:
            // Subtraction: 10 - 2 = 8
            // Division: 10 / 2 = 5
        }
    }
    ```
    
2. **Notes**
    
    - Multicast delegates invoke methods in order they were added.
        
    - For non-void delegates, only the last method’s return value is received by the caller — prefer void for multicast results or use separate calls.
        

---

## 9. Write a C# code to create and use custom exception.

1. **Custom exception class**
    
    ```csharp
    using System;
    
    // Custom exception
    public class InvalidAgeException : Exception {
        public InvalidAgeException() { }
        public InvalidAgeException(string message) : base(message) { }
        public InvalidAgeException(string message, Exception inner) : base(message, inner) { }
    }
    ```
    
2. **Throwing and catching**
    
    ```csharp
    class Program {
        static void ValidateAge(int age) {
            if (age < 0 || age > 120) {
                throw new InvalidAgeException($"Invalid age: {age}");
            }
        }
    
        static void Main() {
            try {
                ValidateAge(-5);
            } catch (InvalidAgeException ex) {
                Console.WriteLine("Custom exception caught: " + ex.Message);
            } catch (Exception ex) {
                Console.WriteLine("General exception: " + ex.Message);
            } finally {
                Console.WriteLine("End of validation.");
            }
        }
    }
    ```
    
3. **Guidelines**
    
    - Derive from `Exception` (or `ApplicationException` historically).
        
    - Provide appropriate constructors and messages.
        
    - Use custom exceptions when you need to represent domain-specific errors.
        

---
