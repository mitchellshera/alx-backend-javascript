const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the '/students' endpoint
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  // Call countStudents with the database file passed as an argument
  countStudents(process.argv[2].toString())
    .then((output) => {
      // Send the output from countStudents to the response
      res.end(output);
    })
    .catch(() => {
      // If countStudents encounters an error, handle it and send an error response
      res.status(404).end('Cannot load the database');
    });
});

// Make the server listen on port 1245
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app variable
module.exports = app;
