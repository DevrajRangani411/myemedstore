import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./App.jsx";
import * as action from "../../../actions/Home.js";

class Apps extends Component {
  componentWillMount() {
    this.props.sentAppData();
  }
  render() {
    const data = this.props.app_data || [];
    return (
      <div className="row">
        {data.map((app, index) => (
          <App
            key={app.id}
            title={app.title}
            desc={app.paragraph}
            list={app.list}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log("map", state.clientReducer.data);
  return { app_data: state.Home.appdata };
};
// ({ data: state.clientReducer.data });
const mapDispatchToProps = dispatch => ({
  sentAppData: () => {
    dispatch(action.sentAppData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps);
