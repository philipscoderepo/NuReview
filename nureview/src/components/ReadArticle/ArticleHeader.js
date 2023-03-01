import { useState } from "react";
import { share_icon } from "../Common/icons";
import SvgButton from "../Common/SvgButton";
import "../../style/ReadArticle/ArticleHeader.css";
import SharePopup from "./SharePopup";

function ArticleHeader() {
  const [popup, showPopup] = useState(false);

  return(
    <div className="ArticleHeader">
      <h1>Article Title</h1>
      <button onClick={() => showPopup(!popup)}>Share</button>
      { popup && <SharePopup showPopup={showPopup}/>}
      
    </div>
  );
}

export default ArticleHeader;