import React, { Component } from "react";
// import "../assets/css/animation/animate.css";
// import "../assets/css/bootstrap/bootstrap.css";
// import "../assets/css/owl-carousel/owl.carousel.css";
// import "../assets/css/owl-carousel/owl.theme.css";
// import "../assets/css/owl-carousel/owl.transitions.css";
// import "../assets/css/animation/animate.css";
// import "../assets/css/animation.css";
// import "../assets/css/fix-scroll.css";
// import "../assets/css/responsive.css";
// import "../assets/css/style.css";
// import "../assets/css/map.css";
// import "../assets/js/animation/jquery.min";
// import "../assets/js/animation/navigation";
// import "../assets/js/animation/wow.init";
// import "../assets/js/animation/wow.min";
class Aboutusbanner extends Component {
  render() {
    var init = function() {
      let isMobile =
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf("mobile") >= 0;
      let isSmall = window.innerWidth < 1000;

      let ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 1 : 3,
        ptlSize: isMobile || isSmall ? 1 : 3,
        width: 1e9,
        height: 1e9
      });

      let gui = new dat.GUI();
      gui
        .add(ps, "ptlGap")
        .min(0)
        .max(5)
        .step(1)
        .onChange(function() {
          ps.init(true);
        });
      gui
        .add(ps, "ptlSize")
        .min(1)
        .max(5)
        .step(1)
        .onChange(function() {
          ps.init(true);
        });
      gui.add(ps, "restless");
      gui.addColor(ps, "color").onChange(function(value) {
        ps.monochrome = true;
        ps.setColor(value);
        ps.init(true);
      });

      window.addEventListener
        ? window.addEventListener(
            "click",
            function() {
              ps.init(true);
            },
            false
          )
        : (window.onclick = function() {
            ps.init(true);
          });
    };
    let initParticleSlider = function() {
      var psScript = document.createElement("script");
      psScript.addEventListener
        ? psScript.addEventListener("load", init, false)
        : (psScript.onload = init);
      psScript.src =
        "http://particleslider.com/js/particleslider/current/particleslider.js";
      psScript.setAttribute("type", "text/javascript");
      document.body.appendChild(psScript);
    };
    window.addEventListener
      ? window.addEventListener("load", initParticleSlider, false)
      : (window.onload = initParticleSlider);
    <script
      src="http://particleslider.com/js/particleslider/current/particleslider.js"
      type="text/javascript"
    ></script>;
    return (
      <div>
        <div className="full-width-banner">
          <div className="item">
            <div className="item-image" style={{ background: "#333" }} />
          </div>
        </div>
        <div className="banner-caption aboutbanner">
          <div className="container">
            <div className="top-details text-center c-white">
              <div className="container">
                <h4>We Are In Th Best</h4>
                <h2>AWESOME</h2>
                <h1 id="text" className="wow fadeInUp">
                  USER EXPERIENCE
                </h1>
                {/* <a href="#contact" class="btn btn-md btn-primary">LET'S TALK</a> */}
              </div>
            </div>
          </div>
        </div>
        <div id="particle-slider">
          <div className="slides">
            <div
              id="first-slide"
              className="slide"
              data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAisAAAIyCAYAAAAKd4p7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZGRUE5QzFCOEJGMTFFN0JCQzRFNTFBMUQ2MzdEQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZGRUE5QzJCOEJGMTFFN0JCQzRFNTFBMUQ2MzdEQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RkZFQTlCRkI4QkYxMUU3QkJDNEU1MUExRDYzN0RBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RkZFQTlDMEI4QkYxMUU3QkJDNEU1MUExRDYzN0RBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmz48aYAACMGSURBVHja7N1rUhxJ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"
            ></div>
          </div>
          <canvas className="draw" />
        </div>
      </div>
    );
  }
}
export default Aboutusbanner;
