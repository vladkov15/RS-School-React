import { useState, useEffect, FC } from 'react';
import searchSvg from '../../assets/iconsearch.png';
import '../../style/root.css';

interface SearchProps {
  onSearch: (data: string) => void;
}
const Search: FC<SearchProps> = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchClick = () => {
    if (!searchValue) return;
    onSearch(searchValue)
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
