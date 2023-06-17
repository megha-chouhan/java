// / 22. Write a program in javascript using function to display the pattern using digits with right justified and the highest columns appears in first row.
function displayPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      row += " ";
    }
    for (let k = i; k <= rows; k++) {
      row += k.toString();
    }
    console.log(row);
  }
}

// Example usage:
displayPattern(5);
