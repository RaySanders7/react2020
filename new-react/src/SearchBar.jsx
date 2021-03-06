import React from 'react';
import './SearchBar.css';

const SearchBar = ({ filterText, onFilterTextChange }) => {
  const handleFilterTextChange = (e) => onFilterTextChange(e.target.value);
 
  return (
  <form className="search-bar">
    <input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
  </form>
)};

export default SearchBar;