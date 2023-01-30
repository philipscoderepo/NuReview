import { search_icon } from "../Common/icons";
import SvgButton from "../Common/SvgButton";
import AdvancedSearch from "./AdvancedSearch";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search">
      <div className="SearchBar">
        <input placeholder="Search"/>
        <button>{search_icon}</button>
      </div>
      <AdvancedSearch/>
    </div>
  );
}

export default SearchBar;