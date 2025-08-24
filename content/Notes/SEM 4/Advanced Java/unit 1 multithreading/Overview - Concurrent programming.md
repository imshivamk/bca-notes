---
dg-publish: true
---

- [[#Concurrent Programming in Java|Concurrent Programming in Java]]
	- [[#Concurrent Programming in Java#1. Concept of Threads|1. Concept of Threads]]
	- [[#Concurrent Programming in Java#2. Lifecycle of a Thread|2. Lifecycle of a Thread]]
	- [[#Concurrent Programming in Java#3. Creating Threads in Java|3. Creating Threads in Java]]
		- [[#3. Creating Threads in Java#Method 1: Extending Thread Class|Method 1: Extending Thread Class]]
		- [[#3. Creating Threads in Java#Method 2: Implementing Runnable Interface|Method 2: Implementing Runnable Interface]]
	- [[#Concurrent Programming in Java#4. Thread Synchronization|4. Thread Synchronization]]
		- [[#4. Thread Synchronization#Using `synchronized` Keyword|Using `synchronized` Keyword]]
	- [[#Concurrent Programming in Java#5. Inter-Thread Communication|5. Inter-Thread Communication]]
		- [[#5. Inter-Thread Communication#Example of `wait()` and `notify()`|Example of `wait()` and `notify()`]]
	- [[#Concurrent Programming in Java#Summary|Summary]]

## Concurrent Programming in Java

### 1. Concept of Threads

A thread is the smallest unit of execution within a process. It allows concurrent execution of tasks within a program, improving efficiency, especially in multi-core processors.

- Single-threaded programs: Execute one task at a time.
- Multi-threaded programs: Execute multiple tasks concurrently within a process.

### 2. Lifecycle of a Thread

A thread in Java goes through five states:

1. New: Thread object is created using `Thread` class or `Runnable` interface but not started yet.
2. Runnable: `start()` method is called, and the thread is ready to run but waiting for CPU time.
3. Running: Thread is currently executing its task.
4. Blocked/Waiting: Thread is paused due to synchronization (waiting for a lock or signal).
5. Terminated: Thread completes execution or is stopped forcefully.

---

### 3. Creating Threads in Java

#### Method 1: Extending Thread Class

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String args[]) {
        MyThread t = new MyThread();
        t.start();  // Starts the thread
    }
}
```

- `start()` invokes `run()` method and executes in a separate thread.

#### Method 2: Implementing Runnable Interface

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String args[]) {
        MyRunnable obj = new MyRunnable();
        Thread t = new Thread(obj);
        t.start();
    }
}
```

- More flexible than extending `Thread` class (allows multiple inheritance).

---

### 4. Thread Synchronization

When multiple threads access shared resources, race conditions may occur. Synchronization ensures that only one thread accesses a critical section at a time.

#### Using `synchronized` Keyword

```java
class SharedResource {
    synchronized void printNumbers(int n) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

class MyThread extends Thread {
    SharedResource obj;
    MyThread(SharedResource obj) {
        this.obj = obj;
    }

    public void run() {
        obj.printNumbers(5);
    }
}

public class SyncDemo {
    public static void main(String args[]) {
        SharedResource obj = new SharedResource();
        MyThread t1 = new MyThread(obj);
        MyThread t2 = new MyThread(obj);
        
        t1.start();
        t2.start();
    }
}
```

- The `synchronized` keyword ensures that only one thread executes `printNumbers()` at a time.

---

### 5. Inter-Thread Communication

Threads communicate using wait(), notify(), and notifyAll() methods from the `Object` class.

#### Example of `wait()` and `notify()`

```java
class SharedData {
    int num;
    boolean valueSet = false;

    synchronized void put(int num) {
        while (valueSet) {
            try {
                wait();  // Waits until the consumer consumes the value
            } catch (Exception e) {}
        }
        this.num = num;
        valueSet = true;
        System.out.println("Put: " + num);
        notify();
    }

    synchronized int get() {
        while (!valueSet) {
            try {
                wait();  // Waits until the producer produces a value
            } catch (Exception e) {}
        }
        System.out.println("Got: " + num);
        valueSet = false;
        notify();
        return num;
    }
}

class Producer extends Thread {
    SharedData obj;
    Producer(SharedData obj) {
        this.obj = obj;
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            obj.put(i);
            try { Thread.sleep(1000); } catch (Exception e) {}
        }
    }
}

class Consumer extends Thread {
    SharedData obj;
    Consumer(SharedData obj) {
        this.obj = obj;
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            obj.get();
            try { Thread.sleep(1000); } catch (Exception e) {}
        }
    }
}

public class InterThread {
    public static void main(String[] args) {
        SharedData obj = new SharedData();
        Producer p = new Producer(obj);
        Consumer c = new Consumer(obj);

        p.start();
        c.start();
    }
}
```

Explanation:

- `wait()` → Releases the lock and waits for notification.
- `notify()` → Wakes up one waiting thread.
- `notifyAll()` → Wakes up all waiting threads.

---

### Summary

|Concept|Description|
|---|---|
|Thread|Smallest unit of execution within a process.|
|Thread Lifecycle|New → Runnable → Running → Blocked → Terminated.|
|Creating Threads|1) Extending `Thread` class, 2) Implementing `Runnable` interface.|
|Synchronization|Prevents race conditions by allowing only one thread at a time in a critical section.|
|Inter-Thread Communication|`wait()`, `notify()`, `notifyAll()` methods allow coordination between threads.|
