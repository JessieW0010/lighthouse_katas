var prompt = require('prompt-sync')();

let randomNum = Math.floor(Math.random()*5);    //number from 0 to 5
let correct = false;
let guesses = [];
let attempts = 0;

while (correct === false) {
  let answer = prompt("Guess a number from 0 to 5: ");
  attempts++;
  
  if (answer == randomNum) {
    console.log(`You guessed it! The number is ${randomNum} and you've had ${attempts} attempts!`);
    correct = true;
  } else {
    if (guesses.indexOf(answer) !== -1 && guesses.length !== 0) {
      console.log(`You've already guessed that!`);
    } else if (answer < randomNum) {
      console.log(`Your answer is too low.`);
    } else if (answer > randomNum) {
      console.log(`Your answer is too high.`);
    } else if (typeof answer !== "number") {
      console.log(`That's not a number.`);
    } 
  }

  guesses.push(answer);

}

