// typeOfTriangle

const side1 = 7, side2 = 7, side3 = 7

if (side1===side2 && side2===side3){
    console.log ('Equilateral Triangle')
}else if (side1===side2 || side1===side3 || side2===side3){
    console.log ('Isosceles Triangle')
}else {
    console.log ('Scalene Triangle')
}
