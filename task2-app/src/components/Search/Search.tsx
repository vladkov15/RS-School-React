import React, { useState, useEffect } from 'react';
import searchSvg from '../../assets/iconsearch.png';
import '../../style/root.css';

interface SearchProps {
  search: string;
}

const Search: React.FC<SearchProps> = ({ search }) => {
  const [searchValue, setSearchValue] = useState<string>(() => localStorage.getItem('search') || '');

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  const handleSearchClick = () => {
    if (!searchValue) return;

    console.log(searchValue);
  };

  return (
    <div className="container">
      <button type="submit" onClick={handleSearchClick}>
        <img src={searchSvg} alt="search icon" />
      </button>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;