// 20. Write a program in javascript using function to display the pattern like a pyramid using asterisk and each row contain an odd number of asterisks.

function displayPyramid(rows) {
  let spaces = rows - 1;
  let asterisks = 1;

  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    for (let k = 1; k <= asterisks; k++) {
      row += "*";
    }
    console.log(row);
    spaces--;
    asterisks += 2;
  }
}

displayPyramid(5);
