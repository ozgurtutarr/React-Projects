import { useState, useEffect, useRef } from 'react';
import './AutocompleteTypeahead.css';

const AutocompleteTypeahead = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mock data: List of Countries
  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'India',
    'Brazil',
    'Mexico',
    'Italy',
    'Spain',
    'Russia',
    'South Korea',
    'Netherlands',
    'Saudi Arabia',
    'Turkey',
    'Switzerland',
    'Sweden',
    'Poland',
    'Belgium',
    'Thailand',
    'Ireland',
    'Austria',
    'Ukraine',
    'Egypt',
    'Norway',
    'Israel',
    'South Africa',
  ];

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (inputValue) {
      const filtered = countries.filter((country) =>
        country.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  const handleSelect = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
  };

  return (
    <div className="typeahead-container">
      <h2>Autocomplete / Typeahead</h2>
      <p>Start typing a country name (e.g., "Uni", "Fra")</p>

      <div className="input-wrapper" ref={wrapperRef}>
        <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => inputValue && setShowSuggestions(true)}
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item.substr(0, inputValue.length)}
                <strong>{item.substr(inputValue.length)}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteTypeahead;
