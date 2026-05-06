'use strict';


const generateSecretNumber = function(){
  let SecretNumber = Math.trunc(Math.random() * 20) + 1;
  return SecretNumber;
}
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const setScore = function(score){
  document.querySelector('.score').textContent = score;
}


let SecretNumber = generateSecretNumber();
let score = 20
let highscore = 0;

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  SecretNumber = generateSecretNumber();

  displayMessage('Start guessing...');
  setScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    displayMessage('No number! ⛔');
  }
  else if (guess === SecretNumber){
    displayMessage('Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('.number').style.width = '30rem';
    score++
    setScore(score);
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
  }
  else if (guess !== SecretNumber){
    if (score > 1){
      let message = guess > SecretNumber ? 'Too high! 📈' : 'Too low! 📉';
      displayMessage(message);
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game! 💥');
      setScore(0);
    }
  }
  
});
