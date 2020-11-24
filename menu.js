let button = document.querySelector(".button");
let menu = document.querySelector(".activeMenu");
let mask = document.querySelector(".top-left > .mask");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  menu.classList.toggle("active");
  mask.classList.toggle("active");
  
});
