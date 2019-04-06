
<script>

    //VARIABLES
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var comp = options[Math.floor(Math.random() * options.length)];

    var guess = [];
    var numGuesses = 3;
    var wins = 0;
    var losses = 0;


    //FUNCTIONS
    //get comp

        function reset() {

        document.getElementById("guessesLeft").innerHTML = 3;
    document.getElementById("guesses").innerHTML = null;
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("valueguess").innerHTML = "";

    guess = [];
    losses = 0;
    wins = 0;
    numGuesses = 3;

}
        function letterRev() {
        alert("End of Game")
            alert("Pls. click ok and refresh screen to start again.")
document.getElementById("valueguess").innerHTML = comp;
document.getElementById("guessesLeft").innerHTML = 0;
document.getElementById("guesses").innerHTML = null;
document.getElementById("wins").innerHTML = 0;
document.getElementById("losses").innerHTML = 1;
}

//MAIN PROCESS

        document.onkeyup = function (event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var isAlpha = (/^[a-zA-Z]+$/).test(userGuess);

            if (wins === 1) {
                return ;
}

            if (!isAlpha) {
                return ;
}
//alert("userGuess:" + userGuess + " isAlpha:" + isAlpha);
            if (userGuess != comp) {
        numGuesses--;
    guess.push(userGuess);
}

//alert("numGuesses:" + numGuesses);

            if (numGuesses === 0) {
        losses = 1;
    //alert("You Lose");
    };

    //alert("AFTER losses:" + losses);

            if (userGuess === comp) {
        wins++;
    document.getElementById("wins").innerHTML = wins;
    //alert("Winner");
    guess.push(userGuess);
    numGuesses--;
    return;
};

            if (numGuesses < 0) {
        alert("End Game. Refresh");
    return;
}
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = numGuesses;
document.getElementById("guesses").innerHTML = guess;
}
    </script>