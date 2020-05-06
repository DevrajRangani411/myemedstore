import React, { Component } from "react";

 class PortfolioData extends Component {
  render() {
    return (
      <div className="flex-row-2 flex-cnt">
        <div className="flex-col-1 practilo-1 hover">
          <figure>
            <img
              src={`${this.props.data.image}`}
              alt="Practilo"
            />
          </figure>
          <div className="flex-inner flex-direction stellar">
            <div className="project-title">
              {/* <figure class="practilo-logo"></figure> */}
              <h5>{this.props.data.name}</h5>
            </div>
            <div className="project-group">
              <p>{this.props.data.name}</p>
              <h4>
                 {this.props.data.metaData.description}
              </h4>
              <a  className="btn-line">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioData;