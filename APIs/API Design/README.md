# API Design Best Practices

Good API design is crucial for creating APIs that are easy to use, maintain, and scale. Following a consistent set of design principles ensures a better developer experience.

## 1. Use Nouns for Resource URLs
Your API endpoints should focus on the "what" (the resource), not the "how" (the action). Use nouns to represent resources.

- **Good**: `/users`, `/products/123`
- **Bad**: `/getAllUsers`, `/getProductById/123`

## 2. Use HTTP Methods for Actions
Use the standard HTTP methods to perform actions on your resources. This aligns with REST principles and makes the API intuitive.

- **GET**: Retrieve a resource. (`GET /users`)
- **POST**: Create a new resource. (`POST /users`)
- **PUT**: Update/replace a resource. (`PUT /users/123`)
- **PATCH**: Partially update a resource. (`PATCH /users/123`)
- **DELETE**: Delete a resource. (`DELETE /users/123`)

## 3. Use Plural Nouns
Use plural nouns for your resource names to keep the API consistent.

- **Good**: `/users`, `/orders`
- **Bad**: `/user`, `/order`

## 4. Use Versioning
Introduce versioning in your API to avoid breaking changes for existing clients when you update your API. A common approach is to include the version in the URL.

- **Example**: `/api/v1/users`, `/api/v2/users`

## 5. Provide Filtering, Sorting, and Pagination
For collections of resources, provide query parameters to allow clients to filter, sort, and paginate the results.

- **Filtering**: `GET /users?role=admin`
- **Sorting**: `GET /users?sort=name_asc`
- **Pagination**: `GET /users?page=2&limit=20`

## 6. Use Consistent Naming Conventions
Stick to a consistent naming convention for your keys and parameters. `camelCase` is a common choice for JSON properties.

- **Good**: `{"userName": "test", "firstName": "Test"}`
- **Bad**: `{"user_name": "test", "FirstName": "Test"}`

## 7. Use Proper HTTP Status Codes
Return appropriate status codes to indicate the outcome of an API call. This helps clients handle responses correctly.

- **200 OK**: Success
- **201 Created**: Resource created successfully
- **400 Bad Request**: Client error (e.g., invalid input)
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side error