const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const [firstname, , , field] = lines[i].toString().split(',');

        // Use the 'in' operator for checking property existence
        if (field in students) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }

        if (field in fields) {
          fields[field] += 1;
        } else {
          fields[field] = 1;
        }
      }
    }

    const totalstudents = length - 1;
    console.log(`Number of students: ${totalstudents}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
