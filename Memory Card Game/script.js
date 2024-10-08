const cardValues = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
];

let cardElements = [];
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let timer;
let seconds = 0;
let gameActive = false;

const gameBoard = document.getElementById("game-board");
const newGameButton = document.getElementById("new-game-button");
const movesDisplay = document.getElementById("moves");
const timerDisplay = document.getElementById("timer");
const congratulationsMessage = document.getElementById("congratulations");

newGameButton.addEventListener("click", setupGame);

function createCard(value) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = value;

  const img = document.createElement("img");
  img.src = `images/${value}.png`; // Assume you have images named A.png, B.png, etc.
  card.appendChild(img);

  card.addEventListener("click", flipCard);
  return card;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setupGame() {
  cardElements = [];
  gameBoard.innerHTML = "";
  moves = 0;
  seconds = 0;
  movesDisplay.textContent = "Moves: 0";
  timerDisplay.textContent = "Time: 0s";
  congratulationsMessage.classList.add("hidden");

  const shuffledCards = shuffle(cardValues);
  shuffledCards.forEach((value) => {
    const card = createCard(value);
    gameBoard.appendChild(card);
    cardElements.push(card);
  });

  resetGame();
}

function resetGame() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  gameActive = true;
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `Time: ${seconds}s`;
  }, 1000);
}

function flipCard() {
  if (lockBoard || this === firstCard || !gameActive) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  moves++;
  movesDisplay.textContent = `Moves: ${moves}`;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.value === secondCard.dataset.value) {
    resetBoard();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
  checkWinCondition();
}

function checkWinCondition() {
  const flippedCards = document.querySelectorAll(".flipped");
  if (flippedCards.length === cardValues.length) {
    gameActive = false;
    clearInterval(timer);
    congratulationsMessage.classList.remove("hidden");
  }
}

// Start the game on page load
window.onload = setupGame;
