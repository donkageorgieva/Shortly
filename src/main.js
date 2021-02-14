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
  storedLinks.forEach((link) => {
    const linkObject = JSON.parse(link[1]);
    const shortLink = linkObject.full_short_link;
    const longLink = JSON.parse(link[0]);
    const ui = new UI();
    ui.displayALink(longLink, shortLink);
  });
});
const app = new DOMHandler();
app.init();
