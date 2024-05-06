// Problem-1 
/* const a = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
  let text = await a("Hello");
  console.log(text);

  text = await a("World");
  console.log(text);
})(); */



// PROBLEM-2
// function sum(a,b,c) {
//     return a+b+c
// }

// let x = [1,2,3]
// console.log(sum(...x));


//PROBLEM-3
/* const a = (text,n=2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000*n);
  });
};

(async () => {
  let text = await a("i am resolving after 1 seconds",1);
  console.log(text);

  text = await a("i am resolving after 4 secinds",4);
  console.log(text);
})(); */

//PROBLEM-4
function simple(p,r,t){
    return (p*r*t)/100
}
console.log(simple(100,5,1) + ' Money you will get is : ' , simple(100,5,1)+100);