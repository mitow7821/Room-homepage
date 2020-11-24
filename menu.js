let button = document.querySelector(".button");
let menu = document.querySelector(".activeMenu");
let mask = document.querySelector(".top-left > .mask");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  menu.classList.toggle("active");
  mask.classList.toggle("active");
});

const sizeChangedToDesktop = () => {
  if (window.innerWidth > 800) {
    button.classList.remove("active");
    menu.classList.remove("active");
    mask.classList.remove("active");
  }
};

window.onresize = sizeChangedToDesktop;
