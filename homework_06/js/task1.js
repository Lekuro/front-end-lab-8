var side1 = parseFloat(prompt("Please enter first side of your triangle", ""));
var side2 = parseFloat(prompt("Please enter second side of your triangle", ""));
var side3 = parseFloat(prompt("Please enter third side of your triangle", ""));
var square, p;
if (side1 > 0 && side2 > 0 && side3 > 0) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    p = (side1 + side2 + side3) / 2;
    square = parseFloat(
      Math.sqrt(p * (p - side1) * (p - side2) * (p - side3)).toFixed(2)
    );
    //---------Right triangle---------------------------
    if (
      side1 * side1 + side2 * side2 == side3 * side3 ||
      side1 * side1 + side3 * side3 == side2 * side2 ||
      side2 * side2 + side3 * side3 == side1 * side1
    ) {
      console.log("Type of triangle is right and square is ", square);
    } else {
      //---------Equilateral---------------------------------
      if (side1 == side2 && side2 == side3 && side1 == side3) {
        console.log("Type of triangle is equilateral and square is ", square);
      } else {
        //---------Isosceles triangle---------------------------
        if (side1 == side2 || side2 == side3 || side1 == side3) {
          console.log("Type of triangle is isosceles and square is ", square);
        } else {
          //---------Scalene triangle---------------------------
          console.log("Type of triangle is scalene and square is ", square);
        }
      }
    }
  } else {
    console.log("Incorrect data!");
  }
} else {
  console.log("Incorrect data!");
}

