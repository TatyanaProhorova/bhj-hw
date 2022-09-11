let links = document.querySelectorAll(".menu__link");
const linksLen = document.querySelectorAll(".menu__link").length; 
for (let item = 0; item < linksLen; item++) {
  links[item].addEventListener("click", (e) => {
    let menuItem = links[item].closest(".menu__item");
    let sub = menuItem.querySelector(".menu_sub");
    if (sub) {
      sub.classList.toggle("menu_active");
      e.preventDefault();
    }
  });
}
