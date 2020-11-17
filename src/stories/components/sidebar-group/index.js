import PropTypes from 'prop-types';
import './sidebar-group.css';

export function SidebarGroup({ title, items, active, onClick }) {
  return (
    <div className="sidebar__group">
      <span class="sidebar__group__title">{title}</span>
      {items.map((item, index) => (
        <span
          key={item.name}
          className={['sidebar__group__item', active === index ? 'active' : ''].join(' ')}
          onClick={onClick.bind(null, title, index)}
        >
          <span className="sidebar__group__item__title">
            {item.humanName}
          </span>
        </span>
      ))}
    </div>
  )
}

SidebarGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.number,
  onClick: PropTypes.func
};

SidebarGroup.defaultProps = {};
