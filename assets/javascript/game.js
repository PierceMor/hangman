var words = [
    "Vader",
    "Sith",
    "Jedi",
    "Bane", ];

var theWord = "";
// empty array to store guesses
var answerWord = [];
var wins = 0;
var guesses = 15;
var lettersUsed = [""];


//chooses a word at random

function computerChoice() {

var randoo = Math.floor((Math.random() * words.length) - 1);

    theWord = words[randoo];

    console.log(theWord);
}

computerChoice();


//display current word in "Guesses"

    //Answer Array
   
        
   //   if (keyLogged.toUpperCase() === theWord[i]) {
    //    document.write(theWord);



 //   }}

  //  document.getElementById("theWord").innerHTML = answerWord.join(" ");

   // document.onkeyup = function (event) {
  //      theWord = event.key.toUpperCase();
   // }


        //IDK
    document.addEventListener ("keyup", function(event){ 

        answerWord = event.key.toUpperCase(); 

        

            if (theWord === (answerWord[i])) {

                document.getElementById("writing").innerHTML = answerWord;
            
         //   else if (theWord)
        
        
            console.log(answerWord);
    }});
 
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
}
    
            
        
   // }});
        // broken loop
       // for (i in word; i < word.length; i++ );{}

        

      // console.log(event.key)
   // });

//display remaining guess

//show wins 

//log user key commands

    //keep track of correct answers

    //keep track of wrong answers 
        //alert users if wrong command is already logged 