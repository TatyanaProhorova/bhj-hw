let activated = document
  .getElementById("modal_main")
  .classList.add("modal_active");
const forClose = document.querySelectorAll(".modal__close");
for (let i = 0; i < forClose.length; i++) {
  // console.log(i, i);
  forClose[i].addEventListener("click", (e) => {
    console.log(i);
    e.preventDefault();
    let modal = forClose[i].closest(".modal");
    if (modal.classList.contains("modal_active")) {
      modal.classList.remove("modal_active");
    }
  });
}
let success = document.querySelector(".show-success");
success.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("modal_success").classList.add("modal_active");
});
