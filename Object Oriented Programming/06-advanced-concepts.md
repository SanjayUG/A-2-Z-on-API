
# Advanced Concepts

## Explain overriding and overloading

Method overloading is a concept where two or more methods in a class have the same names but different method signatures.

If a method with the same method signature is presented to both child and parent classes, it is known as method overriding.

### Can you override the constructor?

We can not override the constructor because it looks like a method but it lacks a return type and shares the same name as the class name.

## What is coupling in OOPs and why is it important?

Coupling is the separation of the concerns, which means an object can not change or modify the state or behavior of other objects directly.

Loosely coupled objects are independent of one another and do not modify the other objects.

Tightly coupled objects depend on other objects and can modify the state of other objects.

## What is composition?

Is a way to design a "has a" relationship, that is used to implement instance variables that refer to another object.

## Copy vs assignment constructor

Both are used to utilize one object over another object.

Copy constructor allocates separate memory for both objects.

While the assignment operator does not allocate memory for the newly created object.

## What is exception handling?

It is an event that occurs during the execution of the program during the runtime which causes the program to halt.

It usually happens when a user tries to do something that the program does not support.

Exception handling can be done ahead of time in the program, stopping the execution.

Try-catch is the most common method of exception handling used.

## Which method will be executed first, static or main?

Static method will be executed first because the static block will be executed even before the compiler or the interpreter looks for the main method.

## What is pure object-oriented programming and why is Java not a pure object-oriented programming language?

Pure object-oriented programming languages support or treat everything inside a class as objects.

Variables can be stored using primitive data types in Java, and in addition to it, the static keyword in Java allows us to use classes without using the objects.

That's why Java is not a pure object-oriented programming language.

## Can a class inherit the constructor of its base class?

Whenever the child class extends the parent class, it inherits the state and behavior in the form of variables and methods, but it does not inherit the constructor from its superclass.

## How is an abstract class different from an interface?

Both contain the method declaration and not their implementation.

When an interface is implemented, the subclass must define all its methods and provide its implementation.

When an abstract class is inherited, the subclass does not need to provide the definition of its abstract method until and unless the subclass is using it.

## What is a singleton class and how is it different from a static class?

Singleton is a class that can have only one object, and after the first instantiation, the new objects point to the first instance.

Singleton can also implement inheritance, while the static class on the other hand cannot inherit its instance members, which makes singleton classes not adaptable.
