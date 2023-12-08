import { Cpp, Java, React } from './subjects';

// Create constants for subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create a Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'Jane',
  lastName: 'Shiru',
  experienceTeachingC: 10,
};

// Log information for Cpp subject
console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log information for Java subject
console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log information for React subject
console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
