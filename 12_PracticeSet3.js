// Q1
const obj = {
    harry : 98,
    rohan : 70,
    aakash : 7,
    prakash : 99,
}

for(let i = 0 ; i<Object.keys(obj).length;i++){
    console.log('the marks of '+Object.keys(obj)[i]+' are '+ obj[Object.keys(obj)[i]]);

}


// Q2
// solve above using forin loop
// for(a in obj){
//     console.log('marks of '+a+' is '+ obj[a]);
// }

// Q3
// let final  = 10
// while(true){
//     let n = prompt("enter the number : ")
//     n = Number.parseInt(n)
//     if(n==final){
//         break;
//     }
//     console.log('try again');
// }

let cn = 45;
let i;
while(i!=cn){
    i=prompt('enter the number : ');
}
console.log("task succesful");

// Q4
// const meanOfNumber = (a,b,c,d) =>{
//     return (a+b+c+d)/4;
// }
// let mean = meanOfNumber(1,2,5,6)
// console.log(mean);