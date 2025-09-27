// This file demonstrates key API design principles using a simple Express.js server.
// Principles showcased:
// 1. Plural Nouns for Resources (e.g., /api/v1/users)
// 2. Correct HTTP Method Usage (GET for fetching, POST for creating)
// 3. Versioning (/api/v1/)
// 4. Filtering via Query Parameters (?role=admin)
// 5. Consistent Naming Conventions (camelCase)
// 6. Appropriate HTTP Status Codes (200, 201, 400)

import express from 'express';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// In-memory data store (for demonstration purposes)
let users = [
  { id: 1, userName: 'john_doe', role: 'user' },
  { id: 2, jane_smith: 'admin' },
];

// --- Resource: Users ---

// GET /api/v1/users
// - Retrieves a list of users.
// - Supports filtering by 'role'.
app.get('/api/v1/users', (req, res) => {
  const { role } = req.query; // Principle: Filtering via Query Params

  if (role) {
    const filteredUsers = users.filter(u => u.role === role);
    return res.status(200).json(filteredUsers); // Principle: Status Code 200 OK
  }

  res.status(200).json(users); // Principle: Status Code 200 OK
});

// POST /api/v1/users
// - Creates a new user.
app.post('/api/v1/users', (req, res) => {
  const { userName, role } = req.body;

  // Basic validation
  if (!userName || !role) {
    return res.status(400).json({ message: 'userName and role are required.' }); // Principle: Status Code 400
  }

  const newUser = {
    id: users.length + 1, // Simple ID generation
    userName: userName,   // Principle: Consistent Naming (camelCase)
    role: role,
  };

  users.push(newUser);

  // Principle: Status Code 201 Created
  res.status(201).json(newUser);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Try visiting:');
  console.log(`- http://localhost:${PORT}/api/v1/users`);
  console.log(`- http://localhost:${PORT}/api/v1/users?role=admin`);
});

/*
To test the POST endpoint, you can use a tool like Postman or curl:

curl -X POST http://localhost:3000/api/v1/users \
-H "Content-Type: application/json" \
-d '{"userName": "new_user", "role": "user"}'

*/
