---
dg-publish: true
---
#### Process synchronization 
1. the process of coordination of multiple processes or threads that share common resources 
2. to execute and prevent conflicts between the processes or do not interfere with each other while sharing resources and ensuring data consistency. 
3. It’s essential in multi-threaded or multi-process systems where concurrent access to shared resources can lead to issues like race conditions, deadlocks, and inconsistencies.
#### 4.1 Need for IPC and Synchronization
**Inter-Process Communication (IPC)** refers to the mechanisms that allow processes to communicate and coordinate their actions. Processes may run on the same system or across different systems connected by a network. IPC enables processes to share data or resources, making the system more efficient and allowing for tasks like data transfer, remote procedure calls, and distributed computation.

##### **Example**:
Consider a scenario where a process generates data (producer) and another process (consumer) reads that data. To ensure they don't interfere with each other, they need to communicate effectively. The producer may write data to a buffer, and the consumer may read from that buffer. IPC ensures that they do not corrupt the shared data and coordinate the reading/writing process.

**Synchronization** ensures that multiple processes or threads access shared resources in a controlled manner. Without synchronization, two processes might modify the same data simultaneously, leading to inconsistency or race conditions.

##### **Example**:
In a banking system, suppose two processes are updating a shared balance of a customer. Without synchronization, both could read the same balance simultaneously, perform operations independently, and write incorrect results back.

#### 4.2 Mutual Exclusion
**Mutual Exclusion** ensures that only one process can access the critical section (shared resource) at a time. This is essential when multiple processes need to access a shared resource (e.g., a printer or a memory location). The critical section is a part of the program that involves access to shared resources.

##### **Example**:
If two threads are writing to a shared file simultaneously without mutual exclusion, the data in the file may become corrupted. Using a lock ensures that only one thread can access the file at a time.

To solve the **critical section problem**, three conditions must be met:
1. **Mutual Exclusion**: No two processes can be inside the critical section at the same time.
2. **Progress**: If no process is in the critical section, the process that wants to enter should be allowed to proceed.
3. **Bounded Waiting**: Every process must get a chance to enter its critical section after a finite amount of time.

#### 4.3 Semaphore
A **semaphore** is a synchronization tool that controls access to shared resources by multiple processes. It can be used to signal between processes to ensure that only a fixed number of processes access a critical section simultaneously.

##### **Example**:
Consider a situation where a shared printer can handle only one job at a time. Semaphores are used to ensure that only one process sends a job to the printer, and other processes wait for the printer to be free before sending their print job.

##### 4.3.1 Busy-Wait Implementation
In a **busy-wait** implementation of semaphores, a process continuously checks if it can enter the critical section. While this may prevent other processes from accessing the resource, it wastes CPU resources as the waiting process is actively using CPU cycles to check the condition.

##### **Example**:
```c
while (semaphore <= 0);  // Busy-wait loop
semaphore--;            // Enter the critical section
```

##### 4.3.2 Characteristics of Semaphore
- **Atomic Operations**: The operations `wait` and `signal` are atomic, ensuring that no other process can modify the semaphore while a process is inside the critical section.
- **Binary Semaphore (Mutex)**: Binary semaphores, also called **mutexes**, are used when only one process should access a shared resource at any time.
- **Counting Semaphore**: A counting semaphore allows a fixed number of processes to access a resource simultaneously. This is used in scenarios like managing a pool of connections.

##### **Example** of Semaphore:
```c
Semaphore mutex = 1;   // Binary semaphore initialized to 1

wait(mutex);           // Enter critical section
// Critical section code here
signal(mutex);         // Exit critical section
```

##### 4.3.3 Queuing Implementation of Semaphore
In a **queuing implementation**, instead of busy-waiting, processes are blocked and placed in a queue when they attempt to `wait` on a semaphore with a value of zero. When the semaphore is signaled, one process from the queue is unblocked and allowed to proceed.

##### **Example**:
```c
Semaphore s = 0;
Process A: wait(s);  // A will wait (block) until another process signals
Process B: signal(s); // B signals, unblocking A
```

