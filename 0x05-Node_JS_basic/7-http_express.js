const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf-8');
    const lines = data.split('\n').filter(Boolean); // Filter out empty lines

    const students = {};
    const fields = Object.fromEntries(lines.map(line => {
      const [firstname, , , field] = line.split(',');

      if (!students[field]) students[field] = [firstname];
      else students[field].push(firstname);

      return [field, (fields[field] || 0) + 1];
    }));

    const totalStudents = lines.length - 1;
    let output = `Number of students: ${totalStudents}\n`;

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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const output = await countStudents(process.argv[2].toString());
    response.send(`This is the list of our students\n${output}`);
  } catch (error) {
    response.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
