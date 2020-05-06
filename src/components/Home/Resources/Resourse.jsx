import React, { Component } from "react";
class Resourse extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="dedicated">
          <div className="member">
            {/* <img
              src={require("../../assets/images/matches/user-img1.jpg")}
            ></img> */}
            <img src={this.props.img}></img>
            {/* <img src="images/matches/user-img1.jpg" /> */}
          </div>
          <div className="member-detail">
            <h3>{this.props.name}</h3>
            <h4>{this.props.name}</h4>
            <p>{this.props.text}</p>
            <ul className="socialicons">
              <li>
                <a href="#" className="icon fa fa-facebook" />
              </li>
              <li>
                <a href="#" className="icon fa fa-twitter" />
              </li>
              <li>
                <a href="#" className="icon fa fa-linkedin" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Resourse;
