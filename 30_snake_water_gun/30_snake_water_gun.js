
//CONTAINS ERROR PLEASE HOLD BY AND WAIT FOR HARRY BHAI SOLUTION AND THEN FIX THIS AND PLAY THE GAME 


// use javascript to create a game of snake,water and gun . the game should ask you to enter S,W,G.the computer should be able to randomly genearte S,W,G and declare win ot lose using alert . use confirm and prompt whenever required
/**
 logic:::::
 s / w = s
 s / g = g
 w / g = w
 */
const getRandomNumber = () => {
  const letter = ["s", "w", "g"];
  const randomIndex = Math.floor(Math.random() * letter.length);
  const randomLetter = letter[randomIndex];
  return randomLetter;
};

//taking user imput
let userInput = prompt("Sanke(S) , Water(W) or Gun(G) : ").toLowerCase();

//getting random letter from computer
const computerInput = getRandomNumber();
// console.log(computerInput);

//logic of game
// // const logic = (computerInput) => {
//all cases of user win
if (userInput == "s" && computerInput == "w") {
  console.log("You Won !");
  alert("You Won !");
} else if (userInput == "g" && computerInput == "s") {
  console.log("You Won !");
  alert("You Won !");
} else if (userInput == "w" && computerInput == "g") {
  console.log("You Won !");
  alert("You Won !");
}
//all cases of computer winning
else if (userInput == "w" && computerInput == "s") {
  console.log("Computer Won !");
  alert("Computer Won");
} else if (userInput == "s" && computerInput == "g") {
  console.log("Computer Won !");
  alert("Computer Won");
} else if (userInput == "g" && computerInput == "w") {
  console.log("Computer Won !");
  alert("Computer Won");
} else {
  alert("Invalid Input !");
}
// // };

// //IF YOU WANT TO PLAY FOR 10 TIMES
// for (let i = 0; i < 10; i++) {
//   //logic of game
//   // const logic = (computerInput) => {
//   //all cases of user win
//   if (userInput == "s" && computerInput == "w") {
//     console.log("You Won !");
//     alert("You Won !");
//   } else if (userInput == "g" && computerInput == "s") {
//     console.log("You Won !");
//     alert("You Won !");
//   } else if (userInput == "w" && computerInput == "g") {
//     console.log("You Won !");
//     alert("You Won !");
//   }
//   //all cases of computer winning
//   else if (userInput == "w" && computerInput == "s") {
//     console.log("Computer Won !");
//     alert("Computer Won");
//   } else if (userInput == "s" && computerInput == "g") {
//     console.log("Computer Won !");
//     alert("Computer Won");
//   } else if (userInput == "g" && computerInput == "w") {
//     console.log("Computer Won !");
//     alert("Computer Won");
//   } else {
//     alert("Invalid Input !");
//   }
//   // };
// }
