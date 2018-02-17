// Dependent on Word construct
var word = require("./Word.js");
// Needed to prompt user for input
var inquirer = require("inquirer");

// 6 guesses allowed (Head, body, (2)arms, (2)hands, (2)legs and (2)feet)
var guessesLeft = 10;
// variable to hold word in play
var word = "";
// array to hold wrong guesses
var wrongGuesses = [];
var letterinWord = false;
var win = false;
var lose = false;
var wordSplit;


// Start game
console.log("\nWelcome to Hangman!");
console.log(`You have ${guessesLeft} guesses. Go!\n`);
// Choose a random word from array
function chooseWord(){
	wordList = ["doubtful", "chalk", "thaw", "grain", "distance", "jam", "shop", "gray", "entertain", "ring", "stormy", "stocking"];
	word = wordList[Math.floor(Math.random()*wordList.length)];
	// Split word into individual letters
	wordSplit = word.split("");
}
chooseWord();

function reset(){
	guessesLeft = 10;
	console.log(`\nYou have ${guessesLeft} guesses left.`);
 	chooseWord();
	win = false;
	lose = false;
	guess();
}

// Prompt user to play game by guessing a letter
function guess(){
	// decrement number of guesses remaining
	guessesLeft--;
	console.log(`Your word: ${chosenWordBlanked.join(" ")}\n`)
	inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "Guess a letter!"
		}

 	]).then(function(user) {
 		console.log(`You guessed ${user.guess}.`);
 		// if user guesses a letter in the word
 		if (wordSplit.indexOf(user.guess) > -1) {
 			letterinWord = true;
 		}
 		// else user's guess is NOT in the word
 		else {
 			// Check if user already had made that guess
 			if (wrongGuesses.indexOf(user.guess) > -1) {
 				console.log(`You've already guessed ${user.guess}.`)
 				guess();
 			} else {
 			// keep track of wrong answers
 			wrongGuesses.push(user.guess) 				
 			}
 		};
 		if (letterinWord){
 			for (var i = 0; i < wordSplit.length; i++) {
 				wordSplit[i] = user.guess;
 			};
 			console.log(`${user.guess} is in the word!`);
 			// display blanked word with filled in guessed letters
 			console.log(wordSplit);
 			// revert letterinWord back to false for next guess
 			letterinWord = false;
 		}
 	})
 };
// play while guesses still remain
while (guessesLeft > 0) {
	// check win condition
	if (wordSplit === word) {
		win = true;
		inquirer.promt([
			{
				type: "confirm",
				name: "playAgain",
				message: "You won! Play again?"
			}
		]).then(function(answer) {
			if (answer.playAgain) {
				reset();
			} else {
				return console.log("I didn't want to play with you anyways! BYE!")
			}
		})
	} else {
		
		console.log(`\nYou have ${guessesLeft} guesses left.`);
		guess();
	}
};

if (guessesLeft === 0) {
	lose = true;
	inquirer.prompt([
		{
			type: "confirm",
			name: "playAgain",
			message: "Nana nana, boo boo! You've lost! I won!!! \n Want to try again?"
		}
	]).then(function(answer) {
		if (answer.playAgain) {
			reset();
		} else {
			return console.log("Bye, cry baby!");
		}
	})
}