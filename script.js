let playerScore = 0;
let compScore = 0;
let ties = 0;
let computerChoice = compChoice();
let playerChoice;
document.querySelector('#resetbtn').style.display = 'none';
document.querySelector('body').addEventListener('click', function (e) {
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 150)";
});


function compChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
        ties++;
        document.getElementById('ties').innerHTML = "Ties:" + ties;
    } else if (playerSelect === "rock") {
        if (computerSelect === "paper") {
            compScore++;
            document.querySelector('.computerscore').innerHTML = "Computer Score:" + compScore;
            let comp = document.querySelector('.computerchoice');
            comp.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        } else if (computerSelect === "scissors") {
            playerScore++;
            document.querySelector('.playerscore').innerHTML = "Player Score:" + playerScore;
            let play = document.querySelector('.playerchoice');
            play.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    } else if (playerSelect === "paper") {
        if (computerSelect === "scissors") {
            compScore++;
            document.querySelector('.computerscore').innerHTML = "Computer Score:" + compScore;
            let comp = document.querySelector('.computerchoice');
            comp.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        } else if (computerSelect === "rock") {
            playerScore++;
            document.querySelector('.playerscore').innerHTML = "Player Score:" + playerScore;
            let play = document.querySelector('.playerchoice');
            play.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    } else if (playerSelect === "scissors") {
        if (computerSelect === "rock") {
            compScore++;
            document.querySelector('.computerscore').innerHTML = "Computer Score:" + compScore;
            let comp = document.querySelector('.computerchoice');
            comp.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        } else if (computerSelect === "paper") {
            playerScore++;
            document.querySelector('.playerscore').innerHTML = "Player Score:" + playerScore;
            let play = document.querySelector('.playerchoice');
            play.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        }
    }
    rounds();
    computerChoice = compChoice();

}

function rounds() {
    if (playerScore === 5) {
        disableClick();
        document.querySelector('.result').textContent = "You Win, Play again if you dare";
        document.querySelector('#resetbtn').textContent = "Restart Game";
        document.querySelector('.result').style.display = 'block';
        document.querySelector('#resetbtn').style.display = 'block';
        resetGame();
    } else if (compScore === 5) {
        disableClick();
        document.querySelector('.result').textContent = "You Lose, Do you want to play again?";
        document.querySelector('#resetbtn').textContent = "Restart Game";
        document.querySelector('#resetbtn').style.display = 'block';

        document.querySelector('.result').style.display = 'block';

        resetGame();
    }
}

function playSelect() {
    document.getElementById('rock').addEventListener('click', function () {
        playerChoice = "rock";
        playRound(playerChoice, computerChoice);
    });
    document.getElementById('paper').addEventListener('click', function () {
        playerChoice = "paper";
        playRound(playerChoice, computerChoice);
    });
    document.getElementById('scissors').addEventListener('click', function () {
        playerChoice = "scissors";
        playRound(playerChoice, computerChoice);
    });
}

playSelect();

function resetGame() {
    document.querySelector('#resetbtn').addEventListener('click', function () {
        document.querySelector('.playerchoice').textContent = '';
        document.querySelector('.playerscore').textContent = `Player Score: ${playerScore = 0}`;
        document.querySelector('.computerchoice').textContent = '';
        document.querySelector('.computerscore').textContent = `Comp Score: ${compScore = 0}`;
        document.querySelector('#ties').textContent = `Ties: ${ties = 0}`;
        document.querySelector('.result').style.display = 'none';
        document.querySelector('#resetbtn').style.display = 'none';

        enableClick();
    });

}

function disableClick() {
    document.getElementById('rock').style.pointerEvents = 'none';
    document.getElementById('paper').style.pointerEvents = 'none';
    document.getElementById('scissors').style.pointerEvents = 'none';
}

function enableClick() {
    document.getElementById('rock').style.pointerEvents = 'auto';
    document.getElementById('paper').style.pointerEvents = 'auto';
    document.getElementById('scissors').style.pointerEvents = 'auto';
}


