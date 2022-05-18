import './Home.css';
import Tree from "./images/Plant.png";

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
        of nearby plants, where it obtains data (<b>moisture</b>, <b>sunlight</b>, <b>temperature</b>) that
        is stored in a database and displayed to users via mobile app.
        </p>
      </div>
      <div className="home_body">
        <h1>Meet The Team</h1>
        <p>Adin Ackerman, Michael Brown, Kelvin Duong, Jerome Lam</p>
      </div>
      <div className="home_body">
        <h1>UX Improvements</h1>
        <ul>
          <li><b>Viscosity</b>: updated navbar symbols to more relevant ones: power symbol to home(home page) and radar to key(key value proposition page)</li>
          <li><b>Visibility</b>: added text adjacent to icons to show explicitely where the links were taking you</li>
          <li><b>Hard Cognitive Tasks</b>: bolded important text in the product idea paragraph</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
