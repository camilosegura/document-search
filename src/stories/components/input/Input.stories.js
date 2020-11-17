import { useArgs } from '@storybook/client-api';
import { Input } from './';

export default {
  title: 'Example/Input',
  component: Input,
};

const Template = (args) => {
  const [_, updateArgs] = useArgs();
  const handleChange = (value) => updateArgs({ value });

  return <Input {...args} onChange={handleChange} />
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input',
  value: ''
};
