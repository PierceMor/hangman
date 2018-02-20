var wordList =   //word list 
    [
        "vader",
        "luke",
        "jedi",
        'sith',
    ];

//var olderGuesses = [];          // letters that have been guessed already

const numberOfTries = 15;       // number of tries for guessing

var usedLetters = [];           // Letters that users has already used 
var currentWordIndex;           // Index of the current word in the array 
var userGuess = [];             // word that users puts into word
var remainingGuesses = 7;       // number of Guesses that user has left 
var gameStarted = false;        // flag to start the game 
var hasFinished = false;        // flag for "press any key to try agian"
var wins = 0;                   // Score of user wins 

//Starts a fresh game 
function resetGame(){
    remainingGuesses = numberOfTries;
    gameStarted = false;

        //round the random number to nearest whole
    currentWordIndex = Math.floor(Math.random() * (wordList.length));

    //clear arrays
    usedLetters = [];
    userGuess = [];

    //clear userGues
    for (var i = 0; i < wordList[currentWordIndex].length; i++){
        userGuess.push("_");
    }

    //NEED TO MAKE THE LETTERS COME ONTO THE SCREEN YOU DERP!!
    


    //show display
    updateDisplay();
};

// Updates the dsplaz on the HTML Page 
function updateDisplay() {console.log("we are here")
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    document.getElementById("guessedLetters").innerText = usedLetters.join(" ");
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    for (var i = 0; i < userGuess.length; i++) {

        //checks to see if that letter is in usedLetters
            document.getElementById("currentWord").innerText += userGuess[i];
        }
    
    if(remainingGuesses <= 0) {
        
        hasFinished = true;
        alert("You lose! The word was: " +wordList[currentWordIndex]);
    }
};

document.onkeydown = function(event) {
    //If we finished a game, any key resets 
    if(hasFinished){
        resetGame();
        hasFinished = false;
    } else {
        //check to make sure a letter was pressed. 
        if(event.keyCode >= 65 && event.keyCode <= 90){
            makeGuess(event.key.toLowerCase());
        }
    }
    
   
};



function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        //make sure we didn"t use this letter yet
        if (usedLetters.indexOf(letter) === -1) {
            usedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

    updateDisplay();
    checkWin();
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in teh guess word. 
function evaluateGuess(letter) {
    //Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of quessed letter.
    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        if (wordList[currentWordIndex][i]===letter) {
            positions.push(i);
        }
    }

    //removes a quess
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        // replace '_' with a letter.
        for (var i = 0; i < positions.length; i++) {
            userGuess[positions[i]] = letter; 
        }
    }
};



function checkWin() {
    if(userGuess.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
    }
};

resetGame();