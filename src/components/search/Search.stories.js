import { Search } from './';

export default {
  title: 'Example/Search',
  component: Search,
};

const containerStyles = {width: '50%', margin: 'auto'};

const Template = (args) => <div style={containerStyles}><Search {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  onSearch: () => {},
};
