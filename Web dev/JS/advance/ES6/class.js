class Employee {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Welcome: ${this.name}`);
    }
}

let emp1 = new Employee("Ravi");
let emp2 = new Employee("Ajay");
let emp3 = new Employee("Sachin");

emp1.greet();
emp2.greet();
emp3.greet();