import ArticleBody from "./ArticleBody";
import "../../style/ReadArticle/Article.css";
import ArticleHeader from "./ArticleHeader";

function Article(){
  return (
    <div className="Article">
      <ArticleHeader/>
      <ArticleBody/>
    </div>
  );
}

export default Article;