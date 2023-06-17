// / 16. Write a program in javascript using function to make such a pattern like right angle triangle using number which will repeat the number for that row.
function displayTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i.toString();
    }
    console.log(row);
  }
}

displayTriangle(5);
