import SiteName from "../Common/SiteName";
import "../Common/Nav.css";
import SvgButton from "../Common/SvgButton";
import SearchBar from "./SearchBar";
import { home_icon } from "../Common/icons";

function SearchNav() {
  return(
    <div className="Nav">
      <SiteName/>
      <div className="nav-right">
        <SvgButton icon={home_icon} text="Home" path="/"/>
        <SearchBar/>
      </div>
    </div>
  );
}

export default SearchNav;