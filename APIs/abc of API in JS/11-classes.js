// 📌 Classes
// Used for creating objects with blueprint

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

let u1 = new User("Sanjay", "API Engineer");
console.log(u1);
