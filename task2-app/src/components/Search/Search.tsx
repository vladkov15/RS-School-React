import { useState, useEffect } from 'react';
import searchSvg from '../../assets/iconsearch.png';
import '../../style/root.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(
    () => localStorage.getItem('search') || ''
  );

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  const handleSearchClick = () => {
    if (!searchValue) return;

    localStorage.setItem('search', searchValue);
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
