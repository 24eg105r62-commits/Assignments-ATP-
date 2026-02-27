import {
  validateTitle,
  validatePriority,
  validateDueDate,
} from "./validator.js";
let arr = [];
function addtask(title, priority, DueDate) {
  if (
    validateTitle(title) &&
    validatePriority(priority) &&
    validateDueDate(DueDate)
  ) {
    arr.push({ title, priority, DueDate });
    return "Success";
  }
  return "Error";
}
function getalltasks() {
  return arr;
}
function completetask(title) {
  arr.map((task) => {
    if (task.title === title) {
      task.mark = "completed";
    }
  });
}
export { arr, addtask, getalltasks, completetask };
