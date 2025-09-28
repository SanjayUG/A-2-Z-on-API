HTTP Status Codes are three-digit numbers returned by a server to communicate the outcome of a request. The first digit of the code defines the general category or class of the response, giving you an immediate idea of whether the request was successful, needs more action, or encountered an error.

📚 The Five Categories
Range	Name	Meaning	Key Examples
1xx	Informational	Request received, continuing process.	100 (Continue), 101 (Switching Protocols)
2xx	Success	The action was successfully received, understood, and accepted.	200 (OK), 201 (Created), 204 (No Content)
3xx	Redirection	Further action needs to be taken to complete the request.	301 (Moved Permanently), 302 (Found)
4xx	Client Error	The request contains bad syntax or cannot be fulfilled.	400 (Bad Request), 401 (Unauthorized), 404 (Not Found)
5xx	Server Error	The server failed to fulfill an apparently valid request.	500 (Internal Server Error), 503 (Service Unavailable)
💻 JavaScript Example with Axios
This example demonstrates how to handle successful 2xx and client-error 4xx status codes using Axios. Axios automatically throws an error for any response outside the 2xx range, allowing you to handle errors cleanly in the catch block.

JavaScript

// script.js

// URL for a valid post (will return 200 OK)
const SUCCESS_URL = 'https://jsonplaceholder.typicode.com/posts/1';
// URL for a non-existent post (will return 404 Not Found)
const ERROR_URL = 'https://jsonplaceholder.typicode.com/posts/9999'; 

// --- 1. Handling 2xx (Success) ---
async function handleSuccess(url) {
  try {
    console.log(`\nAttempting a SUCCESS request to ${url}...`);
    
    // Axios handles the 200 OK status gracefully
    const response = await axios.get(url); 

    // Status is in the 2xx range (e.g., 200)
    console.log(`✅ Success! Status: ${response.status}`);
    console.log(`Title of Post: ${response.data.title}`);

  } catch (error) {
    // This should NOT run for 2xx codes
    console.error("Unexpected Error in Success Block:", error.message);
  }
}

// --- 2. Handling 4xx (Client Error) ---
async function handleError(url) {
  try {
    console.log(`\nAttempting an ERROR request to ${url}...`);

    // The request will succeed, but the server response will be 404
    await axios.get(url); 
    
    // This line will not be reached because Axios throws for 4xx/5xx
    console.log("Unexpected Success!");

  } catch (error) {
    // Axios catches the error response here!
    if (error.response) {
      // Status is in the 4xx or 5xx range (e.g., 404)
      const status = error.response.status;
      
      if (status >= 400 && status < 500) {
          console.log(`🛑 Client Error! Status: ${status} (4xx Category)`);
          console.log("Message: The requested resource was not found (404).");
      } else if (status >= 500) {
          console.log(`⚠️ Server Error! Status: ${status} (5xx Category)`);
      }
    } else {
      console.error('Request failed:', error.message);
    }
  }
}

handleSuccess(SUCCESS_URL);
handleError(ERROR_URL);
