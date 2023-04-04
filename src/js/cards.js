import issuers from "./issuers";
import "../img/card-amex.gif";
import "../img/card-diners.gif";

export default class Cards {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  markup(cardName) {
    return `
        <li>
            <span class="card ${cardName.toLowerCase()}" title="${cardName.toUpperCase()}">${cardName.toUpperCase()}</span>
        </li>
        `;
  }

  bindToDOM() {
    for (const key of issuers) {
      this.parentEl.insertAdjacentHTML("beforeend", this.markup(key));
    }
  }
}
