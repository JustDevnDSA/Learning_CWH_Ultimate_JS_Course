// GUESS THE NUMBER GAME
const randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 0;
do{
    guessedNumber = prompt("Guess the Number : ")
    chances++;
    if(guessedNumber>randomNumber){
        console.log('Too High');
    }
    if(guessedNumber<randomNumber){
        console.log('Too Low');
    }
}while(guessedNumber != randomNumber)

console.log("The random number is "+ randomNumber);
console.log('Your score is '+(100-chances));

console.log("Thank You For Playing");
