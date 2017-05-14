
var guess; 
var word;


var litera;
let words = window.words;
let gameState = {
  incorrectGuesses : [],
  guessesRemaining : 7
};


function chooseWord() {
  words = ["pies", "kot", "ryba", "świnia", "drzewo", "krzak"];
  word = words[Math.floor(Math.random() * words.length)];
  console.log(word)
}

chooseWord();

function createWordTiles() {
  for (i = 0; i < word.length; i++) {
    $("#slot").append("<div class='letter'></div>")
  }
};



function validate () { if (guess.length == 1){return true} else {return false}
}
  


function testGuess (guess) {
var tablica = []
for( var i=0; i<word.length; i++ ) {
if (word[i] === litera) {
  tablica.push(i)}; 
}return tablica
};


function updateWordTiles (indices) {
  
}

function listen () {
  
}

function init () {
  
}

