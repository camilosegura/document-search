import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { Input } from '../input';
import './search.css';

export function Search({ onSearch }) {
  const [search, setSearch] = useState('');
  const [isFullWidth, setIsFullWidth] = useState(false);

  function changeSize() {
    setIsFullWidth(true);
  }

  function onClickSearch() {
    onSearch(search);
  }

  return (
    <div className={['search', isFullWidth ? 'full-width' : ''].join(' ')}>
      <Input
        placeholder="Input filter parameter"
        value={search}
        onChange={setSearch}
        onFocus={changeSize}
      />
      <Button
        onClick={onClickSearch}
        label="Search"
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {};
