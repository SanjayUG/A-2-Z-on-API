// 📌 Express.js Basics
// Express is used to build APIs

import express from "express";
const app = express();

app.use(express.json());

// GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello API World 🚀" });
});

// POST endpoint
app.post("/api/user", (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
