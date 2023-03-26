import { Component, ReactNode } from 'react';
import searchSvg from '../assets/iconsearch.png';
import '../style/root.css';

interface SearchProps {
  search: string;
}

class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { search: localStorage.getItem('search') };
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', String(this.state));
  }

  handleSearchClick = () => {
    if (!this.state) return;

    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <button type="submit" onClick={this.handleSearchClick}>
          <img src={searchSvg} alt="search icon" />
        </button>
        <input
          type="search"
          placeholder="Search"
          value={''}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
      </div>
    );
  }
}

export default Search;
