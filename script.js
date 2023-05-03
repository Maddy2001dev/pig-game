'use strict';
//assignments
let sum1 = 0;
let sum2 = 0;
let isPlayerOne = true;
const againBtn = document.querySelector('.again-btn');
const rollBtn = document.querySelector('.btn-roll');
const keepBtn = document.querySelector('.btn-keep');
const diceNumberOne = document.querySelector('.score-one');
const diceNumberTwo = document.querySelector('.score-two');
const totalScoreOne = document.querySelector('.total-score-one');
const totalScoreTwo = document.querySelector('.total-score-two');
const templateOne = document.querySelector('.player-one');
const templateTwo = document.querySelector('.player-two');
const playerOneHeader = document.querySelector('.head-one');
const playerTwoHeader = document.querySelector('.head-two');
const img = document.querySelector('img');
templateOne.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';

//logic
const roll = function () {
  if (isPlayerOne) {
    let randomRoll = Math.trunc(Math.random() * 6 + 1);
    if (randomRoll == 1) {
      img.src = 'dice-six-faces-one.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 2) {
      img.src = 'dice-six-faces-two.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 3) {
      img.src = 'dice-six-faces-three.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 4) {
      img.src = 'dice-six-faces-four.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 5) {
      img.src = 'dice-six-faces-five.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 6) {
      img.src = 'dice-six-faces-six.png';
      img.classList.remove('hidden');
    }
    diceNumberOne.textContent = randomRoll;
    if (sum1 >= 100) {
      playerOneHeader.textContent = 'win';
      templateOne.style.backgroundColor = 'green';
      templateTwo.style.backgroundColor = 'red';
    }
    if (randomRoll == 1) {
      totalScoreOne.textContent = 0;
      diceNumberOne.textContent = 0;
      sum1 = 0;
      isPlayerOne = false;
      switchPlayer();
    } else {
      sum1 = sum1 + randomRoll;
      totalScoreOne.textContent = sum1;
      if (sum1 >= 100) {
        playerOneHeader.textContent = 'win';
        templateOne.style.backgroundColor = 'green';
        templateTwo.style.backgroundColor = 'red';
      }
      keepBtn.addEventListener('click', () => {
        isPlayerOne = false;
        switchPlayer();
      });
    }
  } else {
    let randomRoll = Math.trunc(Math.random() * 6 + 1);
    if (randomRoll == 1) {
      img.src = 'dice-six-faces-one.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 2) {
      img.src = 'dice-six-faces-two.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 3) {
      img.src = 'dice-six-faces-three.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 4) {
      img.src = 'dice-six-faces-four.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 5) {
      img.src = 'dice-six-faces-five.png';
      img.classList.remove('hidden');
    } else if (randomRoll == 6) {
      img.src = 'dice-six-faces-six.png';
      img.classList.remove('hidden');
    }
    diceNumberTwo.textContent = randomRoll;
    if (sum2 >= 100) {
      playerTwoHeader.textContent = 'win';
      templateOne.style.backgroundColor = 'red';
      templateTwo.style.backgroundColor = 'green';
    }
    if (randomRoll == 1) {
      totalScoreTwo.textContent = 0;
      diceNumberTwo.textContent = 0;
      sum2 = 0;
      isPlayerOne = true;
      switchPlayer();
    } else {
      sum2 = sum2 + randomRoll;
      totalScoreTwo.textContent = sum2;
      if (sum2 >= 100) {
        playerTwoHeader.textContent = 'win';
        templateOne.style.backgroundColor = 'red';
        templateTwo.style.backgroundColor = 'green';
      }
      keepBtn.addEventListener('click', () => {
        isPlayerOne = true;
        switchPlayer();
      });
    }
  }
};
const switchPlayer = function () {
  if (isPlayerOne) {
    templateTwo.style.backgroundColor = 'rgb(5, 39, 75)';
    templateOne.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  } else {
    templateTwo.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    templateOne.style.backgroundColor = 'rgb(5, 39, 75)';
  }
};
const keep = function () {
  switchPlayer();
};

rollBtn.addEventListener('click', roll);

againBtn.addEventListener('click', () => {
  isPlayerOne = true;
  sum1 = 0;
  sum2 = 0;
  templateTwo.style.backgroundColor = 'rgb(5, 39, 75)';
  templateOne.style.backgroundColor = 'rgb(5, 39, 75)';
  templateOne.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  playerOneHeader.textContent = 'player 1';
  playerTwoHeader.textContent = 'player 2';
  totalScoreOne.textContent = 0;
  totalScoreTwo.textContent = 0;
  diceNumberOne.textContent = 0;
  diceNumberTwo.textContent = 0;
  randomRoll = 0;
});
