---
dg-publish: true
---
## What is Paging

#### Definition:
1. Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory and thus eliminates the problems of fitting varying sized memory chunks onto the backing store. 
2. In this system, the process's memory is divided into fixed-size blocks called **pages**, while the physical memory (RAM) is divided into blocks of the same size called **frames**.
3.  By dividing memory into fixed-size pages and using a page table for address translation, the operating system can effectively manage multiple processes and their memory needs.

### Key Concepts of Paging

1. **Pages and Frames**:
   - **Pages**: Logical divisions of a process's memory (e.g., 4 KB each).
   - **Frames**: Physical divisions of the main memory that correspond in size to pages.

2. **Page Table**:
   - A data structure used by the operating system to maintain the mapping between the pages of a process and the frames in physical memory. Each process has its own page table.

3. **Logical Address Space**:
   - The range of addresses that a process can use, represented in pages. For example, a process with 16 pages will have logical addresses ranging from 0 to 15.

4. **Physical Address Space**:
   - The actual address in physical memory, represented in frames.

5. **Page Number and Offset**:
   - A logical address is divided into two parts: 
     - **Page Number**: Identifies which page of the process.
     - **Offset**: Identifies the specific location within that page.

### Paging Process

1. **Address Translation**:
   - When a process accesses a memory address, the logical address is divided into a page number and an offset.
   - The page number is used to look up the corresponding frame in the page table.
   - The physical address is constructed by combining the frame address with the offset.

2. **Page Faults**:
   - If a process tries to access a page that is not currently loaded in physical memory, a **page fault** occurs. The operating system then must fetch the page from disk (or swap space) and load it into an available frame.

### Advantages of Paging

- **No External Fragmentation**: Since pages are of fixed size, there is no wasted space between allocated memory segments.
- **Easy to Manage**: Memory allocation and deallocation are simplified since any free frame can be allocated to a page.
- **Efficient Memory Use**: Pages can be swapped in and out of memory as needed, allowing better utilization of available physical memory.

### Disadvantages of Paging

- **Internal Fragmentation**: If the last page of a process is not completely filled, the unused space in that page is wasted.
- **Overhead of Page Table**: Each process requires a page table, which consumes memory and may slow down address translation.

## Demand Paging

#### Definition:
1. **Demand paging** is a specific type of paging where pages are loaded into memory only when they are needed during execution, rather than loading the entire process into memory at the start.
2. This approach optimizes memory usage and improves the efficiency of the system.
### How Demand Paging Works:

1. **Initial State**:
   - When a process starts, only a few pages (often the first page or critical pages) are loaded into physical memory.

2. **Page Access**:
   - As the process executes, it generates memory access requests for various pages. If a requested page is already in memory, the access proceeds without delay.

3. **Page Fault**:
   - If the process attempts to access a page that is not currently loaded in memory, a **page fault** occurs. This signals the operating system to take action.

4. **Handling Page Faults**:
   - The operating system retrieves the required page from secondary storage (e.g., disk) and loads it into an available frame in physical memory.
   - If <mark style="background: #FF5582A6;">physical memory is full, the OS may need to evict a page</mark>. This is done using a **page replacement algorithm** (e.g., Least Recently Used (LRU), First-In-First-Out (FIFO)) to decide which page to swap out.

5. **Continuing Execution**:
   - Once the required page is loaded into memory, the process can resume execution from the point it left off.

### Advantages and Disadvantages of Demand Paging

| **Advantages**                                      | **Disadvantages**                                   |
|-----------------------------------------------------|-----------------------------------------------------|
| **Memory Efficiency**                               | **Page Fault Overhead**                            |
| Only necessary pages are loaded, reducing overall memory usage. | Frequent page faults can lead to performance degradation due to the time taken to load pages from disk. |
| **Faster Process Start-up**                         | **Thrashing**                                      |
| Processes can begin execution more quickly, as they do not need to wait for all pages to be loaded. | Excessive swapping of pages in and out of memory can occur if there are not enough frames available, significantly slowing down the system. |
| **Improved Multitasking**                           | **Complexity**                                     |
| More processes can be accommodated in memory, as not all pages are required at once. | Managing page faults and maintaining page tables adds complexity to the operating system. |

