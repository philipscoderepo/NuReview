import SvgButton from "../Common/SvgButton";
import { home_icon, search_icon } from "../Common/icons";
import "../Common/Nav.css";
import SiteName from "../Common/SiteName";

function ReadArticleNav(){
  return (
    <div className="Nav">
      <SiteName/>
      <div className="nav-right">
        <SvgButton icon={home_icon} text="Home" path="/"/>
        <SvgButton icon={search_icon} text="Search" path="/Search"/>
      </div>
    </div>
  );
}

export default ReadArticleNav;