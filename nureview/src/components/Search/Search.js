import SearchNav from "./SearchNav";
import "../../style/Common/Nav.css";
import SearchResults from "./SearchResults";
import { useState } from "react";

function Search(){
  const [results, showResults] = useState(false);
  
  return (
    <div>
      <SearchNav showResults={showResults}/>
      <div className="search-body">
        <h2>Search Results</h2>
        <h3>Click on an article to read!</h3>
        {results && ( <SearchResults/> )}
      </div>
    </div>
  );
}

export default Search;