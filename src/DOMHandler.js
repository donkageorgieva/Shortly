/* eslint-disable new-parens */
/* eslint-disable semi */
/* eslint-disable no-use-before-define */
import { APIHandler } from './APIHandler.js';
export { DOMHandler };
// extends APIHandler
class DOMHandler {
  inputHandler () {
    const input = document.querySelector('form input');
    input.addEventListener('focus', () => {
      if (input.value === '') {
        return
      }
      input.select();
    })
  }

  init () {
    this.inputHandler();
    document.querySelector('.shorten-btn').addEventListener('click', (e) => {
      e.preventDefault();

      this.getTheLink();
    });
  }

  getTheLink (linkExists) {
    const link = document.querySelector('form input').value;
    const spanelement = document.querySelector('span');
    const inputElement = document.querySelector('input');
    if (link === '' || linkExists) {
      spanelement.style.opacity = '1';

      inputElement.classList.add('invalid');
    } else {
      // eslint-disable-next-line no-constant-condition
      if ((spanelement.style.opacity = '1')) {
        spanelement.style.opacity = '0';
      }
      if (inputElement.classList.contains('invalid')) {
        inputElement.classList.remove('invalid');
      }
      const api = new APIHandler;
      api.shortenALink(link);
    }
  }
}
