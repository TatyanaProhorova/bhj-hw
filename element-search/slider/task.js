let sliderArray = Array.from(document.querySelectorAll(".slider__item")); //0=4   5
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");

function rotate(counterDir) {
  //1 или -1
  let current = sliderArray.findIndex(isActive);
  (i) => {
    i.classList.contains("slider__item_active");
  };
  let newIndex = (index + counterDir) % sliderArray.length;
  newIndex !== -1 ? newIndex : (newIndex = sliderArray.length - 1);
  current.classList.toggle("slider__item_active");
  sliderArray[newIndex].classList.toggle("slider__item_active");
}
arrowPrev.addEventListener("click", (e) => {
  rotate(-1);
});
arrowNext.addEventListener("click", (e) => {
  rotate(1);
});