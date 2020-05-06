import React, { Component } from 'react'
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

class Pillers extends Component {
 
    render() {
        
        return (
            
              
                <div className="col-sm-4">
                  <div className="piller bg-white">
                    <span className="number">{this.props.pill.id}</span>
                    <h3>{this.props.pill.name}</h3>
                    <p>
                    {this.props.pill.metaData.description}
                    </p>
                  </div>
                </div>
               
            
        )
    }
}

  export default Pillers;
