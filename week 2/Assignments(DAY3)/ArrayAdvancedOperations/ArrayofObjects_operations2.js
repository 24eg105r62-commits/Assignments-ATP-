/**
 * Purpose: Performs advanced array operations on a collection of student objects.
 * Key Variables:
 * - students: Array of student objects with id, name, and marks.
 * Logic Flow:
 * - Uses filter() to identify students who passed.
 * - Uses map() to assign letter grades based on marks.
 * - Uses reduce() to calculate average marks.
 * - Uses find() and findIndex() to locate specific students.
 */
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

// 1. filter() students who passed (marks ≥ 40)
let pass = students.filter((student) => student.marks >= 40);
console.log("Passed Students:", pass);

// 2. map() to add a grade field
students.map((stu) => {
  if (stu.marks >= 90) {
    stu.grade = "A";
  } else if (stu.marks >= 75) {
    stu.grade = "B";
  } else if (stu.marks >= 60) {
    stu.grade = "C";
  } else {
    stu.grade = "D";
  }
});
console.log("Students with Grades:", students);

// 3. reduce() to calculate total marks then calculate average
let totalMarks = students.reduce((acc, ele) => acc + ele.marks, 0);
let avg = totalMarks / students.length;
console.log("Average Marks:", avg);

// 4. find() the student who scored 92
let scorer92 = students.find((stu) => stu.marks === 92);
console.log("Student with 92 marks:", scorer92);

// 5. findIndex() of student "Kiran"
let kiranIndex = students.findIndex((stu) => stu.name === "Kiran");
console.log("Index of Kiran:", kiranIndex);
