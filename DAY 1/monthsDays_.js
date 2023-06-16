// 12. Write a javascript program using function to input month number and print number of days in that month.

function monthDays(n) {
  if (
    n == 1 ||
    n == 3 ||
    n == 5 ||
    n == 7 ||
    n == 8 ||
    n == 10 ||
    n == 11 ||
    n == 12
  ) {
    return "31 days";
  } else if (n == 4 || n == 6 || n == 9) {
    return "30 days";
  } else if (n == 2) {
    return "28 days";
  } else {
    return "error";
  }
}
let answer = monthDays(2);
console.log("number of days = ", answer);