##### 4.3.4 Producer-Consumer Problem
This classic synchronization problem involves two processes:
- **Producer**: Generates data and places it in a shared buffer.
- **Consumer**: Consumes data from the shared buffer.

The challenge is to synchronize the producer and consumer so that:
- The producer doesn't add data to a full buffer.
- The consumer doesn't consume data from an empty buffer.

##### **Example**:
```c
Semaphore empty = N; // Number of empty slots in the buffer
Semaphore full = 0;  // Number of filled slots in the buffer
Semaphore mutex = 1; // Mutual exclusion to access buffer

Producer:
wait(empty);
wait(mutex);
// Add data to buffer
signal(mutex);
signal(full);

Consumer:
wait(full);
wait(mutex);
// Remove data from buffer
signal(mutex);
signal(empty);
```

##### 4.3.5 Dining Philosopher Problem
This problem involves philosophers who alternate between eating and thinking. There are five philosophers sitting around a table with five forks (one between each philosopher). A philosopher needs both forks to eat, but only one fork is between any two philosophers.

The challenge is to avoid **deadlock** and **starvation** while ensuring that philosophers can eat when they are hungry.

##### **Example**:
Using semaphores to represent forks, each philosopher tries to `wait` on the two forks (semaphores) before eating. After eating, the philosopher `signals` both forks, making them available for others.

#### 4.4 Critical Region and Conditional Critical Area
- **Critical Region**: A section of the code that accesses shared resources, where only one process should execute at a time to avoid data corruption.
  
  ##### **Example**:
  If two processes try to update a shared bank account balance simultaneously, only one should access the critical region containing the balance update.

- **Conditional Critical Area**: This is an advanced form of critical section where access is allowed based on specific conditions. Conditional critical regions may involve checks or conditions to be met before allowing access to shared resources.

#### 4.5 What is Deadlock?
**Deadlock** occurs when a set of processes are stuck in a state where each process is waiting for a resource held by another process, creating a cycle of dependencies. As a result, none of the processes can proceed.

##### **Example**:
If two processes hold locks on two resources and each needs the other's resource to proceed, they will be in a deadlock state.

##### 4.5.1 Conditions for Deadlock
The following four conditions must hold simultaneously for a deadlock to occur:
1. **Mutual Exclusion**: At least one resource must be held in a non-shareable mode.
2. **Hold and Wait**: A process holding at least one resource is waiting to acquire additional resources.
3. **No Preemption**: Resources cannot be forcibly taken from a process.
4. **Circular Wait**: A closed chain of processes exists, where each process holds a resource and waits for a resource held by the next process in the chain.

##### **Example**:
In a printing system, if one process holds the printer and waits for a scanner while another process holds the scanner and waits for the printer, deadlock occurs.

##### 4.5.2 Deadlock Prevention
To prevent deadlock, the system can ensure that at least one of the four necessary conditions for deadlock does not hold. Strategies include:
- **Mutual Exclusion**: Try to allow resources to be shared whenever possible.
- **Hold and Wait**: Ensure that processes request all resources at once.
- **No Preemption**: Allow resources to be preempted from a process.
- **Circular Wait**: Impose an ordering of resource requests to avoid circular chains.

##### **Example**:
Imposing an order on the resources (e.g., always request the printer before the scanner) prevents circular wait.

##### 4.5.3 Deadlock Avoidance - Banker's Algorithm
**Banker’s Algorithm** avoids deadlock by checking if the system will remain in a **safe state** after allocating requested resources. It simulates the allocation and checks whether there exists a sequence of processes that can complete.

##### **Example**:
Suppose a system has resources R1, R2, and R3. If process P1 requests resources, the algorithm checks if granting the request would still leave enough resources for all other processes to finish. If the system can still complete, the request is granted.

##### 4.5.4 Resource Request and Resource Release
- **Resource Request**: A process can request a resource. The system checks if it can allocate the resource safely (using mechanisms like the Banker's Algorithm).
  
- **Resource Release**: When a process finishes using a resource, it releases it, allowing other waiting processes to use it.---
dg-publish: true
---
