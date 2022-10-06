const elements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("reveal_active")) {
      let { top, bottom } = elements[i].getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        elements[i].classList.add("reveal_active");
      }
    }
  }
});

