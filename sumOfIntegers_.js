// 12. Write a program in javascript using function to find the number and sum of all integer between 100 and 200 which are divisible by 9.

function findNumbersAndSum() {
  let sum = 0;
  let numbers = "";

  for (let i = 100; i <= 200; i++) {
    if (i % 9 === 0) {
      numbers += i + " ";
      sum += i;
    }
  }

  console.log("Numbers between 100 and 200, divisible by 9:");
  console.log(numbers);
  console.log("The sum:", sum);
}
findNumbersAndSum();
