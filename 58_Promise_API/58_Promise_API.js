// PROMISE API

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
    // reject(new Error('I am an error'))
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value 3");
    reject(new Error('error hai'))
  }, 3000);
});

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })


// SOME METHODS OF PROMISES
//getting the values of all relsolve in one go 
// let promise_all = Promise.all([p1, p2, p3]);

// jo bhi resolved hai usi ka value dega
// let promise_all = Promise.allSettled([p1, p2, p3]);

// jo sabse phele resolve hoga pr sbhi resolved hona chiaye
// let promise_all = Promise.race([p1, p2, p3]);

// waits for first resolve to fullfilling read further in notes
// let promise_all = Promise.any([p1, p2, p3]);

// let promise_all = Promise.resolve(6);
let promise_all = Promise.reject(new Error('heyeyeyeyyyy'));


promise_all.then((value) => {
  console.log(value);
});

