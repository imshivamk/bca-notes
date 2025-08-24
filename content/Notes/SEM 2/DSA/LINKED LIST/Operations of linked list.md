---
dg-publish: true
---

## 1. Create 

![](https://i.imgur.com/cPhfOSw.png)


![](https://i.imgur.com/5bB3VXa.png)


```c
for (int i = 1; i <= size; i++)

    {
        struct node *newnode;
        int val;

        newnode = (struct node *)malloc(sizeof(struct node));

        printf("Enter data:\n");
        scanf("%d", &val);
        
        newnode->data = val;

        if (head == NULL)
        {
            newnode->next = NULL;
            head = newnode;
            end = newnode;
        }
        else
        {
            newnode->next = NULL;
            end->next = newnode;

            end = newnode;
        }
    }
}

```
## 2. Insert

### 2.1 Insert at beginning

![](https://i.imgur.com/EK4Nujp.png)

![](https://i.imgur.com/pwapIZy.png)

![](https://i.imgur.com/SMQNdg0.png)


![](https://i.imgur.com/fp7RiXq.png)



```c
void insert()
{
 
    struct node *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));

    printf("Enter data:\n");
    scanf("%d", &newnode->data);

    newnode->next = head;
    head = newnode;

}
```

### 2.2 Insert at end

![[Pasted image 20240221002221.png]]

![](https://i.imgur.com/yDX6rJy.png)


```c
void insertend()
{
	struct node *temp = head;
    struct node *current;

    struct node *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));

    printf("Enter data:\n");
    scanf("%d", &newnode->data);

	while(temp!=NULL)
        {
            current = temp;    // n-1'th
            temp = temp->next; // n'th
        }
        
        current->next = newnode;
        newnode->next = temp;
}
```

### 2.3 Insert at any position

![](https://i.imgur.com/O7SZlrg.png)

![](https://i.imgur.com/kKrB0Qp.png)


```c
void insert()

{
    int p;
    printf("Enter where to insert:\n");
    scanf("%d", &p);

    struct node *temp = head;
    struct node *current;

    struct node *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));

    printf("Enter data:\n");
    scanf("%d", &newnode->data);
  
    if (p == 1)
    {
        newnode->next = head;
        head = newnode;
    }
    else
    {     
        for (int i = 1; i < p; i++)
        {
            current = temp;    // n-1'th
            temp = temp->next; // n'th
        }
        
        current->next = newnode;
        newnode->next = temp;

    }
}
```
## 3. Delete

![](https://i.imgur.com/hzNRBbL.png)

![](https://i.imgur.com/pIwVdW4.png)


```c
void deletion()
{
    int p;
    printf("Enter which position to delete:\n");
    scanf("%d", &p);

    struct node *temp = head;
    struct node *current;

    for (int i = 1; i < p; i++)
    {
        current = temp;    // n-1'th
        temp = temp->next; // n'th
    }

    current->next = temp->next;
    free(temp);
}
```

## 4. Traverse

```c
void traversal()
{
    printf("the list:\n");

    struct node *temp;
    temp = head;

    while (temp != NULL)
    {
        printf("%d\n", temp->data);
        temp = temp->next;
    }
}
```
