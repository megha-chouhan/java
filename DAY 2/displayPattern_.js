// 23. Write a program in javascript using function to display the pattern using digits with left justified and the highest columns appears in first row in descending order.
function displayPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j.toString() + " ";
    }
    console.log(row);
  }
}

displayPattern(5);
