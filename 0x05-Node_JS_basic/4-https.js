const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response with "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
