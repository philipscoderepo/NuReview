import ArticlePreview from "../Home/ArticlePreview";
import "./SearchResults.css";

function SearchResults() {
  return(
    <div className="SearchResults">
      <ArticlePreview path={'/ReadArticle/?id=0'}/>
      <ArticlePreview path={'/ReadArticle/?id=1'}/>
      <ArticlePreview path={'/ReadArticle/?id=2'}/>
    </div>
  );
}

export default SearchResults;