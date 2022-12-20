import { bodyElem } from './display.js';
const containerElem = document.querySelector('.container');
function goBack() {
    document.querySelector('.container')?.classList.remove('show');
    document.querySelector('.container.book')?.remove();
    bodyElem.style.backgroundColor = '#fff';
}
function addElement() {
    containerElem?.classList.add('show');
    bodyElem.style.backgroundColor = '#222222';
}
export { goBack, addElement, containerElem };
