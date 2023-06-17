//Write a javascript program using function to input angles of a triangle and check whether triangle is valid or not.

function checkAngleOfTrian(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 == 180) {
    return "Triangle is valid.";
  } else {
    return "Triangle is not valid.";
  }
}
let a = 180;
let b = 0;
let c = 0;
let answer = checkAngleOfTrian(a, b, c);
console.log("angle of a triangles are :- ", answer);
