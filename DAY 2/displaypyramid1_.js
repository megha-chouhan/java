// / // 19. Write a program in javascript using function to make such a pattern like a pyramid using number and a number will repeat for a row.
function displayPyramid(rows) {
  let spaces = rows - 1;
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += i.toString() + " ";
    }
    console.log(row);
    spaces--;
  }
}

displayPyramid(5);
