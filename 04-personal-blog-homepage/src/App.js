import React, { useState } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import { posts } from './posts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const postsPerPage = 2;


  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      selectedCategory === 'All' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

 
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  
  const goToNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goToPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(Header),
    React.createElement(SearchBar, { searchTerm, setSearchTerm }),
    React.createElement(FilterBar, {
      selectedCategory,
      setSelectedCategory: handleCategoryChange
    }),
    React.createElement(
      'div',
      { className: 'blog-grid' },
      paginatedPosts.map(post =>
        React.createElement(BlogCard, { key: post.id, post })
      )
    ),
    React.createElement(
      'div',
      { className: 'pagination' },
      React.createElement('button', {
        onClick: goToPrev,
        disabled: currentPage === 1
      }, 'Previous'),
      React.createElement('span', null, ` Page ${currentPage} of ${totalPages} `),
      React.createElement('button', {
        onClick: goToNext,
        disabled: currentPage === totalPages
      }, 'Next')
    )
  );
}

export default App;
