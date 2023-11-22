const cards = [
  "A",
  "J",
  "Q",
  "K",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
const pintas = [
  '<i class="fa-solid fa-heart" style="color: #f50505;"></i>',
  '<i class="fa-solid fa-diamond" style="color: #fe0101;"></i>',
  '<i class="bi bi-suit-club-fill"></i>',
  '<i class="bi bi-suit-spade-fill"></i>',
];
const pintasInvertidas = [
  '<i class="fa-rotate-180 fa-solid fa-heart" style="color: #f50505;"></i>',
  '<i class="fa-solid fa-diamond" style="color: #fe0101;"></i>',
  '<i class="fa-rotate-180 bi bi-suit-club-fill"></i>',
  '<i class="fa-rotate-180 bi bi-suit-spade-fill"></i>',
];

otherCard = document.getElementById("newCard");
otherCard.addEventListener("click", newCard);

setInterval(newCard, 10000);

function newCard() {
  let ourCard = document.getElementById("carta");
  let randomNum = Math.floor(Math.random() * cards.length);
  let randomIcon = Math.floor(Math.random() * pintas.length);
  let ourHtml = `
  <div class="justify-content-start p-1 display-1 mt-3 ms-3">
    ${pintas[randomIcon]}
  </div>
  <div class="d-flex justify-content-center p-5 fs-1">
    <h1 class="cardNumber">${cards[randomNum]}</h1>
  </div>
  <div class="d-flex justify-content-end p-1 display-1 mb-3 me-3">
    ${pintasInvertidas[randomIcon]}
  </div>`;
  ourCard.innerHTML = ourHtml;
}
window.onload = function() {
  newCard();
};
