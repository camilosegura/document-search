import { Dot } from './';

export default {
  title: 'Example/Dot',
  component: Dot,
};

const Template = (args) => <Dot {...args} />;

export const Default = Template.bind({});
