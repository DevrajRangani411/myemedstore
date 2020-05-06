import React, { Component } from "react";
import Apps from "./Apps.jsx";
class TypesofApp extends Component {
  render() {
    return (
      <section className="typeofemedstore bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Type of apps</h2>
          </div>
          <Apps />
          <div className="row">
            <div className="col-sm-12 text-center">
              <a
                href="#contacts"
                className="btn btn-primary btn-sm mar-top15 mar-bot20"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TypesofApp;
