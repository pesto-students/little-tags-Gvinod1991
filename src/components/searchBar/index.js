import React from 'react';

export default function SearchBar(){
  return(
    <div className="search-bar">
      <img
        className="search-icon"
        src="/search-icon.svg"
        alt="search-icon"
      />
      <input type="text" placeholder="Search...." />
    </div>
  )
}