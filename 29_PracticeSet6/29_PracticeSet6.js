// document.body.style.background = 'gray'
// problem-1

// let age = prompt('Enter your age : ')
// age = Number.parseInt(age)

// if(age>18){
//     alert('You can drive !')
// }
// else if(age>0 && age<18){
//     alert('You can not drive !')
// }
// else{
//     alert("Invalid age !")
// }


// PROBLEM_2
// let age = prompt("Enter your age : ");
// age = Number.parseInt(age);

// if (age > 18) {
//   alert("You can drive !");
//   let ask = confirm("want to see the prompt again ?");
//   if (ask) {
//     alert("You can drive !");
//   }
// } else if (age > 0 && age < 18) {
//   alert("You can not drive !");
//   let ask = confirm("want to see the prompt again ?");
//   if (ask) {
//     alert("You can not drive !");
//   }
// } else {
//   alert("Invalid age !");
// //   problem-3
//   console.error('invalid age')
//   let ask = confirm("want to see the prompt again ?");
//   if (ask) {
//     alert("Invalid age !");
//   }
// }

// problem-4
// let num = Number.parseInt(prompt('Enter the number : '))
// if(num>4){
//     location.href='https://google.com'
// }

// problme-5
let color = prompt('enter the color name : ')
document.body.style.background = color

// HARRY BHAI SOLUTIONS
let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}