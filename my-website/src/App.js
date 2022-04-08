import './App.css';
import Tree from "./images/MinimalistTree.webp";

function App() {
  return (
    <div className="background">
      <div className="app">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
        </style>
        <div className="app_body">
          <h1>Project PlantPal</h1>
          <img src={Tree} alt="Minimalist Tree" className="app_bodyTree"/>
          <p>
          PlantPal is a set of identical devices that is inserted into the soil of 
          of nearby plants, where it obtains data (moisture, sunlight, temperature) that
          is stored in a database and displayed to users via mobile app.
          </p>
        </div>
        <div className="app_team">
          <h1>The Team</h1>
          <p>Adin Ackerman, Michael Brown, Kelvin Duong, Jerome Lam</p>
        </div>
        <div className="app_about">
          <h1>About This Website</h1>
          <h2>Jerome Lam (A15459972)</h2>
          <p>
            This website uses a ReactJS frontend customized through CSS, and Firebase for hosting 
            and a database. I chose ReactJS because it is very relevant and I would like to improve
            my skills, and Firebase because it is free and easy to use.
          </p>
        </div>
      </div>
    </div>
     
  );
}

export default App;
