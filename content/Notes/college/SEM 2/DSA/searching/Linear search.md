---
dg-publish: true
---
1. is a simple search algorithm that finds the position of a target value within a list or array. 
2. It sequentially checks each element of the list until a match is found or the entire list has been searched.
3. search key is the target value we want to find if it is present in the array

```c
int search()
{
    int sk;

    printf("Enter search key:\n");
    scanf("%d", &sk);

    int count = 0;
    
    for (int i = 0; i < size; i++)
    {
        if (array[i] == sk)
        {
            printf("Element found at index %d\n", i);
            count++;
        }
    }

    if (count == 0)
    {
        printf("Element not found!\n");
    }

}
```