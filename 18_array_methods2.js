// // ARRAY METHODS PART-2 

// let num = [1,2,3,4,5,6,7,8,9]
// // console.log(num.length);
// // delete num[0] //will not effect the length of the array
// // console.log(num.length);

// // concat method
// let num2 = [23,45,67,22,13]
// let num3 = [23,45,67,22,13]
// let newArray = num.concat(num2,num3)
// // console.log(newArray); //returns a new array and doesnot change exixting array
// // console.log(num); 
// // console.log(num2);

// // sort method
// let compare = (a,b) =>{
//     return a-b
// }
// let compare2 = (a,b) =>{
//     return b-a
// }
// let sortt = [23,44,1,23,12,22,222,3]
// sortt.sort(compare) //->will modify the orginal array but but but butttt it sort as a string and sort by first letter and like cip rule of isomerism
// console.log(sortt);

// sortt.sort(compare2) //->will modify the orginal array but but but butttt it sort as a string and sort by first letter and like cip rule of isomerism
// sortt.reverse() //reverses the output
// console.log(sortt);

// SPLICE METHOD
// let num = [551,22,3,14,56,666,454,23]
// console.log(num.length);
// console.log(num);
// let deletedValue = num.splice(2,3,69,69,69,69,69,69) //changes the original array and return the deleted values of array
// //         start kro , kitna element htana hai , kya2 add krna hai arrray mein
// console.log(deletedValue);
// console.log(num.length);
// console.log(num);

// slice method
let numm = [12,33,42,1,23,44,43,21,232,1334,22123,3422,4434,2222]
let newnumm = numm.slice(3)//jo number diya hai us index se start ho kr end tk jaega and if  2 index diya hai tb start se end tk ke elem ko alag kr ke return krega and new array return krega and original array ko modify ya change nhi krega 
 //will not modify the original array
console.log(newnumm);
console.log(numm);