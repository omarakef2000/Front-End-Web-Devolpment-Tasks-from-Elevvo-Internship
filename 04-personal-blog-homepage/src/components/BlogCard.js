import React from 'react';

function BlogCard({ post }) {
  return React.createElement(
    'div',
    { className: 'blog-card' },
    React.createElement('img', {
      src: post.image,
      alt: post.title,
      className: 'blog-img'
    }),
    React.createElement('div', { className: 'blog-content' },
      React.createElement('h2', null, post.title),
      React.createElement('p', { className: 'date' }, post.date),
      React.createElement('p', null, post.description)
    )
  );
}

export default BlogCard;
