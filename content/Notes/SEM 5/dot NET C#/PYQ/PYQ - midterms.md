
# Paper B — Midterm Internal (C# Programming) — Questions and Answers

## 1. Explain difference between C# and Java.

1. **Platform**
    
    - Java: originally “write once, run anywhere” using JVM; broadly cross-platform.
        
    - C#: originally Windows-focused (.NET Framework); modern .NET (Core/.NET 5+) is cross-platform.
        
2. **Language features**
    
    - C#: properties, events, delegates, LINQ, `unsafe` pointers, indexers, `ref`/`out`, `async`/`await` built-in earlier.
        
    - Java: uses interfaces and classes; lambdas added later; no delegates or properties; method references and streams for functional style.
        
3. **Memory & runtime**
    
    - Java: JVM, garbage collector; bytecode.
        
    - C#: CLR, MSIL, and JIT. Both have GC, but implementations differ.
        
4. **Multiple inheritance**
    
    - Java: single class inheritance + multiple interfaces.
        
    - C#: single class inheritance + multiple interfaces; `default` interface methods added later in Java.
        
5. **Generics**
    
    - C#: Generics are reified (preserve type info at runtime) and support constraints.
        
    - Java: Generics implemented via type erasure; runtime type info not preserved.
        
6. **Pointers**
    
    - C#: allows `unsafe` code with pointers.
        
    - Java: no pointer arithmetic; references only.
        
7. **Native integration & tooling**
    
    - C#: tight integration with Windows, Visual Studio; P/Invoke for native calls.
        
    - Java: wide ecosystem, many JVM languages, many tools.
        
8. **Conclusion**
    
    - Both are modern OOP languages; differences are in features, runtime, type system, and ecosystem.
        

---

## 2. Explain with neat labeled diagram an architecture of .NET Framework.

(Describe a neat labeled diagram — draw when studying. Here is structured description:)

1. **Top: Application Layer**
    
    - User applications: WinForms/WPF, ASP.NET, Console apps, Services.
        
2. **Middle: Framework Class Library (FCL)**
    
    - Namespaces: `System`, `System.IO`, `System.Data`, `System.Web`, `System.Xml`, `System.Threading`, etc.
        
3. **Core: Common Language Runtime (CLR)**
    
    - Subcomponents:
        
        - Metadata & Type System (CTS, CLS)
            
        - JIT Compiler (MSIL → native)
            
        - Garbage Collector
            
        - Security (Code Access Security) & Evidence
            
        - Exception Handling
            
        - Threading and Interop Services (P/Invoke, COM)
            
4. **Assemblies & Metadata**
    
    - Assemblies (EXE/DLL) containing MSIL, manifest & metadata.
        
5. **Bottom: Operating System**
    
    - Underlying OS resources (Windows APIs). CLR calls OS services for I/O, network, etc.
        
6. **Flow**
    
    - Source → Compiler (`csc`) → MSIL + metadata → Assembly → CLR loads → JIT → Native code → OS.
        

---

## 3. What are assemblies in .NET? What are different parts of assemblies? What are types of assemblies?

1. **Assembly definition**
    
    - An assembly is the basic unit of deployment, versioning and security in .NET. It is a physical file (.exe or .dll) containing MSIL code, metadata, and a manifest.
        
2. **Parts of an assembly**
    
    - **Manifest**: contains assembly identity (name, version, culture, public key token), referenced assemblies, and security permissions.
        
    - **Metadata**: descriptive information about types, methods, properties, attributes, signatures.
        
    - **MSIL (Microsoft Intermediate Language)**: platform-independent intermediate code.
        
    - **Resources**: embedded files (images, strings, satellite resources).
        
    - **Optional native images**: via NGen for precompiled native code.
        
3. **Types of assemblies**
    
    - **Private assembly**: used only by a single application; stored in application directory.
        
    - **Shared assembly** (strong-named): installed in Global Assembly Cache (GAC) for reuse across apps; has strong name (public/private key).
        
    - **Satellite assembly**: contains localized resources (for internationalization), loaded per culture.
        
    - **Dynamic assembly**: generated at runtime via Reflection.Emit.
        

---

## 4. Explain with neat labeled diagram compilation model of .NET Framework technologies.

(Describe compilation model in steps:)

1. **Source Code**
    
    - C#, VB.NET, F# source files.
        
