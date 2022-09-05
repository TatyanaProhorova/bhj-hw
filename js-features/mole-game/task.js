const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;
getHole = (index) => document.getElementById(`hole${index}`); // выбор дыры по index
for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  // holeHandler - функция, которая запустится по клику
  hole.addEventListener("click", function () {
    if (hole.classList.contains("hole_has-mole")) {
      counterDead++;
      dead.textContent = counterDead;
      if (counterDead === 10) {
        alert("win");
        counterDead = 0;
        counterLost = 0;
        dead.textContent = counterDead;
        lost.textContent = counterLost;
      }
    } else {
      counterLost++;
      lost.textContent = counterLost;
      if (counterLost === 5) {
        alert("defeat");
        counterDead = 0;
        counterLost = 0;
        dead.textContent = counterDead;
        lost.textContent = counterLost;
      }
    }
  });
}

// Используя цикл зарегистрируйте для каждой лунки обработчик событий
// Проверьте наличие нужного класса и увеличьте значение нужного счетчика
// По выигрышу или проигрышу обнулите статистику
// Чтобы не создавать для каждой лунки отдельную переменную, напишите функцию getHole( index ),
// которая по индексу будет возвращать нужный элемент. Обратите внимание, что идентификаторы лунок
// располагают для такого подхода. Пример реализации можно посмотреть в файле base.js.

// Для проверки на наличие того или иного класса, используйте метод includes:
// hole.className.includes( 'hole_has-mole' );
// Более удобный вариант - использовать объект classList, с которым вы познакомитесь позднее.
//  Он содержит удобный метод contains:
// hole.classList.contains( 'hole_has-mole' );
