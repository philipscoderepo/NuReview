import HomeNav from "./HomeNav";
import NewArticles from "./NewArticles";
import Welcome from "./Welcome";
import "./Home.css";

function Home() {
  return(
    <div className="Home">
      <div>
        <HomeNav/>
      </div>
      <div className="home-body">
        <Welcome/>
        <NewArticles/>
      </div>
    </div>
  );
}

export default Home;