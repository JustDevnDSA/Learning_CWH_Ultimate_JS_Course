// FOR LOOP WITH ARRAYS

let num = [3,43,55,23,12]

// classical for loop
for (let i = 0 ; i< num.length ; i++){
    console.log(num[i]);
}

//for each loop
num.forEach(element=>{
    console.log(element*element);
})

// Array.from 
let name = 'Harry'
console.log(name); //string hai
let arr = Array.from(name)
console.log(arr); //array bn gya


// for....of loop
for(let i of num){
    console.log(i);
}

//for...in loop
for(let i in num){ //return keys 
    console.log(i);
    console.log(num[i]);
}