# HTTP vs. HTTPS

## HTTP (Hypertext Transfer Protocol)
- **What it is**: The foundation of data communication for the World Wide Web.
- **How it works**: It follows a request-response model. The client (your browser) sends an HTTP request, and the server sends back an HTTP response (like the HTML, CSS, and JS for a webpage).
- **Key Characteristic**: **Not secure**. Data is sent in plain text, making it vulnerable to eavesdropping and man-in-the-middle attacks.

## HTTPS (Hypertext Transfer Protocol Secure)
- **What it is**: The secure version of HTTP.
- **How it works**: It is essentially HTTP over an encrypted connection. It uses **SSL/TLS** (Secure Sockets Layer/Transport Layer Security) to encrypt the data transmitted between the client and the server.
- **Key Characteristic**: **Secure**. The encryption ensures that even if data is intercepted, it cannot be read.

## Key Differences

| Feature           | HTTP                                  | HTTPS                                                                   |
| :---------------- | :------------------------------------ | :---------------------------------------------------------------------- |
| **Security**      | No encryption (plain text)            | Uses SSL/TLS encryption                                                 |
| **Port**          | Port 80                               | Port 443                                                                |
| **URL Scheme**    | `http://`                             | `https://`                                                              |
| **Trust**         | Less trustworthy for sensitive data   | Essential for sites handling sensitive data (passwords, credit cards)   |
| **SEO**           | Can negatively impact search ranking  | Preferred by search engines like Google, leading to better SEO          |

## How HTTPS Works (SSL/TLS Handshake)
1.  **Client Hello**: The client sends a "hello" message to the server, including its SSL/TLS version and a list of supported cipher suites.
2.  **Server Hello**: The server responds with its SSL/TLS version, the selected cipher suite, and its **SSL certificate**.
3.  **Authentication**: The client verifies the server's SSL certificate with a Certificate Authority (CA). This confirms the server is who it claims to be.
4.  **Key Exchange**: The client and server securely exchange a session key to encrypt all further communication.
5.  **Encrypted Communication**: All data transmitted between the client and server is now encrypted.

## Why is HTTPS Important?
- **Confidentiality**: Protects against eavesdropping.
- **Integrity**: Ensures the data has not been tampered with.
- **Authentication**: Verifies that you are communicating with the correct server.
- **Trust**: The padlock icon in the browser gives users confidence.
- **Performance**: With modern protocols like HTTP/2, HTTPS can be faster than HTTP.
