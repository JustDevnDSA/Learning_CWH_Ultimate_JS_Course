// nn bb ss u ----> Primitive Datatype
// null,number,boolean,bigint,string,symbol,undefined
let a = null;
let b = 456;
let c= true;
let d = "string"
let e = Symbol("this is symbol")
let f = undefined //no need to say you can also leatit like let f only
let g= BigInt('6656565656')
console.log(a,b,c,d,e,f,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//objects ---> non primitive datatypes
const items = {
    "Harry" : "Teacher",
    "Prakash" : "Student",
    "Shubh" : true,
    "Alka" : undefined,
    "Arav" : 55,
}
console.log(items["Harry"]);
console.log(items["Alka"]);
console.log(items["Arav"]);
console.log(items["Prakash"]);
console.log(items["Shubh"]);