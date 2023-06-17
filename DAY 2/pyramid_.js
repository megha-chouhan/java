// 18. Write a program in javascript using function to make such a pattern like a pyramid with an asterisk.
function displayPyramid(rows) {
  let spaces = rows - 1;

  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += " * ";
    }
    console.log(row);
    spaces--;
  }
}
