import ArticlePreview from "./ArticlePreview";
import "./NewArticles.css";

function NewArticles() {
  return (
    <div className="NewArticles">
      <h1>New Articles</h1>
      <ArticlePreview path={'/ReadArticle/?id=0'}/>
      <ArticlePreview path={'/ReadArticle/?id=1'}/>
      <ArticlePreview path={'/ReadArticle/?id=2'}/>
    </div>
  );
}

export default NewArticles;