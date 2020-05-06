import React, { Component } from "react";
import Resourse from "./Resourse.jsx";
import { connect } from "react-redux";
import { sentResourceData } from "../../../actions/Home";
class Resourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limitdata: 3,
      increment: 3,
      index: 0
    };
  }

  componentDidMount() {
    this.props.sentResourceData();
  }
  handleDataLimit() {
    this.setState({
      limitdata: this.state.limitdata + this.state.increment
    });
  }
  render() {
    const data = this.props.data || [];
    return (
      <div className="row">
        {data
          .slice(this.state.index, this.state.limitdata)
          .map((value, index) => {
            // {
            //   console.log("jsx", value, index);
            // }
            return (
              <Resourse
                key={value.id}
                img={value.img}
                name={value.name}
                text={value.text}
              />
            );
          })}
        <div className="col-sm-12 text-center">
          <button
            onClick={() => this.handleDataLimit()}
            className="btn btn-primary btn-lg mar-top30 mar-bot20"
          >
            Show More
          </button>
        </div>
        {/* <Resourse /> */}
        {/* <Resourse /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.Home.resources
});
const mapDispatchToProps = dispatch => ({
  sentResourceData: () => dispatch(sentResourceData())
});
export default connect(mapStateToProps, mapDispatchToProps)(Resourses);
