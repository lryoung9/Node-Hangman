// Dependent on Letter construct
var Letter = require("./Letter.js")

function Word(word) {
    // store the string word
    this.word = word;
    // Letter objects
    this.letters = [];
    // Guessed entire word?
    this.wordFound = false;

    this.getLetter = function() {
        // for each letter in a word
        for(var i = 0; i < this.word.length; i++) {
            // create new instance of Letter construct
            var newLetter = new Letter(this.word[i]);
            // push each Letter object to array of Letters
            this.letters.push(newLetter);
        }
    };

    // Check to see if the entire word was guessed
    this.wordGuessed = function(){
        // The array method '.every' checks if every letter in the letters array
        if(this.letters.every(function(letter){
            return letter.guessedAlready === true;
          })){
            // if all letters from letters array are guessed, the word is complete
            this.wordFound = true;
            // and if the word is complete, then wordGuessed is true
            return true;
          }

    };
    this.checkLetterMatch = function(userGuess){
        var whatToReturn = 0;
        //iterates through each letter of letters array
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].guessedAlready = true;
            whatToReturn++;
        }
        //if guessed...
        return whatToReturn;
    };

    this.wordDisplay = function() {
        var display = "";
        //render..
        for (var i = 0; i < this.letters.length; i++) {
            display += this.letters[i].render();
        }
        return display;
    };
}

module.exports = Word;