// 11. Write a program in javascript using function to display the n terms of even natural number and their sum.
function displayEvenNumbersAndSum(n) {
  let sum = 0;
  let evenNumbers = "";

  for (let i = 1; i <= n; i++) {
    let evenNumber = 2 * i;
    evenNumbers += evenNumber + " ";
    sum += evenNumber;
  }

  console.log("The even numbers are:", evenNumbers);
  console.log("The Sum of even Natural Numbers upto", n, "terms:", sum);
}

const inputTerms = 111;
displayEvenNumbersAndSum(inputTerms);
