import { Sidebar } from './';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      summary: "Medical History",
      flags: [
        {
          name: "PrimaryCareProvider/FollowUp",
          humanName: "Follow up",
        },
        {
          name: "CardiacFaliure/Symptoms",
          humanName: "Heart failure",
        }
      ],
      problems: [
        {
          name: "SleepApnea",
          humanName: "Sleep apnea",
        },
        {
          name: "GERD",
          humanName: "Acid reflux",
        }
      ],
      allergies: [
        {
          name: "Penacillin",
          humanName: "Penacillin",
        }
      ],
      medications: [
        {
          name: "Aspirin",
          humanName: "Aspirin",
        }
      ]
    }
  ]
};
