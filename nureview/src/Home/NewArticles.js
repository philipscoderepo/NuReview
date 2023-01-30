import ArticlePreview from "./ArticlePreview";
import "./NewArticles.css";

function NewArticles() {
  return (
    <div className="NewArticles">
      <h1>New Articles</h1>
      <ArticlePreview/>
      <ArticlePreview/>
      <ArticlePreview/>
    </div>
  );
}

export default NewArticles;