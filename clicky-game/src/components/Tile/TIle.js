import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
  }

  render() {
    console.log(this.props.id)

    return (
    <div className="card" style={{ width: "18rem", height: '18rem', marginRight: '2%', marginTop: '2%'}}>
        <img style={{ width: "18rem", height: '18rem'}} src={this.props.srcImage} className="card-img-top" alt="..." />
      </div>
    );
  }
}

export default Tile;
