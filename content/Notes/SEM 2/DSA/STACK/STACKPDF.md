1. A stack is a data structure that follows the Last In, First Out (LIFO) principle. 
2. It means that the <mark style="background: #3cbefc;">last element added to the stack is the first one to be removed</mark>. Here's a simple explanation with a diagram:

### Stack Data Structure:

1. A stack is like a <mark style="background: #ffad2a;">collection of items stacked on top of each other.</mark> Think of it as a stack of books.
2. You can only <mark style="background: #77e68a;">add or remove books from the top of the stack</mark>.

#### Operations:

1. **Push:** Add an element to the top of the stack.
2. **Pop:** Remove the element from the top of the stack.
3. **Peek (or Top):** View the top element without removing it.

### Diagram:

Let's represent a stack with three elements (A, B, and C):

![](https://i.imgur.com/bvSy1Oa.png)

- Initially, the stack is empty.
- The element 'A' is pushed onto the stack.
- Then 'B' is pushed, and finally 'C' is pushed.
- The top of the stack is always the last element added (in this case, 'C').
- If we pop an element, 'C' will be removed first.

### Operations:

1. **Push 'D':**
![](https://i.imgur.com/gcoya5H.png)

2. **Pop:**

![](https://i.imgur.com/yK8NBiF.png)

3. **Peek (Top):** (Without removing the top element)
	Simply displaying the top element


This diagram illustrates the basic idea of a stack. Elements are added to and removed from the top of the stack, and the top of the stack always represents the most recently added element.


## STACK USING ARRAY

```c
#include<stdio.h>
#include<stdlib.h>

int array[10];
int size = sizeof(array)/sizeof(array[0]);

int top = -1; 

void push()
{
    top++;
    
    printf("Enter value tp insert:\n");
    scanf("%d", &array[top]);
}


void pop()
{
    top--;
}

void peek()
{
    printf("The top: %d\n", array[top]);
}

  
void display()
{
    printf("the list is:\n");

    for(int i=0;i<=top;i++)
    {
        printf("%d\n", array[i]);
    }
}

void isempty()
{

    if(top==-1)
    {
        printf("empty!\n");
    }
    else
    {
        printf("Not empty!\n");
    }
    
}

void isfull()
{
    if(top>=size)
    {
        printf("FULL!\n");
    }

    else
    {
        printf("not full!\n");
    }

}

  

int main()
{   int ch;
 
    while(1)
    {
        printf("1.push\n2.pop\n3.peek\n4.display\n5.isempty\n6.isfull\n7.exit\n");
        scanf("%d", &ch);

        switch(ch)
        {

            case 1:
            push();
            break;

            case 2:
            pop();
            break;

            case 3:
            peek();
            break;

            case 4:
            display();
            break;

            case 5:
            isempty();
            break;

            case 6:
            isfull();
            break;

            case 7:
            exit(0);

            default:
            printf("inavlid input!");

        }

  

    }

    return 0;

}
```


## STACK USING LINKED LIST

```c
#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *prev;
};


struct node *top = NULL;
  
void push()
{
    struct node *newnode = (struct node *)malloc(sizeof(struct node));

        printf("Enter the data:\n");
        scanf("%d", &newnode->data);

        if (top == NULL)
        {
            newnode->prev = NULL;

            top = newnode;
        }

        else
        {
            newnode->prev = top; 
            // store the previous top in the prev part of the newnode
            
            top = newnode;       
            // update the top aas the ADDRESS TO THE NEWNDODE
        }
  
}

  

void display()
{

    struct node *temp = top;

    printf("The stack is:\n");

    while (temp != NULL)
    {
        printf("%d, ", temp->data);

        temp = temp->prev;
    }

    printf("\n");

}

void peep()
{
    struct node *temp = top;

    printf("The top is:\n");
    
    printf("%d\n", temp->data);
}

void pop()
{
    struct node *temp = top;
    
    top = top->prev;

    free(temp);

}

int main()
{

    int ch;

    while (1)
    {

        printf("1.push\n2.pop\n3.peek\n4.display\5.exit\n");
        scanf("%d", &ch);

        switch (ch)
        {

        case 1:
            push();
            break;

        case 2:
            pop();
            break;

        case 3:
            peep();
            break;

        case 4:
            display();
            break;

        case 5:
            exit(0);
            break;

        default:
            printf("wrong input!\n");

        }

    }

    return 0;

}
```