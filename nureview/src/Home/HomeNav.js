import '../Common/Nav.css';
import SiteName from '../Common/SiteName';
import SvgButton from '../Common/SvgButton';
import { search_icon } from '../Common/icons';

function HomeNav() {
  return(
    <div className="Nav">
      <SiteName/>
      <SvgButton text="Search" path="/Search" icon={search_icon} tooltip="Find new articles here!"/>
    </div>
  );
}

export default HomeNav;