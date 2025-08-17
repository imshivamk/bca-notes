
## 1. **Object-Oriented Concepts in C#**

### 💡 Definition

C# is a **fully object-oriented language**, meaning everything revolves around classes and objects. It supports the 4 pillars of OOP:

- **Encapsulation**: Bundling data and methods into a single unit (class) and restricting access via access modifiers.
    
- **Abstraction**: Hiding implementation details and exposing only essential features.
    
- **Inheritance**: Acquiring properties and behaviors from a parent class.
    
- **Polymorphism**: Performing a single action in different ways.
    

>  **Same as Java**, but C# has some **extra syntactic sugar** (like properties, indexers, etc.) to simplify code.

---

## 2. **Constructor and Destructor**

### ➤ **Constructor**

- Special method called **when an object is created**.
    
- Has the same name as the class.
    
- **No return type**, not even `void`.
    
- Can be **overloaded** like Java.
    

```csharp
public class Person {
    public string Name;

    // Constructor
    public Person(string name) {
        Name = name;
    }
}
```

####  Similarities to Java:

- Syntax and behavior are almost identical.
    
- Support for **constructor chaining** via `: this(...)`.
    

```csharp
public class Person {
    public string Name;
    public int Age;

    public Person(string name) : this(name, 0) {}

    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
}
```

### ➤ **Destructor**

- Called when an object is about to be destroyed (finalized).
    
- **One destructor only** per class.
    
- Syntax: `~ClassName() { }`
    
- Can't be overloaded or explicitly called.
    
- Used rarely — for unmanaged resources only.
    

```csharp
public class FileHandler {
    ~FileHandler() {
        // cleanup logic
    }
}
```

####  Java vs C#:

|Feature|Java|C#|
|---|---|---|
|Destructor|`protected void finalize()`|`~ClassName()`|
|Overloading|Not allowed|Not allowed|
|Use case|Deprecated in Java 9+|Rare; use `IDisposable`|

---

## 3. **Static Members**

### ➤ **Definition:**

- Belong to the class, not to instances.
    
- Used for **global/shared data**, constants, or utility methods.
    

```csharp
public class Counter {
    public static int Count = 0;

    public Counter() {
        Count++;
    }
}
```

### ➤ **Static Constructor**

- Initializes static fields.
    
- Called **automatically once** before any static or instance member is accessed.
    

```csharp
public class Config {
    public static string AppName;

    static Config() {
        AppName = "MyApp";
    }
}
```

####  Similarities to Java:

|Feature|Java|C#|
|---|---|---|
|Static variable|`static int count;`|`public static int Count;`|
|Static block|`static {}`|`static Constructor()`|

---

## 4. **Properties**

### ➤ **Definition:**

- Encapsulated access to fields (like getter/setter in Java).
    
- Avoids boilerplate `getName()/setName()`.
    

```csharp
public class Person {
    public string Name { get; set; }  // Auto-implemented
}
```

### ➤ With logic (custom getter/setter):

```csharp
private int _age;
public int Age {
    get => _age;
    set {
        if (value >= 18)
            _age = value;
    }
}
```

####  Differences from Java:

|Feature|Java|C#|
|---|---|---|
|Getters/Setters|Explicit methods|Properties (cleaner syntax)|
|Custom logic|In methods|Inside property block|

---

## 5. **Indexers**

### ➤ **Definition:**

- Allows object to be accessed using array-like syntax.
    
- Custom implementation of array access behavior.
    

```csharp
public class Sample {
    private string[] data = new string[10];

    public string this[int index] {
        get => data[index];
        set => data[index] = value;
    }
}
```

```csharp
Sample s = new Sample();
s[0] = "Hello";
Console.WriteLine(s[0]);  // Output: Hello
```

####  Java Equivalent:

- Not available. Use `get(index)` or override data structure behavior manually.
    

---

## 6. **Inheritance and Polymorphism**

### ➤ **Inheritance**

- Reuse code from a base class.
    

```csharp
public class Animal {
    public void Eat() => Console.WriteLine("Eating...");
}

public class Dog : Animal {
    public void Bark() => Console.WriteLine("Barking...");
}
```

