---
dg-publish: true
---

The `List` interface is part of Java’s Collection Framework and represents an ordered collection of elements. It allows duplicate elements and provides indexed access to items.

sdsd
****
-  Maintains insertion order  
-  Allows duplicate elements  
-  Provides index-based access (`get(index)`)  
-  Supports various traversal methods

Java provides three main implementations of the `List` interface:

1. ArrayList – Implements a resizable array
2. LinkedList – Implements a doubly linked list
3. Vector – Implements a synchronized resizable array

---

### 1. ArrayList – Dynamic Array Implementation

An `ArrayList` uses a dynamic array internally. It is best suited for fast element retrieval (`O(1)`) but slow insertions and deletions (`O(n)`) due to shifting elements.


```java
import java.util.*;

public class ArrayListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        
        // Adding elements
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        
        // Accessing elements
        System.out.println("First Element: " + list.get(0)); // Apple
        
        // Removing an element
        list.remove("Banana");

        // Iterating using for-each loop
        for (String fruit : list) {
            System.out.println(fruit);
        }
    }
}
```

#### When to Use ArrayList?

- When you need fast retrieval (`O(1)`).
- When insertions/deletions are infrequent.

---

### 2. LinkedList – Doubly Linked List Implementation

A `LinkedList` internally uses a doubly linked list. It is best for frequent insertions and deletions (`O(1)`) but slow random access (`O(n)`) because traversal is required to reach an index.


```java
import java.util.*;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        
        // Adding elements
        list.add("Dog");
        list.addFirst("Cat");  // Add at the beginning
        list.addLast("Horse"); // Add at the end

        // Accessing elements
        System.out.println("First Element: " + list.getFirst()); // Cat
        
        // Removing an element
        list.remove("Dog");

        // Iterating using ListIterator
        ListIterator<String> iterator = list.listIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

#### When to Use LinkedList?

- When insertions and deletions are frequent (`O(1)`).
- When random access is not required.

---

### 3. Vector – Thread-Safe Dynamic Array

A `Vector` is similar to an `ArrayList` but is synchronized (thread-safe). However, the extra synchronization reduces performance compared to `ArrayList`.

```java
import java.util.*;

public class VectorExample {
    public static void main(String[] args) {
        Vector<Integer> numbers = new Vector<>();

        // Adding elements
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // Accessing elements
        System.out.println("First Element: " + numbers.get(0)); // 10

        // Removing an element
        numbers.remove(1); // Removes 20

        // Iterating using forEach
        numbers.forEach(System.out::println);
    }
}
```

#### When to Use Vector?

- When thread safety is required.
- When you can tolerate synchronization overhead.

---

## 5. Performance Comparison

- ArrayList – Fast random access (`O(1)`), slow insertions (`O(n)`)
- LinkedList – Fast insertions/deletions (`O(1)`), slow access (`O(n)`)
- Vector – Thread-safe, but slower than ArrayList due to synchronization

--- 

- Use ArrayList when you mostly access elements.
- Use LinkedList when you frequently insert or delete elements.
- Use Vector when you need thread safety.
