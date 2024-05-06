//Array methods part1

let num = [12,2,3,5,67]
//converting to string
let b= num.toString()
console.log(b);
console.log(typeof b);

let c = num.join("__") //join elemets with joiner and returns a string
console.log(c);
console.log(typeof c);

//pop method -> remove elem from last and chnages the same array and dont return a new array
let r = num.pop()
console.log(r); //returns the popped element        
console.log(num);

//push returns the new array length
let k = num.push(56)
console.log(num,k);

let mm = num.shift() //modify the original array and remove the element from the start of the array
console.log(mm);
console.log(num);

let nn = num.unshift(78) //add th ekement in beginning of the array
console.log(num);//modifies the original array

//pop->remove from end
//shift -->remove from start