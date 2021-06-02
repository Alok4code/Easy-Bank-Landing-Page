const NAV_LINKS = document.querySelector('.nav-links');
const H_BTN = document.querySelector('.hamburger-btn');
const TOGGLE_IMG = document.querySelector('#toggle-img');

H_BTN.addEventListener('click', () => {
  NAV_LINKS.classList.toggle('open');
  isOpen = NAV_LINKS.classList.contains('open');
  if (isOpen) {
    TOGGLE_IMG.src = './images/icon-close.svg';
  } else {
    TOGGLE_IMG.src = './images/icon-hamburger.svg';
  }
});
