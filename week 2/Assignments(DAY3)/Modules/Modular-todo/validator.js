function validateTitle(title) {
  if (!title) {
    return "enter a title";
  } else if (title.length <= 3) {
    return "min 3 char";
  }
  return true;
}
function validatePriority(priority) {
  if (priority === "LOW" || priority === "HIGH" || priority === "MEDIUM") {
    return true;
    // cost priorities=["LOW","HIGH","MEDIUM"]
    //let result=priorities.includes(priority)
  }
  return false;
}
function validateDueDate(date) {
  // let due = new Date(date);
  //let today = new Date();
  //if (today > due) {
  return true;
  //}
  return false;
}
export { validateDueDate, validatePriority, validateTitle };
