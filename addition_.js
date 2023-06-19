function addition(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = i + sum;
  }
  return sum;
}
let number = 6;
let answer = addition(number);
console.log(answer);
