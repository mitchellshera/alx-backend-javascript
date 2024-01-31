const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Import the countStudents function from 3-read_file_async.js

const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;

  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL path and send the appropriate response
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      // Call countStudents function with the database file name as an argument
      await countStudents('database.csv');
      res.end('This is the list of our students');
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app variable
module.exports = app;
