import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class WeeklyPlannerObjective extends LitElement {
  static properties = {
    objectiveIcon: { type: String },
    objectiveIconColor: { type: String },
    objectiveTitle: { type: String },
    objectiveDetails: { type: String },
  };

  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Anton&family=Source+Sans+Pro:wght@200&display=swap");

    :host {
      font-size: 16px;
      font-weight: 100;
      font-family: "Source Sans Pro", sans-serif;
    }

    .iconContainer {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      display: inline-block;
      padding: 0px;
      margin: 0px 5px 0px 0px;
      text-align: center;
      border: solid 2px;
      border-color: blue;
    }

    .objectiveContainer {
      border-top: 0.5px inset grey;
      padding-top: 20px;

    }

    .objectiveLabel {
      margin: 0px 10px 0px 10px;
    }

    .objectiveDetails {
      padding: 10px 0px 10px 0px;
    }
  `;

  constructor() {
    super();
    this.objectiveTitle = "7 videos";
    this.objectiveIcon = "perm-identity";
    this.objectiveIconColor = "blue";
    this.objectiveDetails = "Why Take Yale's Most Popular Course? 11m";
  }

  render() {
    return html`
      <div class="objectiveContainer">
        <span class="iconContainer">
          <simple-icon
            icon="${this.objectiveIcon}"
            style="--simple-icon-color:${this.objectiveIconColor};"
          ></simple-icon
        ></span>
        <span class="objectiveLabel">${this.objectiveTitle}</span>
        <div class="objectiveDetails">
          <slot name="objectiveText">${this.objectiveDetails}</slot>
        </div>
      </div>
    `;
  }
}

customElements.define("weekly-planner-objective", WeeklyPlannerObjective);
