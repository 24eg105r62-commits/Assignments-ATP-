const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

//  1. filter() students who passed (marks ≥ 40)
let pass = students.filter((mark) => mark.marks >= 40);
console.log(pass);
//2. map() to add a grade field
// ≥90 → A
//≥75 → B
//≥60 → C
//else → D
students.map((stu) => {
  if (stu.marks >= 90) {
    stu.grade = "A";
  } else if (stu.marks >= 75 && stu.marks <= 89) {
    stu.grade = "B";
  } else if (stu.grade >= 60 && stu.marks <= 74) {
    stu.grade = "C";
  } else {
    stu.grade = "D";
  }
});
console.log(students);
//reduce() to calculate average marks
let avg = students.reduce((acc, ele) => (acc + ele.marks) / 2, 0);
console.log(avg);
// find() the student who scored 92
let can = students.find((stu) => {
  if (stu.marks === 92) return stu;
});
console.log(can);
// findIndex() of student "Kiran"
let can1 = students.findIndex((stu) => stu.name === "Kiran");
console.log(can1);
