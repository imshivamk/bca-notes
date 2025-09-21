## QUESTIONS 

1.     Write a code in  C# to demonstrate  concept of class & object.


1. Class & Object  
    Simple class `Person` and creating/using an object.
    

```csharp
using System;

class Person
{
    public string Name;
    public int Age;

    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
    }
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "Shivam";
        p.Age = 21;
        p.Introduce();
    }
}
```


2.     Write A Code  In  C# To Demonstrate Concept Of Method Overloading.


2. Method Overloading  
    Same method name, different parameter signatures.
    

```csharp
using System;

class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
}

class Program
{
    static void Main()
    {
        var calc = new Calculator();
        Console.WriteLine(calc.Add(2, 3));        // 5
        Console.WriteLine(calc.Add(2.5, 3.1));    // 5.6
        Console.WriteLine(calc.Add(1,2,3));       // 6
    }
}
```


3. Method Overriding (Runtime Polymorphism)  
    `virtual` in base, `override` in derived.
    

```csharp
using System;

class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal makes a sound");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}

class Program
{
    static void Main()
    {
        Animal a = new Dog(); // runtime polymorphism
        a.Speak();            // prints "Dog barks"
    }
}
```

Write A Code In C# To Demonstrate Concept Of An Interface By Implementing It’s Method In A Class.

4. Interface and Implementation  
    Define `IMovable` and implement in `Car`.
    

```csharp
using System;

interface IMovable
{
    void Move(int distance);
}

class Car : IMovable
{
    public void Move(int distance)
    {
        Console.WriteLine($"Car moved {distance} meters.");
    }
}

class Program
{
    static void Main()
    {
        IMovable m = new Car();
        m.Move(150);
    }
}
```


Write A Code In C# To Perform Overloading Of Operators.

5. Operator Overloading  
    Overload `+` for a `Point` struct/class.
    

```csharp
using System;

class Point
{
    public int X { get; }
    public int Y { get; }

    public Point(int x, int y) { X = x; Y = y; }

    public static Point operator +(Point a, Point b)
    {
        return new Point(a.X + b.X, a.Y + b.Y);
    }

    public override string ToString() => $"({X}, {Y})";
}

class Program
{
    static void Main()
    {
        var p1 = new Point(2, 3);
        var p2 = new Point(4, 1);
        var sum = p1 + p2;
        Console.WriteLine(sum); // (6, 4)
    }
}
```

6. Get & Set Properties  
    Auto-property, property with validation, and expression-bodied property.
    

```csharp
using System;

class Student
{
    public string Name { get; set; }                // auto-property
    private int age;
    public int Age                                   // property with validation
    {
        get => age;
        set
        {
            if (value < 0) throw new ArgumentOutOfRangeException(nameof(Age));
            age = value;
        }
    }
    public bool IsAdult => Age >= 18;               // read-only computed property
}

class Program
{
    static void Main()
    {
        var s = new Student { Name = "A", Age = 21 };
        Console.WriteLine($"{s.Name}, Adult: {s.IsAdult}");
    }
}
```

7. Constructor Concept  
    Class with a constructor to initialize fields.

```csharp
using System;

class Book
{
    public string Title;
    public string Author;

    public Book(string title, string author)
    {
        Title = title;
        Author = author;
    }

    public void Show() => Console.WriteLine($"{Title} by {Author}");
}

class Program
{
    static void Main()
    {
        var b = new Book("C# Basics", "Author");
        b.Show();
    }
}
```

8. Overloading of Constructor  
    Multiple constructors (constructor overloading).

```csharp
using System;

class Rectangle
{
    public int Width { get; }
    public int Height { get; }

    public Rectangle() : this(1, 1) { }            // default
    public Rectangle(int size) : this(size, size) { } // square
    public Rectangle(int width, int height)        // main
    {
        Width = width;
        Height = height;
    }

    public int Area() => Width * Height;
}

class Program
{
    static void Main()
    {
        var r1 = new Rectangle();
        var r2 = new Rectangle(5);
        var r3 = new Rectangle(4, 6);
        Console.WriteLine(r1.Area()); // 1
        Console.WriteLine(r2.Area()); // 25
        Console.WriteLine(r3.Area()); // 24
    }
}
```

9. Handle System Exception  
    Try-catch with specific and general exceptions; finally block.
    

