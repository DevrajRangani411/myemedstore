import React, { Component } from "react";
import WhyChoosesingle from "./WhyChoosesingle.jsx";
import { connect } from "react-redux";
import * as action from "../../../actions/Home.js";
class WhyChooseFeature extends Component {
  componentWillMount() {
    this.props.setfeature();
  }
  render() {
    let data = this.props.single || [];
    return (
      <div className="inner">
        <ul className="discover-count-list">
          {data.map((single, index) => (
            <WhyChoosesingle
              id={single.id}
              img={single.img}
              name={single.name}
              text={single.text}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log("single ye wala", state.Home.single);
  return { single: state.Home.single };
};
const mapDispatchToProps = dispatch => ({
  setfeature: () => dispatch(action.setfeature())
});
export default connect(mapStateToProps, mapDispatchToProps)(WhyChooseFeature);
