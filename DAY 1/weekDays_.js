// /Write a javascript program using function to input week number and print week day.
function weekDay(num) {
  if (num == 1) {
    return "monday";
  } else if (num == 2) {
    return "tuesday";
  } else if (num == 3) {
    return "wenesday";
  } else if (num == 4) {
    return "thursday";
  } else if (num == 5) {
    return "friday";
  } else if (num == 6) {
    return "saturday";
  } else if (num == 7) {
    return "sunday";
  } else {
    return "none";
  }
}
let answer = weekDay(9);
console.log("day :- ", answer);
