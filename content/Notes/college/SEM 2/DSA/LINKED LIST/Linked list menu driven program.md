---
dg-publish: true
---
```c

#include<stdio.h>

#include<stdlib.h>

struct node
{
    int data;
    struct node* next; // structure pointer as it *points* to the next node

};

  

struct node* head, *end;

// head and end are also struct  pointers to store the first and last node respectively;

void create()
{
    // lets create a new linked list

    int size; //

    printf("Enter the number of nodes to initialize the list with:\n");

    scanf("%d", &size);

    for(int i=0;i<size;i++)
    {
        struct node* newnode = (struct node*)malloc(sizeof(struct node));
        
        printf("Enter the data of the node:\n");
        scanf("%d", &newnode->data);

        if(head==NULL)

        {
            // case when the list is empty

            newnode->next = NULL; 
            // as it will be the end node, it will store null in nextt part

            head = newnode; // as it is the first/head-node
            
            end = newnode; // as it is the last/end-node
        }

        else

        {   newnode->next = NULL;

            end->next = newnode; 
            // the previous last node will point to the newnode

            end = newnode; // this node will now become the endnode

        }

    }

}


void insert()

{
    int n, val;

    printf("enter where to insert the node:\n");
    scanf("%d", &n);

    printf("enter the value:\n");
    scanf("%d", &val);

    struct node* newnode = (struct node*)malloc(sizeof(struct node));
    
    newnode->data = val;
    
    if(n==1)
    {

        newnode->next = head; 
        // the previous headnode will become the second node

        head = newnode; 
        // the head pointer will store the address to our newnode

    }
    
    else
    {
        struct node *temp, *current;
        temp = head;

        for(int i=0;i<n;i++)
        {

            current=temp; // store the current node

            temp=temp->next; // move to the next node

  

            // at the end of the last iteration
            //Current will store the n-1'th node and
            // temp will store the address to the nth node
        }

        current->next = newnode;

        newnode->next = temp;
    }

}

void deletion()
{

    int n;

    printf("enter where to insert the node:\n");
    scanf("%d", &n);

    struct node *temp, *current;
    temp = head;

    if(n==1)
    {
        temp = head; // store headnode's address in temp

        head = head->next; 
        // head will store the second node as we are deleting the first node
        free(temp); // deallocte the memory for the first node
    }
    
    else
    {

        for(int i=0;i<n;i++)

        {

            current=temp; // store the current node

            temp=temp->next; // move to the next node

            // at the end of last iteration
            //current will store n-1'th and temp will store the n'th node

        }

        //  1 2 3 4 remove 2, 1 will point to 3
        current->next = temp->next;

        free(temp);

    }

}

void traverse()
{

    struct node *temp = head;

    printf("The list:\n");

    while(temp!=NULL)

    {

        printf("%d, ", temp->data);

        temp = temp->next; //move to the next node
    }

    printf("\n");
}

void search()
{

    int sk;

    printf("enter the search key:\n");
    scanf("%d", &sk);

    struct node *temp = head;

    int count=0;

    int i=1;

    while(temp!=NULL)

    {
        if(temp->data == sk)
        {

            printf("element found at position %d \n", i);

            count++;
        }

        temp = temp->next; //move to the next node

        i++;

    }

    if(count==0)

    {
        printf("Element not found!\n");
    }

}

int main()

{

    head = NULL;

    end = NULL;

    // initially the list is empty

    int ch;

    while (1)

    {

        printf("1.create\n2.insert\n3.delete\n4.traverse\n5.search\n6.exit\n");

        scanf("%d", &ch);

        switch (ch)

        {

        case 1:

            create();

            break;

        case 2:

            insert();

            break;

        case 3:

            deletion();

            break;

        case 4:

            traverse();

            break;

        case 5:

            search();

            break;

        case 6:

            exit(0);

            break;;

  

        default:

        printf("invalid input\n");

            break;

        }

    }

  

    return 0;

}
```