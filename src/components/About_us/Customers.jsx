import React, { Component } from 'react'

class Customer extends Component {
    render() {
        return (
            
                <div className="col-sm-4">
                  <div className="benefits">
                    <img src={require("../../assets/images/car.png")} />
                    <div className="detailsbenefits">
                      <h3>{this.props.cust.name}</h3>
                      <p>
                        {this.props.cust.metaData.description}
                      </p>
                    </div>
                  </div>
                </div>  
            
              
            
        )
    }
}
export default Customer;
