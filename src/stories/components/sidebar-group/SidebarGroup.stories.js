import { SidebarGroup } from './';

export default {
  title: 'Example/Sidebar Group',
  component: SidebarGroup,
};

const Template = (args) => <SidebarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Flag',
  items: [
    {
      name: "PrimaryCareProvider/FollowUp",
      humanName: "Follow up",
    },
    {
      name: "CardiacFaliure/Symptoms",
      humanName: "Heart failure",
    }
  ]
};
