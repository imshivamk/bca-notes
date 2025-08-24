## WHAT IS QUEUE

1. A queue is a data structure that follows the First In, First Out (FIFO) principle.
2. In a queue, the first element added is the first one to be removed. 
3. A queue is like a line of people waiting for a service.
4. The person who arrives first is served first, and new people join the line at the end.
![](https://i.imgur.com/xLglza0.png)


#### Operations:

1. **Enqueue (or Insert):** Add an element to the back of the queue.

![](https://i.imgur.com/rNmCHaz.png)

2. **Dequeue (or Remove):** Remove the element from the front of the queue.

![](https://i.imgur.com/G0yHhUl.png)

3. **Front:** View the front (first) element without removing it.

4. **Rear (or Back):** View the rear (last) element without removing it.
5. Display - view the complete queue by displaying it to the console
6. IsFull - check if the queue is full; if rear>= maxsize
7. isempty - if front == -1 or rear == -1; queue is empty.

## Implementation using Array

```c
#include <stdio.h>
#include <stdlib.h>

int array[10];

int size = sizeof(array) / sizeof(array[0]);


int front = -1;
int rear = -1;
int count = 0;


void enqueue()
{
    rear++;
    printf("Enter the eleemnt to insert:\n");
    scanf("%d", &array[rear]);

    if (front == -1)
    {
        front++;
    }

}

void dequeue()
{
    front++; // 1 2 3 4
    
    if (front > rear)
    {
        printf("queue is empty!\n");
        front = -1;
        rear = -1;
    }

}

void display()

{
    if (rear == -1)
    {
        printf("queue is empty!\n");
    }
   
    else
    {
        printf("the queue:\n");

        for (int i = front; i <= rear; i++)
        {
            printf("%d, ", array[i]);
        }
    }
    
    printf("\n");
}

void isempty()
{
    if(rear==-1)
    {
        printf("queue is empty!\n");
    }
    else
    {
        printf("Queue is not empty!\n");
    }

}

void isfull()
{
    if(rear>=size)
    {
        printf("list is full!\n");
    }

    else
    {
        printf("list is not full!\n");
    }

}


void showrear()
{
    printf("the rear element is %d\n", array[rear]);
}

void showfront()
{
    printf("the front element is %d\n", array[front]);
}


void size()
{
    for(int i=front;i<=rear;i++)
    {
        count++;
    }
 
    printf("there are %d elements in queue!\n", count);
    
}

int main()
{

    int ch;
    while (1)
    {

        printf("Enter choice:\n1. enqueue\n2. dequeue\n3. display\n4. reverse\n5. size\n6. isempty\n7. isfull\n8. show front\n9. show rear\n10. count elements\n11. exit\n");

        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            enqueue();
            break;

        case 2:
            dequeue();
            break;

        case 3:
            display();
            break;

        case 4:
            reverse();
            break;

        case 5:
            size();
            break;

        case 6:
            isempty();
            break;

        case 7:
            isfull();
            break;

        case 8:
            showfront();
            break;

        case 9:
            showrear();
            break;

        case 10:
            exit(0);
            break;
            
        default:
            break;
        }
    }
    return 0;
}
```