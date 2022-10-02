// 1. Используя цикл зарегистрируйте обработчики события *click* на элементах с классом *menu__link*
// 2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс *menu_active*
// 3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные
// пункты меню должны без помех переводить пользователя на соответствующие страницы.
// * <details>
// <summary>Используемые темы</summary>

// 1. Событие *click*, метод *onclick*, обработчик события
// 2. Предотвращение действия по умолчанию (*return false* в обработчике события)
// 3. Метод *closest*
// 4. Методы *querySelector* и *querySelectorAll*
// 5. Метод Array.from() или оператор распространения (spread, «...») для удобной
// навигации по найденным элементам

// </details>

// <details>
// <summary>Советы</summary>

// 1. С помощью методов [*closest*](https://developer.mozilla.org/ru/docs/Web/API/Element/closest),
// [*querySelector*](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelector)
// и [*querySelecto1rAll*](https://developer.mozilla.org/ru/docs/Web/API/Element/querySelectorAll)
// вы можете найти все подходящие элементы
//     1. *closest* позволит найти ближайшего родителя по CSS-селектору
//     2. *querySelector* позволит найти __первый__ дочерний элемент по CSS-селектору
//     3. *querySelectorAll* позволит найти __все__ дочерние элемент по CSS-селектору
// 2. Для вложенных м ю вы обязаны возвращать *false* в обработчиках события для
// предотвращения перехода по ссылке.

// </details> */}

  

// window.addEventListener('load', () =>{    



  let links = document.querySelectorAll(".menu__link"); // Array.from(document.querySelectorAll(".menu__link"));
  console.log(links[2]);
  const linksLen = Array.from(document.querySelectorAll(".menu__link")).length;
  console.log(linksLen);

  
 //  console.log("links", len, links[2], Array.from(document.querySelectorAll(".menu__link"))[2]);
  // let menu = links[2].closest(".menu__item");
  /* console.log('menu');

      let sub =links[2].closest(".menu_sub");
      console.log('sub', sub);
      debugger;
      if (sub) {
        sub.classList.toggle("menu_active");
      }
      console.log("sub", sub);*/
  for (let link = 0; link < linksLen; link++) {
    ///////////////
    links[link].addEventListener("click", (e) => {
      // e.preventDefault();
      // let sub = links[link].closest(".menu_sub");
      let item = links[link].closest(".menu__item");
      let sub = item.querySelector('.menu_sub');
      console.log('sub', sub);      
      if (sub) {
        sub.classList.toggle("menu_active");
        e.preventDefault();
      } 
    });
  }
// });    
