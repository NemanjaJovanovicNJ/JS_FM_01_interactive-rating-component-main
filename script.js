"use strict";

const submitBtnEl = document.querySelector(".submit");
const rate1 = document.getElementById("1");
const rate2 = document.getElementById("2");
const rate3 = document.getElementById("3");
const rate4 = document.getElementById("4");
const rate5 = document.getElementById("5");
const ratingMessage = document.querySelector(".rating-message");
const rates = [rate1, rate2, rate3, rate4, rate5];
console.log(rates);

let currentRating;

const resetRates = function () {
  for (let i = 0; i < rates.length; i++) {
    rates[i].style.backgroundColor = "hsl(213, 19%, 18%)";
    rates[i].style.color = "hsl(217, 12%, 63%)";
  }
};
// SUBMIT Button - Only left is to change rate value in thank you container

submitBtnEl.addEventListener("click", function () {
  document.querySelector(".container-rate").classList.add("hidden");
  document.querySelector(".thank-you").classList.remove("hidden");
  ratingMessage.textContent = `You selected ${currentRating} out of 5`;
});

// Come back later and solve this using "forEach" method probably - according to web research

rate1.addEventListener("click", function () {
  resetRates();
  rate1.style.backgroundColor = " hsl(217, 12%, 63%)";
  rate1.style.color = "#fff";
  currentRating = rate1.textContent;
});
rate2.addEventListener("click", function () {
  resetRates();
  rate2.style.backgroundColor = " hsl(217, 12%, 63%)";
  rate2.style.color = "#fff";
  currentRating = rate2.textContent;
});
rate3.addEventListener("click", function () {
  resetRates();
  rate3.style.backgroundColor = " hsl(217, 12%, 63%)";
  rate3.style.color = "#fff";
  currentRating = rate3.textContent;
});
rate4.addEventListener("click", function () {
  resetRates();
  rate4.style.backgroundColor = " hsl(217, 12%, 63%)";
  rate4.style.color = "#fff";
  currentRating = rate4.textContent;
});
rate5.addEventListener("click", function () {
  resetRates();
  rate5.style.backgroundColor = " hsl(217, 12%, 63%)";
  rate5.style.color = "#fff";
  currentRating = rate5.textContent;
});
