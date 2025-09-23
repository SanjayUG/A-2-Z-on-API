# Deadlocks

## What is a Deadlock?
*   A Deadlock is a situation where each of the computer processes waits for a resource that is being assigned to another process.
*   In this situation, none of the process gets executed since the resource it needs is held by some other process that is also waiting for some other resource to be released.

## Conditions for Deadlock
### Mutual Exclusion
*   two processes cannot use the same resource at the same time.
### Hold and Wait
*   A process waits for some resources while holding another resource at the same time.
### No preemption
*   The process once scheduled will be executed till the completion.
### Circular Wait
*   All the processes must be waiting for the resources in a cyclic manner so that the last process is waiting for the resource which is being held by the first process.

## Deadlock Handling techniques
### Deadlock prevention
*   mutual exclusion, hold and wait, no preemption, and circular wait. By ensuring that one or more of these conditions are not satisfied, deadlocks can be prevented from happening.
### Deadlock Avoidance
*   use resource allocation algorithms and resource request protocols.
### Deadlock Detection
*   periodically examining the resource allocation state.
### Deadlock Recovery
*   terminating one or more processes involved in the deadlock.
### Deadlock Ignorance
*   Some systems choose to ignore the problem of deadlocks entirely.
*   This approach assumes that deadlocks will rarely occur.
