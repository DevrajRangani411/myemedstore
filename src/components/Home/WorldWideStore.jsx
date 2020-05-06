import React, { Component } from "react";
class WorldWide extends Component {
  render() {
    return (
      <section className="worldwideemedstore bg-primary">
        <div className="container">
          <div className="section-title">
            <h2>Our world wide clients</h2>
          </div>
          <div className="page-home hidden-below-768">
            <div className="section section-map section-users ">
              <div className="map waypoint onscreen">
                <div className="map-scanner map-scanner-radial" />
                <div className="map-mark" style={{ top: "20%", left: "70%" }}>
                  <span>Russia</span>
                </div>
                {/* <div class="map-mark" style="top: 29%; left: 54%"></div> */}
                <div className="map-mark" style={{ top: "31%", left: "18%" }}>
                  <span>United States</span>
                </div>
                {/* <div class="map-mark" style="top: 32%; left: 57%"></div>
                    <div class="map-mark" style="top: 34%; left: 46%"></div>
                    <div class="map-mark" style="top: 34.6%; left: 47.5%"></div>
                    <div class="map-mark" style="top: 40%; left: 87.3%"></div>
                    <div class="map-mark" style="top: 40.5%; left: 49%"></div>
                    <div class="map-mark" style="top: 40.5%; left: 54.7%"></div>
                    <div class="map-mark" style="top: 40.7%; left: 51.3%"></div>
                    <div class="map-mark" style="top: 41.5%; left: 17.5%"></div>
                    <div class="map-mark" style="top: 41.9%; left: 83%"></div>
                    <div class="map-mark" style="top: 42%; left: 13.5%"></div>
                    <div class="map-mark" style="top: 42.4%; left: 26.9%"></div>
                    <div class="map-mark" style="top: 43%; left: 45.4%"></div>
                    <div class="map-mark" style="top: 44.4%; left: 14%"></div>
                    <div class="map-mark" style="top: 45.5%; left: 25.2%"></div>
                    <div class="map-mark" style="top: 47.9%; left: 21%"></div> */}
                <div
                  className="map-mark"
                  style={{ top: "50.7%", left: "61.4%" }}
                >
                  <span>UAE</span>
                </div>
                <div
                  className="map-mark"
                  style={{ top: "51.5%", left: "70.5%" }}
                >
                  <span>India</span>
                </div>
                {/* <div class="map-mark" style="top: 52%; left: 19%"></div>
                    <div class="map-mark" style="top: 54%; left: 68.9%"></div>
                    <div class="map-mark" style="top: 62.5%; left: 77.7%"></div> */}
                <div className="map-mark" style={{ top: "66%", left: "31.5%" }}>
                  <span>Mexico</span>
                </div>
                <div className="map-mark" style={{ top: "65%", left: "55%" }}>
                  <span>South Africa</span>
                </div>
                {/* <div class="map-mark" style="top: 78.6%; left: 91.7%"></div> */}
                <div className="map-mark" style={{ top: "73%", left: "85%" }}>
                  <span>Australia</span>
                </div>
                {/* <div class="map-mark" style="top: 81%; left: 53%"></div>
                    <div class="map-mark" style="top: 82%; left: 28%"></div>
                    <div class="map-mark" style="top: 82%; left: 32%"></div>
                    <div class="map-mark" style="top: 86.5%; left: 88.5%"></div> */}
              </div>
              {/*end map*/}
            </div>
          </div>
          <div className="hidden-above-768">
            <img src={require("../../assets/images/map.png")}></img>

            {/* <img src="images/map.png" /> */}
          </div>
        </div>
      </section>
    );
  }
}
export default WorldWide;
