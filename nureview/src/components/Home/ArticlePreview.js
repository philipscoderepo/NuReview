import { useState } from "react";
import "../../style/Home/ArticlePreview.css";

function ArticlePreview({path, title, body, author}) {
  const [longPreview, showLongPreview] = useState(false);
  return (
    <div className="ArticlePreview">
      <a href={path}><h2>{title}</h2></a>
      <div className="preview">
        {!longPreview &&
          <h3>View Preview</h3>
        }
        {longPreview && 
          (<p>{body.substring(0, 100)}...</p>)
        }
        <button onClick={() => showLongPreview(!longPreview)}>...</button>
      </div>
    </div>
  );
}

export default ArticlePreview;