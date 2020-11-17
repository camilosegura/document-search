import { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search';
import { Visualizer } from './components/visualizer';
import { Sidebar } from './components/sidebar';
import { getDocuments } from './api';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getDocuments()
      .then(({ data }) => setItems(data));
  }, []);

  function search(searchValue) {
    getDocuments(searchValue)
      .then(({ data }) => setItems(data));
  }

  return (
    <div className="App">
      <div className="header">
        <Search onSearch={search} />
      </div>
      <Visualizer items={items} />
      <Sidebar items={items} />
    </div>
  );
}

export default App;
