---
dg-publish: true
---
An Abstract Data Type (ADT) is a theoretical concept in computer science that defines a data structure purely in terms of its behavior from the point of view of a user, without specifying the implementation details. It is a way to encapsulate data and the operations that can be performed on that data, providing a clear interface for interaction.

### Key Characteristics of ADTs

1. **Encapsulation:** ADTs hide the implementation details from the user. The user interacts with the data type through a well-defined interface of operations, without needing to know how these operations are implemented.
2. **Operations:** An ADT specifies what operations can be performed on the data, including how the data can be created, modified, and accessed.
3. **Abstraction:** ADTs provide a level of abstraction that separates the conceptual properties of the data type from its implementation.

### Common Examples of ADTs

1. **List ADT:**
   - **Operations:** Insert, delete, find, access, size, etc.
   - **Implementation:** Can be implemented using arrays, linked lists, etc.

2. **Stack ADT:**
   - **Operations:** Push, pop, top (or peek), isEmpty, size.
   - **Implementation:** Can be implemented using arrays or linked lists.

3. **Queue ADT:**
   - **Operations:** Enqueue, dequeue, front, isEmpty, size.
   - **Implementation:** Can be implemented using arrays, linked lists, circular buffers, etc.

4. **Set ADT:**
   - **Operations:** Insert, delete, contains, union, intersection, difference.
   - **Implementation:** Can be implemented using hash tables, binary search trees, etc.

5. **Map (or Dictionary) ADT:**
   - **Operations:** Put (or insert), get (or find), remove, containsKey, size.
   - **Implementation:** Can be implemented using hash tables, binary search trees, etc.

### Example: Stack ADT

Let's look at a stack ADT to understand how it works:

#### Interface of Stack ADT

- **push(element):** Adds an element to the top of the stack.
- **pop():** Removes and returns the top element of the stack.
- **top():** Returns the top element without removing it.
- **isEmpty():** Checks if the stack is empty.
- **size():** Returns the number of elements in the stack.

#### Possible Implementations of Stack ADT

1. **Array-Based Implementation:**

```c
#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int topIndex;
} Stack;

void push(Stack *s, int element) {
    if (s->topIndex < MAX_SIZE - 1) {
        s->data[++(s->topIndex)] = element;
    } else {
        // Handle stack overflow
    }
}

int pop(Stack *s) {
    if (s->topIndex >= 0) {
        return s->data[(s->topIndex)--];
    } else {
        // Handle stack underflow
    }
}

int top(Stack *s) {
    if (s->topIndex >= 0) {
        return s->data[s->topIndex];
    } else {
        // Handle empty stack
    }
}

int isEmpty(Stack *s) {
    return s->topIndex == -1;
}

int size(Stack *s) {
    return s->topIndex + 1;
}
```

2. **Linked List-Based Implementation:**

```c
typedef struct Node {
    int data;
    struct Node *next;
} Node;

typedef struct {
    Node *top;
} Stack;

void push(Stack *s, int element) {
    Node *newNode = (Node*) malloc(sizeof(Node));
    newNode->data = element;
    newNode->next = s->top;
    s->top = newNode;
}

int pop(Stack *s) {
    if (s->top != NULL) {
        Node *temp = s->top;
        int data = temp->data;
        s->top = s->top->next;
        free(temp);
        return data;
    } else {
        // Handle stack underflow
    }
}

int top(Stack *s) {
    if (s->top != NULL) {
        return s->top->data;
    } else {
        // Handle empty stack
    }
}

int isEmpty(Stack *s) {
    return s->top == NULL;
}

int size(Stack *s) {
    int count = 0;
    Node *current = s->top;
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}
```

### Benefits of Using ADTs

1. **Modularity:** ADTs allow for modular design, where the implementation of data structures can be changed without affecting the code that uses the ADT.
2. **Reusability:** ADTs provide reusable components that can be used across different programs.
3. **Maintainability:** ADTs make it easier to maintain and understand the code by separating the interface from the implementation.
4. **Interchangeability:** Different implementations of the same ADT can be used interchangeably as long as they conform to the same interface.

By using ADTs, developers can focus on the high-level logic of their programs without worrying about the underlying data structure implementations, leading to cleaner, more efficient, and more maintainable code.---
dg-publish: true
---
