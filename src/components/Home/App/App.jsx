import React, { Component } from "react";

class App extends Component {
  render() {
    let list = this.props.list;
    return (
      <div className="col-sm-4">
        <div className="services-details__item services-details__item--development">
          <div className="services-details__info">
            <h4>{this.props.title}</h4>
            <p>{this.props.desc}</p>
          </div>
          <div className="services-details__list-wrap">
            <ul className="services-details__list">
              {list.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
