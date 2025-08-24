---
dg-publish: true
---
Segmentation and paging are both memory management schemes used in operating systems to allocate memory to processes.

- **Segmentation**: A memory management scheme where the process is divided into different segments based on logical divisions, like code, data, and stack. Each segment is of variable size, and the operating system tracks each segment separately.
- **Paging**: A memory management technique where the process is divided into fixed-size pages, and the main memory is divided into blocks called frames. Each page of a process can be loaded into any available frame in memory.


| Feature                     | **Segmentation**                                  | **Paging**                                      |
|-----------------------------|--------------------------------------------------|------------------------------------------------|
| **Basic Concept**            | Divides memory into variable-sized segments based on the logical divisions of a program (e.g., functions, objects). | Divides memory into fixed-sized pages.          |
| **Memory Division**          | Memory is divided into logical segments, each corresponding to a logical unit of the program. | Memory is divided into equal-sized pages, independent of the program structure. |
| **Fragmentation Type**       | Suffer from **external fragmentation** as free memory between segments may not be usable. | Suffer from **internal fragmentation** since a page may not be fully used. |
| **Address Structure**        | Uses a segment number and an offset.             | Uses a page number and an offset.               |
| **Address Translation**      | Segment table is used to map logical segments to physical memory locations. | Page table is used to map logical pages to physical frames. |
| **Size Flexibility**         | Variable-sized segments, more flexible for different data sizes. | Fixed-size pages, less flexible but simpler to manage. |
| **Use in Systems**           | Common in older systems and when dealing with large, distinct data structures (e.g., code, stack). | More common in modern systems due to simpler memory management and efficiency. |
| **Complexity of Implementation** | More complex to implement due to variable segment sizes. | Easier to implement since pages are of fixed size. |
| **Fragmentation**            | External fragmentation occurs when free spaces between segments are not usable. | Internal fragmentation occurs when some page space is wasted if a process does not fully use it. |
| **Efficiency**               | Can be less efficient due to external fragmentation and complex management. | Generally more efficient, especially with large programs, because of fixed-size blocks and easier management. |

