import React, { Component } from "react";
import Client from "./Client.jsx";
import { sentClientData } from "../../../actions/Home";
import { connect } from "react-redux";
class Clients extends Component {
  componentDidMount() {
    this.props.sentClientData();
  }
  // componentDidUpdate() {
  //   console.log("data", this.props.data);
  // }
  render() {
    const data = this.props.data || [];
    return (
      <div className="row">
        {data.map((value, index) => {
          // {
          //   console.log("jsx", value, index);
          // }
          return (
            <Client
              key={value.id}
              img={value.img}
              name={value.name}
              text={value.text}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.Home.data });
// {
//   console.log("map", state.clientReducer.data);
// };
const mapDispatchToProps = dispatch => ({
  sentClientData: () => {
    dispatch(sentClientData());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Clients);
