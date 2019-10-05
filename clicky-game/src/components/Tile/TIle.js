import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.srcImage)

    return (
    <div className="card" style={{ width: "18rem", height: '18rem'}}>
        <img style={{ width: "18rem", height: '18rem'}} src={this.props.srcImage} className="card-img-top" alt="..." />
      </div>
    );
  }
}

export default Tile;
