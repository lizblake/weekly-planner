import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


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
    }

    .plannerTitle {
      padding: 10px 0px 10px 0px;
      font-size: 24px;
      font-weight: 100;
    }

    .plannerDescription {
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
      background: linear-gradient(0.25turn,#FB814E,#F6B343);
    }

    .objectives {
      background: linear-gradient(0.25turn, #45C9B4,#3BB3D5);
    }

    simple-icon {
      --simple-icon-color: white;
    }
  
  `;

  constructor() {
    super();
    this.plannerLabel = "Week";
    this.plannerCounter = "1";
    this.plannerTitle = "Misconceptions about happiness";
    this.plannerTimeIcon = "perm-identity";
    this.plannerObjectivesIcon = "perm-identity";
    this.plannerIconColor = "white";
    this.plannerTimeCounter = "2 hours to complete";
    this.plannerObjectivesCounter = "9 videos (Total 55 min), 3 readings, 1 quiz";
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
          ></simple-icon></span>  
          
          <span>${this.plannerTimeCounter}</span>

          <div class="plannerTitle">${this.plannerTitle}</div>

          <div class="plannerDescription"><slot name="plannerText"></slot></div>

          <span class="iconContainer objectives">
          <simple-icon
            style="--simple-icon-color:${this.plannerIconColor};"
            icon="${this.plannerObjectivesIcon}"
          ></simple-icon></span>
          <span>${this.plannerObjectivesCounter}</span>
        
        </div>
      
      </div>
    `;
  }
}

customElements.define("weekly-planner-element", WeeklyPlannerElement);
