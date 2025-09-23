# CPU Scheduling

## Introduction to CPU Scheduling
CPU scheduling is the process of determining which process will be executed by the CPU while other processes are on hold. The main goal of CPU scheduling is to make the system efficient, fast, and fair.

## CPU Scheduling Algorithms

### First come, first serve (FCFS)
*   Process that comes first is executed first.
*   It continued to run, until the process is finished or it voluntarily gives up the cpu.
*   Poor cpu utilisation if longer process comes before the shorter ones.

### Shortest job next/first (SJF)
*   It selects the process with shortest execution time and it can be preemptive or even non preemptive.

### Round robin (RR)
*   It is preemptive and a fixed time is allocated to each process called quantum time in a queue.

### Priority scheduling
*   Each process is assigned with a priority order, it can be preemptive or non preemptive.

### Multi level queues scheduling
*   It divides the ready queue into multiple priority queues each with its own scheduling algorithms.
