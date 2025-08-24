---
dg-publish: true
---
In C programming, functions are a fundamental concept that helps in organizing code into modular and reusable blocks. Here’s an overview of functions in C:

```table-of-contents

```
### Basics of Functions in C

#### 1. **Definition and Declaration**

A function in C is defined by specifying its return type, name, and parameters. The general syntax is:

```c
return_type function_name(parameter_list) {
    // body of the function
}
```

- **Return Type:** Specifies the type of value the function will return (e.g., `int`, `float`, `char`, `void`).
- **Function Name:** The name used to call the function.
- **Parameter List:** A comma-separated list of variables passed to the function (optional).

#### Example:

```c
#include <stdio.h>

// Function declaration
int add(int a, int b);

int main() {
    int result;
    result = add(10, 20);
    printf("The sum is %d\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
```

In this example:
- `add` is a function that takes two integers and returns their sum.
- The function is declared before `main()` and defined after `main()`.

#### 2. **Calling a Function**

A function is called by using its name followed by parentheses containing any arguments. For example, `add(10, 20)` calls the `add` function with `10` and `20` as arguments.

### Types of Functions

#### 1. **Library Functions**

1. These are built-in functions provided by C standard libraries, such as `printf()`, `scanf()`, `strlen()`, `strcpy()`, etc. They are defined in header files like `stdio.h`, `string.h`, etc.
2. We have to include header files like <stdio.h>, <stdlib.h>, <string.h> etc to use certain library functions in our C program.


#### 2. **User-Defined Functions**

These are functions created by the programmer to perform specific tasks. The `add` function in the example above is a user-defined function.

### Function Prototypes

A function prototype is a declaration of a function that specifies the function’s name, return type, and parameters without the body. It informs the compiler about the function before its actual definition. It’s typically placed at the beginning of the program or in a header file.

#### Example:

```c
#include <stdio.h>

// Function prototype
int multiply(int a, int b);

int main() {
    int result;
    result = multiply(5, 10); // function call
    printf("The product is %d\n", result);
    return 0;
}

// Function definition
int multiply(int a, int b) {
    return a * b;
}
```

### Parameter Passing

#### 1. **Pass by Value**

1. C functions use pass by value by default, meaning the actual value is passed to the function. 
2. Modifying the parameter within the function does not affect the original argument.

```c
void modify(int x) {
    x = 10; // This will not change the original variable
}
```

#### 2. **Pass by Reference**

1. To modify the actual argument, you pass the address (pointer) of the variable.
2. we add the pointer as the parameters in the function, denoted by '*'
3. and we pass the arguments' address using the '&' ampersand operator.
4. which tells the computer the modify the value stored at that particular address

```c
void modify(int *x) {
    *x = 10; // This will change the original variable
}

int main() {
    int a = 5;
    modify(&a);
    printf("a is %d\n", a); // This will print 10
    return 0;
}
```

### Returning Values

A function can return a value using the `return` statement. If the function does not return a value, its return type should be `void`.

e. g if a function returns an integer value, like in the given example it should be of the type int.

```c
int square(int x) {
    return x * x;
}

void printMessage() {
    printf("Hello, World!\n");
}
```

### Recursion

A function can call itself; this is known as recursion. Recursive functions must have a base condition to terminate the recursion.

```c
int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}
```
