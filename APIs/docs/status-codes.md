# HTTP Status Codes

HTTP status codes are standard responses given by a server to a client's request. They are grouped into five classes:

- **1xx (Informational)**: The request was received, continuing process.
- **2xx (Successful)**: The request was successfully received, understood, and accepted.
- **3xx (Redirection)**: Further action needs to be taken in order to complete the request.
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
- **5xx (Server Error)**: The server failed to fulfill an apparently valid request.

## Common Status Codes for Interviews

### 2xx: Success
- **200 OK**: The request has succeeded. This is the standard response for successful HTTP requests.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource. (e.g., after a `POST` request to create a new user).
- **204 No Content**: The server successfully processed the request but is not returning any content. (e.g., after a `DELETE` request).

### 3xx: Redirection
- **301 Moved Permanently**: The requested resource has been permanently moved to a new URL.
- **302 Found**: The requested resource is temporarily at a different URL.

### 4xx: Client Error
- **400 Bad Request**: The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax).
- **401 Unauthorized**: The client must authenticate itself to get the requested response. This is used when authentication is required and has failed or has not yet been provided.
- **403 Forbidden**: The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.
- **404 Not Found**: The server can not find the requested resource. This is the most famous status code.
- **409 Conflict**: The request could not be completed due to a conflict with the current state of the resource. (e.g., creating a user with an email that already exists).

### 5xx: Server Error
- **500 Internal Server Error**: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.
- **503 Service Unavailable**: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
