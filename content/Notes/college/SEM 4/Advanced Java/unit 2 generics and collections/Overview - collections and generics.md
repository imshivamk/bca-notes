---
dg-publish: true
---
## Java Collections and Utility Classes – Overview

The Java Collections Framework (JCF) provides efficient and organized ways to <mark style="background: #FF69B4;">store and manage data.</mark> It includes Lists, Sets, Queues, and Maps along with utility classes and methods.

---

## 1. Generics in Java

Generics allow defining type-safe classes and methods.

### Generic Class Example:

```java
class Box<T> {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}
```

 - Ensures type safety  
 - Eliminates explicit type casting

### Generic Method Example:

```java
public static <T> void printArray(T[] array) {
    for (T item : array) System.out.print(item + " ");
}
```

---

## 2. Collection Hierarchy

![](https://i.imgur.com/EylxD0b.png)

---

## 3. Lists: Ordered Collections

### ArrayList (Fast retrieval, slow insertion/deletion)

```java
ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
System.out.println(list); // [Apple, Banana]
```

### LinkedList (Fast insertions, slow random access)

```java
LinkedList<Integer> numbers = new LinkedList<>();
numbers.add(10);
numbers.addFirst(5);
System.out.println(numbers); // [5, 10]
```

---

## 4. Sets: Unique Elements

### HashSet (Unordered, Unique Values)

```java
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
System.out.println(set); // Unordered Output
```

### TreeSet (Sorted Order)

```java
TreeSet<Integer> set = new TreeSet<>();
set.add(20);
set.add(10);
System.out.println(set); // [10, 20]
```

---

## 5. Iterators for Traversing Collections

### Using `Iterator`

```java
Iterator<Integer> itr = list.iterator();
while (itr.hasNext()) {
    System.out.println(itr.next());
}
```

### Using `ListIterator` (Forward & Backward)

```java
ListIterator<String> itr = list.listIterator();
while (itr.hasNext()) System.out.println(itr.next());
```

---

## 6. Utility Methods

### Overriding `toString()`

```java
class Person {
    String name;
    public String toString() { return name; }
}
```

### Sorting with `Comparator`

```java
class AgeComparator implements Comparator<Person> {
    public int compare(Person p1, Person p2) {
        return Integer.compare(p1.age, p2.age);
    }
}
```

### Generating Unique HashCodes

```java
public int hashCode() { return Objects.hash(name, age); }
```

| Concept        | Description                                              |
| -------------- | -------------------------------------------------------- |
| Generics   | Type-safe collections & methods.                         |
| Lists      | Ordered, duplicates allowed (`ArrayList`, `LinkedList`). |
| Sets       | Unique values (`HashSet`, `TreeSet`).                    |
| Iterators  | Traverse collections (`Iterator`, `ListIterator`).       |
| toString() | Converts object to a string.                             |
| Comparator | Custom sorting logic.                                    |
| hashCode() | Generates unique ID for objects.                         |
