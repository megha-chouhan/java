// /5. Write a javascript program using function to check whether a number is even or odd.

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

let answer = checkEvenOdd(0);
console.log("answer = ", answer);
