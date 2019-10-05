import React from "react";
import Tile from "../Tile/TIle";
import Navbar from "../Navbar/Navbar";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureSources: [
        "./images/anibal-renones-u9nYWmDjK7U-unsplash.jpg",
        "./images/anthony-rosset-nMyYlVWOzzc-unsplash.jpg",
        "./images/bmarcel-W9_RUKaK48E-unsplash.jpg",
        "./images/clem-onojeghuo-pTeZKi29EYE-unsplash.jpg",
        "./images/fermin-rodriguez-penelas-a1dpvJv45To-unsplash.jpg",
        "./images/fermin-rodriguez-penelas-r3muakP0QuE-unsplash.jpg",
        "./images/michael-We2t3suGiYk-unsplash.jpg",
        "./images/olu-famule-D1YCMXkiSAI-unsplash.jpg",
        "./images/stanley-shashi-Pm_926lM-xI-unsplash.jpg",
        "./images/stephan-valentin-pwEhZkeTels-unsplash.jpg",
        "./images/tanalee-youngblood-vIDb3hNyw9s-unsplash.jpg",
        "./images/wayne-robinson-Ud9lKknu9c0-unsplash.jpg"
      ]
    };
  }

  returnTiles = () => {
    this.state.pictureSources.forEach(item => {
      console.log(item);
      return <Tile srcImage={item} />;
    });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            {this.state.pictureSources.map(item => {
              return <Tile srcImage={item} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
