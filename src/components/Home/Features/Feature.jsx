import React, { Component } from "react";
class Feature extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div className="list-of-feature">
          {/* <img src={require("../../assets/images/car.png")}></img> */}
          <img src={this.props.img} />
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
      </div>
    );
  }
}
export default Feature;
