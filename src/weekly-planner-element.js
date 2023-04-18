import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


class WeeklyPlannerElement extends LitElement {
  static properties = {
    plannerLabel: { type: String },
    plannerCounter: { type: Number },
    plannerTitle: { type: String },
    plannerDescription: { type: String },
    plannerIcon: { type: String },
    plannerIconColor: { type: String },
  };

  static styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Source+Sans+Pro:wght@200&display=swap');

    :host {
      font-size: 12px;
      font-weight: 100px;
      font-family: 'Anton', sans-serif;
      font-family: 'Source Sans Pro', sans-serif;
    }

    .plannerContainer {
      display: flex;
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
    }

    .plannerTitle {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 24px;
      font-weight: 200;
    }

    .iconContainer {
      height: 25px;
      width: 25px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      padding: 5px;
      margin: 10px;
      text-align: center;
    }

    .video {
      background: linear-gradient(0.25turn,#FB814E,#F6B343);
    }

    .objectives {
      background: linear-gradient(0.25turn, #45C9B4,#3BB3D5);
    }
  
  `;

  constructor() {
    super();
    this.plannerLabel = "Week";
    this.plannerCounter = "1";
    this.plannerTitle = "Misconceptions about happiness";
    this.plannerDescription =
      "In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.";
    this.plannerIcon = "perm-identity";
    this.plannerIconColor = "white";
    this.plannerTimeCounter = "2";
    this.plannerVideoCounter = "9";
    this.plannerIconTimeLabel = "hours to complete";
    this.plannerIconObjectivesLabel = "videos";
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
            accent-color="${this.plannerIconColor}"
            icon="${this.plannerIcon}"
          ></simple-icon></span>  
          
          <span>${this.plannerTimeCounter} ${this.plannerIconTimeLabel}</span>

          <div class="plannerTitle">${this.plannerTitle}</div>

          <div class="plannerDescription">${this.plannerDescription}</div>

          <span class="iconContainer objectives">
          <simple-icon
            accent-color="${this.plannerIconColor}"
            icon="${this.plannerIcon}"
          ></simple-icon></span>
          <span>${this.plannerVideoCounter} ${this.plannerIconObjectivesLabel}</span>
        
        </div>
      
      </div>
    `;
  }
}

customElements.define("weekly-planner-element", WeeklyPlannerElement);
