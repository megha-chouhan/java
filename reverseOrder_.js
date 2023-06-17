// 13. Write a program in javascript using function to display the number in reverse order.
function displayNumberInReverse(number) {
  let reverse = "";
  const numberString = number.toString();
  for (let i = numberString.length - 1; i >= 0; i--) {
    reverse += numberString[i];
  }
  console.log("The number in reverse order is: " + reverse);
}

const inputNumber = 12345;
displayNumberInReverse(inputNumber);