```csharp
using System;

class Program
{
    static void Main()
    {
        try
        {
            Console.Write("Enter a number: ");
            string input = Console.ReadLine();
            int x = int.Parse(input);                      // may throw FormatException
            Console.WriteLine(10 / x);                     // may throw DivideByZeroException
        }
        catch (FormatException fx)
        {
            Console.WriteLine("Invalid number format: " + fx.Message);
        }
        catch (DivideByZeroException dz)
        {
            Console.WriteLine("Cannot divide by zero: " + dz.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Unexpected error: " + ex.Message);
        }
        finally
        {
            Console.WriteLine("Program finished (finally).");
        }
    }
}
```

10. Abstract Class  
    Abstract base with abstract method and concrete derived class.
    

```csharp
using System;

abstract class Shape
{
    public abstract double Area();
    public void Describe() => Console.WriteLine($"Area is {Area()}");
}

class Circle : Shape
{
    public double Radius { get; }
    public Circle(double r) { Radius = r; }
    public override double Area() => Math.PI * Radius * Radius;
}

class Program
{
    static void Main()
    {
        Shape s = new Circle(3);
        s.Describe();
    }
}
```

11. Difference Between Abstract Class & Interface  
    Short example and three bullet differences.
    

```csharp
// Interface example
public interface ILogger
{
    void Log(string message);
}

// Abstract class example
public abstract class BaseLogger
{
    public abstract void Log(string message);
    public void LogWithTime(string message) => Console.WriteLine($"[{DateTime.Now}] {message}");
}

// Implementation
public class ConsoleLogger : BaseLogger, ILogger
{
    public override void Log(string message) => Console.WriteLine(message);
    void ILogger.Log(string message) => Console.WriteLine("Interface Log: " + message);
}

// Differences (summary):
// 1. Abstract class can have fields and implemented methods; interface (C# before default interface methods) cannot hold state.
// 2. A class can inherit only one abstract class but can implement multiple interfaces.
// 3. Use abstract class when you want shared code/state; use interface to specify capability/contract.
```

12. Windows Forms Calculator (simple)  
    Minimal WinForms code for a basic calculator (Add/Sub/Mul/Div). Put this in a WinForms project's Form1.cs (replace the designer calls with a simple layout created in code).
    

```csharp
using System;
using System.Windows.Forms;

public class CalculatorForm : Form
{
    TextBox t1 = new TextBox { Left = 10, Top = 10, Width = 200 };
    TextBox t2 = new TextBox { Left = 10, Top = 40, Width = 200 };
    Label result = new Label { Left = 10, Top = 110, Width = 200 };
    public CalculatorForm()
    {
        var addBtn = new Button { Text = "+", Left = 10, Top = 70, Width = 45 };
        var subBtn = new Button { Text = "-", Left = 60, Top = 70, Width = 45 };
        var mulBtn = new Button { Text = "*", Left = 110, Top = 70, Width = 45 };
        var divBtn = new Button { Text = "/", Left = 160, Top = 70, Width = 45 };

        addBtn.Click += (s,e) => Operate((a,b) => (a+b).ToString());
        subBtn.Click += (s,e) => Operate((a,b) => (a-b).ToString());
        mulBtn.Click += (s,e) => Operate((a,b) => (a*b).ToString());
        divBtn.Click += (s,e) => Operate((a,b) => b==0 ? "∞ (divide by zero)" : (a/b).ToString());

        Controls.AddRange(new Control[] { t1, t2, addBtn, subBtn, mulBtn, divBtn, result });
        Text = "Simple Calculator";
        Width = 240;
        Height = 180;
    }

    void Operate(Func<double,double,string> op)
    {
        try
        {
            double a = double.Parse(t1.Text);
            double b = double.Parse(t2.Text);
            result.Text = "Result: " + op(a,b);
        }
        catch (Exception ex)
        {
            result.Text = "Error: " + ex.Message;
        }
    }

    [STAThread]
    public static void Main()
    {
        Application.Run(new CalculatorForm());
    }
}
```

13. Copy Constructor  
    C# style (constructor that accepts same type).
    

```csharp
using System;

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }

    // copy constructor
    public Person(Person other)
    {
        Name = other.Name;
        Age = other.Age;
    }

    public Person(string name, int age) { Name = name; Age = age; }

    public override string ToString() => $"{Name}, {Age}";
}

class Program
{
    static void Main()
    {
        var original = new Person("Shivam", 21);
        var copy = new Person(original);
        Console.WriteLine(original);
        Console.WriteLine(copy);
    }
}
```

14. WinForms — Checkbox Events Demo  
    A small form demonstrating CheckedChanged event.
    

