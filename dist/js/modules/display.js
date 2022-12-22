import { addStyles, goBack, checkValidInputSearch } from './helperFunction.js';
const bodyElem = document.querySelector('body');
const bookListElem = document.querySelector('.book-list');
const btnSearchElem = document.querySelector('.btn__book-search');
function generateClickedBook(book) {
    const html = `
  <div class="container book">
  <button class="btn-back"><span>&larr;</span></button>
  <section class="book-section">
  <section class="book-cover">
    <article data-id="${book.id}" class="book-article book-size color" style="background-color: ${book.color};"><h3>${book.title}</h3><p>${book.author}</p>
  <span><span>
  </article>
  </section>
    <section class="book-information">
      <h2 class="book-title">${book.title}</h2>
      <h3 class="book-author">${book.author}</h3>
      <p class="book-text">${book.plot}</p>
    </section>
      <section class="book__sub-information">
        <p><b>Audience:</b> ${book.audience}</p>
        <p><b>First published:</b> ${book.year}</p>
        <p><b>Pages:</b> ${book.pages ? book.pages : ''}</p>
        <p><b>Publisher:</b> ${book.publisher}</p>
      </section>
      <button class="btn__more-information">Oh, I want to read it!</button>
    </section>
  </section>
</div>
  `;
    bodyElem?.insertAdjacentHTML('beforeend', html);
    document.querySelector('.btn-back')?.addEventListener('click', goBack);
}
function createEachBook(book) {
    for (let i = 0; i < book.length; i++) {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const paragraphElement = document.createElement('p');
        const spanElement = document.createElement('span');
        h3Element.textContent = book[i].title;
        paragraphElement.textContent = book[i].author;
        articleElement.setAttribute('data-id', `${book[i].id}`);
        articleElement.classList.add('book-article');
        articleElement.classList.add('color');
        articleElement.style.backgroundColor = book[i].color;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(paragraphElement);
        articleElement.appendChild(spanElement);
        bookListElem?.appendChild(articleElement);
    }
}
function clickedBook(books) {
    const eachBookElem = document.querySelectorAll('.book-article');
    eachBookElem.forEach((book) => {
        book.addEventListener('click', function (event) {
            const clickedBook = event.currentTarget;
            for (const book of books) {
                if (clickedBook?.getAttribute('data-id') === book.id.toString()) {
                    addStyles();
                    generateClickedBook(book);
                }
            }
        });
    });
}
function InputSearch(books) {
    btnSearchElem?.addEventListener('click', function () {
        checkValidInputSearch(books);
    });
}
function clickEnter(books) {
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkValidInputSearch(books);
        }
    });
    return;
}
export { generateClickedBook, bodyElem, createEachBook, InputSearch, clickedBook, clickEnter, };
