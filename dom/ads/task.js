setInterval(rotate, 1000);

const slogans = Array.from(document.querySelectorAll(".rotator__case"));
const slogansLength = slogans.length;
let sloganActive = slogans[0];
let index = 0;

function rotate() {
  if (index + 1 === slogansLength) {
    index = 0
  } else {index++};

  sloganActive.classList.toggle("rotator__case_active");
  slogans[index].classList.toggle("rotator__case_active");
  sloganActive = slogans[index];
}