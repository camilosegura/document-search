import PropTypes from 'prop-types';
import './button.css';

export function Button({ secondary, label, children, ...props }) {
  const mode = secondary && 'btn--secondary';

  return (
    <button
      type="button"
      className={['btn', mode].join(' ')}
      {...props}
    >
      { children || label }
    </button>
  )
}

Button.propTypes = {
  secondary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  secondary: false,
  onClick: undefined,
};
