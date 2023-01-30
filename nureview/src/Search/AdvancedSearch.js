import "./AdvancedSearch.css";

function AdvancedSearch({updateSearchType}) {
  return (
    <div>
      <button className="advanced-search-button">Advanced Search</button>
      <div className="popup">
        <div>
          <input type="radio" id="keyword" name="search" value="keyword"/>
          <label for="keyword">By Keyword</label>
        </div>
        <div>
          <input type="radio" id="article" name="search" value="article"/>
          <label for="article">By Article Name</label>
        </div>
        <div>
          <input type="radio" id="author" name="search" value="author"/>
          <label for="author">By Author</label>
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearch;