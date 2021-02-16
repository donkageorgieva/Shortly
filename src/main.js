/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable arrow-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-undef */
/* eslint-disable semi */
import { DOMHandler } from './DOMHandler.js';
import { UI } from './UI.js';

document.querySelector('.burgerMenu').addEventListener('click', () => {
  const burgerLinks = document.querySelector('.burgerLinks');
  burgerLinks.classList.toggle('active');
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar) => {
    bar.classList.toggle('active');
  });
  document.querySelector('.burgerMenu').classList.toggle('activeBurgerMenu');
});

window.addEventListener('DOMContentLoaded', () => {
  const storedLinks = Object.entries(localStorage);
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp('http');
  storedLinks.forEach((link) => {
    if (regex.test(link[0])){
      const linkObject = JSON.parse(link[1]);
      const shortLink = linkObject.full_short_link;
      const longLink = JSON.parse(link[0]);
      const ui = new UI();
      ui.displayALink(longLink, shortLink);
    }

  });
});

$('.getStarted-btn').click(()=> {
  // eslint-disable-next-line no-undef
  $('html,body').animate({ scrollTop: $('form').offset().top }, 1000)
})
const app = new DOMHandler();
app.init();

