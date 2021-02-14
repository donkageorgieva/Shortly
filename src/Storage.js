/* eslint-disable new-parens */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable lines-between-class-members */
import {UI} from './UI.js';
export {Storage};


class Storage extends UI {
  addToStorage(link) {
    const ui = new UI;
    ui.displayALink(link.original_link, link.full_short_link);

    const originalLink = JSON.stringify(link.original_link);
    const linkObject = JSON.stringify(link);
    window.localStorage.setItem(originalLink, linkObject);
  }
  checkStorage(link, keyName) {
    if (localStorage.getItem(JSON.stringify(keyName)) === null) {
      this.addToStorage(link);
    } else {
      const ui = new UI;
      ui.loading('linkExists');
    }
  }
}