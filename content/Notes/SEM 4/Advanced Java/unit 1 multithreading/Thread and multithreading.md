---
dg-publish: true
---
1. CPU is brain of computer
2. A core in a CPU is an individual processing unit
3. modern CPUs have multiple cores to perform mutiple tasks simultaneously
4. Program : Set of instructions

### Basic Terminology
1. Process
	1. process is a program under execcution
	2. process is an instance of a program
2. Thread 
	1. A thread is the smallest unit of execution within a process
	2. A process can have multiple threads that share the same resources but work independently 
	3. A thread is a lightweight process, the smallest unit of processing
3. MultiTasking
	1. Multitasking allows the OS to perform multiple processes simulatenously
	2. On single core Operating System , multitasking is achieved by preemption, time sharing, rapid switching between tasks etc
	3. On multi core CPUs , true multitasking occurs where prallel execution occours with tasks distributed across cores
	4. Assigning different tasks to different cores is more efficient than all to a single core.
4. Multi-threading
	1. refers to concurrently executing multiple threads within a single process
	2. e.g. Browser - different threads for rendering page, running JavaScript and Managing inputs
	3. Multihtreading enhances the efficiency of multitasking by dividing individual tasks into subtasks and threads
	4. these threads can be executed simulatenously using CPU resources efficiently
5. Context switching - refers to saving the current state, progress of the current process and moving to the next when current's time slice expires
6. it helps multitasking in single core CPUs and help improve parallelism in threads in  multi core CPUs

## Multithreading in java
1. in single core systems, JVM and OS work together to share time slices among process giving illusion of parallel processing
2. in multicore systems, JVM can fully utilize multiple cores for multiple threads
3. Java supports multithreading through java.lang.Thread class and java.lang.Runnable interface

```java
// using java.lang.Thread
class ApnaThreadUsingClass extends Thread{
	public void run(){
		system.out.println("Hi")
	}
}

// using java.lang.Runnable
class ApnaThreadUsingInterface implements Runnable{
	public void run(){
		system.out.println("Hi")
	}
}

public class Main{

public static void main()
{
	ApnaThreadUsingClass t1 = new ApnaThreadUsingClass();
	ApnaThreadUsingInterface a1 = new ApnaThreadUsingInterface();
	Thread t2 = new Thread(a1);
}}
```

4. When a Java program starts, the main thread starts running immidiately, responsible for executing the main method of a program