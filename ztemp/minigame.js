document.addEventListener("DOMContentLoaded", function () {
    let secretNumber;
    let attempts;
    let isGameActive = true;

    function startNewGame() {
        secretNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 3;
        isGameActive = true;
        message.textContent = "";
        guessInput.value = "";
        checkButton.disabled = false;
        newRoundButton.style.display = "none";
    }

    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("check");
    const message = document.getElementById("message");
    const newRoundButton = document.getElementById("new-round");

    startNewGame();

    checkButton.addEventListener("click", function () {
        if (!isGameActive) return;

        const userGuess = parseInt(guessInput.value);

        if (userGuess === secretNumber) {
            message.textContent = "Congratulations! You guessed the correct number.";
            isGameActive = false;
            newRoundButton.style.display = "inline";
        } else {
            attempts--;
            if (attempts === 0) {
                message.textContent = `Sorry, you're out of attempts. The secret number was ${secretNumber}.`;
                isGameActive = false;
                newRoundButton.style.display = "inline";
            } else if (userGuess < secretNumber) {
                message.textContent = `Try a higher number. ${attempts} attempts remaining.`;
            } else {
                message.textContent = `Try a lower number. ${attempts} attempts remaining.`;
            }
        }
    });

    newRoundButton.addEventListener("click", function () {
        startNewGame();
    });
});
