import ArticlePreview from "../Home/ArticlePreview";
import "./SearchResults.css";

function SearchResults() {
  return(
    <div className="SearchResults">
      <ArticlePreview/>
      <ArticlePreview/>
      <ArticlePreview/>
    </div>
  );
}

export default SearchResults;