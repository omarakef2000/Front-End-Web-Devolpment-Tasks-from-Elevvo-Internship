import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return React.createElement(
    'div',
    { className: 'search-bar' },
    React.createElement('input', {
      type: 'text',
      placeholder: 'Search posts by title...',
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value)
    })
  );
}

export default SearchBar;