```csharp
using System;
using System.Windows.Forms;

public class CheckBoxForm : Form
{
    CheckBox cb = new CheckBox { Text = "Enable Option", Left = 10, Top = 10 };
    Label status = new Label { Left = 10, Top = 40, Width = 200 };

    public CheckBoxForm()
    {
        cb.CheckedChanged += Cb_CheckedChanged;
        Controls.AddRange(new Control[] { cb, status });
        Text = "Checkbox Events";
        Width = 260;
        Height = 120;
    }

    private void Cb_CheckedChanged(object sender, EventArgs e)
    {
        status.Text = cb.Checked ? "Checkbox checked" : "Checkbox unchecked";
    }

    [STAThread]
    public static void Main()
    {
        Application.Run(new CheckBoxForm());
    }
}
```

15. WinForms — Accept Number, calculate Square, handle exceptions  
    Form that takes number, computes square, and handles bad input.
    

```csharp
using System;
using System.Windows.Forms;

public class SquareForm : Form
{
    TextBox input = new TextBox { Left = 10, Top = 10, Width = 150 };
    Button calc = new Button { Left = 170, Top = 8, Text = "Square" };
    Label output = new Label { Left = 10, Top = 45, Width = 300 };

    public SquareForm()
    {
        calc.Click += Calc_Click;
        Controls.AddRange(new Control[] { input, calc, output });
        Text = "Square Calculator";
        Width = 360;
        Height = 120;
    }

    private void Calc_Click(object sender, EventArgs e)
    {
        try
        {
            if (!double.TryParse(input.Text, out double n))
                throw new FormatException("Please enter a valid numeric value.");

            double sq = checked(n * n); // checked to catch overflow for large values
            output.Text = $"Square: {sq}";
        }
        catch (FormatException fex)
        {
            output.Text = "Input error: " + fex.Message;
        }
        catch (OverflowException ofx)
        {
            output.Text = "Overflow error: " + ofx.Message;
        }
        catch (Exception ex)
        {
            output.Text = "Unexpected error: " + ex.Message;
        }
    }

    [STAThread]
    public static void Main()
    {
        Application.Run(new SquareForm());
    }
}
```

16. ADO.NET — Demonstrate connection of ADO.NET objects (SqlConnection, SqlCommand, SqlDataReader)  
    Replace `your_connection_string` with your DB string.
    

```csharp
using System;
using System.Data;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connStr = "your_connection_string_here"; // e.g. "Server=.;Database=TestDb;Trusted_Connection=True;"
        using (SqlConnection conn = new SqlConnection(connStr))
        {
            conn.Open();
            using (SqlCommand cmd = new SqlCommand("SELECT TOP 5 Id, Name FROM Users", conn))
            using (SqlDataReader reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    Console.WriteLine($"Id={reader.GetInt32(0)}, Name={reader.GetString(1)}");
                }
            }
        }
    }
}
```

17. ADO.NET — Demonstrate DataAdapter object (fill DataSet and update)  
    This shows selecting data into a `DataSet` and using `SqlDataAdapter` and `SqlCommandBuilder` to update back.
    

```csharp
using System;
using System.Data;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connStr = "your_connection_string_here";
        using (SqlConnection conn = new SqlConnection(connStr))
        {
            conn.Open();
            string sql = "SELECT Id, Name FROM Users"; // table must have a primary key
            SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);
            SqlCommandBuilder builder = new SqlCommandBuilder(adapter); // auto-generate INSERT/UPDATE/DELETE

            DataSet ds = new DataSet();
            adapter.Fill(ds, "Users");

            DataTable users = ds.Tables["Users"];
            // Display existing rows
            foreach (DataRow r in users.Rows)
                Console.WriteLine($"Row: Id={r["Id"]}, Name={r["Name"]}");

            // Add a new row in-memory
            DataRow newRow = users.NewRow();
            newRow["Name"] = "NewUser_" + DateTime.Now.Ticks;
            users.Rows.Add(newRow);

            // Push changes back to DB
            int affected = adapter.Update(ds, "Users");
            Console.WriteLine($"Rows affected on DB: {affected}");
        }
    }
}
```

---

If you want, I can:

1. Convert any of the console snippets into a complete Visual Studio project file structure.
    
2. Provide WinForms designer code (auto-generated `InitializeComponent`) for the form examples.
    
3. Show Entity Framework Core equivalents for the ADO.NET examples.
    

Tell me which ones you want expanded and I’ll produce that next.