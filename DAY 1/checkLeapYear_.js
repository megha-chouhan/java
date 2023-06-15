// /Write a javascript program using function to check whether a year is leap year or not./ /
function leapYear(num) {
  if (num % 4 == 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
}

let answer = leapYear(2012);
console.log("answer :- ", answer);
