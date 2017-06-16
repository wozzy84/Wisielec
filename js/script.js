


var guess;
var word;

var tablica;
let words = window.words;
let gameState = {
    incorrectGuesses: [],
    guessesRemaining: 7
};


 $("#sub").on("click", function(){ 
    
    testGuess();
  
    })  

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






function testGuess() {
    var litera = $("#guess").val(); 
    var tablica = []
    
    function validate() {
    if (litera.length === 1) {   
        return true
        } else {
            return false; alert("hello");
            }       
    }

    for (var i = 0; i < word.length; i++) {
        if (word[i] === litera) {
            tablica.push(i)
        }
        }
    console.log(tablica);
    updateWordTiles();
    
    function updateScoreboard (tablica) { 
    if( tablica.length  === 0 && gameState.guessesRemaining > 0) {
    gameState.incorrectGuesses.push("a"); gameState.guessesRemaining--;
    } 
    $("#inc").text(gameState.incorrectGuesses.length);
    $("#rem").text(gameState.guessesRemaining);

    }
 
};


function updateWordTiles() {
    var litera = $("#guess").val(); 
    var individualLetters = word.split('');
    var matches = [];
        for (i = 0; i < individualLetters.length; i++) {
        if (individualLetters[i] == litera)
            matches[matches.length] = i;
        }
        for (i = 0; i < matches.length; i++) {
        
            $("#" + matches[i]).text(litera)
        }
    }








function listen() {

}


$("#init").on("click", function () {
    update();
    chooseWord();
    createWordTiles()
    }
)




