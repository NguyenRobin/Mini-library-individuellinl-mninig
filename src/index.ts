import { getData } from './api.js';
import { Book } from './interface.js';
import { generateClickedBook, bodyElem, createEachBook } from './display.js';
import { goBack, addElement, containerElem } from './helperFunction.js';

let inputElem: HTMLInputElement = document.querySelector(
  '.input-search'
) as HTMLInputElement;
const btnSearchElem: HTMLButtonElement | null =
  document.querySelector('.btn__book-search');

async function InputSearch() {
  const dataOfBooks: Book[] = await getData();

  btnSearchElem?.addEventListener('click', function () {
    const input = inputElem?.value.toLowerCase();

    for (const book of dataOfBooks) {
      if (
        book.title.toLowerCase() === input ||
        book.author.toLowerCase() === input
      ) {
        addElement();
        generateClickedBook(book);
      } else {
        console.log('No Book found! Please try again.');
        // console.log(alert('Book not found! Please try again.'));
      }
    }
    document.querySelector('.btn-back')?.addEventListener('click', goBack);
    inputElem.value = '';
  });
}
InputSearch();

async function loadBookList() {
  const dataOfBooks: Book[] = await getData();
  createEachBook(dataOfBooks);

  const eachBookElem = document.querySelectorAll('.book-article');
  eachBookElem.forEach((book) => {
    book.addEventListener('click', function (event: Event) {
      const clickedBook: HTMLElement | null =
        event.currentTarget as HTMLElement;

      for (const book of dataOfBooks) {
        if (clickedBook?.getAttribute('data-id') === book.id.toString()) {
          addElement();
          generateClickedBook(book);
        }
      }
      document.querySelector('.btn-back')?.addEventListener('click', goBack);
    });
  });
}
loadBookList();
