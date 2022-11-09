$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
  });
});

const Btn = document.querySelector(".second__button");
const portfolioImage = document.querySelector(".second__image");
Btn.addEventListener("click", () => {
  portfolioImage.src = "img/thirdPhoto.jpg";
});
