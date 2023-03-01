import { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import "../../style/Home/NewArticles.css";
import axios from 'axios';

function NewArticles() {
  const [articles, setArticles] = useState({
    data: [],
    loaded: false
  })
  useEffect(() => {
    async function getArticles(){
      const response = await axios.get('http://localhost:3001/');
      const data = response.data;
      const items = data.articles.map((article) => 
        <ArticlePreview 
          key={article.article_id}
          path={'/ReadArticle/?id='+article.article_id}
          title={article.article_name}
          body={article.article_body}
          author={article.author}/>
      );
      setArticles({data: items, loaded: true});
    }
    if(articles.loaded != true) {
      getArticles();
    }
  })

  return (
    <div className="NewArticles">
      <h1>New Articles</h1>
      {articles.loaded && (<>{articles.data}</>)}
    </div>
  );
}

export default NewArticles;