import { LitElement, html, css } from 'lit';
import "./weekly-planner-element";

export class ContentList extends LitElement {
    static get tag() {
        return 'content-list';
    }
    static get properties() {
            return {
                weeks: {type: Array},
                month : {type: String}
            }
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
        `;
    }


    constructor() {
        super();
        this.weeks = [];
        this.month = "April";
        this.updateWeek(); 
    }

    async updateWeek() {
      const address = new URL('../api/content.js', import.meta.url).href;
      fetch(address).then((response) =>  {
        if(response.ok) {
            return response.json() 
        }  
        return[];
        })
        .then((data) => {
            this.weeks = data;
        }); 
      console.log(data);

    }

    render() {
        return html `
        <h2>${this.month}</h2>
            <div class="wrapper">
                ${this.weeks.map((week) => 
                    html `
                    <div class="item">
                        <weekly-planner-element weekCounter="${week.counter}" moduleTitle="${week.title}" moduleDescription="${week.description}" timeRemaining="${week.time}" objectivesTotal="${week.total}"></weekly-planner-element>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('content-list', ContentList);