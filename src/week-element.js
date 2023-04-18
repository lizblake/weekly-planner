import { LitElement, html, css } from 'lit';


class WeekElement extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--weekly-planner-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class=weekContainer>
     <div class=weekLabel>
         text
     </div>
     <div class="weekContent">
     <slot name="timerIcon"></slot>
     <div class="weekTitle">Title</div>
     <div class="weekDescription">paragraph</div>
     <slot name="videoIcon"></slot>
     </div>
    </div>
    `;
  }
}

customElements.define('week-element', WeekElement);