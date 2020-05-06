import React, { Component } from "react";
class WhyChoosesingle extends Component {
  render() {
    return (
      <li>
        <img src={this.props.img}></img>

        {/* <img src="images/manager.png" /> */}
        <span className="count">
          <span
            className=" timer count-title count-number"
            data-to={250}
            data-speed={5000}
          />
        </span>
        <span className="cnt">
          {this.props.name}
          <span>{this.props.text} </span>
        </span>
      </li>
    );
  }
}
export default WhyChoosesingle;
