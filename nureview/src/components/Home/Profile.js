import { profile_icon } from "../Common/icons";
import "../../style/Home/Profile.css";

function Profile({username}) {
  return (
    <div className="Profile">
      <div>{profile_icon}</div>
      <h3>{username}</h3>
    </div>
  );
}

export default Profile;