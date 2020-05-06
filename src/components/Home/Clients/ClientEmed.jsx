import React, { Component } from "react";

import Clients from "./Clients.jsx";
class ClientEmed extends Component {
  render() {
    return (
      <section className="clientemedstore bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Our clients</h2>
          </div>
          <Clients />
        </div>
      </section>
    );
  }
}

export default ClientEmed;
