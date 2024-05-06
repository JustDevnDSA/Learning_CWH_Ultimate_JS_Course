// Today we will learn about functions in javascript
/*
>>>this is complicated so lets seperate this logic and make a function of it
let a = 1;
let b = 2;
let c=3;
console.log("Avg of a and b : " , (a+b)/2);
console.log("Avg of b and c : " , (b+c)/2);
console.log("Avg of c and a : " , (c+a)/2); 
*/

// making a function
function onePlusAvg(x,y){
    // console.log("DONE");
    return Math.round(1+(x+y)/2);
}

// new way to make a function aka arrow function
const sum = (p,q) =>{
    return p+q;
}

const hello = () =>{
    console.log('Hey how are you  i am fine bro');
}
hello();
let s = sum(1,2);
console.log(s);

// invoking or calling above function
let a = 12;
let b = 21;
let c = 33;
console.log("Avg of a and b : " , onePlusAvg(a,b));
console.log("Avg of b and c : " , onePlusAvg(b,c));
console.log("Avg of c and a : " , onePlusAvg(c,a));