2. **Compilation**
    
    - Language-specific compiler (csc.exe for C#) compiles source → **MSIL** (also called CIL) + **metadata**.
        
3. **Assembly**
    
    - Output is an assembly (.exe/.dll) containing MSIL + manifest + metadata.
        
4. **Deployment**
    
    - Assembly deployed to file system or GAC.
        
5. **Execution**
    
    - CLR loads assembly.
        
    - JIT compiler compiles MSIL method-by-method → native machine code.
        
    - Native code executed by OS.
        
    - CLR services (GC, security, exception handling) manage runtime.
        
6. **Optional: NGEN / Precompilation**
    
    - Native images created ahead-of-time (AOT) to improve startup performance; bypass some JIT.
        
7. **Diagram notes**
    
    - Show arrows: Source → Compiler → Assembly (MSIL + metadata) → CLR Loader → JIT → Native Code → OS.
        

---

## 5. What is the difference between an interface and abstract class? Explain with suitable code.

1. **Interface**
    
    - Only method/property/event declarations (until newer C# versions which allow default implementations).
        
    - No instance fields.
        
    - A class can implement multiple interfaces.
        
    - Represents capabilities/contract.
        
2. **Abstract class**
    
    - Can have abstract methods (no body) and concrete methods (implemented).
        
    - Can contain fields, constructors and access modifiers.
        
    - A class can inherit from only one abstract class (single inheritance).
        
    - Use when there is a strong “is-a” relationship and shared implementation.
        
3. **Comparison (short)**
    
    - Multiple inheritance: interface = yes; abstract class = no.
        
    - State: interface = no fields (traditionally); abstract class = can have fields.
        
    - Use-case: interface for capabilities (e.g., `IComparable`); abstract class for base behavior plus default implementation.
        
4. **Code example**
    
    ```csharp
    public interface IShape {
        double Area();
    }
    
    public abstract class ShapeBase {
        public string Name { get; set; }
        public ShapeBase(string name) { Name = name; }
        public abstract double Area(); // must be overridden
        public void PrintName() { Console.WriteLine(Name); } // concrete
    }
    
    public class Circle : ShapeBase, IShape {
        public double Radius { get; set; }
        public Circle(double r) : base("Circle") { Radius = r; }
        public override double Area() => Math.PI * Radius * Radius;
    }
    ```
    

---

## 6. What is concept of Method overriding in C#? Write a C# program to explain concept of method overriding.

1. **Concept**
    
    - Method overriding allows a derived class to provide a specific implementation of a method that is declared `virtual` (or `abstract`) in base class. The derived class uses `override` keyword. At runtime, the override is chosen based on object type (polymorphism).
        
2. **C# program**
    
    ```csharp
    using System;
    
    public class Animal {
        public virtual void Speak() {
            Console.WriteLine("Animal speaks");
        }
    }
    
    public class Dog : Animal {
        public override void Speak() {
            Console.WriteLine("Dog barks");
        }
    }
    
    public class Cat : Animal {
        public override void Speak() {
            Console.WriteLine("Cat meows");
        }
    }
    
    class Program {
        static void Main() {
            Animal a1 = new Dog();
            Animal a2 = new Cat();
            a1.Speak(); // Dog barks (override)
            a2.Speak(); // Cat meows (override)
    
            Dog d = new Dog();
            d.Speak(); // Dog barks
        }
    }
    ```
    
3. **Key points**
    
    - `virtual` on base, `override` on derived.
        
    - If base method not virtual but derived declares new method with same signature using `new`, it hides but not override; call resolves by compile-time type, not runtime.
        

---

## 7. Write Short Notes on any two of the following (I’ll give concise notes for all four so you can pick):

### a) Properties in C#

1. **Definition**
    
    - High-level members that provide controlled access to fields via `get` and `set` accessors.
        
2. **Syntax**
    
    ```csharp
    private int _age;
    public int Age {
        get { return _age; }
        set { if (value >= 0) _age = value; }
    }
    ```
    
3. **Auto-implemented properties**
    
    - `public int Count { get; set; }`
        
4. **Benefits**
    
    - Encapsulation, validation on set, readable syntax.
        

### b) Abstraction in C#

1. **Definition**
    
    - Hiding implementation details and exposing essential features through abstract classes and interfaces.
        
2. **Mechanisms**
    
    - `abstract` classes and methods; interfaces.
        
3. **Purpose**
    
    - Define common contract/behaviour while leaving implementation to derived classes.
        

### c) Virtual and pure virtual method

1. **Virtual method (C#)**
    
    - Declared with `virtual` in base class; can be overridden in derived classes.
        
2. **Pure virtual (C++ term)**
    
    - In C# equivalent is `abstract` method in abstract class — declared with `abstract` and has no body; must be overridden.
        
3. **Example**
    
    ```csharp
    public abstract class Base {
        public abstract void DoWork(); // C# "pure virtual"
        public virtual void OptionalWork() { /* default */ }
    }
    ```
    

### d) Destructors

1. **C# destructor**
    
    - Syntax: `~ClassName() { /* cleanup */ }`. Called by GC, non-deterministic.
        
2. **Preferred pattern**
    
    - Implement `IDisposable` and `Dispose()` for deterministic resource cleanup; use `using` statement.
        
3. **Notes**
    
    - Avoid heavy work in destructor; finalizer only for unmanaged resource release fallback.
        
