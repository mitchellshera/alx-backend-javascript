const readDatabase = require('../utils');

// Function declaration for generateResponseText
function generateResponseText(data) {
  let responseText = 'This is the list of our students\n';

  // Iterate over fields in alphabetical order
  Object.keys(data).sort().forEach((field) => {
    const studentsList = data[field].join(', ');
    responseText += `Number of students in ${field}: ${data[field].length}. List: ${studentsList}\n`;
  });

  return responseText;
}

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await readDatabase(process.argv[2].toString());
      const responseText = generateResponseText(studentsData);

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const field = req.params.major;

    try {
      const studentsData = await readDatabase(process.argv[2].toString());
      if (!field || (field !== 'CS' && field !== 'SWE')) {
        res.status(400).send('Major parameter must be CS or SWE');
      } else if (!(field in studentsData)) {
        res.status(500).send(`No data available for major: ${field}`);
      } else {
        res.status(200).send(`List: ${studentsData[field].join(', ')}`);
      }
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
