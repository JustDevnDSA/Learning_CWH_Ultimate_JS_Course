let arr = [45,23,22]
// MAP METHOD
let a = arr.map((value,index,array)=>{ //returns a new array with sone changes in the array
    console.log(value,index,array);
    return value+index //returning a new array
})
console.log(a);
console.log(arr);

// FILTER METHOD
let arr2 = [45,44,22,34,43,4,5,0]
let a2 = arr2.filter((value)=>{ //also returns a new array with the condition given used for applying any condition and filter it out form the given array and most importantly it does not change the original array
    return value<25;
})
console.log(a2);
console.log(arr2);


// REDUCE METHOD
let arr3 = [1,2,3,4,5,5,9]
let a3 = arr3.reduce((h1,h2)=>{  //again also returns a new array and doesnt change the original array and and and reduces the array to a single value as the condition applied
    return h1+h2
})
console.log(a3);