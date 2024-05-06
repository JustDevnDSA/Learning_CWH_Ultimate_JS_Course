// for(let i=0;i<34;i++){
//     console.log(i);
// }

// for(let i=5 ;i>4;--i){
//     console.log(i);
// }

// for(let i=0;i<10;i++){
//     console.log(i+1);
// }

//programe to add first n natural numbers
let sum = 0;
// let n = prompt("Enter value of n : ");
let n = 4
n = Number.parseInt(n)
for(let i = 0 ; i<n;i++){
    sum+=i+1;
}
console.log('sum of first '+n+' natural number is '+sum);
// console.log(i);


// FOR-IN loop
// let obj = {
//     harry : 90,
//     subh : 15,
//     navi : 86,
//     ritik : 89,
//     prakash : 99
// }
// for(let a in obj){
//     console.log('marks of '+a+' are '+ obj[a]);
// }

// FOR-OF LOOP
// used in mainly arrays and stringgs or whatever
// for(let b of "Harry"){
//     console.log(b);
// }