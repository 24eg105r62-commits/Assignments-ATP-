/**
 * Purpose: Simulates an exam portal submission and evaluation process.
 * Key Variables:
 * - a: A flag (defaulted to 1) to indicate submission status.
 * Logic Flow:
 * - 'submit' function checks if the input is 1, logs a submission message, and returns true.
 * - If submitted, it uses setTimeout to simulate delays for "Evaluating answers..." (2s) and "Result: Pass" (4s).
 */
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
