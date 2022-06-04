var min = 1;
var max = 2;
var chances = 0;
let maxChances = 4;
let points = 0;



function getRndInteger() {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function start() {
  console.log(">>>>>>Welcome To Number Guessing Game<<<<<<");
  console.log("stage "+ min);
  console.log("You have 5 chances");
  
  var username = (prompt("Enter Your Name :- "));
  randomNumber = getRndInteger();
  
  for(chances; ; chances += 1) {
    var user_number = parseInt(prompt("Hi " + username + ", Guess the randomly generated number from " + min + " to " + max + " "));
    
    if (user_number == randomNumber) {
      console.log("-> Hurray! You got it in " + (chances + 1) + " step" + (chances > 1 ? 's' : '') + "!");
      points += 1;
      
      console.log("Welcome to stage "+ max);
    }

    else if (user_number != randomNumber && chances == maxChances) {
      console.log("-> Phew! You lost the game. You are out of chances");
      break
    }
      
    else {
      console.log("-> Try again")
    }
  }
}
start();

