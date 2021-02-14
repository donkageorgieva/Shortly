/* eslint-disable no-multiple-empty-lines */
/* eslint-disable new-parens */
/* eslint-disable space-before-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-return */
/* eslint-disable semi */
/* eslint-disable no-use-before-define */
import { DOMHandler } from './DOMHandler.js';
export { UI };


class UI {
  constructor () {
    this.linkList = document.querySelector('.linkList');
  }

  loading (linkExists) {
    if (!linkExists){
      if (this.linkList.querySelector('h2') != undefined) {
        return;
      } else {
        const loadingElement = document.createElement('h2');
        loadingElement.textContent = 'Loading...';
        loadingElement.classList.add('py-4');
        const linkList = document.querySelector('.linkList');
        linkList.append(loadingElement);
      }
    } else {
      const h2 = this.linkList.querySelector('h2');
      this.linkList.removeChild(h2);
      const domHandler = new DOMHandler;
      domHandler.getTheLink('linkExists');
    }
  }

  displayALink (longLink, shortLink) {
    if (this.linkList.querySelector('h2') != undefined) {
      const h2 = this.linkList.querySelector('h2');
      this.linkList.removeChild(h2);
    }

    const generatedLink = document.createElement('div');
    generatedLink.classList.add('linksStyle');
    generatedLink.classList.add('my-1');
    generatedLink.innerHTML = `<div class='m1'><p class='py-2'>${longLink} </p></div><div class='flex '> <a href="#" class='py-2'>${shortLink} </a> <button class='copy-btn'> Copy</button></div>`;
    this.linkList.append(generatedLink);

    this.copyAlink(this.linkList);
  }

  copyAlink (parentElement) {
    parentElement.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('copied');
        e.target.textContent = 'Copied';

        const cardElement = e.target.closest('div');

        const chosenLink = cardElement.querySelector('a').textContent;
        navigator.clipboard.writeText(chosenLink);
      }
    });
  }
}
