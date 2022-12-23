import { getData } from './modules/api.js';
import { clickEscape } from './modules/helper-functions.js';
import {
  createEachBook,
  InputSearch,
  clickedBook,
  clickEnter,
} from './modules/display-functions.js';
async function loadPage() {
  const dataOfBooks = await getData();
  createEachBook(dataOfBooks);
  clickedBook(dataOfBooks);
  InputSearch(dataOfBooks);
  clickEnter(dataOfBooks);
  clickEscape();
}
loadPage();
// Robin Nguyen
