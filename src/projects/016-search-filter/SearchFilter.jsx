import { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli Fruit',
    'Watermelon',
    'Yam',
    'Zucchini',
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search for a fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li className="no-results">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
