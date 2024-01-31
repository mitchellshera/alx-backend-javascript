const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

// Function to count students and generate the output string
async function countStudents(fileName) {
  try {
    // Read the file asynchronously
    const data = await readFile(fileName, 'utf-8');
    const students = {};
    const fields = {};
    let length = 0;

    // Split the file data into lines
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].split(',');

        // Use ternary operators for concise assignments
        students[field[3]] = students[field[3]] ? [...students[field[3]], field[0]] : [field[0]];
        fields[field[3]] = fields[field[3]] ? fields[field[3]] + 1 : 1;
      }
    }

    // Generate the output string
    const totalstudents = length - 1;
    let output = `Number of students: ${totalstudents}\n`;
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. `;
        output += `List: ${students[key].join(', ')}\n`;
      }
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create an HTTP server
const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  // Handle requests based on the URL
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  }

  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      // Call countStudents function and await the result
      const output = await countStudents(process.argv[2].toString());
      response.end(output);
    } catch (error) {
      response.statusCode = 404;
      response.end('Cannot load the database');
    }
  }
});

// Make the server listen on the specified port and hostname
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app variable
module.exports = app;
