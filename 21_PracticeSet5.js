// problem-1

// solution harry bhai
let arr = [1,2,3,4,5,6,7,83]
let a = prompt('enter number : ')
a = Number.parseInt(a)
arr.push(a)
console.log(arr);

let numArray = []
while(true){
    let n = prompt('Enter the number : ')
    numArray.push(n)
    console.log(numArray);
}

// problem-2
// solution harry bhai
let newarr = [1,2]
do{
    a  = prompt('enter the number : ')
    a = Number.parseInt(a)
    newarr.push(a)
}while(a!=0)
console.log(newarr);

let numArrayy = []
while(true){
    let n = prompt('Enter the number : ')
    if(n==0){
        break;
    }
    numArray.push(n)
    console.log(numArrayy);
}

// problem-3
// solution harry bhai
// let arr=[1,2,2,26,56,43,45,4050,60,80]
// let nn = arr.filter((x)=>{
//     return x%10==0;
// })
// console.log(nn);


// let divbytwo = [2,3,4,6,8,98,88,3,23,22,26]
// let even = divbytwo.filter((value)=>{
//     return value%2==0;
// })
// console.log(even);

// Problem-4
// solution harry bhai
// let sqaure = [2,3,4,6,8,98,88,3,23,22,26,670]
// let sq = sqaure.map((x)=>{
//     return x*x;
// })
// console.log(sq);


// let squarekaro = [2,3,4,6,8,98,88,3,23,22,26]
// let sqkrdiya = squarekaro.filter((value)=>{
//     return value*value;
// })
// console.log(sqkrdiya);

// problem-5
// harry bhai solution
let arrrr = [1,2,3,45,6,7,8,8]
let nnnn = arrrr.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(nnnn);