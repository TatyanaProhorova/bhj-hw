let current = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
current.addEventListener("click", (e) => {
  list.classList.toggle("dropdown__list_active");
});
let itemList = document.getElementsByClassName("dropdown__item");
for (let i = 0; i < itemList.length; i++) {
  itemList[i].addEventListener("click", (e) => {
    e.preventDefault();
    list.classList.toggle("dropdown__list_active");
    current.textContent = itemList[i].textContent;
  });
}
