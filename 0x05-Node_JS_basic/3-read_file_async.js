const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const fileContents = await fs.readFile(path, 'utf-8');
    const lines = fileContents.split('\n').filter((line) => line.trim() !== '');

    const totalStudents = lines.length;
    const fieldCounts = {};
    const fieldLists = {};

    for (const line of lines) {
      if (line) {
        const [firstname, , , field] = line.split(',');

        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
        fieldLists[field] = fieldLists[field] || [];
        fieldLists[field].push(firstname);
      }
    }

    console.log(`Number of students: ${totalStudents - 1}`);

    for (const [key, value] of Object.entries(fieldCounts)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${fieldLists[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { countStudents };
