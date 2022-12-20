const bodyElem = document.querySelector('body');
const bookListElem = document.querySelector('.book-list');
function generateClickedBook(book) {
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
}
function createEachBook(book) {
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
export { generateClickedBook, bodyElem, createEachBook };
