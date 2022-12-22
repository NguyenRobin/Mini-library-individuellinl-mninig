import { bodyElem, generateClickedBook } from './display.js';
const containerElem = document.querySelector('.container');
const inputElem = document.querySelector('.input-search');
function goBack() {
    document.querySelector('.container')?.classList.remove('show');
    document.querySelector('.container.book')?.remove();
    bodyElem.style.backgroundColor = '#fff';
}
function clickEscape() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            goBack();
        }
    });
}
function addStyles() {
    containerElem?.classList.add('show');
    bodyElem.style.backgroundColor = '#222222';
}
function checkValidInputSearch(books) {
    const input = inputElem?.value.match(/[a-z]/gi)?.join('').toLowerCase();
    for (const book of books) {
        const title = book.title.match(/[a-z]/gi)?.join('').toLowerCase();
        const author = book.author.match(/[a-z]/gi)?.join('').toLowerCase();
        if (input === title || input === author) {
            addStyles();
            generateClickedBook(book);
            inputElem.value = '';
            return;
        }
    }
    return alert('Book not found! Please try another title!📚');
}
export { goBack, addStyles, containerElem, clickEscape, checkValidInputSearch };
