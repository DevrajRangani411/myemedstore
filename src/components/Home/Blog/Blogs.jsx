import React, { Component } from "react";
import Blogsc from "./Blogsc.jsx";
class Blogs extends Component {
  render() {
    return (
      <section className="blogsemedstore">
        <div className="section-title">
          <h2>Our Blogs</h2>
        </div>
        <div className="container-flex-fluid">
          <Blogsc />
        </div>
      </section>
    );
  }
}
export default Blogs;
