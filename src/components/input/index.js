import PropTypes from 'prop-types';
import './input.css';

export function Input({ placeholder, value, onChange, ...props }) {
  const handleChange = (event) => onChange?.(event.target.value);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {};
