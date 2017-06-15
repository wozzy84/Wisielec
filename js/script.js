var guess;
var word;
var litera = "j";
var tablica = []
let words = window.words;
let gameState = {
    incorrectGuesses: [],
    guessesRemaining: 7
};


function update () {
    $("#inc").text(gameState.incorrectGuesses.length);
    $("#rem").text(gameState.guessesRemaining);
    
}

function chooseWord() {
    words = ["pies", "kot", "ryba", "świnia", "drzewo", "krzak"];
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
}


function createWordTiles() {
    $(".letter").remove();
    for (i = 0; i < word.length; i++) {
        $("#slot").append("<div class='letter' id=" + i + "></div>")
    }
};



function validate() {
    if (guess.length == 1) {
        return true
    } else {
        return false
    }
}



function testGuess(guess) {
    var tablica = []
    for (var i = 0; i < word.length; i++) {
        if (word[i] === litera) {
            tablica.push(i)
        };
    }
    
};


function updateWordTiles(indices) {
    var specifiedLetter = "k";
    var individualLetters = word.split('');
    var matches = [];
    for (i = 0; i < individualLetters.length; i++) {
        if (individualLetters[i] == specifiedLetter)
            matches[matches.length] = i;
    }
    for (i = 0; i < matches.length; i++) {
        {
            $("#" + matches[i]).text("k")
        }
    }
}

function updateScoreboard (tablica) {
    if(true && gameState.guessesRemaining > 0) {
    gameState.incorrectGuesses.push("a"); gameState.guessesRemaining--;
    } 
    $("#inc").text(gameState.incorrectGuesses.length);
    $("#rem").text(gameState.guessesRemaining);

}




function listen() { 
    
       
}


function init() {

}


$("#sub").on("click", function(){alert("hello")});