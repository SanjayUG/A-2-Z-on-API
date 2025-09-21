# API Authentication Methods

Authentication is the process of verifying the identity of a client. For APIs, this is crucial to ensure that only authorized clients can access the resources.

## 1. Basic Authentication
- **How it works**: The client sends a `username` and `password` in the `Authorization` header of the request. The credentials are combined and Base64-encoded.
- **Header**: `Authorization: Basic <base64-encoded-credentials>`
- **Pros**: Simple to implement.
- **Cons**: Not secure. The credentials are only encoded, not encrypted. Should only be used over HTTPS.

## 2. API Keys
- **How it works**: The client is assigned a unique key (a long string of characters) which they must include in each request. The key can be sent in a query parameter, a request header, or the request body.
- **Header (common method)**: `X-API-Key: <your-api-key>`
- **Pros**: Simple and widely used.
- **Cons**: If the key is stolen, it can be used by an attacker. Keys should be protected and regenerated if compromised.

## 3. OAuth (Open Authorization)
- **What it is**: An open standard for access delegation. It allows users to grant a third-party application access to their resources on another service, without sharing their credentials.
- **Commonly seen in**: "Log in with Google/Facebook/GitHub" buttons.
- **How it works (OAuth 2.0 Flow)**:
    1.  **Authorization**: The user grants the application permission to access their data.
    2.  **Authorization Code**: The application receives an authorization code from the service.
    3.  **Access Token**: The application exchanges the authorization code for an access token.
    4.  **API Calls**: The application uses the access token to make authenticated requests to the API on behalf of the user.
- **Pros**: Secure and gives users granular control over their data.
- **Cons**: Can be complex to implement.

## 4. JWT (JSON Web Token)
- **What it is**: A compact and self-contained way for securely transmitting information between parties as a JSON object. The information can be verified and trusted because it is digitally signed.
- **How it works**:
    1.  The user logs in with their credentials.
    2.  The server generates a JWT and sends it to the client.
    3.  The client stores the JWT (e.g., in local storage or cookies) and includes it in the `Authorization` header for subsequent requests.
    4.  The server verifies the JWT signature to authenticate the request.
- **Header**: `Authorization: Bearer <jwt-token>`
- **Structure of a JWT**:
    - **Header**: Contains the token type and the signing algorithm.
    - **Payload**: Contains the claims (e.g., user ID, roles, expiration date).
    - **Signature**: Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.
- **Pros**: Stateless, scalable, and widely used in modern web applications.
- **Cons**: The token must be stored securely on the client side.

## Comparison

| Method          | Use Case                               | Security Level | Complexity |
| :-------------- | :------------------------------------- | :------------- | :--------- |
| **Basic Auth**  | Internal or very simple APIs (over HTTPS) | Low            | Very Low   |
| **API Keys**    | Public APIs with usage tracking        | Medium         | Low        |
| **OAuth 2.0**   | Third-party application authorization  | High           | High       |
| **JWT**         | Single-page apps, microservices        | High           | Medium     |
