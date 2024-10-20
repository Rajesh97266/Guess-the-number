'use strict';

// document.querySelector('.message').textContent = 'Correct Answer 😁😁😁';
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Content';
  }
});
