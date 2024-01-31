const { readFile } = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await readFile(filePath, 'utf-8');
    const students = {};
    const lines = data.split('\n');

    lines.forEach((line) => {
      if (line.trim() !== '') {
        const [firstname, , , field] = line.split(',');
        if (field in students) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }
      }
    });

    return students;
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = readDatabase;
