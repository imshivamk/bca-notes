
### 1. Even or Odd

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Enter a number: ");
        int num = int.Parse(Console.ReadLine());
        if (num % 2 == 0) Console.WriteLine("Even!");
        else Console.WriteLine("Odd!");
    }
}
```


***

### 2. Boolean Test for one or other > 10 (but not both)

```csharp
bool test = (var1 > 10) ^ (var2 > 10);
```


***

### 3. Menu-driven arithmetic with switch and loop

```csharp
using System;
class Program {
    static void Main() {
        while (true) {
            Console.WriteLine("Menu:\n1.Add\n2.Subtract\n3.Multiply\n4.Divide\n5.Exit");
            Console.Write("Choice: ");
            int ch = int.Parse(Console.ReadLine());
            if (ch == 5) break;
            Console.Write("Num1: "); int a = int.Parse(Console.ReadLine());
            Console.Write("Num2: "); int b = int.Parse(Console.ReadLine());
            switch(ch) {
                case 1: Console.WriteLine(a + b); break;
                case 2: Console.WriteLine(a - b); break;
                case 3: Console.WriteLine(a * b); break;
                case 4: Console.WriteLine(b != 0 ? (a / b).ToString() : "Cannot divide by zero"); break;
                default: Console.WriteLine("Invalid"); break;
            }
        }
    }
}
```


***

### 4. Enum for Days of Week

```csharp
using System;
enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday }
class Program {
    static void Main() {
        Console.Write("Enter day number (0-6): ");
        int d = int.Parse(Console.ReadLine());
        if (d>=0 && d<=6) Console.WriteLine((Days)d);
        else Console.WriteLine("Invalid");
    }
}
```


***

### 5. Array input, max and min

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Size: ");
        int n=int.Parse(Console.ReadLine());
        int[] arr=new int[n];
        for(int i=0;i<n;i++) arr[i]=int.Parse(Console.ReadLine());
        int max=arr[0], min=arr[0];
        foreach(int x in arr) {
            if(x>max) max=x;
            if(x<min) min=x;
        }
        Console.WriteLine($"Max={max}, Min={min}");
    }
}
```


***

### 6. Reverse String

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Enter string: ");
        string s=Console.ReadLine();
        char[] arr=s.ToCharArray();
        Array.Reverse(arr);
        Console.WriteLine($"Original: {s}\nReversed: {new string(arr)}");
    }
}
```


***

### 7. First 10 Prime Numbers

```csharp
using System;
class Program {
    static bool IsPrime(int n) {
        if(n<2) return false;
        for(int i=2;i*i<=n;i++) if(n%i==0) return false;
        return true;
    }
    static void Main() {
        int count=0, num=2;
        while(count<10) {
            if(IsPrime(num)) {
                Console.Write(num+" ");
                count++;
            }
            num++;
        }
    }
}
```


***

### 8. Factorial with for loop

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Enter number: ");
        int n=int.Parse(Console.ReadLine());
        long fact=1;
        for(int i=1;i<=n;i++) fact*=i;
        Console.WriteLine($"Factorial: {fact}");
    }
}
```


***

