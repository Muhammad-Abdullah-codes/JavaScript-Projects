let Score = JSON.parse(localStorage.getItem('score')) || {
 Wins: 0,
 Losses: 0,
 Tie: 0
};

function htmlScore() {
 document.querySelector('.js-score').innerHTML = `Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Tie}`;
}

let isPlaying = false;
let intervalID;

function autoPlay() {
 if (!isPlaying) {
  intervalID = setInterval(function () {
   const playerMove = pickComputerMove();
   playGame(playerMove);
  }, 3000);
  isPlaying = true;
 } else {
  clearInterval(intervalID);
  isPlaying = false;
 }
}

function pickComputerMove() {
 let randomNumber = Math.random();
 let computerMove = '';
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
 } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
 } else {
  computerMove = 'scissors';
 }
 return computerMove;
}

function handleTie() {
 Score.Tie++;
 localStorage.setItem('score', JSON.stringify(Score));
 htmlScore();
 return 'Tie.';
}

function playGame(playerMove) {
 const computerMove = pickComputerMove();
 let result = '';

 if (playerMove === computerMove) {
  result = handleTie();
 } else {
  result = (playerMove === 'rock' && computerMove === 'scissors') ||
   (playerMove === 'paper' && computerMove === 'rock') ||
   (playerMove === 'scissors' && computerMove === 'paper') ?
   'You win.' : 'You lose.';

  Score[result === 'You win.' ? 'Wins' : 'Losses']++;
  localStorage.setItem('score', JSON.stringify(Score));
 }

 htmlScore();
 document.querySelector('.js-result').innerHTML = result;
 document.querySelector('.js-choice').innerHTML = `You picked <img src="img/${playerMove}-emoji.png"> - Computer picked <img src="img/${computerMove}-emoji.png">.`;
}

function resetScore() {
 Score.Wins = 0;
 Score.Losses = 0;
 Score.Tie = 0;
 localStorage.removeItem('score');
 htmlScore();
}

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.emoji-button').forEach(button => {
  button.addEventListener('click', () => {
   const move = button.getAttribute('data-move');
   playGame(move);
  });
 });

 document.querySelector('.reset').addEventListener('click', resetScore);
});

htmlScore();
