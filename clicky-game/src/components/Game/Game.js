import React from "react";
import Tile from "../Tile/TIle";
import Navbar from "../Navbar/Navbar";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: []
    };
  }
  pictureSources = [
    {
      src: "./images/anibal-renones-u9nYWmDjK7U-unsplash.jpg",
      id: 0
    },
    {
      src: "./images/anthony-rosset-nMyYlVWOzzc-unsplash.jpg",
      id: 1
    },
    {
      src: "./images/bmarcel-W9_RUKaK48E-unsplash.jpg",
      id: 2
    },
    {
      src: "./images/clem-onojeghuo-pTeZKi29EYE-unsplash.jpg",
      id: 3
    },
    {
      src: "./images/fermin-rodriguez-penelas-a1dpvJv45To-unsplash.jpg",
      id: 4
    },
    {
      src: "./images/fermin-rodriguez-penelas-r3muakP0QuE-unsplash.jpg",
      id: 5
    },
    {
      src: "./images/michael-We2t3suGiYk-unsplash.jpg",
      id: 6
    },
    {
      src: "./images/olu-famule-D1YCMXkiSAI-unsplash.jpg",
      id: 7
    },
    {
      src: "./images/stanley-shashi-Pm_926lM-xI-unsplash.jpg",
      id: 8
    },
    {
      src: "./images/stephan-valentin-pwEhZkeTels-unsplash.jpg",
      id: 9
    },
    {
      src: "./images/tanalee-youngblood-vIDb3hNyw9s-unsplash.jpg",
      id: 10
    },
    {
      src: "./images/wayne-robinson-Ud9lKknu9c0-unsplash.jpg",
      id: 11
    }
  ];

  randomizeTile = () => {
    var currentIndex = this.pictureSources.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.pictureSources[currentIndex];
      this.pictureSources[currentIndex] = this.pictureSources[randomIndex];
      this.pictureSources[randomIndex] = temporaryValue;
    }

    return this.pictureSources;
  };

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            {this.randomizeTile().map((item, i) => {
              return <Tile key={i} id={item.id} srcImage={item.src} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
