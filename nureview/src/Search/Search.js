import SearchNav from "./SearchNav";
import "./Search.css";
import SearchResults from "./SearchResults";

function Search(){
  return (
    <div>
      <SearchNav/>
      <div className="search-body">
        <h2>Search Results</h2>
        <h3>Click on an article to read!</h3>
        <SearchResults/>
      </div>
    </div>
  );
}

export default Search;