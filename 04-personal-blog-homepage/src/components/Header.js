import React from 'react';

function Header() {
  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement('h1', null, 'Omar\'s Blog')
  );
}

export default Header;
