import './Home.css';
import Tree from "./images/MinimalistTree.webp";

function Home() {
  return (
    <div className="home">
      <div className="home_body">
        <div className="home_bodyTitle">
          <h1>Project PlantPal</h1>
          <img src={Tree} alt="Minimalist Tree" className="app_bodyTree"/>
        </div>
        <p>
        PlantPal is a set of identical devices that is inserted into the soil of 
        of nearby plants, where it obtains data (moisture, sunlight, temperature) that
        is stored in a database and displayed to users via mobile app.
        </p>
      </div>
      <div className="home_body">
        <h1>Meet The Team</h1>
        <p>Adin Ackerman, Michael Brown, Kelvin Duong, Jerome Lam</p>
      </div>
    </div>
  );
}

export default Home;
