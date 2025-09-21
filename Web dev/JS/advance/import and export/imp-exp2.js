import { add, sub, product, divide } from "./imp-exp.js";

// if default export then import will be:
// import add from "./imp-exp.js";

let addResult = add(20, 20);

let subResult = sub(20, 20);

let productResult = product(20, 20);

let divideResult = divide(20, 20);

console.table([addResult, subResult, productResult, divideResult]);