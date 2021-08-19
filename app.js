const showCard = document.querySelector(".btn--showCard");
const card = document.querySelector(".card");
const hideCard = document.querySelector(".hideCard");

//
showCard.addEventListener("click", displayCard);
hideCard.addEventListener("click", hideFields);

//
function displayCard() {
  card.style.opacity = 1;
  card.style.top = `${15}%`;
  card.style.marginBottom = `${50}rem`;
}
function hideFields() {
  card.style.opacity = 0;
  card.style.top = `-${100}%`;
}
