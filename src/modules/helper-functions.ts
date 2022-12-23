import { bodyElem, generateClickedBook } from './display-functions.js';
import { Book } from './interface.js';

const containerElem = document.querySelector('.container');
const inputElem: HTMLInputElement = document.querySelector(
  '.input-search'
) as HTMLInputElement;

function goBack(): void {
  document.querySelector('.container')?.classList.remove('show');
  document.querySelector('.container.book')?.remove();
  bodyElem.style.backgroundColor = '#fff';
}

function clickEscape(): void {
  document.addEventListener('keydown', function (event: KeyboardEvent) {
    if (event.key === 'Escape') {
      goBack();
    }
  });
}

function addStyles(): void {
  containerElem?.classList.add('show');
  bodyElem.style.backgroundColor = '#222222';
}

function checkValidInputSearch(books: Book[]) {
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
