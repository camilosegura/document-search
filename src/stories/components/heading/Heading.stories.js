import { Heading } from './';

export default {
  title: 'Example/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Heading',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Heading',
  secondary: true,
};
