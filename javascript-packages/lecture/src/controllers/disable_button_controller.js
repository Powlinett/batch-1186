import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link"]
  
  disable() {
    this.buttonTarget.disabled = true;
    this.buttonTarget.innerText = 'clicked';

    this.linkTarget.classList.remove('d-none');
  }

  reset(event) {
    this.buttonTarget.disabled = false;
    this.buttonTarget.innerText = 'Click me!';

    this.linkTarget.classList.add('d-none');
  }
}
