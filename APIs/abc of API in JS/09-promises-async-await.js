// 📌 Promises & Async/Await
// APIs are async (they take time to respond)

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("Users (Promise):", data));

// Using async/await
async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log("Users (Async):", data);
}
getUsers();
