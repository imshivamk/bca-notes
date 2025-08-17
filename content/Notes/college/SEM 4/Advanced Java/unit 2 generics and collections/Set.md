---
dg-publish: true
---
## Set Implementations (No Duplicates Allowed)

### HashSet (Unordered, Fast Access)

```java
import java.util.*;

public class HashSetDemo {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple"); // Duplicate ignored

        System.out.println(set);  // Output: [Banana, Apple, Cherry] (Unordered)
    }
}
```

- Uses Hashing (`O(1)` average-time complexity).  
- Unordered storage.

---

### LinkedHashSet (Maintains Insertion Order)

```java
import java.util.*;

public class LinkedHashSetDemo {
    public static void main(String[] args) {
        LinkedHashSet<String> set = new LinkedHashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        System.out.println(set);  // Output: [Apple, Banana, Cherry] (Maintains order)
    }
}
```

- Preserves insertion order.  
- Slightly slower than `HashSet`.

---

### TreeSet (Sorted Order)

```java
import java.util.*;

public class TreeSetDemo {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>();
        set.add(30);
        set.add(10);
        set.add(20);

        System.out.println(set);  // Output: [10, 20, 30] (Sorted Order)
    }
}
```

- Sorted storage (`O(log n)`).