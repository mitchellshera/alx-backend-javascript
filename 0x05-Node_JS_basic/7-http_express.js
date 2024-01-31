const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

// Function to count students from a CSV file
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return readFile(fileName, 'utf-8')
    .then((data) => {
      let output = '';
      const lines = data.split('\n');

      // Loop through each line in the CSV file
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i]) {
          length += 1;
          const field = lines[i].split(',');

          // Process each field
          if (Object.prototype.hasOwnProperty.call(students, field[3])) {
            students[field[3]].push(field[0]);
          } else {
            students[field[3]] = [field[0]];
          }

          if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
            fields[field[3]] += 1;
          } else {
            fields[field[3]] = 1;
          }
        }
      }

      // Calculate total students
      const totalStudents = length - 1;
      output += `Number of students: ${totalStudents}\n`;

      // Generate output for each field
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${students[key].join(', ')}\n`;
        }
      }

      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students endpoint
app.get('/students', async (req, res) => {
  try {
    // Fetch student data and send the response
    const output = await countStudents(process.argv[2].toString());
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(404).send('This is the list of our students\nCannot load the database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
