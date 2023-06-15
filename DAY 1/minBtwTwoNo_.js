function minBwTwoNo(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

let number1 = 23;
let number2 = 45;
let answer = minBwTwoNo(number1, number2);
console.log(`min bw ${number1} and ${number2} is - `, answer);
