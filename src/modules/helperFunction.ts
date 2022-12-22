import { bodyElem } from './display.js';

const containerElem = document.querySelector('.container');

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
export { goBack, addStyles, containerElem, clickEscape };
