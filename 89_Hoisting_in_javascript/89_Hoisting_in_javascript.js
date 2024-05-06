// HOISTING IN JAVASCRIPT

// following two lines will run successfully due to javascript hoisiting
// let a;
// console.log(a); // will not print 9
greet();

// function greet() {
//   console.log("Good Morning");
// }
// pr pr pr pr pr moye moye moment below:
// const greet = () => {
//   console.log("Good Morning");

// } //ReferenceError: Cannot access 'greet' before initialization YE WALA ERROR AAEGA

// insme bhi yhi haal hoga  :

//basically arrow function hoist nhi hote const ho ya var ho ya let ho
// var greet = () => {
//     console.log("Good Morning");

//   }
//same yha pr bhi
//   let greet = () => {
//     console.log("Good Morning");

//   }

// var a = 9; //Declaration hoisted to the top but initialization is not
// let a = 9 //ye error aaega : Uncaught ReferenceError: Cannot access 'a' before initialization
// const a= 9 // same will happen with const
console.log(a); // will print 9



/*

******* JAN HIT MEIN JAARI *******

HOISTING IS (TO MANY DEVELOPERS) AN UNKNOWN OR OVERLOOKED BEHAVIOUR OF JAVASCRIPT. IF A DEVELOPER DOES NOT UNDERSTAND HOISTING , PROGRAMS MAY CONTAINS BUGS(ERRORS).
TO AVOID BUGS,ALWAYS DECLARE ALL VARIABLES AT THE BEGINNING OF EVERY SCOPE.
SINCE THIS IS HOW JAVASCRIPT INTERPRETS THE CODE,
IT IS ALWAYS A GOOD RULE

*/