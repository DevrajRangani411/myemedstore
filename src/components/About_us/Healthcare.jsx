import React, { Component } from 'react'

class Healthcare extends Component {
    render() {
        return (
            
                <div className="col-sm-4">
                  <div className="dedicated">
                    <div className="member">
                      <img
                        src={require("../../assets/images/matches/user-img1.jpg")}
                      />
                    </div>
                    <div className="member-detail">
                      <h3>{this.props.health.name}</h3>
                      <h4>{this.props.health.title}</h4>
                      <p>
                        {this.props.health.metaData.description}
                      </p>
                      <ul className="socialicons">
                        <li>
                          <a href="#" className="icon fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="icon fa fa-linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>  
        )
    }
}
export default Healthcare;