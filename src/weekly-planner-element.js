import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class WeeklyPlannerElement extends LitElement {
  static properties = {
    plannerLabel: { type: String },
    plannerCounter: { type: Number },
    plannerTitle: { type: String },
    plannerDescription: { type: String },
    plannerTimeIcon: { type: String },
    plannerObjectivesIcon: { type: String },
    plannerTimeCounter: { type: String },
    plannerObjectivesCounter: { type: String },
    plannerIconColor: { type: String },
    openDetails: { type: Boolean, reflect: true },
    toggleText: { type: String },
  };

  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Anton&family=Source+Sans+Pro:wght@200&display=swap");

    :host {
      font-size: 16px;
      font-weight: 100;
      font-family: "Anton", sans-serif;
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

    .plannerLabel {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .plannerCounter {
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
    }

    .spacing {
      margin: 0px 10px 0px 10px;
    }

    .accordianToggle {
      color: blue;
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
    this.plannerLabel = "Week";
    this.plannerCounter = "1";
    this.plannerTitle = "Misconceptions about happiness";
    this.plannerDescription =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.plannerTimeIcon = "perm-identity";
    this.plannerObjectivesIcon = "perm-identity";
    this.plannerIconColor = "white";
    this.plannerTimeCounter = "2 hours to complete";
    this.plannerObjectivesCounter =
      "9 videos (Total 55 min), 3 readings, 1 quiz";
    this.toggleText = "See all";
  }

  __collapseStatusChange() {
    const toggleTest = this.shadowRoot.querySelector("a11y-collapse");
    if (toggleTest.hasAttribute("expanded")) {
      this.toggleText = "See less";
    } else {
      this.toggleText = "See all";
    }
}

  render() {
    return html`
      <div class="plannerContainer">
        <div class="plannerColumn left">
          <div class="plannerLabel">${this.plannerLabel}</div>
          <div class="plannerCounter">${this.plannerCounter}</div>
        </div>

        <div class="plannerColumn right">
          <span class="iconContainer video">
            <simple-icon
              icon="${this.plannerTimeIcon}"
              style="--simple-icon-color:${this.plannerIconColor};"
            ></simple-icon
          ></span>

          <span class="videoLabel spacing">${this.plannerTimeCounter}</span>

          <div class="plannerTitle">${this.plannerTitle}</div>

          <div class="plannerDescription">
            <slot name="plannerText">${this.plannerDescription}</slot>
          </div>

          <a11y-collapse icon="none" @expand="${this.__collapseStatusChange}" @collapse="${this.__collapseStatusChange}">
            <div slot="heading">
              <span class="iconContainer objectives">
                <simple-icon
                  style="--simple-icon-color:${this.plannerIconColor};"
                  icon="${this.plannerObjectivesIcon}"
                ></simple-icon
              ></span>
              <span class="objectivesLabel spacing"
                >${this.plannerObjectivesCounter}</span
              >
              <span class="accordianToggle"><a>${this.toggleText}</a></span>
            </div>
            <div class="videoSegment">
              <h1>VIDEOS</h1>
              Our Minds Are Bad at Predicting Our Feelings6m Happiness Problem
              #1: We Get Used to Stuff but Don't Know It10m How Can We Deal with
              Hedonic Adaptation?7m Happiness Problem #2: We Compare Ourselves a
              Lot3m Happiness Problem #2: We Compare Ourselves to Other
              People10m How Can We Deal with Social Comparisons?2m Happiness
              Problem #3: Our Attention Is Limited7m How Can We Deal with
              Limited Attention?5m
            </div>
            <div class="readingsSegment">
            <h1>READINGS</h1>
              Our Minds Are Bad at Predicting Our Feelings6m Happiness Problem
              #1: We Get Used to Stuff but Don't Know It10m How Can We Deal with
              Hedonic Adaptation?7m Happiness Problem #2: We Compare Ourselves a
              Lot3m Happiness Problem #2: We Compare Ourselves to Other
              People10m How Can We Deal with Social Comparisons?2m Happiness
              Problem #3: Our Attention Is Limited7m How Can We Deal with
              Limited Attention?5m
            </div>
            <div class="practiceSegment">
            <h1>PRACTICE</h1>
              Our Minds Are Bad at Predicting Our Feelings6m Happiness Problem
              #1: We Get Used to Stuff but Don't Know It10m How Can We Deal with
              Hedonic Adaptation?7m Happiness Problem #2: We Compare Ourselves a
              Lot3m Happiness Problem #2: We Compare Ourselves to Other
              People10m How Can We Deal with Social Comparisons?2m Happiness
              Problem #3: Our Attention Is Limited7m How Can We Deal with
              Limited Attention?5m
            </div>
          

            </a11y-collapse>
            <!-- make this a seperate element so I can just call that and modify it -->
            
          <!-- When a11y-collapse is sent to expanded true, change See all to See less-->
        </div>
      </div>
    `;
  }
}

customElements.define("weekly-planner-element", WeeklyPlannerElement);
