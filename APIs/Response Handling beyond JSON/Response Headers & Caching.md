📦 Response Headers & Caching
Response Headers are metadata sent back from the server along with the data body. They give the client (your browser/JS code) crucial instructions about the response, including security, content type, and most importantly, caching.

Caching is the temporary storage of a resource (like an API response) to reduce future requests to the server, resulting in faster load times and less bandwidth usage.

1. Understanding Key Caching Headers (Server's Role)

2. Enabling Caching (Client's Role: Reading)
Client-side JavaScript cannot manipulate these headers to enable caching; it can only read and react to them. The critical reaction is with the ETag:

Read: The client receives a resource and stores its ETag value.

Re-validate: When the client needs the resource again, it sends a request with a special Request Header: If-None-Match: <ETag_value>.

Server Response:

If the resource hasn't changed, the server returns a 304 (Not Modified) status with no body, and the client uses the cached copy. 

If the resource has changed, the server returns a 200 (OK) status with the new body and a new ETag.



// script.js

const API_URL = 'https://jsonplaceholder.typicode.com/posts/3'; 

async function checkResponseHeaders() {
    console.log("Sending request and inspecting the server's response headers...");
    
    try {
        const response = await axios.get(API_URL);
        
        // 1. Accessing all response headers via response.headers
        const headers = response.headers;
        
        console.log(`\n✅ Request Status: ${response.status}`);
        
        // 2. Reading specific caching-related headers
        const cacheControl = headers['cache-control'] || 'Not Specified';
        const etag = headers['etag'] || 'Not Specified';

        console.log("--- Caching Headers ---");
        console.log(`Cache-Control: ${cacheControl}`);
        console.log(`ETag: ${etag}`);
        console.log(`\nServer date: ${headers.date}`);

        // --- Client Reaction Logic (Conceptual) ---
        if (etag !== 'Not Specified') {
            console.log("\nClient Action:");
            console.log(`I will store this ETag. Next time, I'll send an 'If-None-Match: ${etag}' header.`);
        }
        
    } catch (error) {
        console.error('Request Error:', error.message);
    }
}

checkResponseHeaders();
