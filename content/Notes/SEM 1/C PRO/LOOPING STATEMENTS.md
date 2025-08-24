---
dg-publish: true
---
Looping statements in C are used to execute a block of code repeatedly as long as a specified condition is true. The three main types of loops in C are `while`, `do while`, and `for` loops.

### 1. `while` Loop

The `while` loop executes a block of code as long as the specified condition is true. The condition is evaluated before the execution of the loop's body.

#### Syntax:

```c
while (condition) {
    // code to be executed
}
```

#### Example:

```c
#include <stdio.h>

int main() {
    int i = 0;

    while (i < 5) {
        printf("i = %d\n", i);
        i++;
    }

    return 0;
}
```

In this example, the loop prints the value of `i` from 0 to 4.

### 2. `do while` Loop

The `do while` loop is similar to the `while` loop, but the condition is evaluated after the execution of the loop's body. This guarantees that the loop's body is executed at least once.

#### Syntax:

```c
do {
    // code to be executed
} while (condition);
```

#### Example:

```c
#include <stdio.h>

int main() {
    int i = 0;

    do {
        printf("i = %d\n", i);
        i++;
    } while (i < 5);

    return 0;
}
```

In this example, the loop prints the value of `i` from 0 to 4. The body of the loop is executed at least once even if the condition is false initially.

### 3. `for` Loop

The `for` loop is used when the number of iterations is known beforehand. It has three parts: initialization, condition, and increment/decrement.

#### Syntax:

```c
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

#### Example:

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("i = %d\n", i);
    }

    return 0;
}
```

In this example, the loop prints the value of `i` from 0 to 4. The initialization (`int i = 0`), condition (`i < 5`), and increment (`i++`) are all included in the `for` loop statement.

### Comparison and Use Cases

- **`while` loop**: Best used when the number of iterations is not known beforehand and the condition needs to be checked before executing the loop's body.
- **`do while` loop**: Best used when the loop must execute at least once, regardless of whether the condition is true initially.
- **`for` loop**: Best used when the number of iterations is known beforehand or can be determined from the start.

### Examples of Each Loop

#### `while` Loop Example:

```c
#include <stdio.h>

int main() {
    int n = 10;
    while (n > 0) {
        printf("n = %d\n", n);
        n--;
    }

    return 0;
}
```

This loop counts down from 10 to 1.

#### `do while` Loop Example:

```c
#include <stdio.h>

int main() {
    int n = 10;
    do {
        printf("n = %d\n", n);
        n--;
    } while (n > 0);

    return 0;
}
```

This loop also counts down from 10 to 1, but ensures the loop body executes at least once.

#### `for` Loop Example:

```c
#include <stdio.h>

int main() {
    for (int n = 10; n > 0; n--) {
        printf("n = %d\n", n);
    }

    return 0;
}
```

This loop counts down from 10 to 1 using a `for` loop.

### Summary

Looping statements are essential in C programming for performing repetitive tasks efficiently. Understanding the differences and appropriate use cases for `while`, `do while`, and `for` loops will help you write better, more efficient code.