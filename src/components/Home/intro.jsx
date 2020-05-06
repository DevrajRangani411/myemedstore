import React, { Component } from "react";

class IntroHome extends Component {
  render() {
    return (
      <section className="aboutemedstore">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-4 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              data-wow-offset={10}
            >
              <div className="section-inner-title">
                <h3>About EMedStore</h3>
              </div>
              <div className="sec-detail mar-bot20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  rutrum blandit cursus. Sed placerat ante et nisi bibendum
                  euismod. Praesent luctus placerat gravida. Donec erat sapien,
                  mattis id ipsum a, elementum ullamcorper nulla. Ut congue
                  molestie dui, id vehicula magna mattis eget. Nunc eu molestie
                  orci, sed mattis sem. Nam dictum leo quam, ut vulputate magna
                  laoreet ut.
                </p>
                <a
                  className="btn btn-primary btn-sm mar-top15"
                  target="_blank"
                  href="http://emedstore.in/EMedStore_Brochure.pdf"
                >
                  <span className="icon fa fa-file-pdf-o" /> Download Broucher
                </a>
              </div>
            </div>
            <div
              className="col-sm-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              data-wow-offset={10}
            >
              <div className="section-inner-title">
                <h3>Awards &amp; Achievements</h3>
              </div>
              <div className="sec-detail mar-bot20">
                <img
                  className="mar-bot10"
                  // src="../assets/images/header-bg-main.jpg"
                  src={require("../../assets/images/header-bg-main.jpg")}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  rutrum blandit cursus. Sed placerat ante et nisi bibendum
                  euismod. Praesent luctus placerat gravida. Donec erat sapien,
                  mattis id ipsum a, elementum ullamcorper nulla. Ut congue
                  molestie dui, id vehicula magna mattis eget. Nunc eu molestie
                  orci, sed mattis sem. Nam dictum leo quam, ut vulputate magna
                  laoreet ut.
                </p>
              </div>
            </div>
            <div
              className="col-sm-4 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              data-wow-offset={10}
            >
              <div className="section-inner-title">
                <h3>Video</h3>
              </div>
              <div className="sec-detail mar-bot20">
                <iframe
                  width="100%"
                  height={300}
                  src="https://www.youtube.com/embed/K4wEI5zhHB0"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default IntroHome;
