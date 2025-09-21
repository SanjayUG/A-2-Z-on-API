// 📌 Spread & Rest
// Spread: copy/merge data
// Rest: gather remaining values

let user = { id: 1, name: "Sanjay" };
let updated = { ...user, role: "Engineer" };

console.log("Updated User:", updated);

// Rest example
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));
