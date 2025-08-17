---
dg-publish: true
---
1. to avoid creating different variables for each entity and their respective variables for each and every attribute, we can use structures.
2. <mark style="background: #FFB86CA6;">Structure is a group of variables of different data types represented by a single name.</mark>
3. Structures are the basic foundation for objects and classes in C
4. <mark style="background: #BBFABBA6;">Serialization of data</mark>
5. <mark style="background: #FFF3A3A6;">Passing multiple arguments in and out of functions through a single argument</mark>
6. Data structures such as linked lists, binary trees, and more

```c
struct point {
    int x;
    int y;
}
```

 - ' . ' is the member accessing operator

```c
/* draws a point at 10, 5 */
int x = 10;
int y = 5;
draw(x, y);
```

- Using structs, we can pass a point argument:

```c
/* draws a point at 10, 5 */
struct point p;
p.x = 10;
p.y = 5;
draw(p);
```
## Declaring structure variable


