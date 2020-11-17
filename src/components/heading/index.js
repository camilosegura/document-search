import PropTypes from 'prop-types';
import './heading.css';

export function Heading({ secondary, label, ...props }){
  return secondary ? (<h4 {...props}>{ label }</h4>) : (<h3 {...props}>{ label }</h3>);
}

Heading.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  secondary: false,
};
