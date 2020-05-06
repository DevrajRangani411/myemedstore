import React, { Component } from "react";

import img from "../../assets/images/banner-psd.jpg";

class HomeBanner extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <div className="full-width-banner">
            <div className="item">
              <div
                className="item-image"
                style={{
                  background: `url(${img})`
                }}
              />
            </div>
          </div>
          <div className="banner-caption">
            <div className="container">
              <div className="top-details text-center c-white">
                <div className="container">
                  {/* <h4>We Are In Th Best</h4>
              <h2>AWESOME</h2>
              <h1 id="text" class="wow fadeInUp">USER EXPERIENCE</h1> */}
                  {/* <div class="bannerimages">
                  <img src="images/bannerlogo.png">
                  
              </div> */}
                  <a href="#contacts" className="btn btn-md btn-primary">
                    LET'S TALK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
