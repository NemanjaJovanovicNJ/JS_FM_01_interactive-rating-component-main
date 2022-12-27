"use strict";

const submitBtnEl = document.querySelector(".submit");
const rate1 = document.getElementById("1");
const rate2 = document.getElementById("2");
const rate3 = document.getElementById("3");
const rate4 = document.getElementById("4");
const rate5 = document.getElementById("5");
const ratingMessage = document.querySelector(".rating-message");
const rates = [rate1, rate2, rate3, rate4, rate5];

let currentRating;
// Function for reseting all buttons in a case when previously any of the buttons is already clicked
const resetRates = function () {
  for (let i = 0; i < rates.length; i++) {
    rates[i].style.backgroundColor = "hsl(213, 19%, 18%)";
    rates[i].style.color = "hsl(217, 12%, 63%)";
  }
};
// SUBMIT Button

submitBtnEl.addEventListener("click", function () {
  document.querySelector(".container-rate").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
  ratingMessage.textContent = `You selected ${currentRating} out of 5`;
});

for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", function () {
    resetRates();
    rates[i].style.backgroundColor = " hsl(217, 12%, 63%)";
    rates[i].style.color = "#fff";
    currentRating = rates[i].textContent;
  });
}
