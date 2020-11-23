let button = document.querySelector(".button");
let menu = document.querySelector(".activeMenu");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  menu.classList.toggle("active");
});
