const {
  createStudent,
  addStudent,
  addGrade,
  printAllStudents
} = require("./task2.js");

const {
  createTeacher,
  addTeacher,
  assignStudentToTeacher,
  printAllTeachers
} = require("./task3.js");

const s1 = createStudent("Ali", 20);
const s2 = createStudent("Sara", 22);
const s3 = createStudent("Noor", 19);

addStudent(s1);
addStudent(s2);
addStudent(s3);

addGrade(s1, 80);
addGrade(s1, 90);
addGrade(s2, 60);
addGrade(s3, 45);

const t1 = createTeacher("Mr. Ahmed", "Math");
const t2 = createTeacher("Ms. Lina", "Physics");

addTeacher(t1);
addTeacher(t2);

assignStudentToTeacher(t1, s1);
assignStudentToTeacher(t1, s2);
assignStudentToTeacher(t2, s3);

console.log("\n=== All Students ===");
printAllStudents();

console.log("\n=== All Teachers ===");
printAllTeachers();