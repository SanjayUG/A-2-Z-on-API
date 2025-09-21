function display() {
    console.log("Good afternoon");
    console.log("How are you?");
    console.log("Welcome to JavaScript Session!");
}

display(); // call the function when ever required


// ---------------parameter passing------------------
function Greet(name) {
    console.log("Welcome: ", name);
}

Greet("Ajay");
Greet("Sachin");


// ---------------sum of two numbers------------------
function add(first_num, sec_num) {
    return first_num + sec_num;
}

let result = add(20, 20);
console.log("Result: ", result);


// ---------------anonmyous function------------------
let display = function(name) {
    console.log("Welcome: ", name);
}

display(" Jai Shree Ram");


let result1 = function(x, y) {
    return x + y;
}

// console.log("Result: ", result(20, 20));

