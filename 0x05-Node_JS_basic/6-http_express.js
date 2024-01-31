const express = require('express');

// Create an Express application
const app = express();
const port = 1245;

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send the response with "Hello Holberton School!"
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app variable
module.exports = app;
