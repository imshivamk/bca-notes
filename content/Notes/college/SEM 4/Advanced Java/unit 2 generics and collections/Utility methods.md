---
dg-publish: true
---

## 1. `hashCode()` Method

### Definition

- The `hashCode()` method returns an integer (hash code) representing the object.
- It is used in hash-based collections like HashMap, HashSet, and HashTable.

### Characteristics

- If two objects are equal (`equals()` method returns `true`), their hash codes must be the same.
- However, two objects having the same hash code do not necessarily mean they are equal.

### Example

```java
class Student {
    int id;

    Student(int id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return id; // Simple hash function
    }
}
```

### Advantages

- Improves performance in hash-based collections.
- Reduces the number of comparisons in collections like `HashMap`.

### Disadvantages

- Poorly implemented `hashCode()` can lead to hash collisions, reducing efficiency.

---

## 2. `equals()` Method

### Definition

- The `equals()` method compares the contents of two objects for logical equality.

### Characteristics

- By default, `equals()` in Object class compares memory addresses (`==` operator).
- It should be overridden when objects have meaningful equality.

### Example

```java
class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Student student = (Student) obj;
        return id == student.id && name.equals(student.name);
    }
}
```

### Advantages

- Ensures correct equality checks in collections like HashSet.
- Prevents duplicate elements in hash-based collections.

### Disadvantages

- Needs to be implemented carefully to avoid incorrect behavior.

---

## 3. `Comparator` (Custom Sorting)

### Definition

- Comparator is an interface used to define custom sorting logic for objects.

### Characteristics

- It has a compare() method, which compares two objects.
- It is used when the natural ordering (from `Comparable`) is not sufficient.

### Example

```java
import java.util.*;

class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

// Custom Comparator to sort by name
class NameComparator implements Comparator<Student> {
    public int compare(Student s1, Student s2) {
        return s1.name.compareTo(s2.name);
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student(1, "Alice"));
        list.add(new Student(2, "Bob"));

        Collections.sort(list, new NameComparator()); // Sorting by name

        for (Student s : list) {
            System.out.println(s.name);
        }
    }
}
```

### Advantages

- Allows multiple sorting criteria.
- Can be used without modifying the original class.

### Disadvantages

- More verbose than `Comparable` (which is built-in).

---

## 4. `Iterator` (Traversing Collections)

### Definition

- Iterator is an interface used to iterate over collections like `ArrayList`, `HashSet`, etc.

### Characteristics

- Provides `hasNext()` and `next()` methods.
- Prevents ConcurrentModificationException when removing elements.

### Example

```java
import java.util.*;

public class IteratorExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");

        Iterator<String> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```

### Advantages

- Works on all collection types.
- Allows safe removal of elements during iteration.

### Disadvantages

- Slower than indexed access (`for` loop in `ArrayList`).

---

## 5. `toString()` Method

### Definition

- The `toString()` method provides a string representation of an object.

### Characteristics

- By default, `Object.toString()` returns the class name + hash code.
- Should be overridden to provide meaningful output.

### Example

```java
class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "'}";
    }
}

public class ToStringExample {
    public static void main(String[] args) {
        Student s = new Student(1, "Alice");
        System.out.println(s); // Calls toString() automatically
    }
}
```

### Advantages

- Improves debugging.
- Makes objects readable when printed.

### Disadvantages

- Needs manual implementation for meaningful output.

|Concept|Purpose|Key Method(s)|Used In|
|---|---|---|---|
|`hashCode()`|Generates hash value|`hashCode()`|`HashMap`, `HashSet`|
|`equals()`|Compares objects|`equals(Object obj)`|Checking equality|
|`Comparator`|Custom sorting|`compare(T o1, T o2)`|Sorting collections|
|`Iterator`|Traverses collections|`hasNext(), next(), remove()`|`ArrayList`, `HashSet`|
|`toString()`|Converts object to string|`toString()`|Debugging, Logging|
