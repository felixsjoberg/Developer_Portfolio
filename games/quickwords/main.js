window.addEventListener('load', gameInitialize);
'use strict';

//variables
let isPlaying;
let time = 5;
let activeGame = false;
let score = 0;
let words = []; // declare array to save words from text file.
let timerInterval; // declare variable to save interval function.
 
//DOM
const gameBoard = document.getElementById('gameboard');
const inputVal = gameBoard.querySelector('#input-word');
let inputTimer = gameBoard.querySelector('#time');
let word = gameBoard.querySelector('#word');
let currentScore = gameBoard.querySelector('#score');


//  Initialize game and fetch words from text file,
// by doing like this I can use the words in the game,
// and get a random word populated on the site directly.
function gameInitialize() {
    console.log('Game initialized');

    fetch('./words.txt')
        .then(response => response.text())
        .then(data => {
            words = data.split('\n');
            randomWord(words);
        })
        .catch(error => console.error(error));
}

//   Set difficulty to value in local storage or medium by default
function setDifficulty(d) {

    inputTimer.innerHTML = d;
    time = d;
}

inputVal.addEventListener('keyup', startGame);

function startGame() {
    if (checkWord()) {
        clearInterval(timerInterval);
        timer();

        isPlaying = true;
        randomWord(words);
        inputVal.value = '';
        score++;
        currentScore.innerHTML = score;
    }
}



function timer() {
    let i = inputTimer.innerHTML;
    timerInterval = setInterval(function () {
        if (i <= 0) {
            clearInterval(timerInterval);
            isPlaying = false;
            gameRestartHint();
        }
        else {
            i--;
            inputTimer.innerHTML = i;
        }
    }, 1000); // Delay between each iteration in milliseconds (1 second)
}

// Named function expression, fixed problem with restarting game.
let checkWord = function checkWord() {
    if (inputVal.value === word.innerHTML) {
        inputTimer.innerHTML = time;
        return true;
    } else {
        return false;
    }
};

function gameRestartHint() {
    word.classList.add('text-danger');
    word.innerHTML = 'Game Over!';

    gameBoard.querySelector('#hint').innerText = 'Press ENTER to play again';
    
    inputVal.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            score = 0;
            currentScore.innerHTML = score;
            setDifficulty(time);
            randomWord(words);
            startGame();
        }
    });
}

function randomWord(words) {
    const randomNumber = Math.floor(Math.random() * words.length);
    word.innerHTML = words[randomNumber];
    word.classList.add('text-info', 'text-center', 'display-4');
    word.classList.remove('text-danger');
}