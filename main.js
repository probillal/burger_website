const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_menu");
const navClose = document.getElementById("nav_close");

navClose.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});
