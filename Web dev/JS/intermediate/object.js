let employee = {
    id: 101,
    name: "Ajay",
    city: "Mangalore"
}

console.log(employee);
console.log(employee.name);     // dot notation
console.log(employee["city"]);  // bracket notation

employee.salary = 50000;        // add another property
console.log(employee);

// -------------for in loop---------------
for (let key in employee) {
    console.log("Key: " + key + ", Value: " + employee[key]);
}


// ------------destructuring---------------
let {id, name, city} = employee;

console.table([id, name, city]);