let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(526);
    }, 2000);
  });
};

// let f = async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// };

// f();

// (async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// })()

// console.log(d); //d is not defined

//TESTIGN
// let hello = () =>{
//   console.log('hello bhai');
// }

// hello()

//iife usecase
(() => {
  console.log("hello bhai");
})();
