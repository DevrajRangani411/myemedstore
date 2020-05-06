import React, { Component } from "react";
import Feature from "./Feature.jsx";
import { connect } from "react-redux";
import { sentFeatureList } from "../../../actions/Home";
class FeatureListOfApp extends Component {
  componentDidMount() {
    this.props.sentFeatureData();
  }
  render() {
    const data = this.props.data || [];
    return (
      <section className="featurelistemedstore">
        <div className="container">
          <div className="section-title">
            <h2>Feature list of app</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mobileslider">
                <div className="mobile">
                  <img src={require("../../../assets/images/mobile.png")}></img>
                  {/* <img src="images/mobile.png" /> */}
                </div>
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <img src={require("../../../assets/images/1.jpg")}></img>
                  </div>
                  <div className="item">
                    <img src={require("../../../assets/images/2.jpg")}></img>
                  </div>
                  <div className="item">
                    <img src={require("../../../assets/images/3.jpg")}></img>
                  </div>
                  <div className="item">
                    <img src={require("../../../assets/images/4.jpg")}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mar-top30">
              <div className="row">
                {data.map((value, index) => {
                  return (
                    <Feature
                      key={value.id}
                      img={value.img}
                      title={value.name}
                      text={value.text}
                    />
                  );
                })}
                <div className="col-sm-12">
                  <a href="#" className="btn btn-sm btn-primary">
                    Show More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ data: state.Home.feature });
const mapDispatchToProps = dispatch => ({
  sentFeatureData: () => {
    dispatch(sentFeatureList());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(FeatureListOfApp);
