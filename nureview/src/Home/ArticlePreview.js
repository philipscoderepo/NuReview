import { useState } from "react";
import "./ArticlePreview.css";

function ArticlePreview({path}) {
  const [preview, showPreview] = useState(false);
  return (
    <div className="ArticlePreview">
      <a href={path}><h2>Article Title</h2></a>
      <div className="preview">
        <h3>Article Preview</h3>
        {preview && 
          (<p>This is a long preview of all of the things that you could possibly read in the article</p>)
        }
        <button onClick={() => showPreview(!preview)}>...</button>
      </div>
    </div>
  );
}

export default ArticlePreview;