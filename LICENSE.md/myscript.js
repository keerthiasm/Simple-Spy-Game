var firstName = prompt("Your First Name please: ")
var lastName = prompt("Your Last Name please : ")
var age = prompt("Please enter your age: ")
var height = prompt("Please enter your height in centimeters: ")
var petName= prompt("Please enter your Pet Name: ")
alert("Thanks for providing the information!")

var nameCond  =null;
var ageCond   =null;
var heightCond=null;
var petCond   =null;

if (firstName[0]===lastName[0]) {
  nameCond= true;
}else {
  nameCond = false;
}
if (age>20 && age<40) {
   ageCond =true;
}else {
   ageCond=false;
}
if (height>=160) {
  heightCond =true;
}else {
  heightCond=false;
}
if (petName[petName.length-1]==="u") {
  petName = true;
}else {
  petName = false;
}
if (nameCond&&ageCond&&heightCond&&petName) {
  console.log("WELCOME SPY");
}else {
  console.log("There is nothing to see");
}
