import { Controller } from "@hotwired/stimulus";
var ReactRailsUJS = require("react_ujs");

export default class extends Controller {
  connect() {
    this.observeChange();
    console.log("observing changes");
  }

  disconnect() {
    this.observer.disconnect();
  }

  observeChange() {
    const callback = function (mutationsList, _observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          ReactRailsUJS.mountComponents(this.element);
        }
      }
    };

    this.observer = new MutationObserver(callback);
    this.observer.observe(this.element, { childList: true });
  }
}
