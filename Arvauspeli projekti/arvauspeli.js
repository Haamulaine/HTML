let targetNumber;
let guessesLeft;
let wins = 0;
let losses = 0;

function startGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    guessesLeft = 3;

    document.getElementById("message").textContent = "";
    document.getElementById("restart-btn").style.display = "none";

    createNumberButtons();
}

function createNumberButtons() {
    const grid = document.getElementById("number-grid");
    grid.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.className = "num-btn";
        btn.textContent = i;
        btn.onclick = () => handleGuess(i, btn);
        grid.appendChild(btn);
    }
}

function handleGuess(number, btn) {
    if (guessesLeft <= 0) return;

    guessesLeft--;

    if (number === targetNumber) {
        document.getElementById("message").textContent =
        `Oikein! Luku oli ${targetNumber}. Voitit!`;

        wins++;
        updateScore();
        disableAllButtons();
        return;
    }

    if (number < targetNumber) {
        document.getElementById("message").textContent =
        `${number} on liian suuri!`;
        hideButtons(1, number);
    }

    btn.classList.add("hidden");

    if (guessesLeft === 0) {
       document.getElementById("message").textContent =
    `Arvaukset loppuivat! Luku oli ${targetNumber}.`;
    losses++;
    updateScore();
    disableAllButtons();
    }
}

function hideButtons(start, end) {
    const buttons = document.querySelectorAll(".num-btn");
    buttons.forEach(btn => {
        const val = parseInt(btn.textContent);
        if (val >= start && val <= end) {
            btn.classList.add("hidden");
        }
    });
}

function disableAllButtons() {
    const buttons = document.querySelectorAll(".num-btn");
    buttons.forEach(btn => btn.disabled = true);

    document.getElementById("restart-btn").style.display ="inline-block";

}

function updateScore() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
}

startGame();