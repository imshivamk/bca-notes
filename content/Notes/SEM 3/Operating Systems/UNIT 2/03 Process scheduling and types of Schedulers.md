---
dg-publish: true
---
## Process scheduling

1. Process scheduling is the method by which an operating system decides the order in which processes are executed.
2. It ensures efficient utilization of CPU and system resources, enabling multiple processes to share the CPU effectively.
3.  optimize CPU usage, memory management, and overall system performance
### Types of Schedulers

Schedulers are categorized into three main types based on their functionality:

1. **Long-term Scheduler (Job Scheduler)**
   1. Determines which processes are admitted to the system for processing.
   2. Selects processes from the job pool.
   3. Controls the degree of multiprogramming.

2. **Short-term Scheduler (CPU Scheduler)**
	1. Decides which of the ready, in-memory processes is to be executed (allocated CPU time).
     2. Executes frequently (milliseconds).
     3. Makes decisions based on process priority and scheduling algorithms.


3. **Medium-term Scheduler**
	1. Temporarily removes processes from main memory and places them in a backing store (swapping).
	2. Manages the degree of multiprogramming.
	3. Involves swapping processes in and out of memory.
