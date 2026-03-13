//

console.log("OTP Sent Successfully");
setTimeout(() => {
  console.log("RESEND OTP");
}, 10000); //a delay for 10 seconds
let seconds = 10;
setInterval(() => {
  seconds--; //for time countdown
  if (seconds > 0 && seconds <= 10) console.log(seconds);
}, 1000);
