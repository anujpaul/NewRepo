// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;

//document.querySelector('.guess').value = 12;
//console.log(document.querySelector('.guess').value);
*/
const getMyNumber = function () {
    const randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`Random number = ${randomNumber}`);
    return randomNumber;
};

let randomNumber = getMyNumber();
let score = 20;
let reAttemptCount = 1;
let highScore = 0;

let isRightNumber = function (guess) {
    if (guess === randomNumber) {
        return true;
    }
    return false;
};

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const wrongAnswer = function () {
    reAttemptCount++;
    score--;
    document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score <= 0) {
        displayMessage('Game Over!');
        document.querySelector('.guess').disabled = true;
    } else if (!guess) {
        displayMessage('Select a number bro!');
    } else if (guess === randomNumber) {
        document.querySelector(
            '.message'
        ).textContent = `Well Done! It took you ${reAttemptCount} attempts to guess this number.`;

        document.querySelector('.number').textContent = guess;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('body').style.backgroundColor = 'Green';
        document.querySelector('.number').style.width = '30Rem';
    } else {
        wrongAnswer();
        displayMessage(guess < randomNumber ? 'Too low!' : 'Too high!');
    }
});

document.querySelector('.again').addEventListener('click', function () {
    randomNumber = getMyNumber();
    displayMessage('Start guessing...');
    score = 20;
    reAttemptCount = 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15Rem';
    //document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
});
//let score = document.querySelector('.score').textContent;

