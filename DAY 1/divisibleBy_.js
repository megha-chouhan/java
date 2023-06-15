// 1. Write a javascript program using function to check whether a number is divisible by 5 and 11 or not.
function checkDivisibility(num) {
  if (num % 5 == 0) {
    return `${num} is divisible by 5`;
  } else if (num % 11 == 0) {
    return `${num} is divisible by 11`;
  } else {
    return "not divisible";
  }
}
let number = 78;
let answer = checkDivisibility(number);
console.log("answer = ", answer);
