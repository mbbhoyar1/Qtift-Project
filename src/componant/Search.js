import { ReactComponent as SearchIcon } from "../assest/search-icon.svg";
import "./search.css";
const Search = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default Search;
