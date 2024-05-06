let arr = [3, 5, 8, 9, 22, 55, 65, 23];
// let [a, b, c, d, ...rest] = arr;

//No neeed to do thid
// let a = arr[0]
//let b = arr[1]

// console.log(a,b,c,d); //will be the first 2 chars

// let [a, , ,  ...rest] = arr;
// let [a, , b, ...rest] = arr;
// console.log(a, b, c, d, rest);
// console.log(a, b, rest);

// let {a,b} = {a:0,b:0}
// console.log(a,b);

// OR

// const obj = {a:0,b:0}
// const {a,b} = obj
// console.log(a,b);

// SPREAD SYNTAX
//SPREAD OPERATOR

let arr1 = [1, 7, 11];
let obj1 = { ...arr1 };
console.log(obj1); //output: {0: 1, 1: 7, 2: 11}

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}

console.log(sum(...arr1));


let obj2 = {
    name:"Harry",
    company:"company xyz",
    address:"axyxyx"
}

console.log({...obj2});
//changing the values of keys 
console.log({...obj2, name : 'NewName',company:"Youyube"});

//this will print the obj2 object without changing any value
console.log({name : 'NewName',company:"Youyube",...obj2});