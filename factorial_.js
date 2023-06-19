function multiplication(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = i * sum;
  }
  return sum;
}
let number = 6;
let answer = multiplication(number);
console.log(answer);
