---
dg-publish: true
---
1. When a page fault occurs the operating system has to choose the page to evict from the memory.
2. 7 different page replacement algorithms are present


### 1. FIFO (First-In, First-Out)

**Definition**: The oldest page in memory is replaced first.

**Characteristics**:
- Simple to implement.
- Maintains a queue of pages.

**Diagram**: 
```
Memory: [P1, P2, P3]
Replace P1 → New Page
Memory: [P2, P3, P4]
```

### 2. Not Recently Used (NRU)

1. **Definition**: Pages are categorized based on their 2 status bits associated with each page i. e M for modified (written to)and R for referenced (read or write) in page table entry.
2. Pages not recently used (reference bit = 0) and not modified are replaced first.
3. On each page fault it removes a page at random from the lowest numbered of following classes:
	1. Class 0: not referenced, not modified
	2. Class 1:not referenced , modified
	3. Class 2:referenced, not modified
	4. Class 3:referenced, modified

**Characteristics**:
- Uses reference bits for page classification.
- More complex than FIFO.

**Reference Bit Cases**:
- **0**: Page is not used recently.
- **1**: Page has been used recently.

**Diagram**:
```
Categories: 
[0,0] (Replace) [0,1] [1,0] [1,1]
```

### 3. Optimal Page Replacement

1. **Definition**: Replaces the page that will not be used for the longest period in the future
2. Each page can be labeled with the no. of instructions that will be executed before that page is first referenced. 
3. The Optimal Page Replacement Algorithm is based on the knowledge of the future usage of a page. 
4. Page with highest label is removed. 
5. If one page will not be used for 8 million instruction and another page will not be used for 6 million instruction, removing former pushes the page fault

**Characteristics**:
- Provides the best possible page replacement performance.
- Requires future knowledge of page requests.

**Diagram**:
```
Memory: [P1, P2, P3]
Next Request: P4
Replace P3 → New Page
Memory: [P1, P2, P4]
```

### 4. Second Chance

1. **Definition**: An enhancement of FIFO that gives pages a second chance before being replaced.
2. On each page fault it checks the R bit of the oldest page if it is 0, the page is replaced if it is 1, the bit cleared and the page is put onto the end of the list of pages. (see the next slide)

**Characteristics**:
- Uses reference bits to determine if a page should be given a second chance.
- More efficient than FIFO.


**Diagram**:

![](https://i.imgur.com/BVpxibo.png)


```
Memory: [P1, P2, P3]
Reference bit for P1 = 0 (Replace)
Memory after replacement: [P2, P3, P4]
```

### 5. Clock Page Replacement Algorithm

**Definition**: A variation of the second chance algorithm that arranges pages in a circular queue.

**Characteristics**:
- Uses a clock hand to track pages.
- Pages with reference bit = 0 are replaced; those with 1 get their reference bit reset to 0.

**Reference Bit Cases**:
- **0**: Replace this page.
- **1**: Reset to 0 and move to the next page.

**Diagram**:

![](https://i.imgur.com/0yWwJwk.png)

```
Clock Hand:  [P1(1) -> P2(0) -> P3(1)]
Replace P2 → New Page
Memory: [P1, P4, P3]
```


## 6. Least recently used (LRU)

1. maintain Linked list of the used pages in memory. with most recently used page at front and least recently page at rear. Expensive because link list requires update on each reference to the page
2. 64 bit hardware counter that stores the time of references for each page. On each page fault the page with lowest counter is LRU page
3. Each page table entry should be large enough to contain the counter
4. Using a matrix (hardware) **n for n page frames: with n page frames LRU H/W maintain matrix of n** n bits. Initially all zero. When page frame k is referenced, first all bits of row k are set to 1 and then all bits of column k are set to zeros. At any time row with the lowest binary value is the LRU page.

LRU with matrix. Pages: 0,1,2,3,2,1,0,3,2,3

![](https://i.imgur.com/2oTtOGs.png)

now for the last matric
row-wise binary to decimal :
0 --> 4
1 --> 0
2 --> 12
3 -->14

thus 1 will be replaced