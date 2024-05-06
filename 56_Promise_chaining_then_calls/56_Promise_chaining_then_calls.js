// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
// //   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promsie 2");
//     }, 2000);
//     // resolve("Promsie 2");
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("We are done !");
//     return 2;
//   })
//   .then((value) => {
//     setTimeout(() => {
//       console.log("We are pakka done");
//     }, 2000);
//     // console.log('We are pakka done');
//     // console.log(value);
//   });

// LOADSCRIPT FUNCTION(FAILED need improvemet as of now and requires more practice and concept clarity on this topic but as of now just move forward and learn new topics and you will get this topic slowly and till then learn further topics and practice that it )
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
        resolve(1)
    };
    script.onerror = ()=>{reject(0)}
  });
};

let p1 = loadScript('https://google.com')
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log('We are having problem loading this script');
})