/**
 * Purpose: Manages employee data using advanced array methods.
 * Key Variables:
 * - employees: Array of employee objects.
 * Logic Flow:
 * - Filters employees by department.
 * - Maps objects to include a calculated net salary with bonus.
 * - Calculates total payout using reduce.
 * - Searches for specific employees by salary and name.
 */
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

// 1. filter() employees from IT department
let ITdept = employees.filter((emp) => emp.department === "IT");
console.log("IT Department Employees:", ITdept);

// 2. map() to add netSalary (salary + 1% bonus as per code logic)
employees.map(
  (emp) => (emp.netSalary = emp.salary + 0.01 * emp.salary),
);
console.log("Employees with Net Salary:", employees);

// 3. reduce() to calculate total salary payout
let totalsalary = employees.reduce((acc, emp) => acc + emp.netSalary, 0);
console.log("Total Payout:", totalsalary);

// 4. find() employee with salary 30000
let emp30k = employees.find((emp) => emp.salary === 30000);
console.log("Employee with 30k salary:", emp30k);

// 5. findIndex() of employee "Neha"
let nehaIndex = employees.findIndex((emp) => emp.name === "Neha");
console.log("Index of Neha:", nehaIndex);
