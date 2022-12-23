import { getData } from './modules/api.js';
import { Book } from './modules/interface.js';
import { clickEscape } from './modules/helper-functions.js';
import {
  createEachBook,
  InputSearch,
  clickedBook,
  clickEnter,
} from './modules/display-functions.js';

async function loadPage() {
  const dataOfBooks: Book[] = await getData();

  createEachBook(dataOfBooks);
  clickedBook(dataOfBooks);
  InputSearch(dataOfBooks);
  clickEnter(dataOfBooks);
  clickEscape();
}
loadPage();
