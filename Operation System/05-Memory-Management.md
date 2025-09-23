# Memory Management

## Introduction to Memory Management
*   In simple, how the operating system gives memory to programs that need it and takes it back when they are finished.

## Partitioning
### Fixed Partitioning
*   Memory is divided into pre-set, unchangeable partitions.
*   It wastes space inside a partition if a process is smaller, which is called internal fragmentation.
### Dynamic Partitioning
*   Partitions are created on the fly to be the exact size needed by the process.
*   It wastes space between partitions over time, which is called external fragmentation.
*   **First Fit:** Allocates the first available memory block that is big enough.
*   **Best Fit:** Allocates the smallest available memory block that is big enough.
*   **Worst Fit:** Allocates the largest available memory block.

## Paging and Virtual Memory
### Paging
*   It eliminates the need for contiguous blocks of physical memory.
*   It works by dividing a process's logical address space into fixed-size blocks called pages, and dividing physical memory (RAM) into blocks of the same size called frames.
*   When a process runs, its pages can be loaded into any available frames, even if they are scattered.
*   The operating system uses a page table to keep track of where each page is located, translating the logical addresses used by the program into the correct physical addresses in RAM.
*   This method solves the problem of external fragmentation and allows for more efficient use of memory.
### Virtual memory
*   It is a memory management technique that allows a computer to run programs that are larger than the actual physical RAM available.
*   It creates an illusion for the process that it has a very large, private, and contiguous block of memory.
*   This is achieved by using a portion of the hard disk as a temporary extension of RAM, often called a swap file or page file.
*   When RAM is full, the operating system moves data for inactive processes from RAM to the disk, freeing up RAM for the active process.
*   This process, known as swapping or paging, enables the system to run more applications simultaneously and handle very large programs efficiently.

## Segmentation
*   where a process's address space is divided into variable-sized blocks called segments.
*   Unlike paging, where memory is split into fixed-size blocks, segmentation divides the memory based on the logical structure of a program.
*   For example, a single program might be broken into segments for its main function, subroutines, global variables, and the stack.
*   Each segment is a logically related unit, making it easier to manage and protect different parts of a program.

## Thrashing
*   Thrashing is a problem that occurs when a computer's virtual memory is overused, leading to a constant state of paging and page faults.
*   Essentially, the system is so low on memory that it continuously has to swap pages between RAM and the hard disk.
*   The computer spends more time swapping data (paging) than actually running applications (executing), causing the system's performance to collapse.
