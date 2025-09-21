# REST API - Quick Notes

## What is an API?
- **API** stands for Application Programming Interface.
- It acts as a bridge or intermediary that allows two different software applications to communicate with each other.
- Think of it as a waiter in a restaurant: you (the client) order food from the menu (the interface), the waiter (the API) takes your order to the kitchen (the server), and brings the food back to you.

## REST (Representational State Transfer)
- REST is not a protocol or standard, but an **architectural style** for designing networked applications.
- It relies on a stateless, client-server communication model.
- RESTful APIs use standard HTTP methods to perform operations on resources.

## Key Principles of REST
1.  **Client-Server Architecture**: The client (e.g., your browser or mobile app) is separate from the server (the backend). This separation of concerns allows them to evolve independently.
2.  **Stateless**: Each request from a client to the server must contain all the information needed to understand and process the request. The server does not store any client context between requests.
3.  **Cacheable**: Responses from the server should be explicitly labeled as cacheable or non-cacheable. This helps improve performance and scalability.
4.  **Uniform Interface**: This is the fundamental principle of REST and simplifies the architecture. It has four constraints:
    *   **Resource-Based**: Individual resources are identified by URLs (e.g., `/users/123`).
    *   **Manipulation of Resources Through Representations**: The client has a representation of a resource (like JSON or XML) and can modify it to update the resource on the server.
    *   **Self-Descriptive Messages**: Each request includes enough information for the server to process it (e.g., the HTTP method `GET`, `POST`, and the URL `/users`).
    *   **Hypermedia as the Engine of Application State (HATEOAS)**: Responses from the server should include links to other related resources, allowing the client to navigate the API dynamically.
5.  **Layered System**: The client may not know whether it is connected directly to the end server or to an intermediary (like a load balancer). This allows for better scalability.

## Common HTTP Methods
| Method   | Description                                                                                             |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **GET**  | `Read` - Retrieve a representation of a resource. (e.g., get a user's profile)                            |
| **POST** | `Create` - Create a new resource. (e.g., create a new user account)                                       |
| **PUT**  | `Update/Replace` - Update an existing resource by completely replacing it. (e.g., update a user's profile) |
| **PATCH**| `Partial Update` - Partially update an existing resource. (e.g., update only a user's email address)      |
| **DELETE**| `Delete` - Remove a resource. (e.g., delete a user account)                                               |

## Example REST API Endpoints
- `GET /api/users` → Get a list of all users.
- `GET /api/users/1` → Get the user with ID 1.
- `POST /api/users` → Create a new user.
- `PUT /api/users/1` → Update the user with ID 1.
- `DELETE /api/users/1` → Delete the user with ID 1.

## Why REST?
- **Simplicity**: Easy to understand and use.
- **Scalability**: The stateless nature makes it easy to scale horizontally.
- **Flexibility**: Supports various data formats (JSON, XML, etc.).
- **Wide Adoption**: Built on standard HTTP, it's the most popular choice for web and mobile APIs.
