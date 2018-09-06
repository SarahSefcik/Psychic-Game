// Create an array of the options
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create vars to hold the # of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessCount = 9;
var lettersGuessed = [];
var lettersGuessedAsString = lettersGuessed.join(", ");

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var yourGuessesSoFarText = document.getElementById("yourguessessofar-text");

// This is the computer choice happening
var computerGuess = choices[Math.floor(Math.random() * choices.length)];

// This resets the game
function resetGame() {
  computerGuess = choices[Math.floor(Math.random() * choices.length)];
  guessCount = 9;
  lettersGuessed = [];
}

// This function is run whenever the user presses a key
document.onkeyup = function (event) {

  // Determines which key was pressed
  var userGuess = event.key;

  // Pushes the user guess to the array
  lettersGuessed.push(userGuess);

  // Only run the following code if the user presses a letter. If match then:
  if ((userGuess === computerGuess) && (guessCount > 0)) {
    wins++;

    // Reset
    resetGame();
  }

  // Only run if not a match but the user still has guesses left
  else if ((userGuess !== computerGuess) && (guessCount > 0)) {
    guessCount--;
  }
  
  // Only run if there are no more guesses left for the user
  else {
    losses++;

    // Reset
    resetGame();
  }
  
  

  // Displays references to the HTML
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeftText.textContent = "Guesses left: " + guessCount;
  yourGuessesSoFarText.textContent = "Your Guesses so far: " + lettersGuessed.join(', ');
}