import { useState } from 'react';
import PropTypes from 'prop-types';
import { SidebarGroup } from '../sidebar-group';
import { Heading } from '../heading';
import './sidebar.css';

export function Sidebar({ items, onClick }) {
  const [itemIndexSelected, setItemIndexSelected] = useState(-1);
  const [groupItemSelected, setGroupItemSelected] = useState({title: '', index: -1})

  function onClickItem(index) {
    return function onClickGroupItem(groupItemTitle, groupItemIndex) {
      setItemIndexSelected(index);
      setGroupItemSelected({ title: groupItemTitle, index: groupItemIndex });
      onClick(index, groupItemTitle, groupItemIndex);
    }
  }

  return (
    <aside className="sidebar">
      <Heading label="Results" />
      {items.map((item, index) => (
        <div key={item.summary}>
          <Heading label={item.summary} secondary />
          {Object.keys(item).map((key) => {
            const isActive = index === itemIndexSelected && groupItemSelected.title === key;

            return Array.isArray(item[key]) && item[key][0]?.name && (
              <SidebarGroup
                key={key}
                title={key}
                items={item[key]}
                active={ isActive ? groupItemSelected.index : -1 }
                onClick={onClickItem(index)}
              />
            )
          })}
        </div>
      ))}
    </aside>
  )
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};

Sidebar.defaultProps = {};
