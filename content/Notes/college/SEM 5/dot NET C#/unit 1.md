
## 1. Introduction to C#

- C# is a statically typed, object-oriented programming language developed by Microsoft as part of the .NET ecosystem.
    
- Like Java, it compiles to an intermediate language (IL) and runs on a virtual machine (CLR).
    
- Widely used for Windows applications, web development, cloud services, game development (Unity), and mobile apps (Xamarin).
    

## 2. Language Elements

## Namespace

- Organizes code like Java’s `package`.
    
- Syntax:
    
    csharp
    
    `namespace MyCompany.MyApp {     class MyClass { } }`
    

## Classes and Structs

- **Class:** Reference type, allocated on heap.
    
- **Struct:** Value type (no inheritance, lightweight), allocated typically on stack or inline. Java has no struct.
    
- Example struct:
    
    csharp
    
    `struct Point {     public int X;    public int Y; }`
    

## Entry Point

- C#:
    
    csharp
    
    `static void Main(string[] args) { }`
    
- Java:
    
    java
    
    `public static void main(String[] args) { }`
    

## Properties

- Provide easy getter/setter syntax in C# compared to Java's explicit methods:
    
    csharp
    
    `public int Age { get; set; }`
    

## 3. Data Types

## Value Types

- Directly store data. Examples: `int`, `double`, `bool`, `char`, `struct`, `enum`.
    
- Allocated on stack or inline.
    
- Analogy: Like cash in your pocket.
    

## Reference Types

- Store references to heap objects. Examples: `class`, `array`, `string`, `delegate`.
    
- Analogy: Like having a library card (reference) instead of a physical book.
    

## 4. Boxing and Unboxing

- **Boxing:** Converts a value type into an `object` (reference type). Requires memory allocation on the heap.  
    Example:
    
    csharp
    
    `int x = 10; object o = x; // Boxing`
    
- **Unboxing:** Extracts the value type from the boxed object explicitly with cast:
    
    csharp
    
    `int y = (int)o; // Unboxing`
    
- Java supports automatic boxing/unboxing with wrapper classes (`Integer`, `Double`).
    

## 5. Enum and Constants

## Enum

- C# enums are value types, backed by integral types:
    
    csharp
    
    `enum Days { Sun, Mon, Tue }`
    
- Java enums are full classes and can contain methods and fields.
    

## Constants

- C#:
    
    - `const`: compile-time constant (must be initialized immediately).
        
    - `readonly`: runtime constant, can be initialized in a constructor once.
        
    
    csharp
    
    `const int MAX = 100; readonly int YEAR;`
    
- Java:
    
    - `final` keyword for constants, initialized once.
        

## 6. Operators

- Common arithmetic and logical operators similar to Java.
    
- Special C# operators:
    
    - `is` for type checking (`if (obj is string) { }`)
        
    - `as` for safe cast (returns `null` if cast fails)
        
    - `??` null-coalescing operator for default values
        
    - `?.` null-conditional operator for safe member access
        

## 7. Control Statements

- Standard control flow statements are almost identical: `if`, `else`, `switch`, `while`, `do while`, `for`.
    
- C# has `foreach` which is similar to Java’s enhanced for-loop.
    
- C# switch is more powerful, supporting strings and pattern matching in newer versions.
    

## 8. Arrays and Strings

## Arrays

- Declared similarly:
    
    csharp
    
    `int[] arr = new int[5]; int[,] matrix = new int[3,4];  // Multidimensional int[][] jagged = new int[3][]; // Jagged array`
    
- Java has 1D and jagged arrays, but no true multidimensional arrays.
    

## Strings

- Both are immutable and reference types.
    
- C# syntax supports **string interpolation:**
    
    csharp
    
    `string greeting = $"Hello, {name}!";`
    
- Java uses concatenation or `String.format`.
    

## 9. Parameter Passing

## Pass by Value (default)

- Both C# and Java pass parameters by value.
    
- For reference types, the _reference_ is passed by value, so the object can be mutated.
    

## Pass by Reference in C#

- Use `ref` keyword to pass parameters by reference (variable must be initialized before).
    
    csharp
    
    `void Increment(ref int x) { x++; }`
    
- Use `out` for parameters that must be assigned in the called method (no initialization needed by the caller).
    
    csharp
    
    `void GetCoordinates(out int x, out int y) { x = 10; y = 20; }`
    
- Java has no pass-by-reference support.
    

## 10. Variable-Length Parameters

- C#: Use `params` keyword; only one `params` parameter per method, must be last.
    
    csharp
    
    `void PrintNumbers(params int[] numbers) {     foreach(int n in numbers) Console.WriteLine(n); }`
    
- Java uses `int... numbers` for varargs.
    

## Summary Table: C# vs Java

|Topic|C#|Java|Notes|
|---|---|---|---|
|Namespaces / Packages|`namespace`|`package`|Organize code|
|Value Types|Primitives, `struct`, `enum`|Primitives only|C# has `struct`|
|Reference Types|Classes, arrays, strings|Classes, arrays, strings|Similar|
|Boxing/Unboxing|Explicit|Autoboxing|Java is automatic|
|Enums|Value types (numeric)|Full objects|Java enums richer|
|Constants|`const`, `readonly`|`final`|`readonly` is runtime constant|
|Operators|`is`, `as`, `??`, `?.`|`instanceof`|C# has more operator features|
|Parameter Passing|By value, with `ref` and `out`|By value only|C# supports pass by reference|
|Variable args|`params`|`varargs`|Similar syntax|
|Strings|Immutable, supports interpolation|Immutable, formatting|C# more concise|
|Arrays|Single, multidimensional, jagged|Single, jagged|C# supports multi-dimensional|
