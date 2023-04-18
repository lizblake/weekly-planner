import { html } from 'lit';
import '../src/weekly-planner.js';

export default {
  title: 'WeeklyPlanner',
  component: 'weekly-planner',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <weekly-planner
      style="--weekly-planner-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </weekly-planner>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
