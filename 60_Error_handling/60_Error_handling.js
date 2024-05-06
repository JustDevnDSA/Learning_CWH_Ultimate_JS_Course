setTimeout(() => {
  console.log("Hacking Wifi... Please wait..");
}, 1000);

try {
  //ye sheduled error hai to bahar wala catch kaam nhi krega
  setTimeout(() => {
    // console.log(rahul);
    //synchronus code pr hi kaam krega bhai try catch to be alert boss
    try {
      console.log(rahul);
    } catch (eee) {
      console.log(eee);
    }
  }, 1000);
} catch (error) {
  console.log("Balle balle balelle baleee ...  " + error);
}

setTimeout(() => {
  console.log("Fetching username and passoword.... Please wait...");
}, 2000);

setTimeout(() => {
  console.log("Hackng Rahul Ig id.... Please wait...");
}, 3000);

setTimeout(() => {
  console.log("Hackng done....");
}, 4000);
