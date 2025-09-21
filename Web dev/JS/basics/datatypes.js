// primitive datatypes -> Call by Value

let name = "sam"
let age = 18
let isLoggedIn = false
let state;
let store = null;
let bigNumber = 675767647645n;

// number => 2 to power 53
// bigint => bigger numerical value
// string => ""
// boolean => true/false
// null => standalone value
// undefined => declared but not initialized
// symbol => unique


console.log(typeof age);        // number
console.log(typeof bigNumber);  // bigint
console.log(typeof name);       // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof state);      // undefined --> undefined
console.log(typeof store); // null --> object