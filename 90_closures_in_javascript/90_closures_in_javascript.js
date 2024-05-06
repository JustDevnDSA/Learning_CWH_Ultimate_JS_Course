// message = "Good Global";
// function hello1() {
//   message = "Good Morning";

//   // let message = "Good Afternoon";

//   console.log("Hello 1 " + message);

//   //   console.log(message);
//   let c = function hello2() {
//     console.log("I am c " + message);
//   };
//   return c;
// }

// c = hello1();
// c();

// EXAMPLE-2
// function init() {
//   var name = "Mozilla"; //name is the local variable created by init
//   console.log("Above");
//   function displayName() {
//     // displayname() is the inner function,a closure
//     console.log(name); //use variable declared in a parent fucntion
//   }
//   name = "Harry";
//   console.log("Below");
//   return displayName;
// }
// let x = init();
// x();

// EXAMPLE-3
// function returnfunc() {
//   const p = () => {
//     let a = 1;
//     console.log(a);
//     const q = () => {
//     //   let a = 2;
//       console.log(a);
//       const r = () => {
//         // let a = 3;
//         console.log(a);
//       };
//       r();
//     };
//     a = 999
//     q();
//   };
//   return p
// }

// let zzzz = returnfunc()
// zzzz()

// ANOTHER EXAMPLE FROM GPT
function outerFunction() {
  var outerVariable = "I'm in the outer function!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction(); // Call outerFunction and store the returned inner function in the variable 'closure'
closure(); // Call the inner function, which still has access to the 'outerVariable' from its parent function
