// 📌 Error Handling
// Handle failures safely

async function getData() {
  try {
    let res = await fetch("https://wrong.url");
    let data = await res.json();
  } catch (err) {
    console.error("API Error:", err.message);
  }
}
getData();
