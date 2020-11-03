'use strict';
/** 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!😜';

document.querySelector('.number').textContent =  13;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function(){
  // We must compare the random number with the guess number, for that we need that both  have to be a number variable.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please, write a number 😒';
  }
})