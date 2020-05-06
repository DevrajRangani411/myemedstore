import React, { Component } from "react";
class Benifits extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-title">
          <h2>{this.props.name}</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="benefits">
              {/* <img src={require("../../assets/images/car.png")}></img> */}
              <img src={this.props.img}></img>

              {/* <img src="images/car.png" /> */}
              <div className="detailsbenefits">
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="benefits">
              {/* <img src={require("../../assets/images/car.png")}></img> */}
              <img src={this.props.img}></img>

              {/* <img src="images/car.png" /> */}
              <div className="detailsbenefits">
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="benefits">
              {/* <img src={require("../../assets/images/car.png")}></img> */}
              <img src={this.props.img}></img>

              <div className="detailsbenefits">
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Benifits;
