import "../../style/Search/AdvancedSearch.css";
import { useState } from "react";

function AdvancedSearch({updateSearchType}) {
  const [advanced, showAdvanced] = useState(false);

  return (
    <div>
      <button className="advanced-search-button" 
        onClick={() => showAdvanced(!advanced)}
        style={{cursor: "pointer"}}>
        Advanced Search
      </button>
      { advanced && (
        <div className="popup">
          <div>
            <input type="radio" id="keyword" name="search" value="keyword" defaultChecked/>
            <label htmlFor="keyword">By Keyword</label>
          </div>
          <div>
            <input type="radio" id="article" name="search" value="article"/>
            <label htmlFor="article">By Article Name</label>
          </div>
          <div>
            <input type="radio" id="author" name="search" value="author"/>
            <label htmlFor="author">By Author</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdvancedSearch;