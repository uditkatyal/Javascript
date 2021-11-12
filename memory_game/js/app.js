const cardsShow = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;

  // console.log(firstCard, secondCard);
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.avenger === secondCard.dataset.avenger;
  isMatch ? disableCard() : unflipCard();
}

function disableCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCard() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCard() {
  cardsShow.forEach((card) => {
    let randNumber = Math.floor(Math.random() * 12);
    card.style.order = randNumber;
  });
})();

cardsShow.forEach((card) => card.addEventListener("click", flipCard));
