class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  onKey = (e) => {
    if (!this.currentSymbol) {
      this.currentSymbol = document.querySelector(".symbol");
    }
    if (e.key === this.currentSymbol.textContent.toLowerCase()) {
      this.success();
    } else {
      this.fail();
    }
  };

  registerEvents() {
    document.addEventListener("keyup", this.onKey);
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");

    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));

// Если игрок вводит не так слово, ему засчитываeтся поражение.
// После 3 поражений игра заканчивается. Игрок побеждает после 10 побед.

// Допишите метод *registerEvents*, в котором необходимо задать обработчик
// нажатия клавиш. Принцип работы метода:

// 1. Получить DOM-элемент текущего символа, который необходимо ввести (свойство *this.currentSymbol*)
// 2. Получить символ, который был введён с клавиатуры.
// 3. Если два символа одинаковые, вызывать метод *this.success*
// 4. Если два символа отличаются, вызвать метод *this.fail*
// 5. При сравнении регистр не должен быть важен (а или А)
