const hamburger = document.querySelector("#btn");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("hidden");
});
