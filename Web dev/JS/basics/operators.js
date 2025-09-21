// arithmetic

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

// assignment operator

let x;

x = 10;

x += 20;
x -= 20;

console.log("X: ", x);

// comparision -> return boolean balue

// == (value compare), === (value + datatype compare), <, >, <=, >=

console.log(5 == "5"); // true (string "5" is coerced to number 5)
console.log(5 === "5"); // false (number and string types are different)
console.log(5 != "6"); // true
console.log(5 !== "5"); // true (different types)
console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(5 < 10); // true
console.log(5 <= 5); // true



// logical -> returns boolean value

// AND (&), OR (|) etc.,

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(1 && 0);         // 0 (falsy value)
console.log(1 && "hello");   // "hello" (last truthy value)

console.log(true || false);  // true
console.log(false || false); // false
console.log(0 || 1);         // 1 (first truthy value)
console.log("" || "world");  // "world" (first truthy value)

console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true (0 is falsy, !0 is true)
console.log(!"hello"); // false ("hello" is truthy, !"hello" is false)



// unary operator

// increment (post or pre) & decrement (post or pre)
// x++, ++x
// x--, --x

let X = 10;
console.log("X++: ", X++); // output 10 later it is incremented to 11
console.log("++X: ", ++X); // 11 incremented again so output 12

let Y = 10;
console.log("Y--: ", Y--); // output 10 later it is decremented to 9
console.log("--Y: ", --Y); // 9 decremented again so output 8



// Ternary operator

let age = 20;
let message = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet.";
console.log(message); // Output: You are eligible to vote.
