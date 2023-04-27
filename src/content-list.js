import { LitElement, html, css } from "lit";
import "./weekly-planner-element";
import "./weekly-planner-objective";
import "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

export class ContentList extends LitElement {
  static get tag() {
    return "content-list";
  }
  static get properties() {
    return {
      weeks: { type: Array },
      month: { type: String },
      testText: { type: String},
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.weeks = [];
    this.counter = 0;
    this.month = "April";
    this.videosTitle = "Videos";
    this.readingsTitle = "Readings";
    this.quizzesTitle = "Quizzes";
    this.updateWeek();
  }

  async updateWeek() {
    const address = "../api/content";
    fetch(address)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
        return [];
      })
      .then((data) => {
        this.weeks = data;
      });
    console.log(data);
  }

  __counter() {
    this.counter += 1;
    return this.counter; 
  }

  render() {
    return html`
        ${this.weeks.map(
          (week) =>
            html`
            <weekly-planner-element
                  weekCounter="${this.__counter()}"
                  moduleTitle="${week.title}"
                  moduleDescription="${week.description}"
                  timeRemaining="${week.time}"
                  objectivesTotal="${week.objectives}"
                >
                <div slot="objectiveAccordian">
                  <weekly-planner-objective objectiveTitle="${this.videosTitle}"></weekly-planner-objective>
                  <weekly-planner-objective objectiveTitle="${this.readingsTitle}"></weekly-planner-objective>
                  <weekly-planner-objective objectiveTitle="${this.quizzesTitle}"></weekly-planner-objective>
                </div>
              </weekly-planner-element>
            `)}
    `;
  }
}

customElements.define("content-list", ContentList);
