{
  //let ka block level scope hota hai to bhar a nhi print hoga
  // let a = 8;
  //ye print ho jaega is scope ke bahar bhi as ye var hai
  // var a = 8
}
// console.log(a);

let p = 1000;
function ax() {
  let a = 8;
  console.log(a);

  //   yha pr bhi p print ho jaega
  console.log(p);
}

//ye to print ho jaega pr
ax();

//ye nhi print hoga as a funtiion scoped hai
// console.log(a);

//ye yha bhi print hoga
console.log(p);

//matlb hai ki function ke bhar define kroge to vo function ke andr bhi chalega and bhar to oviously chalgea but but but agar function ke andr define kroge to wo nhi chalega function ke bahar that's it and for more clarity watch harry bhai video or read notes of harry bhai