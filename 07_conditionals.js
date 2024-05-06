// Conditional Statements
// let a = prompt("Hey what's your age? : ");
// console.log(typeof a);
// alert("Hey")
// nn bb ss u
// number,null,string,symbol,undefined,boolean,bigint

// let a = prompt("Hey what's your age? : ");
// console.log(typeof a);
// a = Number.parseInt(a)
// console.log(typeof a);
// if(a<0){
//     alert('this is a invalid age');
// }
// else if(a<9){
//     alert('you are a kid and you cannot think of driving')

// }
// else if(a>=9 && a<18){
//     // let rem = 18-a
//     alert('you are a kid and you can think of driving after '+(18-a)+' years')

// }
// else{
//     alert("You can drive and get a driving liscense")
// }
// console.log("DONE SUSSESFULLY");
// console.log("You can" , a<18? "not drive":"drive");
// conditon ? true tb kya : if false tb kya

// HomeWork --- explore switch statement and write a basic programme
// Define a variable to represent the day of the week (1 for Monday, 2 for Tuesday, etc.)
let dayOfWeek = 5;

// Use a switch statement to execute different code based on the day of the week
// switch (dayOfWeek) {
//     case 1:
//         console.log("It's Monday. Time to start the week!");
//         break;
//     case 2:
//         console.log("It's Tuesday. Keep pushing through!");
//         break;
//     case 3:
//         console.log("It's Wednesday. Halfway there!");
//         break;
//     case 4:
//         console.log("It's Thursday. Almost there!");
//         break;
//     case 5:
//         console.log("It's Friday. Time to celebrate!");
//         break;
//     case 6:
//         console.log("It's Saturday. Enjoy your weekend!");
//         break;
//     case 7:
//         console.log("It's Sunday. Relax and recharge!");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }

const numberr = 6;
const check = numberr%2 == 0
switch(check){
    case false:
        console.log("ODD");
        break;
    case true:
        console.log("EVEN");
        break;
    default:
        console.log("ERROR 404 LOL !!");
}