---
dg-publish: true
---
## What is a pointer?

1. A pointer is essentially a <mark style="background: #FFB86CA6;">simple integer variable which holds a memory address</mark> that <mark style="background: #ABF7F7A6;">points to a value</mark>, <mark style="background: #FFF3A3A6;">instead of holding the actual value itself.</mark>
2. The computer's <mark style="background: #FFP3A7A8;">memory is a sequential store of data,</mark>
3. a pointer <mark style="background: #ABF7F7A6;">points to a specific part of the memory.</mark>
4. Our program can use pointers in such a way that the pointers point to a large amount of memory - depending on how much we decide to read from that point on.

## ROLE OF POINTERS
1. They are used for several reasons, such as:
	- <mark style="background: #BBFABBA6;">Strings</mark>
	- <mark style="background: #BBFABBA6;">Dynamic memory allocatio</mark>n
	- <mark style="background: #BBFABBA6;">Sending function arguments by reference</mark>
	- <mark style="background: #FFF3A3A6;">Building complicated data structures</mark>
	- <mark style="background: #FFF3A3A6;">Pointing to functions</mark>
	- <mark style="background: #FFF3A3A6;">Building special data structures (i.e. Tree, Tries, etc...)</mark>

## Dereferencing / Indirection

1. Dereferencing is the act of referring to where the pointer points, instead of the memory address.
2. We are already using dereferencing in arrays - but we just didn't know it yet.
3. The brackets operator - `[0]` for example, accesses the first item of the array.
4. since arrays are actually pointers, accessing the first item in the array is the same as dereferencing a pointer.
5. Dereferencing a pointer is done using the asterisk operator `*`

```c
/* define a local variable a */
int a = 1;

/* define a pointer variable, and point it to a using the & operator */
int * pointer_to_a = &a;

printf("The value a is %d\n", a);
printf("The value of a is also %d\n", *pointer_to_a);
```

6.  we used the `&` operator to point at the variable `a`
7.  '&'  is the direction/referencing operator
8. We can also change the contents of the dereferenced variable:
```c
int a = 1;
int * pointer_to_a = &a;

/* let's change the variable a */
a += 1;

/* we just changed the variable again! */
*pointer_to_a += 1;

/* will print out 3 */
printf("The value of a is now %d\n", a);
```
