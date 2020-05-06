import React, { Component } from "react";
import img from '../../assets/images/portfoliobanner.png';
import PortfolioData from "./PortfolioData/index.jsx";
import {connect} from 'react-redux';
import * as actions from '../../actions/index'; 
//import { withRouter } from "react-router-dom";

class Portfolio extends Component {

  state={
    portfolioList:null
  }


  

  componentWillMount(){
    this.props.getPortfolioDetails()
  }

  componentDidUpdate(){
   
    if(this.state.portfolioList == null){
      this.setState({
        portfolioList:this.props.portfolioList
      })
    }
  }

  categoryHadler=(e)=>{

    if(e.target.innerText == "All"){
      var data_filter=  this.props.portfolioList
      
    }
    else{
      var data_filter = this.props.portfolioList.filter( element => element.category == e.target.innerText)
    }

      this.setState({
        portfolioList:data_filter
      })
    
  }

  render() {
    console.log("data", this.props.portfolioList);

    return (
      <div>
       
        <div className="innerbanner">
          <div
            className="banner"
            style={{background: `url(${img})`}} >
          
            <div className="banner-text">
              <h1>
                See Our Wide Range of Innovative Apps Developed from Creative
                Ideas
              </h1>
              {/* <h2>Empower people through technology and innovative solutions</h2> */}
            </div>
          </div>
        </div>
        <div className="main-container">
          <section className="portfolio-sec">
            <div className="container">
              <div className="category">
                <ul className="gray">
                  <li><a onClick={(e)=>this.categoryHadler(e)}>All</a></li>
                  <li><a onClick={(e)=>this.categoryHadler(e)}>iso</a></li>
                  <li><a onClick={(e)=>this.categoryHadler(e)}>Android</a></li>
                  <li><a onClick={(e)=>this.categoryHadler(e)}>Web</a></li>
                </ul>
              </div>
              
              {this.state.portfolioList != null 
              ? this.state.portfolioList.map(res => {
                return  <PortfolioData key={res.id} data={res}/>  
              })
              :
              null
              }

           

              <div className="row">
                {/* <div className="col-sm-12 text-center mar-top30">
                  <a href="#" className="btn btn-sm btn-primary">
                    Load More
                  </a>
                </div> */}
              </div>
            </div>
          </section>
          <section id="contacts" className="contactemedstore gray-bg">
            <div className="container">
              <div className="section-title">
                <h2>Request a demo</h2>
              </div>
              <p className="text-center">
                Thank you for your interest in EMedStore and our services.
                Please fill out the form below or e-mail us at{" "}
                <a href="mailto:contact@emedstore.com" className="theme-color">
                  contact@emedstore.com
                </a>{" "}
                and we will get back to you promptly regarding your request.
              </p>
              <div className="contactForm-body">
                <div id="contacts-form-wrapper">
                  <form id="request-form">
                    <div className="row form-wrapper">
                      <div
                        className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
                        id="edit-contact"
                      >
                        <div
                          className="contactForm-caption form-wrapper"
                          id="edit-title"
                        >
                          <h4>Contact details</h4>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <input
                              className="contactForm-input form-text inactive"
                              required
                              placeholder="Full Name"
                              type="text"
                              id="edit-name"
                              name="name"
                              defaultValue
                            />
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block">
                            <input
                              className="contactForm-input form-text inactive"
                              tabIndex={2}
                              type="text"
                              id="edit-company"
                              name="company"
                              defaultValue
                              placeholder="Company / Organization"
                            />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block">
                            <input
                              className="contactForm-input inactive form-text"
                              tabIndex={3}
                              type="text"
                              id="edit-phone"
                              name="phone"
                              defaultValue
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <input
                              className="contactForm-input inactive form-text required"
                              tabIndex={4}
                              type="text"
                              id="edit-email"
                              name="email"
                              defaultValue
                              placeholder="Email"
                              required
                            />
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <select
                              placeholder="Country"
                              tabIndex={-1}
                              id="edit-country"
                              name="country"
                              className="form-select required"
                            >
                              <option value="US">United States</option>
                              <option value="GB">United Kingdom</option>
                              <option value="IN">India</option>
                            </select>
                            <div className="selectarrow">
                              <b />
                            </div>
                            <span
                              className="contactForm-correct"
                              title="Correct"
                            />
                            <span className="contactForm-del" title="Clear" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
                        id="edit-request"
                      >
                        <div
                          className="contactForm-caption form-wrapper"
                          id="edit-title--2"
                        >
                          <h4>Request details</h4>
                        </div>
                        <div className="contactForm-line">
                          <div className="contactForm-block contactForm-block--require">
                            <textarea
                              className="contactForm-textarea form-textarea required inactive"
                              tabIndex={6}
                              id="edit-message"
                              name="message"
                              placeholder="Please describe your requirements"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="form-actions form-wrapper text-center"
                        id="edit-actions--3"
                      >
                        <div
                          className="col-md-12 col-sm-12 col-xs-12 form-wrapper"
                          id="edit-grid--3"
                        >
                          <div
                            className="contactForm-button form-wrapper"
                            id="edit-button--3"
                          >
                            <button
                              type="submit"
                              className="contactForm-submit form-submit btn btn-lg btn-primary"
                              id="edit-submit--3"
                              name="op"
                              value="Submit"
                            >
                              Submit
                            </button>
                          </div>
                          <div
                            className="contactForm-note form-wrapper"
                            id="edit-note--3"
                          >
                            <span className="contactForm-sign">
                              <span className="contactForm-star">*</span>— means
                              required fields
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = ({ Portfolio }) => {
    const { portfolioList } = Portfolio;
    return { portfolioList };
};

const mapDispatchToProps = dispatch => ({
      getPortfolioDetails: () => dispatch(actions.getPortfolioDetails()), 
});

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);