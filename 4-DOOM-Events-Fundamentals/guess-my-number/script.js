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
const secretNumber =  Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber

let score = 20;

document.querySelector('.check').addEventListener('click', function(){
  // We must compare the random number with the guess number, for that we need that both  have to be a number variable.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please, write a number 😒';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😜 Correct Number!!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😡 Too high!';
      score --; // = score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost! 👺';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤢 Too low!';
      score --; // = score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost! 👺';
      document.querySelector('.score').textContent = 0;
      // To update the score if you have lost.
    }
  }
})