### 9. Sum of digits using while loop

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Enter number: ");
        int n=int.Parse(Console.ReadLine());
        int sum=0;
        while(n!=0) {
            sum+=n%10;
            n/=10;
        }
        Console.WriteLine($"Sum of digits: {sum}");
    }
}
```


***

### 10. Do-while loop sum until negative

```csharp
using System;
class Program {
    static void Main() {
        int sum=0, num;
        do {
            Console.Write("Enter number (negative to stop): ");
            num=int.Parse(Console.ReadLine());
            if(num>=0) sum+=num;
        } while(num>=0);
        Console.WriteLine($"Sum: {sum}");
    }
}
```


***

### 11. Pyramid pattern

```csharp
using System;
class Program {
    static void Main() {
        Console.Write("Height: ");
        int h=int.Parse(Console.ReadLine());
        for(int i=1;i<=h;i++) {
            Console.Write(new string(' ', h-i));
            Console.WriteLine(new string('*', 2*i-1));
        }
    }
}
```


***

### 12. Skip printing 5

```csharp
using System;
class Program {
    static void Main() {
        for(int i=1;i<=10;i++) {
            if(i==5) continue;
            Console.Write(i+" ");
        }
    }
}
```


***

### 13. First 10 Armstrong numbers with break

```csharp
using System;
class Program {
    static bool IsArmstrong(int n) {
        int sum=0, temp=n;
        while(temp>0) {
            int d=temp%10;
            sum+=d*d*d;
            temp/=10;
        }
        return sum==n;
    }
    static void Main() {
        int count=0, num=1;
        while(count<10) {
            if(IsArmstrong(num)) {
                Console.Write(num+" ");
                count++;
            }
            num++;
        }
    }
}
```


***

### 14. Pass by value and reference demonstration

```csharp
using System;
class Program {
    static void ModifyValue(int x) { x=100; }
    static void ModifyRef(ref int x) { x=200; }
    static void Main() {
        int a=10;
        Console.WriteLine($"Before: a={a}");
        ModifyValue(a);
        Console.WriteLine($"After ModifyValue: a={a}");
        ModifyRef(ref a);
        Console.WriteLine($"After ModifyRef: a={a}");
    }
}
```


***

### 15. Variable-length parameter method for average

```csharp
using System;
class Program {
    static double Average(params double[] nums) {
        double sum=0;
        foreach(var n in nums) sum+=n;
        return nums.Length==0 ? 0 : sum/nums.Length;
    }
    static void Main() {
        var avg=Average(1,2,3,4,5);
        Console.WriteLine($"Average: {avg}");
    }
}
```


***

### 16. Boxing and unboxing demo

```csharp
using System;
class Program {
    static void Main() {
        int a=5;
        object obj = a;   // Boxing
        int b = (int)obj; // Unboxing
        Console.WriteLine($"Boxed: {obj}, Unboxed: {b}");
    }
}
```


***

### 17. Class \& Object demonstration

```csharp
using System;
class Person {
    public string Name;
    public void Greet() {
        Console.WriteLine($"Hello {Name}!");
    }
}
class Program {
    static void Main() {
        Person p = new Person();
        p.Name = "Alice";
        p.Greet();
    }
}
```


***

### 18. Constructor demonstration

```csharp
using System;
class Person {
    public string Name;
    public Person(string name) {
        Name = name;
    }
}
class Program {
    static void Main() {
        Person p = new Person("Bob");
        Console.WriteLine(p.Name);
    }
}
```


***

### 19. Constructor overloading

```csharp
using System;
class Person {
    public string Name;
    public int Age;
    public Person() { Name = "Unknown"; Age = 0; }
    public Person(string name) { Name = name; Age = 0; }
    public Person(string name, int age) { Name = name; Age = age; }
}
class Program {
    static void Main() {
        Person p1 = new Person();
        Person p2 = new Person("Carl");
        Person p3 = new Person("Dana", 25);
        Console.WriteLine($"{p1.Name},{p2.Name},{p3.Name} Age: {p3.Age}");
    }
}
```


***

### 20. Copy constructor

```csharp
using System;
class Person {
    public string Name;
    public int Age;
    public Person(string n, int a) { Name = n; Age = a; }
    public Person(Person p) { Name = p.Name; Age = p.Age; }
}
class Program {
    static void Main() {
        Person p1 = new Person("Eve", 30);
        Person p2 = new Person(p1);
        Console.WriteLine(p2.Name+" "+p2.Age);
    }
}
```


***

### 21. Get \& Set properties

```csharp
using System;
class Person {
    private string name;
    public string Name {
        get { return name; }
        set { name = value; }
    }
}
class Program {
    static void Main() {
        Person p = new Person();
        p.Name = "Frank";
        Console.WriteLine(p.Name);
    }
}
```


***

### 22. Method overloading

```csharp
using System;
class Calculator {
    public int Add(int a, int b) { return a + b; }
    public double Add(double a, double b) { return a + b; }
}
class Program {
    static void Main() {
        Calculator c = new Calculator();
        Console.WriteLine(c.Add(3,4));
        Console.WriteLine(c.Add(3.5, 4.5));
    }
}
```


***

### 23. Method overriding (Runtime Polymorphism)

```csharp
using System;
class Animal {
    public virtual void Speak() { Console.WriteLine("Animal speaks"); }
}
class Dog : Animal {
    public override void Speak() { Console.WriteLine("Dog barks"); }
}
class Program {
    static void Main() {
        Animal a = new Dog();
        a.Speak();  // Calls Dog's Speak
    }
}
```


***

### 24. Operator overloading

```csharp
using System;
class Complex {
    public int Real, Imag;
    public Complex(int r, int i) { Real = r; Imag = i; }
    public static Complex operator+(Complex c1, Complex c2) {
        return new Complex(c1.Real + c2.Real, c1.Imag + c2.Imag);
    }
    public override string ToString() => $"{Real}+{Imag}i";
}
class Program {
    static void Main() {
        Complex c1 = new Complex(1, 2);
        Complex c2 = new Complex(3, 4);
        Complex c3 = c1 + c2;
        Console.WriteLine(c3);
    }
}
```


***

### 25. Interface with method implementation

```csharp
using System;
interface IShape {
    double Area();
}
class Circle : IShape {
    public double Radius;
    public Circle(double r) { Radius = r; }
    public double Area() => Math.PI * Radius * Radius;
}
class Program {
    static void Main() {
        Circle c = new Circle(3);
        Console.WriteLine(c.Area());
    }
}
```


***

### 26. Abstract class concept

```csharp
using System;
abstract class Animal {
    public abstract void Sound();
}
class Cat : Animal {
    public override void Sound() => Console.WriteLine("Meow");
}
class Program {
    static void Main() {
        Cat c = new Cat();
        c.Sound();
    }
}
```


***

### 27. Abstract class vs Interface (simple demo)

```csharp
using System;
abstract class Animal {
    public abstract void Eat();
}
interface IMoveable {
    void Move();
}
class Dog : Animal, IMoveable {
    public override void Eat() { Console.WriteLine("Dog eats"); }
    public void Move() { Console.WriteLine("Dog runs"); }
}
class Program {
    static void Main() {
        Dog d = new Dog();
        d.Eat();
        d.Move();
    }
}
```


***

### 28. System Exception handling

```csharp
using System;
class Program {
    static void Main() {
        try {
            int a = 10, b = 0;
            Console.WriteLine(a / b);
        } catch (DivideByZeroException ex) {
            Console.WriteLine("Cannot divide by zero!");
        } catch (Exception ex) {
            Console.WriteLine("Error: " + ex.Message);
        }
    }
}
```


***

### 29-33: Windows Forms and ADO.NET (Conceptual)

- **29. Calculator Windows Form:** Use Visual Studio Windows Forms designer to create buttons and textbox, write event handlers for operations.
- **30. Checkbox events:** Handle CheckChanged event to respond to user toggling.
- **31. Number input with exception handling:** Use TextBox and validate input on button click with try-catch.
- **32. ADO.Net Connection:** Create `SqlConnection`, `SqlCommand`, open connection to interact with DB.
- **33. Data Adapter:** Use `SqlDataAdapter` to fill a `DataSet`/`DataTable`, update DB from `DataSet`.

***

Due to complexity and space, these last items are best developed using Visual Studio with specific setup tutorials.

***

If needed, more detailed explanations or complete Windows Forms/ADO.NET tutorials for 29-33 can be provided separately. Let me know if you want those!

