# OS Fundamentals

## What is an Operating System?

*   An OS is a software that acts as an interface between the computer hardware and the user applications.
*   It manages resources for the execution of the program.
*   The primary function of OS is process management, memory management, system management etc.

## Types of Operating Systems

*   Windows
*   macOS
*   Linux
*   Unix
*   Android
*   iOS
*   **Real-Time OS (RTOS):** designed for systems with real time response like embedded system or control systems.

## Program vs. Process

### Program
*   A set of instructions written in a programming language that is a blue print for the compiler or the interpreter and performs a specific or set of tasks.
*   It is stored in a file on a disk which represents a executable entity.

### Process
*   Process is an instance of a program in execution.
*   When program loaded into memory and executed in becomes the process.
*   Process has its own program counter, stack and variables.

## Thread
*   It is a unit of execution within a process.
*   It is a sequence of instructions that can be scheduled and executed independently.

## Process States
*   **New:** The process is being created by the operating system.
*   **Ready:** The process is in main memory, waiting to be assigned to the CPU to run.
*   **Run:** The process's instructions are being executed by the CPU.
*   **Termination:** The process has finished its execution.
*   **Wait / block:** The process is waiting for some event to occur, like an I/O operation to complete.
*   **Suspend / ready:** A ready process that has been swapped out of main memory to free it up for other processes.
*   **Suspend wait:** A waiting process that has also been swapped out of main memory.

## Multitasking Concepts
### Multi-process
*   Execution of multiple process on a system with multiple cpus or cpu cores.
*   Each process has its own memory and resources.
### Multi-threading
*   Executing multiple threads in a single process.
*   A thread is a lightweight unit of execution that can run concurrently with other threads with the same process.
*   They share the same memory space and resources.
### Multi-programming
*   Here multiple programs are loaded into memory simultaneously and the cpu switches between them to execute.
*   Each program has its own separate memory space.
*   Cpu switching happens when one process is waiting for the I/O or other operations.
### Multi-tasking
*   It allows multiple task or process to run concurrently on a single cpu.
*   cpu time is divided among the tasks, creates illusion of parallel execution.
