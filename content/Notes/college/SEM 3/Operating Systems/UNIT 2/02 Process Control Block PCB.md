---
dg-publish: true
---


- [[#Definition of PCB|Definition of PCB]]
	- [[#Definition of PCB#Key fields|Key fields]]
	- [[#Definition of PCB#Functions of PCB :|Functions of PCB :]]

### Definition of PCB

A Process Control Block (PCB) is a data structure that contains information about a process. It serves as a central repository of details that the operating system needs to manage and track the execution of a process.  

#### Key fields 

- **Process ID (PID):** A unique identifier for the process.  
- **Process State:** The current state of the process (e.g., running, waiting, ready).  
- **Program Counter (PC):** The address of the next instruction to be executed.  
- **Registers:** The values stored in the process's registers.  
- **Memory Management Information:** Details about the memory allocated to the process, including base address, limit, and page table.
- **Open Files:** A list of files that the process has open.  
- **Parent Process ID:** The PID of the process's parent process.
- **Child Process IDs:** A list of PIDs of the process's child processes.
- **Priority:** The priority level assigned to the process.  
- **Scheduling Information:** Data related to the process's scheduling, such as arrival time and waiting time.

#### Functions of PCB :

- **Process Creation and Termination:** When a process is created, a PCB is allocated for it. When a process terminates, its PCB is deallocated.
- **Process Scheduling:** The operating system uses the PCB to determine which process should be executed next based on its priority and other scheduling criteria.
- **Context Switching:** When a process is preempted or voluntarily yields the CPU, its PCB is saved, and the PCB of the next process to be executed is loaded.
- **Inter-Process Communication:** The PCB contains information about the open files and other resources that processes can use to communicate with each other.
- **Memory Management:** The PCB stores details about the memory allocated to the process, which is used by the operating system to manage memory allocation and deallocation.

 the PCB is a crucial data structure that plays a central role in the management and execution of processes in an operating system.