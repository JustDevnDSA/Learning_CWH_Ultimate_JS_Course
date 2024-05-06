// CHAINING ---> SERIES PROCESSa and ek ke baad ek ke baad ek ke baad ek ke baad ek......
// HANDLERS --->PARALLEL PROCESS and runs independently in the code     

let p1 = new Promise((resolve, reject) => {
  alert("hey i am not resolved !");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

p1.then(() => {
  console.log("Hurrayyyy");
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(4)
    },4000)
  })
}).then((value)=>{
    console.log(value);
})

p1.then(() => {
  console.log("This promise is now resolved");
});

p1.then(() => {
  console.log("Hurrayyyy");
});
