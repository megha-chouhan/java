// 14. Write a program in javascript using function to display the pattern like right angle triangle using an asterisk.

function displayTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
displayTriangle(5);
