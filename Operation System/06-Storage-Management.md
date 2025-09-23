# Storage Management

## Page replacement algorithms
### First In First Out (FIFO)
*   **What it does:** Replaces the page that has been in memory the longest.
*   **How it works:** It follows a simple "first-in, first-out" queue.
*   **Its flaw:** It's often inefficient because it might remove a page that is still being used.
### Optimal page replacement (OPT)
*   **What it does:** Replaces the page that won't be used for the longest time in the future.
*   **Its status:** It's the "perfect" algorithm that gives the best possible result.
*   **Its flaw:** It's impossible to use in real systems because you can't predict the future.
### Least recently used (LRU)
*   **What it does:** Replaces the page that hasn't been used for the longest time.
*   **How it works:** It looks at the past to guess which page is least important.
*   **Its status:** It's a very effective and practical algorithm that performs close to Optimal.

## Disk scheduling algorithm
### Introduction to Disk Scheduling
Disk scheduling is the act of deciding which outstanding request to service next for the disk. The purpose of disk scheduling algorithms is to reduce the total seek time.

### Disk Scheduling Algorithms
#### FCFS first come first serve
*   Handles requests in the exact order they arrive.
#### SSTF shortest seek time first
*   Selects the request that is closest to the current position of the disk head.
#### SCAN
*   Moves the head back and forth from one end of the disk to the other, servicing requests along the way.
#### C SCAN
*   Moves the head in one direction, servicing requests, then jumps back to the beginning without servicing any on the return trip.
#### LOOK
*   Same as SCAN, but only goes as far as the last request in each direction before turning back.
#### C LOOK
*   Same as C-SCAN, but only goes as far as the last request before jumping back to the first request.
