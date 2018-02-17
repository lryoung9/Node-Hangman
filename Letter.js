function Letter(letter) {
	// String value to store the underlying character for the letter
	this.letter = letter;
	// Boolean value that stores whether that letter has been guessed yet
	this.guessedAlready = false;
	// A function that return what is to be rendered
	this.render = function() {
		// render the underlying character if the letter has been guessed
		if (this.letter) {
			return (this.letter + " ");
		} 
		// render a placeholder (like an underscore) if the letter has not been guessed
		else {
			return "_ ";
		}
	}
	// A function that takes a character as an argument
	this.character = function(letter) {
		// checks it against the underlying character
		if (letter === "a") {
		// updating the stored boolean value to true if it was guessed correctly
		this.guessedAlready = true
		}
		else {
			console.log("Wrong letter guessed.")
		}
	}
}

module.exports = Letter;