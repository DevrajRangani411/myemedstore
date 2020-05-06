import React, { Component } from "react";
import Blog from "./Blog.jsx";
class Blogsc extends Component {
  render() {
    return (
      <div className="row-flex">
        <Blog />
        <Blog />
        <Blog />
      </div>
    );
  }
}
export default Blogsc;
