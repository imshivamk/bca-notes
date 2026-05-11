---
dg-publish: true
---
## Data types

#### Primitive data types 
1. int
2. boolean
3. char 
4. double
#### Reference data types /  Wrapper classes
1. Integers
2. Boolean
3. Character
4. Double
5. String

- Primitive types are faster and useful in calculations involving huge numbers
- Reference data types by using Wrapper classes allow access to useful methods like e. g 

```java
String str = "Hello";
System.out.println(str.Length);
```

#### Autoboxing 
Process in which the java compiler converts the primitive data type to a reference data type in cases such as Assignment of a reference data type

```java
Integer num = 15;
String str = "@";
```

#### Unboxing
The process where the java compiler converts the Reference data type converts the Reference data type to its primitive data value when the value has to be used in calculations or check conditionals

```java
Boolean b = true;
if(b==true){
	System.out.println("True);
}
```
