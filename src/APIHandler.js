/* eslint-disable new-parens */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
import { UI } from './UI.js';
import { Storage } from './Storage.js'
import { DOMHandler } from './DOMHandler.js';
// eslint-disable-next-line no-use-before-define
export { APIHandler };



class APIHandler extends UI {
  async shortenALink (link) {
    this.loading();

    try {
      const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link}`,
          {
            method: 'POST'
          }
      );

      const results = await response.json();

      const longLink = results.result.original_link;
      // eslint-disable-next-line new-parens
      const storage = new Storage;
      storage.checkStorage(results.result, longLink);
    } catch (error) {
      const domHandler = new DOMHandler;
      domHandler.getTheLink('linkExists');
      const ui = new UI;
      ui.loading('linkExists');
    }
  }
}
