let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    //   alert("I am a promise and I am fullfilled");

    resolve(true);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // alert('I am a promise and I am fullfilled')
    // console.log("I am a promise and I am rejected");
    // resolve(true)
    reject(new Error("I am an error"));
  }, 3000);
});

// console.log(p1,p);
// To get the value
p1.then((value) => {
  console.log(value);
});
p2.then((value)=>{
    console.log(value);
})

// To catch the error
// p2.catch((error) => {
//   console.log("some error occured in p2");
// });

// p2.then((error) => {
//     console.log(error);
//   });
// let promise = new Promise(resolve => {
//     setTimeout(() => resolve('Done'), 1000)
//   })
  
//   promise.then(alert)
//   promise.catch(alert)
//   // promise.finally(()=>{})