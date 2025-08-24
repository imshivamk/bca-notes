### Definition

1. A linked list is a linear data structure used to store, organize and retrieve data.
2. linked lists consist of nodes where <mark style="background: #9d64e2;">each node contains both data and a pointer to the next node in the sequence.</mark>
3. Unlike arrays, which store elements in contiguous memory locations, <mark style="background: #9d64e2;">nodes in a linked list are NOT stored in contiguous memory locations</mark>

The basic components of a linked list include:

1. **Node**: Each node in a linked list holds a data element and a pointer to the next node. In a doubly linked list, each node also has a reference to the previous node.
2. **Head**: The head of the linked list is a <mark style="background: #3cbefc;">reference to the first node.</mark> It serves as the <mark style="background: #3cbefc;">starting point for traversing the list</mark>.
3. **end**: end is a structure pointer in the linked list which is a <mark style="background: #3cbefc;">pointer to the last end-node of the linked list.</mark>
    

### Memory representation of linked list

![](https://i.imgur.com/OaaYDSo.png)

### Linked Lists:

**Advantages:**

1. **Dynamic Size:**
   - Linked lists can dynamically grow or shrink in size, making them more flexible than arrays.
2. **Insertions and Deletions:**
   - Insertions and deletions are more efficient in linked lists, especially when performed in the middle, as they only require adjusting pointers.
3. **No Pre-allocation:**
   - Linked lists do not require pre-allocation of memory. Nodes can be allocated as needed, which is beneficial for memory management.

**Disadvantages:**

1. **Sequential Access:**
   - Linked lists do not provide efficient random access to elements. Traversal from the head is required to reach a specific element, resulting in a time complexity of O(n).
2. **Memory Overhead:**
   - Linked lists have additional memory overhead due to the storage of explicit pointers/references for each element.
3. **Cache Performance:**
   - The non-contiguous nature of linked list nodes may lead to poorer cache performance compared to arrays.


### Syntax and implementation

```c
struct node
{
    int data;

    struct node *next;
};
```

We create a user defined data type using structures to store data and the next pointer.

```c
struct node *head = NULL;

struct node *end = NULL;
```

1. We declare structure pointers head and end, which store the address of the first/head and last/end node respectively.
2. Initially both are declared NULL as the linked list is empty.

## OPERATIONS 

## 1. Create 
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
