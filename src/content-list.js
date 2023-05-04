import { LitElement, html, css } from "lit";
import "./weekly-planner-element";
import "./weekly-planner-objective";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";

export class ContentList extends IntersectionObserverMixin(LitElement) {
  static get tag() {
    return "content-list";
  }
  static get properties() {
    let observer = {};
    if (super.properties) {
      observer = super.properties;
    }
    return {
      ...observer,
      weeks: { type: Array },
      videos: { type: Array },
      readings: { type: Array },
      quizzes: { type: Array },
      month: { type: String },
      testText: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.weeks = [];
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
    this.counter = 0;
    this.month = "April";
    this.videosTitle = "7 videos";
    this.readingsTitle = "7 readings";
    this.quizzesTitle = "7 quizzes";
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
      ${this.elementVisible
        ? html`
            ${this.weeks.map(
              (week) =>
                html`
                  <weekly-planner-element
                    weekCounter="${this.__counter()}"
                    moduleTitle="${week.title}"
                    moduleDescription="${week.description}"
                    timeRemaining="${week.time}"
                    objectivesTotal="${week.objectives}"
                    .videos="${week.videos}"
                    .readings="${week.readings}"
                    .quizzes="${week.quizzes}"
                  >
                    <div slot="objectiveAccordian">
                      <weekly-planner-objective
                        objectiveTitle="${this.videosTitle}"
                      >
                        <div slot="objectiveText">
                          testing to see if something populates here, anything
                          really would be nice

                          <ul>
                            ${this.videos.map(
                              (video) => html`
                                <li>${video.title}</li>
                                <li>${video.duration}</li>
                              `
                            )}
                          </ul>
                        </div>
                      </weekly-planner-objective>
                      <weekly-planner-objective
                        objectiveTitle="${this.readingsTitle}"
                      >
                        <div slot="objectiveText">
                          testing to see if something populates here, anything
                          really would be nice

                          <ul>
                            ${this.readings.map(
                              (reading) => html`
                                <li>${reading.title}</li>
                                <li>${reading.duration}</li>
                              `
                            )}
                          </ul>
                        </div>
                      </weekly-planner-objective>
                      <weekly-planner-objective
                        objectiveTitle="${this.quizzesTitle}"
                      >
                        <div slot="objectiveText">
                          testing to see if something populates here, anything
                          really would be nice

                          <ul>
                            ${this.quizzes.map(
                              (quiz) => html`
                                <li>${quiz.title}</li>
                                <li>${quiz.duration}</li>
                              `
                            )}
                          </ul>
                        </div>
                      </weekly-planner-objective>
                    </div>
                  </weekly-planner-element>
                `
            )}
          `
        : ``}
    `;
  }
}

customElements.define("content-list", ContentList);
