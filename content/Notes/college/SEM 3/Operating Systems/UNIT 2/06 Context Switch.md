
- [[#Context Switch|Context Switch]]
	- [[#Context Switch#Definition|Definition]]
	- [[#Context Switch#Characteristics|Characteristics]]
	- [[#Context Switch#Steps in a Context Switch|Steps in a Context Switch]]
	- [[#Context Switch#Advantages|Advantages]]
	- [[#Context Switch#Disadvantages|Disadvantages]]

### Context Switch

#### Definition

A context switch is the process of saving the state of a currently running process and loading the state of another process. This allows multiple processes to share the CPU effectively by enabling the operating system to switch between them.

#### Characteristics
- Involves saving the process control block (PCB) of the currently running process.
- Loads the PCB of the next scheduled process.
- Can occur due to interrupts, system calls, or when a process is preempted.

#### Steps in a Context Switch
1. **Save State**: The OS saves the state of the currently running process, including registers, program counter, and memory management information.
2. **Update PCB**: The PCB of the current process is updated with its current state (e.g., ready, waiting).
3. **Select Next Process**: The OS scheduler selects the next process to run based on the scheduling algorithm.
4. **Load State**: The state of the selected process is loaded from its PCB, restoring its registers and program counter.
5. **Switch Execution**: Control is transferred to the newly scheduled process.


#### Advantages
- **Multi-tasking**: Enables multiple processes to run seemingly simultaneously, improving system responsiveness.
- **Resource Utilization**: Allows better utilization of CPU by switching to other processes while one is waiting for I/O or other events.

#### Disadvantages
- **Overhead**: Context switching involves overhead due to saving and loading state information, which can impact performance, especially if frequent.
- **Latency**: Increases response time for processes due to the time spent in context switching rather than executing user code.

