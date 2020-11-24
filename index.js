let dynamicImage = document.querySelector(".top-left");
let dynamicHeading = document.querySelector(".dynamic-content").children[0];
let dynamicParagraph = document.querySelector(".dynamic-content").children[1];
let arrowsDesktop = document.querySelector(".arrowsDesktop").children;
let arrowsMobile = document.querySelector(".arrowsMobile").children;
let arrows = [arrowsDesktop, arrowsMobile];
let leftArrow = document.querySelector(".arrowsDesktop>.left");
let rightArrow = document.querySelector(".arrowsDesktop>.right");
let actualPosition = 0;

let content = {
  headings: [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ],
  backgrounds: [
    "/images/desktop-image-hero-1.jpg",
    "/images/desktop-image-hero-2.jpg",
    "/images/desktop-image-hero-3.jpg",
  ],
  backgroundsMobile: [
    "/images/mobile-image-hero-1.jpg",
    "/images/mobile-image-hero-2.jpg",
    "/images/mobile-image-hero-3.jpg",
  ],
  paragraphs: [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ],
};
let preloadedImages = [];

const preloadImages = (img) => {
  for (i = 0; i < img.length; i++) {
    preloadedImages[i] = new Image();
    preloadedImages[i].src = img[i];
  }
};

function changeBackground() {
  if (window.innerWidth <= 800) {
    preloadedImages = [];
    preloadImages(content.backgroundsMobile);
    dynamicImage.style.backgroundImage =
      "url(" + preloadedImages[actualPosition].src + ")";
  } else {
    preloadedImages = [];
    preloadImages(content.backgrounds);
    dynamicImage.style.backgroundImage =
      "url(" + preloadedImages[actualPosition].src + ")";
  }
}
changeBackground();

window.addEventListener("resize", changeBackground);

const setActualPosition = function (breakPoint, trueValue, falseValue) {
  if (actualPosition == breakPoint) {
    actualPosition = trueValue;
  } else {
    actualPosition += falseValue;
  }

  dynamicHeading.style.opacity = 0;
  setTimeout(() => {
    dynamicHeading.style.opacity = 1;
    dynamicHeading.innerHTML = content.headings[actualPosition];
  }, 300);

  dynamicParagraph.style.opacity = 0;
  setTimeout(() => {
    dynamicParagraph.style.opacity = 1;
    dynamicParagraph.innerHTML = content.paragraphs[actualPosition];
  }, 300);

  changeBackground();
};

Array.from(arrows).forEach((actualArrow) => {
  Array.from(actualArrow).forEach((arrow) => {
    arrow.addEventListener("click", () => {
      if (arrow.classList[0] === "left") {
        setActualPosition(0, content.headings.length - 1, -1);
      } else if (arrow.classList[0] === "right") {
        setActualPosition(content.headings.length - 1, 0, 1);
      }
    });
  });
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == "37") {
    setActualPosition(0, content.headings.length - 1, -1);
  } else if (e.keyCode == "39") {
    setActualPosition(content.headings.length - 1, 0, 1);
  }
}