>  Same as Java. Only **single inheritance** for classes.

---

### ➤ **Polymorphism**

#### Static Polymorphism = Method Overloading

#### Dynamic Polymorphism = Method Overriding

---

## 7. **Types of Inheritance**

|Type|Description|Supported in C#?|Notes|
|---|---|---|---|
|Single|One base, one derived||`class B : A`|
|Multilevel|A → B → C||Standard usage|
|Hierarchical|A → B, A → C||Multiple derived from one base|
|Multiple|One class inherits from multiple bases||Use interfaces instead|
|Hybrid|Mix of above| via interfaces|No diamond problem|

---

## 8. **Constructor in Inheritance**

- Use `: base()` to call parent constructor.
    

```csharp
public class Base {
    public Base(string message) {
        Console.WriteLine("Base: " + message);
    }
}

public class Derived : Base {
    public Derived() : base("Hello from Derived") {
        Console.WriteLine("Derived constructor");
    }
}
```

>  Just like `super()` in Java.

---

## 9. **Interface Implementation**

### ➤ **Definition:**

- Only declares method signatures.
    
- Used for abstraction and multiple inheritance.
    

```csharp
public interface IShape {
    void Draw();
}

public class Circle : IShape {
    public void Draw() => Console.WriteLine("Drawing Circle");
}
```

>  Same as Java, but supports **default implementations** since C# 8.0 (Java 8 also allows).

---

## 10. **Overloading and Overriding**

### ➤ Method Overloading

- Same method name, different parameters
    

```csharp
public void Print(string s) {}
public void Print(int i) {}
```

>  Same in both Java and C#.

---

### ➤ Operator Overloading (Only in C#)

```csharp
public class Complex {
    public int Real, Imag;

    public static Complex operator +(Complex a, Complex b) {
        return new Complex(a.Real + b.Real, a.Imag + b.Imag);
    }
}
```

>  Java does **not support operator overloading**.

---

### ➤ Method Overriding

```csharp
public class Animal {
    public virtual void Speak() => Console.WriteLine("Animal speaks");
}

public class Dog : Animal {
    public override void Speak() => Console.WriteLine("Bark");
}
```

#### Keywords:

- `virtual`: Marks method as overridable
    
- `override`: Overrides base method
    

---

## 11. **Static vs Dynamic Binding**

### ➤ Static Binding (Early Binding)

- Determined at compile time.
    

```csharp
class Animal {
    public void Speak() => Console.WriteLine("Animal");
}

class Dog : Animal {
    public new void Speak() => Console.WriteLine("Dog");
}

Animal a = new Dog();
a.Speak(); // Animal (static binding)
```

> `new` keyword hides the method.

---

### ➤ Dynamic Binding (Late Binding)

```csharp
class Animal {
    public virtual void Speak() => Console.WriteLine("Animal");
}

class Dog : Animal {
    public override void Speak() => Console.WriteLine("Dog");
}

Animal a = new Dog();
a.Speak(); // Dog (dynamic binding)
```

>  Same concept as Java's virtual method calls.

---

## 12. **Abstract Class**

### ➤ Definition:

- Cannot be instantiated.
    
- Can have both **abstract (no body)** and **concrete (implemented)** methods.
    

```csharp
public abstract class Shape {
    public abstract void Draw();
    public void Display() => Console.WriteLine("Shape displayed");
}

public class Circle : Shape {
    public override void Draw() => Console.WriteLine("Drawing Circle");
}
```

>  Same in Java.

---

## 13. **`sealed` Keyword**

### ➤ Definition:

- Prevents further inheritance of a class or method.
    

#### Sealed Class:

```csharp
public sealed class FinalClass { }
// class SubClass : FinalClass {}  Error
```

#### Sealed Method:

```csharp
public class A {
    public virtual void Show() {}
}

public class B : A {
    public sealed override void Show() {}
}

// class C : B { public override void Show() {} }  Error
```

>  Java equivalent is `final` (used for classes, methods, and variables).

---
