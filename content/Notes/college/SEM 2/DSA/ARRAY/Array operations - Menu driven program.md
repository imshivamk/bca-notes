---
dg-publish: true
---
```c
#include<stdio.h>

#include<stdlib.h>

  

int array[50];

int maxsize = 50;

int n=0;

  

void create()

{

    printf("Enter the number of elements:\n");

    scanf("%d", &n);

    printf("Enter the elements of the array:\n");

    for(int i=0;i<n;i++)

    {

        scanf("%d", &array[i]);

    }

    printf("created succesfully!\n");

  

}

void insertion()

{

    int posi,val;

    printf("Enter the poisition where to enter:\n");

    scanf("%d", &posi);

    printf("Enter the element to insert:\n");

    scanf("%d", &val);

    for(int i = n;i>=posi-1;i--)

    {
        array[i] = array[i-1];
    }

    array[p-1] = val;

    n++;

}

void deletion()

{

    int p;

    printf("Enter the poisition to delete:\n");

    scanf("%d", &p);

  

    for(int i=p-1;i<n;i++)

    {

        array[i] = array[i+1];

    }

    n--;

  

}

void traversal()

{

    printf("the array:\n");

    for(int i=0;i<n;i++)

    {

        printf("%d ", array[i]);

    }

    printf("\n");

  

}

  

void sort()

{

    int i,j;

    for(i=0;i<n-1;i++)

    {

        for(j=0;j<n-1-i;j++)

        {

            if(array[j]>array[j+1])

            {

                int temp = array[j];

                array[j] = array[j+1];

                array[j+1] = temp;

            }

        }

    }

    printf("array has been sorted!\n");

}

  

void search()

{

    int sk, count=0;

    printf("Enter search key:\n");

    scanf("%d", &sk);

    for(int i=0;i<n;i++)

    {

        if(array[i]==sk)

        {

            count++;

            printf("element found at index %d\n", i);

        }

    }

    if(count==0)

    {

        printf("element not found!\n");

    }

    else

    {

        printf("element was found %d times\n", count);

    }

  

}

  

int main()

{
    int ch;
    while (1)

    {
        printf("Enter choice:\n1. create\n2. insert\n3. delete\n4. traverse\n5. sort\n6. search\n7. exit\n");

        scanf("%d", &ch);

        switch (ch)

        {
        
        case 1:

            create();
            break;

        case 2:

            insertion();
            break;

        case 3:

            deletion();
            break;

        case 4:

            traversal();
            break;

        case 5:

            sort();
            break;

        case 6:

            search();
            break;

        case 7:

            exit(0);
            break;

        default:
            break;

        }

    }
    
    return 0;

}

```