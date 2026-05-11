---
dg-publish: true
---

| Process | Arrival Time | Burst Time | Priority |
|---------|--------------|------------|----------|
| P1      | 0            | 8          | 4        |
| P2      | 1            | 4          | 3        |
| P3      | 2            | 9          | 1        |
| P4      | 3            | 5          | 2        |

### 1. First-Come, First-Served (FCFS)

#### Description:
In FCFS, processes are scheduled in the order they arrive in the ready queue. It is a non-preemptive algorithm, meaning once a process starts execution, it runs to completion without being interrupted.

#### Gantt Chart:
```
| P1 | P2 | P3 | P4 |
0    8   12   21   26
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 8               | 8 - 0 = 8        | 8 - 8 = 0    |
| P2      | 12              | 12 - 1 = 11      | 11 - 4 = 7   |
| P3      | 21              | 21 - 2 = 19      | 19 - 9 = 10  |
| P4      | 26              | 26 - 3 = 23      | 23 - 5 = 18  |

**Average Turnaround Time = 15.25**

**Average Waiting Time = 8.75**

---

### 2. Shortest Job First (SJF)

#### Description:
In SJF, the process with the smallest burst time is selected for execution next. This can be either preemptive or non-preemptive. In non-preemptive SJF, a running process cannot be interrupted; in preemptive SJF, a process can be interrupted if a new process with a shorter burst time arrives.

#### Gantt Chart:
```
| P2 | P4 | P1 | P3 |
0    4   9    17   26
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 17              | 17 - 0 = 17      | 17 - 8 = 9   |
| P2      | 4               | 4 - 1 = 3        | 3 - 4 = -1   |
| P3      | 26              | 26 - 2 = 24      | 24 - 9 = 15  |
| P4      | 9               | 9 - 3 = 6        | 6 - 5 = 1    |

**Average Turnaround Time = 12.5**

**Average Waiting Time = 6.25**

---

### 3. Shortest Remaining Time Next (SRTN)

#### Description:
SRTN is a preemptive version of SJF. It allows a currently running process to be interrupted if a new process arrives with a shorter remaining time. The CPU is allocated to the process with the shortest remaining time.

#### Gantt Chart:
```
| P1 | P2 | P1 | P4 | P3 |
0    1   5    8    13   26
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 8               | 8 - 0 = 8        | 8 - 8 = 0    |
| P2      | 5               | 5 - 1 = 4        | 4 - 4 = 0    |
| P3      | 26              | 26 - 2 = 24      | 24 - 9 = 15  |
| P4      | 13              | 13 - 3 = 10      | 10 - 5 = 5   |

**Average Turnaround Time = 11.5**

**Average Waiting Time = 5**

---

### 4. Priority-Based Preemptive Scheduling (PBPS)

#### Description:
In PBPS, each process is assigned a priority, and the CPU is allocated to the process with the highest priority (lower numbers indicate higher priority). This scheduling can preempt a currently running process if a new process with a higher priority arrives.

#### Gantt Chart:
```
| P3 | P4 | P2 | P1 |
0    2   7    11   26
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 26              | 26 - 0 = 26      | 26 - 8 = 18  |
| P2      | 11              | 11 - 1 = 10      | 10 - 4 = 6   |
| P3      | 2               | 2 - 2 = 0        | 0 - 9 = -9   |
| P4      | 7               | 7 - 3 = 4        | 4 - 5 = -1   |

**Average Turnaround Time = 10**

**Average Waiting Time = 3.5**

---

### 5. Time Slice Scheduling (Assuming a Time Slice of 2)

#### Description:
In this algorithm, each process is assigned a fixed time slice (quantum). If a process does not complete its execution within the time slice, it is moved to the back of the ready queue. This approach is designed to ensure all processes receive a fair share of CPU time.

#### Gantt Chart:
```
| P1 | P2 | P3 | P4 | P1 | P3 |
0    2   4   6   8   10  21
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 21              | 21 - 0 = 21      | 21 - 8 = 13  |
| P2      | 12              | 12 - 1 = 11      | 11 - 4 = 7   |
| P3      | 26              | 26 - 2 = 24      | 24 - 9 = 15  |
| P4      | 14              | 14 - 3 = 11      | 11 - 5 = 6   |

**Average Turnaround Time = 16.75**

**Average Waiting Time = 10.25**

---

### 6. Round Robin (RR)

#### Description:
Round Robin is a preemptive scheduling algorithm that assigns a fixed time slice to each process in the ready queue. Each process runs for its allotted time slice before the CPU is given to the next process. This method helps to ensure that all processes receive equal attention and minimizes response time for interactive systems.

#### Gantt Chart:
```
| P1 | P2 | P3 | P4 | P1 | P3 |
0    2   4   6   8   10  21
```

#### Completion, Turnaround, and Waiting Times:

| Process | Completion Time | Turnaround Time | Waiting Time |
|---------|-----------------|------------------|--------------|
| P1      | 10              | 10 - 0 = 10      | 10 - 8 = 2   |
| P2      | 12              | 12 - 1 = 11      | 11 - 4 = 7   |
| P3      | 21              | 21 - 2 = 19      | 19 - 9 = 10  |
| P4      | 14              | 14 - 3 = 11      | 11 - 5 = 6   |

**Average Turnaround Time = 12.25**

**Average Waiting Time = 6.25**

---

### Summary of Results

| Algorithm                  | Average Turnaround Time | Average Waiting Time |
|---------------------------|-------------------------|---------------------|
| FCFS                      | 15.25                   | 8.75                |
| SJF                       | 12.5                    | 6.25                |
| SRTN                      | 11.5                    | 5                   |
| PBPS                      | 10                      | 3.5                 |
| Time Slice Scheduling      | 16.75                   | 10.25               |
| Round Robin               | 12.25                   | 6.25                |

This overview provides a comprehensive understanding of each scheduling algorithm, their mechanisms, and the performance metrics for the specified processes. If you have any further questions or need additional details, feel free to ask!