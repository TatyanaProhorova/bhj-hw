const sizes = Array.from(document.querySelectorAll('.font-size'));
let currentSize = document.querySelector('.font-size_active');
let book = document.querySelector('.book');
for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (sizes[i] !== currentSize) {
    currentSize.classList.toggle('font-size_active');
    sizes[i].classList.toggle('font-size_active');
    currentSize = sizes[i];
    book.classList.remove('book_fs-big', 'book_fs-small');

    if (sizes[i].dataset.size == "small") {
    book.classList.add('book_fs-small');
    }
    if (sizes[i].dataset.size == "big") {
    book.classList.add('book_fs-big');
    }
    }
  })  
}

