
let sliderArray = Array.from(document.querySelectorAll(".slider__item")); //0=4   5
let arrowPrev = document.querySelector(".slider__arrow_prev");
let arrowNext = document.querySelector(".slider__arrow_next");

function rotate(counterDir) {  //1 или -1
    let current = document.querySelector(".slider__item_active");
    let index = sliderArray.indexOf(current);
    let newIndex = (index + counterDir) % sliderArray.length;
    if (newIndex === -1) {newIndex = sliderArray.length -1};
    current.classList.toggle("slider__item_active");
    sliderArray[newIndex].classList.toggle("slider__item_active");
};
arrowPrev.addEventListener("click", (e) => {
    rotate(-1);
    // убрать active class с текущего на предыдущий через rotate 
    // и counterDir = -1
});
arrowNext.addEventListener("click", (e) => {
    // убрать active class с текущего на следующий через rotate 
    // и counterDir = 1
    rotate(1);
});