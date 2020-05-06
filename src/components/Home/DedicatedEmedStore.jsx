import React, { Component } from "react";
import Resourses from "./Resources/Resourses.jsx";
class DedicatedEmedStore extends Component {
  render() {
    return (
      <section className="dedicatedemedstore">
        <div className="container">
          <div className="section-title">
            <h2>Dedicated resource for healthcare</h2>
          </div>

          <div className="row">
            <Resourses />
          </div>
        </div>
      </section>
    );
  }
}
export default DedicatedEmedStore;
