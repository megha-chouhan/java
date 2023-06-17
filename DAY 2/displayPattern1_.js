// / 21. Write a program in javascript using function to print a pattern like highest numbers of columns appear in first row. Go
function displayPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = i; j <= rows; j++) {
      row += j.toString();
    }
    console.log(row);
  }
}

displayPattern(5);

function displayPattern(row) {
  for (let i = 1; i <= row; i++) {
    let row = "";
    for (let j = 1; j <= rows; j++) {
      row += j.toString();
    }
    console.log(row);
  }
}
