## 11. HTTP and HTTPS

### HTTP (Hypertext Transfer Protocol):

#### Characteristics:
- **Stateless**: Each request independent
- **Port**: 80
- **Methods**:
  - **GET**: Retrieve data
  - **POST**: Send data to server
  - **PUT**: Update existing data
  - **DELETE**: Remove data

#### HTTP Request Structure:
```
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

#### HTTP Response Structure:
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234
Server: Apache

<html>...</html>
```

### Status Codes:
- **1xx**: Informational
- **2xx**: Success (200 OK)
- **3xx**: Redirection (301 Moved Permanently)
- **4xx**: Client Error (404 Not Found)
- **5xx**: Server Error (500 Internal Server Error)

### HTTPS (HTTP Secure):
- **Security**: Encrypted using SSL/TLS
- **Port**: 443
- **Benefits**: Data confidentiality and integrity

### Cookies:
- **Purpose**: Store user session information
- **Storage**: Client-side (browser)
- **Use cases**: Login sessions, shopping carts, preferences
