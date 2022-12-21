import { getData } from './api.js';
import { generateClickedBook, createEachBook } from './display.js';
import { goBack, addElement } from './helperFunction.js';
let inputElem = document.querySelector('.input-search');
const btnSearchElem = document.querySelector('.btn__book-search');
async function InputSearch() {
    const dataOfBooks = await getData();
    btnSearchElem?.addEventListener('click', function () {
        const input = inputElem?.value.toLowerCase();
        for (const book of dataOfBooks) {
            if (book.title.toLowerCase() === input ||
                book.author.toLowerCase() === input) {
                addElement();
                generateClickedBook(book);
            }
            else {
                // ELSE körs även oavsett ???
                inputElem.value = '';
                console.log('No Book found! Please try again.');
            }
            document.querySelector('.btn-back')?.addEventListener('click', goBack);
            inputElem.value = '';
        }
    });
}
InputSearch();
async function loadBookList() {
    const dataOfBooks = await getData();
    createEachBook(dataOfBooks);
}
loadBookList();
async function clickedBook() {
    const dataOfBooks = await getData();
    const eachBookElem = document.querySelectorAll('.book-article');
    eachBookElem.forEach((book) => {
        book.addEventListener('click', function (event) {
            const clickedBook = event.currentTarget;
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
clickedBook();
// async function InputSearch() {
//   const dataOfBooks: Book[] = await getData();
//   btnSearchElem?.addEventListener('click', function () {
//     const input = inputElem?.value.toLowerCase();
//     for (const book of dataOfBooks) {
//       if (input !== book.title.toLowerCase()) {
//         return alert('No Book found! Please try again.');
//       } else if (
//         book.title.toLowerCase() === input ||
//         book.author.toLowerCase() === input
//       ) {
//         addElement();
//         generateClickedBook(book);
//       }
//       document.querySelector('.btn-back')?.addEventListener('click', goBack);
//       inputElem.value = '';
//     }
//   });
// }
// InputSearch();
