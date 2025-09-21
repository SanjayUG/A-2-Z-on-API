// arrow function
let display=(name) => {
    console.log("Welcome: ", name);
}

// let display = name => console.log("Welcome: ", name); // for single parameter (no bracket) or one statement (no braces)

display("Ajay");


// ---------------sum of two numbers------------------
let result = (x, y) => x + y;   // you can also remove the return keyword in arrow function

console.log("Result: ", result(20, 20));


// ---------------set time function------------------
let displayWelcome = setTimeout(() => {
    console.log("Welcome!!" );
}, 5000);

displayWelcome;



// ---------------call back------------------

function Greet(name, callback) {
    console.log("Hello!! ", name);
    callback();
}

function sayBye() {
    console.log("Bye!!");
}

Greet("Sachin", sayBye); // passing a function as an argument to another function



// ---------------default parameter------------------
function GreetMe(name) {
    console.log("Welcome: ", name);
}

GreetMe(); // output: Welcome:  undefined

function GreetMe(name = "Guest") {
    console.log("Welcome: ", name);
}

GreetMe(); // output: Welcome:  Guest

// nested function -> functions inside a function