// 7. Write a program in javascript using function to print a square pattern with # character.
function printSquarePattern(sideLength) {
  console.log("Print a pattern like square with # character:");

  for (let i = 0; i < sideLength; i++) {
    let row = "";
    for (let j = 0; j < sideLength; j++) {
      row += "# ";
    }
    console.log(row);
  }
}

const inputSideLength = 4;
printSquarePattern(inputSideLength);
