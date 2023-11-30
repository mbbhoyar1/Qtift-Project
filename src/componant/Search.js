import { ReactComponent as SearchIcon } from "../assest/search-icon.svg";
import "./Search.css";
const Search = ({placeholder}) => {
  return (
    <>
      {/* <div className="wrapper">
        <input className="search" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div> */}



      <form className="wrapper">
        <input className="search" placeholder={placeholder}required/>
        <button className="search-btn" type="submit">
          <SearchIcon/>
        </button>
      </form>
    </>
  );
};

export default Search;
