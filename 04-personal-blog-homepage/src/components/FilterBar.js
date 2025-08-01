import React from 'react';

function FilterBar({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Tech', 'Travel', 'Food'];

  return React.createElement(
    'div',
    { className: 'filter-bar' },
    categories.map(cat =>
      React.createElement(
        'button',
        {
          key: cat,
          className: selectedCategory === cat ? 'active' : '',
          onClick: () => setSelectedCategory(cat)
        },
        cat
      )
    )
  );
}

export default FilterBar;
