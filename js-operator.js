let firstName = "Folarin";
let lastName =  "Alade";
let country ="Nigeria";
let city ="Lagos";
let age = 28;
let isMarried =false;

console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(isMarried));

let tenstring ='10';
let tenNum =10;
console.log(typeof(tenstring));
console.log(typeof(tenNum));

let gravity = 9.8
let gravInt = parseInt(gravity);
console.log(gravInt);

let currentDate = new Date();
let year = currentDate.getFullYear();
console.log(year);
let hour = currentDate.getHours();
console.log(hour);
let month = currentDate.getMonth();
console.log(month);
let minutes = currentDate.getMinutes();
console.log(minutes);
let day = currentDate.getDay();
console.log(day);

let triangleBase = parseInt(prompt("Enter the base"));
let triangleHeight = parseInt(prompt("Enter the Height"));
let triangleArea = 0.5 * triangleBase* triangleHeight;
alert(triangleArea);

let triangeSideA = parseInt(prompt("Enter side a"));
let triangleSideB =parseInt(prompt("Enter side b"));
let triangleSideC =parseInt(prompt("Enter side c"));
let trianglePerimeter = triangeSideA + triangleSideB + triangleSideC;
alert(trianglePerimeter);

let rectangleLength = parseInt(prompt("Enter length"));
let rectangleBreadth = parseInt(prompt("Enter breadth"));
let rectangleArea = rectangleLength * rectangleBreadth;
let rectanglePerimeter = 2 * (rectangleLength + rectangleBreadth);
alert(rectangleArea);
alert(rectanglePerimeter);

let radius = parseInt(prompt("Enter radius"));
let pi = 3.14
let circumference = 2 * pi * radius;
let circleArea = pi * radius * radius;
alert(circumference);
alert(circleArea);

let x1 =2;
let y1 =2;
let x2 =6;
let y2 = 10;
let slope =(y2-y1)/(x2-x1);
console.log(slope);

let x = parseInt(prompt("Enter a value for x"));
let y = x*x + (6*x) + 9;
console.log(y);

let hoursWorked = parseInt(prompt("Enter hours worked"));
let ratePerHour = parseInt(prompt("Enter rates per hour"));
let totalPay = hoursWorked*ratePerHour;
console.log(totalPay);


let myName = Israel;
let nameCharacter = myName.length;

if(nameCharacter <= 7){
    console.log("Name is normal");
}
else{
    console.log("Name is too long");
}

let mainName ="John";
let mainSurname = "Alade";
if(mainName.length > mainSurname.length){
    console.log("My first name is greater")
}
else{
    console.log("My family name has more characters than my first name");
}

let myAge = 25;
let johnAge = 28;

if (johnAge > myAge){
    console.log("John is older");
}
else{
    console.log("Flo is older");
}

let userAge = parseInt(prompt("Enter User Age"));
if (userAge === 18){
    console.log("Can drink");
}
else if (userAge > 18){
    console.log("Can most definitely drink");
}
else{
    console.log("DO NOT DRINK");
}

let livableYears = parseInt(prompt("Enter number of years to live"));
let yearsInSeconds = livableYears*365*24*60*60;
console.log("The number of seconds you can live is", yearsInSeconds);



var date = new Date();


function dateFormater(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return day + separator + month + separator + year;
}

console.log("dd-mm-yyyy => " + dateFormater(date, '-'));



let a = 15;
let b = 17;
let c = 18;
let squarePart = Math.sqrt(Math.pow(b,2) - 4*a*c);
let denominator = 2*a
let rootA = (-b + squarePart)/denominator;
let rootB = (-b - squarePart)/denominator;
console.log(rootA);
console.log(rootB);














