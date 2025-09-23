# Process Synchronization

## Critical section problem
*   It happens when two or more portion of code or a block of process shares same resources and at a time only one is allowed to enter the critical section.

## Process synchronization requirements
### Mutual exclusion
*   when two or more portion of code or a block of process shares same resources and at a time only one is allowed to enter the critical section.
### Progress
*   If no process is in critical section, the decision of which process can enter the critical section next should not be indefinitely postponed.
### Bounded waiting
*   It guarantees that a process will enter the critical section and prevent starvation of the process.

## Process synchronization mechanism
### locks/mutexes
*   They allow only one process or thread to acquire the lock at a time, ensuring exclusive access to a shared resource or critical section.
*   Locks can be implemented using hardware instructions or software constructs.
### Semaphores
*   allow a specified number of processes or threads to access a shared resource simultaneously.
### Read write locks
*   Read locks can be acquired simultaneously by multiple readers, while write locks are exclusive.
