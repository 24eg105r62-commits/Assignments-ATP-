const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

//Tasks:
// 1. filter() employees from IT department
let ITdept = employees.filter((candid) => {
  if (candid.department === "IT") {
    return candid;
  }
});
console.log(ITdept);
//  2. map() to add:
//netSalary = salary + 10% bonus
employees.map(
  (candid) => (candid.netSalary = candid.salary + 0.01 * candid.salary),
);
console.log(employees);

//3. reduce() to calculate total salary payout
let totalsalary = employees.reduce((acc, candid) => acc + candid.netSalary, 0);
console.log(totalsalary);
// 4. find() employee with salary 30000
let emp1 = employees.find((candid) => {
  if (candid.salary === 30000) return candid;
});
console.log(emp1);
// 5. findIndex() of employee "Neha"
let emp2 = employees.findIndex((candid) => candid.name === "Neha");
console.log(emp2);
