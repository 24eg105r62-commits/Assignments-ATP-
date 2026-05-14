/**
 * Purpose: Simulates an OTP (One-Time Password) countdown and resend availability.
 * Key Variables:
 * - seconds: The starting point for the countdown timer.
 * Logic Flow:
 * - Logs an initial success message for OTP sending.
 * - Uses setTimeout to log "RESEND OTP" after 10 seconds.
 * - Uses setInterval to decrement the countdown every second and log it to the console.
 */
console.log("OTP Sent Successfully");

// Simulate the delay for enabling the 'Resend OTP' option
setTimeout(() => {
  console.log("RESEND OTP");
}, 10000); // 10-second delay

let seconds = 10;
// Timer countdown from 10 to 1
const timer = setInterval(() => {
  seconds--;
  if (seconds > 0) {
    console.log(seconds);
  } else {
    clearInterval(timer); // Stop the interval when countdown reaches 0
  }
}, 1000);
