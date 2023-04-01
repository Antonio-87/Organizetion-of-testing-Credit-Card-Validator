import issuers from "./issuers";

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
    for (const [key, value] of Object.entries(issuers)) {
      this.parentEl.insertAdjacentHTML("beforeend", this.markup(key));
      document
        .querySelector(`.${key.toLowerCase()}`)
        .setAttribute("style", `background-image: ${value}; opacity: 0.2`);
    }
  }
}
