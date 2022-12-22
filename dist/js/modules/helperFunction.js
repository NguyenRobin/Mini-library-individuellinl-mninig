import { bodyElem } from './display.js';
const containerElem = document.querySelector('.container');
function goBack() {
    document.querySelector('.container')?.classList.remove('show');
    document.querySelector('.container.book')?.remove();
    bodyElem.style.backgroundColor = '#fff';
}
function clickEscape() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            goBack();
        }
    });
}
function addStyles() {
    containerElem?.classList.add('show');
    bodyElem.style.backgroundColor = '#222222';
}
export { goBack, addStyles, containerElem, clickEscape };
