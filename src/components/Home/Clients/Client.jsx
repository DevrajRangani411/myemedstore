import React, { Component } from "react";
class Client extends Component {
  render() {
    console.log("child props", this.props);
    return (
      <div className="col-sm-4">
        <div className="client text-center">
          {/* <img
            className="mar-bot30"
            src={require("../../assets/images/autoportal.png")}
          ></img> */}
          <img className="mar-bot30" src={this.props.img}></img>
          <h3>{this.props.name}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default Client;
