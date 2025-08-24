---
dg-publish: true
---
1. C Unions are essentially the same as C Structures
2. except that <mark style="background: #FFF3A3A6;">instead of containing multiple variables each with their own memory</mark> <mark style="background: #FFB86CA6;">a Union allows for multiple names to the same variable</mark>
3. that means it allocatees the memory equal to the size of the variable of the maximum size.
4. These names can treat the memory as different types.

<mark style="background: #BBFABBA6;">Combining this with a structure allows you to create a "tagged" union which can be used to store multiple different types</mark>, one at a time.

For example, you might have a "number" struct, but you don't want to use something like this:

```c
struct operator {
    int intNum;
    float floatNum;
    int type;
    double doubleNum;
};
```

Because your program has a lot of them and it takes a bit too much memory for all of the variables

```c
struct operator {
    int type;
    union {
      int intNum;
      float floatNum;
      double doubleNum;
    } types;
};
```

