// 📌 Modules
// Used to organize code into separate files

// user.js
export const getUser = () => ({ id: 1, name: "Sanjay" });

// main.js
import { getUser } from "./user.js";
console.log(getUser());
