import "./ArticlePreview.css";

function ArticlePreview({path}) {
  return (
    <div className="ArticlePreview">
      <a href={path}><h2>Article Title</h2></a>
      <div className="preview">
        <h3>Article Preview</h3>
        <a>...</a>
      </div>
    </div>
  );
}

export default ArticlePreview;