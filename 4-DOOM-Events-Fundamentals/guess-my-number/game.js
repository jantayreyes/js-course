'use strict';
/** 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!😜';

document.querySelector('.number').textContent =  13;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Defining the secret number.
let secretNumber =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function() {
  // We must compare the random number with the guess number, for that we need that both  have to be a number variable.
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // If there is not a valid input
  if (!guess) {
    displayMessage('Please, write a number 😒');
  // If player wins
  } else if (guess === secretNumber) {
    displayMessage('😜 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#80b347';
    document.querySelector('.number').style.borderRadius = '50px';
    document.querySelector('.number').style.backgroundColor = '#FCF3CF';
    document.querySelector('.number').style.width = '30rem';
    // CSS = background-color === backgroundColor = JS * works for all the CSS properties
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent =  highscore;
    }
  // input higher than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😡 Too high!' : '🤢 Too low!');
      score --; // = score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost! 👺');
      document.querySelector('.score').textContent = 0;
    }
  }
    // input lower than secret number
  });


document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber =  Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(96, 175, 212)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.number').style.borderRadius = '';
})