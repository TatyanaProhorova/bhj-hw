let tabs = Array.from(document.querySelectorAll(".tab"));
let contents = Array.from(document.querySelectorAll(".tab__content"));

let currentTab = tabs[0];
let currentContent = contents[0];
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (e) => {
    if (currentTab !== tabs[i]) {
      currentTab.classList.toggle("tab_active");
      tabs[i].classList.toggle("tab_active");
      currentTab = tabs[i];
      currentContent.classList.toggle("tab__content_active");
      contents[i].classList.toggle("tab__content_active");
      currentContent = contents[i];
    }
  });
}
