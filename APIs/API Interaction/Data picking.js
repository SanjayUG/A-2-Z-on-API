// Data Picking is the process of extracting specific pieces of information from a larger API response. When an API sends back data, it's often in a structured format like JSON, which contains many different keys and values. Instead of using the entire response, you "pick" or select only the data you need, like a user's name or a product's price, and ignore the rest.

async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    // 1. Fetch data from the API
    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 2. Parse the JSON response
    const users = await response.json();

    // 3. Data Picking: Extract the name and email of the first user
    // The 'users' variable is an array, so we access the first element (index 0)
    // and then its specific properties.
    const firstUser = users[0];
    const userName = firstUser.name;
    const userEmail = firstUser.email;
    const userCompany = firstUser.company.name; // You can even pick nested data

    // 4. Use the picked data
    console.log(`First User's Name: ${userName}`);
    console.log(`First User's Email: ${userEmail}`);
    console.log(`Company: ${userCompany}`);

  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// Call the function to run the example
getData();
