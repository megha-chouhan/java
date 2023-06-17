// / 24. Write a program in javascript using function to display the pattern like right angle triangle with right justified using digits. Go to the editor
function displayTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = rows - i; j > 0; j--) {
      line += " ";
    }
    for (let k = i; k > 0; k--) {
      line += k;
    }
    console.log(line);
  }
}

const rows = 5;
displayTriangle(rows);
