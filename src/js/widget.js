import { isValidInn } from "./validators";

export default class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
        <form id="form" class="form-inline">
            <div class="form-group">
                <input class="input" name="card_number" type="text" placeholder="Credit card number">
                <a class="submit btn-success">Click to Validate</a>
            </div>
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

  bindToDOM() {
    this.parentEl.insertAdjacentHTML("beforeend", InnFormWidget.markup);

    this.element = this.parentEl.querySelector(InnFormWidget.formSelector);
    this.submit = this.element.querySelector(InnFormWidget.submitSelector);
    this.input = this.element.querySelector(InnFormWidget.inputSelector);

    this.element.addEventListener("submit", this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;

    if (isValidInn(value)) {
      this.input.classList.add("valid");
      this.input.classList.remove("invalid");
    } else {
      this.input.classList.add("invalid");
      this.input.classList.remove("valid");
    }
  }
}
