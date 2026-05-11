---
dg-publish: true
---
**A method** means a named set consisting of statements that can be called from elsewhere in the program code by its name.

```java
int add(int a, int b){
	return a+b;
}
```

###### Problem 1 : Create a method called `printText` which prints the phrase "In a hole in the ground there lived a method" and a newline.

```java
import java.util.Scanner;
public class Reprint {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many times?");
        int n = scanner.nextInt();
        printText(n);
    }

    public static void printText(int n) {
        for(int i = 1; i <= n; i++){
        System.out.println("In a hole in the ground there lived a method");
        }  
    }
}
```



```java
import java.util.Scanner;
public class Calculator{
	public static void main(String[] args){
	
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter number 1:\n");
		int a = scanner.nextInt();
		System.out.println("Enter number 2:\n");
		int b = scanner.nextInt();
		while(true){
		System.out.println("Enter number 1:\n");
		int a = scanner.nextInt();
		System.out.println("Enter number 2:\n");
		int b = scanner.nextInt();
		System.out.println("1. Add\n2. Subtract\n3. Multiply\n);
		System.out.println("4. divide\n5. EXIT);
		
		
		int ch =  scanner.nextInt();
		switch(ch){
		case 1: add(a,b); break;
		case 2: subtract(a,b) break;
		case 3: multiply(a,b); break;
		case 4: divide(a,b); break;
		case 5: exit(0);
		default: System.out.println("invalid input);
		
		}
		}
		
	}
	int add(int a, int b){
	return a+b;
	}
	int subtract(int a, int b){
	return a-b;
	}
	int divide(int a, int b){
	return a/b;
	}
	int multiply(int a, int b){
	return a*b;
	}
	int remainder(int a, int b){
	return a%b;
	}
}
```
