'use strict';

const gameBoard = document.getElementById('gameboard');
const inputVal = gameBoard.querySelector('#input-word');
let inputTimer = gameBoard.querySelector('#time');
let word = gameBoard.querySelector('#word');

// declare array to save words
let words = [];

//fetch words from text file
fetch('words.txt')
    .then(response => response.text())
    .then(data => {
        words = data.split('\n');
    })
    .catch(error => console.error(error));


inputVal.addEventListener('keydown', startGame);

//   Set difficulty to value in local storage or medium by default
function setDifficulty(d) {
    inputTimer.innerHTML = d;
}

// function setActive() {
//     let navLink = gameBoard.querySelector('.nav-link')
//     navLink.addEventListener('click', () =>{
//         navLink.classList.add('active')
//     })
// }
        

function startGame() {
    console.log('Game started');

    const word = randomWord()

    checkWord(word);
    timer(inputTimer.innerHTML); // Set timer to value in difficulty

}

function timer(seconds) {
    let i = 5;
    i = seconds - 1;
    if (i < 0) {
        return;
    }
    let timer = setInterval(function () {
        inputTimer.innerHTML = i;
        i--;
        if (i < 0) {
            clearInterval(timer);
        }
    }, 1000); // Delay between each iteration in milliseconds (1 second)
}

function checkWord(inputVal) {

    const validWord = words.includes(word => word === inputVal.value)
    if (validWord) {
        console.log('Word is valid');
    }
}
function randomWord() {
    //get random number between 0 and 3871 which is the array length of words.
    const randomNumber = Math.floor(Math.random() * Math.floor(3871));

    const randomWord = words[randomNumber];
    word.innerText = randomWord;
    word.classList.add('text-info', 'text-center', 'display-4');

    return randomWord;
}