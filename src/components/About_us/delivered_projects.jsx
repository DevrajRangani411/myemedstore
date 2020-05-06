import React, { Component } from 'react'

class Delivered_projects extends Component {
    render() {
        return (
          <section className="deliveremedstore bg-gray">
            <div className="container">
              <div className="section-title">
                <h2>
                  Delivered over 5250 projects
                  <span>
                    Our portfolio ranges across diverse industries, companies
                    and geography with strict adherence to high quality and time
                  </span>
                </h2>
              </div>
              <div className="flipboxes">
                <div className="flipboxfirst">
                  <div className="flip-horizontal">
                    <div className="front">
                      <img
                        src={require("../../assets/images/onefront.jpg")}
                        alt
                      ></img>
                    </div>
                    <div className="back">
                      <img src={require("../../assets/images/oneback.jpg")} alt />
                    </div>
                  </div>
                </div>
                <div className="flipboxmiddle">
                  <div className>
                    <div className="middleone">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../../assets/images/twofront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../../assets/images/twofront.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="middletwo">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../../assets/images/threefront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../../assets/images/threeback.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="middlethree">
                      <div className="flip-vertical">
                        <div className="front">
                          <img
                            src={require("../../assets/images/fourfront.jpg")}
                            alt
                          />
                        </div>
                        <div className="back">
                          <img
                            src={require("../../assets/images/fourback.jpg")}
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flipboxlast">
                  <div className="flip-horizontal">
                    <div className="front">
                      <img
                        src={require("../../assets/images/fivefront.jpg")}
                        alt
                      />
                    </div>
                    <div className="back">
                      <img src={require("../../assets/images/fiveback.jpg")} alt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <a
                    href="#contacts"
                    className="btn btn-primary btn-sm mar-top30 mar-bot20"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default Delivered_projects;