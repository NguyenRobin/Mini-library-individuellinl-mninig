"use strict";
const bookListElem = document.querySelector('.book-list');
const bodyElem = document.querySelector('body');
const containerElem = document.querySelector('.container');
const inputElem = document.querySelector('.input-search');
const btnSearchElem = document.querySelector('.btn__book-search');
btnSearchElem?.addEventListener('click', async function () {
    const dataBook = await getData();
    const input = inputElem?.value.toLowerCase();
    for (const book of dataBook) {
        if (input === book.title.toLowerCase()) {
            containerElem?.classList.add('show');
            bodyElem.style.backgroundColor = '#222222';
            displayClickedBook(book);
        }
    }
    document.querySelector('.btn-back')?.addEventListener('click', function () {
        document.querySelector('.container')?.classList.remove('show');
        document.querySelector('.container.book')?.remove();
        bodyElem.style.backgroundColor = '#fff';
    });
});
async function getData() {
    try {
        const url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
        // console.log('url ->', url);
        const response = await fetch(url);
        if (!response.ok)
            throw Error('Problem getting data from API! ⛔️');
        const data = await response.json();
        console.log('data ->', data);
        return data;
    }
    catch (error) {
        console.error('error.message->', error.message);
        console.log('error->', error);
        console.dir('error object ->', error);
        throw error;
    }
}
function createBookCover(book) {
    for (let i = 0; i < book.length; i++) {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        const paragraphElement = document.createElement('p');
        h3Element.textContent = book[i].title;
        paragraphElement.textContent = book[i].author;
        articleElement.setAttribute('data-id', `${book[i].id}`);
        // console.log(typeof articleElement.getAttribute('data-id'));
        articleElement.classList.add('book-article');
        articleElement.classList.add('color');
        articleElement.style.backgroundColor = book[i].color;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(paragraphElement);
        bookListElem?.appendChild(articleElement);
    }
}
async function loadBookList() {
    const data = await getData();
    createBookCover(data);
    document.querySelectorAll('.book-article').forEach((book) => {
        book.addEventListener('click', function (event) {
            const clickedBook = event.currentTarget;
            // console.log(clickedBook);
            for (const book of data) {
                if (clickedBook.getAttribute('data-id') === book.id.toString()) {
                    containerElem?.classList.add('show');
                    bodyElem.style.backgroundColor = '#222222';
                    displayClickedBook(book);
                    // console.log('click');
                }
            }
            document
                .querySelector('.btn-back')
                ?.addEventListener('click', function () {
                document.querySelector('.container')?.classList.remove('show');
                document.querySelector('.container.book')?.remove();
                bodyElem.style.backgroundColor = '#fff';
            });
        });
    });
}
loadBookList();
function displayClickedBook(book) {
    const html = `
  <div class="container book">
  <button class="btn-back"><span>&larr;</span></button>
  <section class="book-section">
  <section class="book-cover">
    <article data-id="${book.id}" class="book-article book-size color" style="background-color: ${book.color};"><h3>${book.title}</h3><p>${book.author}</p></article>
  </section>
    <section class="book-information">
      <h2 class="book-title">${book.title}</h2>
      <h3 class="book-author">${book.author}</h3>
      <p class="book-text">${book.plot}</p>
    </section>
      <section class="book__sub-information">
        <p><b>Audience:</b> ${book.audience}</p>
        <p><b>First published:</b> ${book.publisher}</p>
        <p><b>Pages:</b> ${book.pages ? book.pages : ''}</p>
        <p><b>Publisher:</b> ${book.publisher}</p>
      </section>
      <button class="btn__more-information">Oh, I want to read it!</button>
    </section>
  </section>
</div>
  `;
    bodyElem?.insertAdjacentHTML('beforeend', html);
}
