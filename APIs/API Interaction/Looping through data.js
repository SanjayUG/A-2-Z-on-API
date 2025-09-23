// Looping is the process of repeatedly performing an action for each item in a collection. When you request data from an API, it often returns a list of items (like a list of users, posts, or products) packaged as a JSON array. Looping through this array allows you to access and process each individual item one by one. This is essential for displaying multiple items on a web page, such as a gallery of images or a list of blog posts.

async function getPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    // 1. Fetch data from the API endpoint
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 2. Parse the JSON response, which is an array
    const posts = await response.json();

    // 3. Looping through the array of posts
    // We'll use a for...of loop for a clean and simple approach.
    console.log("--- All Post Titles ---");

    for (const post of posts) {
      // 4. Accessing individual items within the loop
      console.log(post.title);
    }

    // A more modern alternative is the forEach method
    console.log("\n--- All Post Bodies ---");

    posts.forEach(post => {
        console.log(post.body);
    });

  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

// Call the function to run the example
getPosts();
