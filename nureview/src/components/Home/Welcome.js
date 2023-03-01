import Profile from "./Profile";
import "../../style/Home/Welcome.css"

function Welcome(){
  return (
    <div className="Welcome">
      <div>
        <h1>Welcome</h1>
        <p>NuReview is a site for you to find any and all articles from our talented pool of writers</p>
      </div>
      <div>
        <Profile username="Test"/>
        <Profile username="Test"/>
        <Profile username="Test"/>
      </div>
    </div>
  );
}

export default Welcome;