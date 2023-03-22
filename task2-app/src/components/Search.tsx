import searchSvg from '../assets/iconsearch.png';
import '../style/root.css';

const Search = () =>{

    return(
        <div className="container">
        <button type="submit">
            <img src={searchSvg} alt="search icon" />
          </button>
          <input type="search" placeholder="Search" />
        </div>
    )
}

export default Search