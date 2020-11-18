import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search';
import { Visualizer } from './components/visualizer';
import { Sidebar } from './components/sidebar';
import { getDocuments } from './api';

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    getDocuments()
      .then(({ data }) => setItems(data));
  }, []);

  function search(searchValue) {
    getDocuments(searchValue)
      .then(({ data }) => setItems(data));
  }

  function onClickItem(index, groupItemTitle, groupItemIndex) {
    setSelectedItem({ index, groupItemTitle, groupItemIndex });
  }

  return (
    <div className="App">
      <div className="header">
        <Search onSearch={search} />
      </div>
      <Visualizer items={items} selectedItem={selectedItem} />
      <Sidebar items={items} onClick={onClickItem} />
    </div>
  );
}

export default App;
