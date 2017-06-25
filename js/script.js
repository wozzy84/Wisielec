var getlitera;
var guess;
var word;
var tablica = [];
let words = window.words;
let gameState = {
    incorrectGuesses: [],
    guessesRemaining: 7
};

// akcja: "nowa gra"

$("#init").on("click", function() {
    init()
});


// akcja: zgłaszanie litery

$("#sub").on("click", function() {

    getlitera = $("#guess").val();
    console.log(getlitera);
    if (validate() == true) {
        updateWordTiles();
    } else {
        alert("podaj pojedynczą literę");
        $("#guess").val("");
        return
    }
    testGuess();
    updateScoreboard();
    tablica = [];

})

//funkcja: sprawdzenie czy wpisano jeden znak

function validate() {

    if (getlitera.length === 1) {
        return true
    } else {
        return false;
    }

}


// funkcja: aktualizacja stanu gry do stanu wyjściowego 

function restart() {
    gameState.incorrectGuesses = [];
    gameState.guessesRemaining = 7;
    $("#inc").text(gameState.incorrectGuesses.length);
    $("#rem").text(gameState.guessesRemaining);

}

// funkcja: wybieranie losowe wyrazu

function chooseWord() {
    words = ["pies", "kot", "ryba", "świnia", "drzewo", "krzak"];
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word)
}


// funkcja; tworzenie kafelków

function createWordTiles() {
    $(".letter").remove();
    for (i = 0; i < word.length; i++) {
        $("#slot").append("<div class='letter' id=" + i + "></div>")
    }
};


// funkcja: tworzy tablicę z ogdagniętymi literami

function testGuess() {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === getlitera) {
            tablica.push(i)
        }
    }
    console.log(tablica);

}


// funkcja: rozpoczyna nową rozgrywkę

function init() {
    restart();
    chooseWord();
    createWordTiles()
}


// funkcja: wypełnia kafelki odganiętymi literami 

function updateWordTiles() {

    var individualLetters = word.split('');
    var matches = [];
    var puste = [];
    for (i = 0; i < individualLetters.length; i++) {
        if (individualLetters[i] == getlitera) {
            matches[matches.length] = i;
        }

    }
    for (i = 0; i < matches.length; i++) {

        $("#" + matches[i]).text(getlitera)
    }

    for (i = 0; i < individualLetters.length; i++) {
        if ($("#" + i).text() === "") {
            puste.push("a")
        }
    }
    if (puste.length === 0) {
        alert("Gratulacje! Wygrałeś!")
    }
    puste = [];
}


//funkcja: aktualizuje tablicę wyników

function updateScoreboard() {

    if (tablica.length === 0 && gameState.guessesRemaining > 0) {
        gameState.incorrectGuesses.push("a");
        gameState.guessesRemaining--;
    }
    $("#inc").text(gameState.incorrectGuesses.length);
    $("#rem").text(gameState.guessesRemaining);
    $("#guess").val("");

    if (gameState.guessesRemaining == 0) {
        alert("Przegrałeś! zgadywane hasło to: " + word + ".");
        init();
    }
}