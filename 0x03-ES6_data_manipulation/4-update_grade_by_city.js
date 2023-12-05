export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((originalStudent) => {
      const student = { ...originalStudent };
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      // If a grade is found, update the student's grade; otherwise, set it to 'N/A'
      student.grade = gradeObject ? gradeObject.grade : 'N/A';
      return student;
    });
}
