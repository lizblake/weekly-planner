import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class WeeklyPlannerIcon extends LitElement {
  static properties = {
    plannerIcon: { type: String },
  };

  static styles = css`
    :host {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 48px;
      color: black;
      font-weight: 400;
    }

    .icon-container {
      height: 50px;
      width: 50px;
      background-color: #bbb;
      border-radius: 50%;
    }
  `;

  constructor() {
    super();
    this.plannerIcon = " ";
    this.plannerIconColor = " "; 
  }

  render() {
    return html`
      <div class="icon-container">
        <simple-icon
          accent-color="${this.plannerIconColor}"
          icon="${this.plannerIcon}"
        ></simple-icon>
      </div>
    `;
  }
}

customElements.define("weekly-planner-icon", WeeklyPlannerIcon);
