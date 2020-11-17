import { Search } from './';

export default {
  title: 'Example/Search',
  component: Search,
};

const Template = (args) => <div style={{width: '50%', margin: 'auto'}}><Search {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  onSearch: () => {},
};
