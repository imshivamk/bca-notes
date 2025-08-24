---
dg-publish: true
---

- [[#1. Definition|1. Definition]]
- [[#2. Mechanisms of Garbage Collection|2. Mechanisms of Garbage Collection]]
	- [[#2. Mechanisms of Garbage Collection#a. Mark and Sweep|a. Mark and Sweep]]
	- [[#2. Mechanisms of Garbage Collection#b. Generational Garbage Collection|b. Generational Garbage Collection]]
- [[#4. Features of Garbage Collection in Java|4. Features of Garbage Collection in Java]]
- [[#5. Advantages of Garbage Collection|5. Advantages of Garbage Collection]]
- [[#6. Disadvantages of Garbage Collection|6. Disadvantages of Garbage Collection]]

### 1. Definition
1. Garbage collection in Java is an automatic memory management process that identifies and discards objects that are no longer needed by a program, thereby reclaiming memory for future use. 
2. This helps prevent memory leaks and optimizes memory usage.
3. automates memory management, allowing developers to focus on application logic rather than memory allocation and deallocation. 
4. provides significant advantages in terms of reducing memory leaks and simplifying development
5. performance overhead and unpredictability in garbage collection cycles. 
6. Understanding garbage collection mechanisms can help developers write more efficient Java applications.


### 2. Mechanisms of Garbage Collection
Java employs several mechanisms for garbage collection, primarily categorized into:

#### a. Mark and Sweep
- Mark Phase: The garbage collector traverses the object graph, starting from the root objects, marking all reachable objects.
- Sweep Phase: The collector then scans the heap, reclaiming memory from objects that were not marked.

#### b. Generational Garbage Collection
- Generational Hypothesis: Most objects are short-lived. Thus, the heap is divided into generations:
  - Young Generation: Where new objects are allocated. It includes:
    - Eden Space: Where new objects are created.
    - Survivor Spaces: Where objects that survive garbage collection in the young generation are moved.
  - Old Generation (Tenured Generation): Stores objects that have survived multiple garbage collection cycles.


### 4. Features of Garbage Collection in Java
- Automatic Memory Management: Reduces the burden on developers to manually manage memory allocation and deallocation.
- Root Object Tracking: Utilizes root objects (like static references and active threads) to determine object reachability.
- Memory Reclamation: Frees up memory occupied by unreachable objects, making it available for new allocations.
- Compacting: Moves live objects together to reduce fragmentation and optimize memory usage.

### 5. Advantages of Garbage Collection
- Reduced Memory Leaks: Minimizes the risk of memory leaks by automatically reclaiming unused objects.
- Simplified Development: Developers can focus on application logic without worrying about memory management.
- Improved Performance: Efficient memory usage can lead to better application performance and responsiveness.
- Error Reduction: Reduces common errors associated with manual memory management, such as dangling pointers and double frees.

### 6. Disadvantages of Garbage Collection
- Performance Overhead: Garbage collection can introduce pause times (stop-the-world pauses) during collection cycles, impacting performance.
- Non-deterministic: The timing of garbage collection is not predictable, which may lead to latency in applications requiring real-time performance.
- Increased Memory Usage: Some garbage collection strategies can lead to higher overall memory consumption due to reserved space for collections.

