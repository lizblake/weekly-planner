import { LitElement, html, css } from "lit";
import "./weekly-planner-objective";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

class WeeklyPlannerElement extends LitElement {
  static properties = {
    // mutable
    weekLabel: { type: String },
    moduleTimeIcon: { type: String },
    moduleObjectivesIcon: { type: String },
    moduleIconColor: { type: String },
    //api calls
    weekCounter: { type: Number },
    moduleTitle: { type: String },
    moduleDescription: { type: String },
    timeRemaining: { type: String },
    objectivesTotal: { type: String },

    //Toggle collapse label
    toggleText: { type: String },
  };

  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Anton&family=Source+Sans+Pro:wght@200&display=swap");

    :host {
      font-size: 16px;
      font-weight: 100;
      font-family: "Source Sans Pro", sans-serif;
      --video-icon-background-color: linear-gradient(
        0.25turn,
        #fb814e,
        #f6b343
      );
      --objectives-icon-background-color: linear-gradient(
        0.25turn,
        #45c9b4,
        #3bb3d5
      );
    }

    .plannerContainer {
      display: flex;
      margin: 10px;
    }

    .weekLabel {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .weekCounter {
      padding: 10px;
      font-size: 40px;
    }

    .plannerColumn {
      float: left;
    }
    .left {
      width: 25%;
      text-align: center;
    }
    .right {
      width: 75%;
      border-bottom: 0.5px inset gray;
      padding-bottom: 40px;
    }

    .plannerTitle {
      padding: 20px 0px 10px 0px;
      font-size: 24px;
      font-weight: 100;
    }

    .plannerDescription {
      padding: 10px 0px 10px 0px;
      margin: 0px 0px 10px 0px;
      font-size: 16px;
      font-weight: 300;
    }

    .iconContainer {
      height: 25px;
      width: 25px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      padding: 5px;
      margin: 0px 5px 0px 0px;
      text-align: center;
    }

    .video {
      background: var(--video-icon-background-color);
    }

    .objectives {
      background: var(--objectives-icon-background-color);
    }

    .videoLabel {
      font-weight: 400;
    }
    .objectivesLabel {
      font-weight: 100;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
    }

    .spacing {
      margin: 0px 10px 0px 10px;
    }

    .accordianToggle {
      color: blue;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
    }

    a {
      text-decoration: none;
    }

    simple-icon {
      --simple-icon-color: white;
    }

    a11y-collapse {
      --a11y-collapse-border: none;
      --a11y-collapse-padding-left: 0px;
    }
    
  `;

  constructor() {
    super();
    //mutable
    this.weekLabel = "Week";
    this.moduleTimeIcon = "device:access-time";
    this.moduleObjectivesIcon = "av:library-books";
    this.moduleIconColor = "white";
    
    //api calls
    this.weekCounter = "1";
    this.moduleTitle = "Misconceptions about happiness";
    this.moduleDescription =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.timeRemaining = "2 hours to complete";
    this.objectivesTotal =
      "9 videos (Total 55 min), 3 readings, 1 quiz";
    
    //See all / See less toggle variable
    this.toggleText = "See all";
  }

  __collapseStatusChange() {
    const status = this.shadowRoot.querySelector("a11y-collapse");
    if (status.hasAttribute("expanded")) {
      this.toggleText = "See less";
    } else {
      this.toggleText = "See all";
    }
  }

  render() {
    return html`
      <div class="plannerContainer">
        <div class="plannerColumn left">
          <div class="weekLabel">${this.weekLabel}</div>
          <div class="weekCounter">${this.weekCounter}</div>
        </div>

        <div class="plannerColumn right">
          <span class="iconContainer video">
            <simple-icon
              icon="${this.moduleTimeIcon}"
              style="--simple-icon-color:${this.moduleIconColor};"
            ></simple-icon
          ></span>

          <span class="videoLabel spacing">${this.timeRemaining}</span>

          <div class="plannerTitle">${this.moduleTitle}</div>

          <div class="plannerDescription">
            <slot name="plannerText">${this.moduleDescription}</slot>
          </div>

          <a11y-collapse
            heading-button
            icon="none"
            @expand="${this.__collapseStatusChange}"
            @collapse="${this.__collapseStatusChange}"
          >
            <div slot="heading">
              <span class="iconContainer objectives">
                <simple-icon
                  style="--simple-icon-color:${this.moduleIconColor};"
                  icon="${this.moduleObjectivesIcon}"
                ></simple-icon
              ></span>
              <span class="objectivesLabel spacing"
                >${this.objectivesTotal}</span
              >
            <a class="accordianToggle">${this.toggleText}</a>
            </div>

            <slot name="objectiveAccordian"></slot>
             <!-- inside a11y-collapse -->
           
          </a11y-collapse>
        </div>
      </div>
    `;
  }
}

customElements.define("weekly-planner-element", WeeklyPlannerElement);
