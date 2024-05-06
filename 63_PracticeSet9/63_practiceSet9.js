// TOUGH CHAPTER AND TOUGH PRACTICE SET FOR BEGINERS AND FIRST TIMERS SO TRY TO GRASP THINGS SLOWLY AND MORE FORWARD YOU WILL GET TO KNOW ABOUT THIS THESE THIGS MORE IN FURTHER PROJECTS AND YOU WILL BECOME MASTER BUT AS OF NOW JUST MOVE FORWARD AND JUST REVISE THE PREVIOUS TOPICS REGULARLY AND MORE FORWARD IN COURSE AND LIFE BOTH

// EASY CHAPTER HAI SAMAJH MEIN AA GYA HAI BUT BY THE TIME PROJECTS KE SAATH SOLID HO JAAEGA YE TOPIC 


//1. Load a javascript file in browser using promises and proceed futther
// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(src + " done success !");
//     };
//     document.head.append(script);
//   });
// };
// Problem - 1
// let a = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// );
// a.then((value)=>{
//     console.log(value);
// })

// Problem - 2
// const mainx = async () => {
//   console.log(new Date().getMilliseconds());
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(new Date().getMilliseconds());
//   console.log(a);
// };

// mainx();

// Problem - 3
// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log('This error has been handled !');
//   }
// };

// a();

// Problem-4

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
};

const run = async ()=>{
    console.time('run');
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1aa2a3 = await Promise.all([a1,a2,a3])
    console.log(a1aa2a3);
    // console.log(a1,a2,a3);
    console.timeEnd('run');

}

run()