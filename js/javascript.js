// HOLDS SCORE/MOVES

let playerScore = 0;
let compScore = 0;
let uiScore = ''

let playerMove = '';
let compMove = '';

// SCORES ON UI

function updateScore() {
    const scoreP = document.getElementById('newscore');
    const newScore = `Score: You: ${playerScore} Computer: ${compScore}`;
    scoreP.textContent = newScore;
}

function displayScore() {
    const viewScore = document.getElementById('result');
    viewScore.textContent = uiScore;
}

function outcome(outcomeMessage) {
    uiScore = outcomeMessage;
    displayScore()
}

// COMPS MOVE

function getComputerMove() {

    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// ROCK CHOICE

function rockClick () {
    playerMove = 'rock';
    const compMove = getComputerMove();

    if (compMove === 'paper') {
        compScore ++;

        console.log(`You lose. Computer wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('Computer wins.')
    }

    else if (compMove === 'scissors') {
        playerScore ++;

        console.log(`You win. You: ${playerScore} Computer: ${compScore}`);
        outcome('You win.')
    }

    else {
        console.log(`Draw. Nobody wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('Draw.')
    }
}

// PAPER CHOICE

function paperClick () {
    playerMove = 'paper';
    const compMove = getComputerMove();

    if (compMove === 'scissors') {
        compScore ++;

        console.log(`You lose. Computer wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('You lose.')
    }

    else if (compMove === 'rock') {
        playerScore ++;

        console.log(`You win. You: ${playerScore} Computer: ${compScore}`);
        outcome('You win.')
    }

    else {
        console.log(`Draw. Nobody wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('Draw.')
    }
}

// SCISSORS CHOICE

function scissorsClick () {
    playerMove = 'scissors';
    const compMove = getComputerMove();

    if (compMove === 'rock') {
        compScore ++;

        console.log(`You lose. Computer wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('You lose.')
    }

    else if (compMove === 'paper') {
        playerScore ++;

        console.log(`You win. You: ${playerScore} Computer: ${compScore}`);
        outcome('You win.')
    }

    else {
        console.log(`Draw. Nobody wins. You: ${playerScore} Computer: ${compScore}`);
        outcome('Draw.')
    }
}

// RESET SCORE

function resetScore() {
    playerScore = 0;
    compScore = 0;
    console.log('Score has been reset');
    outcome('Score has been reset.')
    updateScore()
}

// AUTOPLAY

let autoRun;

function startAutoRun() {

    autoRun = setInterval(function timer() {

        console.log ('Autoplay Enabled.');
        rockClick();
        paperClick();
        scissorsClick();
        displayScore();
        updateScore();

    },1000)
}

function stopAutoRun() {
    clearInterval(autoRun);
}

let autoPlayRunning = false;

function autoRuncheck() {

    if (!autoPlayRunning) {
        startAutoRun()
        autoPlayRunning = true;
        console.log('Autoplay enabled.')
    } else {
        stopAutoRun();
        resetScore();
        autoPlayRunning = false;
        console.log('Autoplay has stopped.')
    }
}