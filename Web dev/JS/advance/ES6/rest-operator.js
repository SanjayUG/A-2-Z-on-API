function displayName(...names) {
    console.log(names);
}

displayName("Ajay", "Sachin", "Ravi", "Ajeet");

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));