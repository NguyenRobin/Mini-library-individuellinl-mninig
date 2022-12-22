import { getData } from './modules/api.js';
import { clickEscape } from './modules/helperFunction.js';
import { createEachBook, InputSearch, clickedBook, clickEnter, } from './modules/display.js';
async function loadBookList() {
    const dataOfBooks = await getData();
    createEachBook(dataOfBooks);
    clickedBook(dataOfBooks);
    InputSearch(dataOfBooks);
    clickEnter(dataOfBooks);
    clickEscape();
}
loadBookList();
