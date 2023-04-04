import { isValidInn } from "./validators";
import { cardType } from "./card-type";

export default class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get markup() {
    return `
        <form id="form" class="form-inline">
            <div class="form-group">
                <input class="input" name="card_number" type="text" placeholder="Credit card number">
            </div>
            <button class="submit btn-success">Click to Validate</button>
            <div class="tooltip-inner">Please insert a credit card number</div>
        </form>
        `;
  }

  static get submitSelector() {
    return ".submit";
  }

  static get inputSelector() {
    return ".input";
  }

  static get formSelector() {
    return ".form-inline";
  }

  static get tooltipSelector() {
    return ".tooltip-inner";
  }

  bindToDOM() {
    this.parentEl.insertAdjacentHTML("beforeend", InnFormWidget.markup);

    this.element = this.parentEl.querySelector(InnFormWidget.formSelector);
    this.submit = this.element.querySelector(InnFormWidget.submitSelector);
    this.input = this.element.querySelector(InnFormWidget.inputSelector);
    this.tooltip = this.element.querySelector(InnFormWidget.tooltipSelector);

    this.element.addEventListener("submit", this.onSubmit);
    this.element.addEventListener("input", this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;

    if (isValidInn(value) === true) {
      this.input.classList.add("valid");
      this.input.classList.remove("invalid");
    } else {
      this.input.classList.add("invalid");
      this.input.classList.remove("valid");
    }
    this.input.value = "";
    if (this.input.classList.contains("invalid")) {
      this.tooltip.classList.add("popup");
    }
  }

  onInput(e) {
    e.preventDefault();

    const value = this.input.value;

    this.tooltip.classList.remove("popup");
    const name = cardType(value);
    const activCard = document.querySelector(".visible");

    if (value === "" && activCard) activCard.classList.remove("visible");

    if (name !== "unknown") {
      document.querySelector(`.${name}`).classList.add("visible");
    }
  }
}
