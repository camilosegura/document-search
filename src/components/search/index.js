import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { Input } from '../input';
import './search.css';

export function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  return (
    <div className="search">
      <Input
        placeholder="Input filter parameter"
        value={search}
        onChange={setSearch}
      />
      <Button
        onClick={onSearch}
        label="Search"
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {};
