//
function submit(a = 1) {
  if (a === 1) {
    console.log("Exam submitted");
    return true;
  }
  return false;
}
if (submit(1)) {
  setTimeout(() => {
    console.log("Evaluating answers…");
  }, 2000);
  setTimeout(() => {
    console.log("Result: Pass");
  }, 4000);
}
