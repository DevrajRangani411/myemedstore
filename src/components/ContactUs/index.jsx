import React, { Component } from 'react';
import img from '../../assets/images/contactbanner.jpg';
import { getContactData } from "../../actions/contactUs";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


class ContactUs extends Component {
  
      handleData = event => {
        
          switch(event.target.name)
          {
              case "name" :
                this.setState({
                    
                    name:event.target.value
                    });

            case "company" :
                this.setState({
                   
                    company:event.target.value
                    });
             case "phone" :
                this.setState({
                   
                    phone:event.target.value
                    });

            case "email" :
                this.setState({
                   
                    email:event.target.value
                    });
            case "state" :
                this.setState({
                   
                    state:event.target.value
                    });
            case "details" :
                this.setState({
                   
                    details:event.target.value
                    });
              }

          }
       
      onSubmit = e => {
        e.preventDefault();
        
        const contactData=this.state;
        console.log("ContactUs -> contactData", contactData)
        this.props.getContactData(contactData);
        //console.log("jjj",contactData);
      
        }
   
    render() {
     // const { name, company, email, phone, state,details } = this.props;
     // console.log("After Fetched",name);
        return (
      <div>
  <div className="innerbanner">
    <div className="banner" style={{background: `url(${img})`}}>
      <div className="banner-text">
        <h1 style={{color: 'green'}}>Got a project in mind?</h1>
      </div>
    </div>
  </div>
  <div className="main-container">
    <section id="contacts" className="contactemedstore gray-bg">
      <div className="container">
        <p className="text-center">Thank you for your interest in EMedStore and our services. Please fill out the form below or e-mail us at <a href="mailto:contact@emedstore.com" className="theme-color">contact@emedstore.com</a> and we will get back to you promptly regarding your request.</p>
        <div className="contactForm-body">
          <div id="contacts-form-wrapper">
            <form id="request-form">
              <div className="row form-wrapper">
                <div className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper" id="edit-contact">
                  <div className="contactForm-caption form-wrapper" id="edit-title">
        <h1 style={{color: 'green'}}>Contact details</h1>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block contactForm-block--require">
                      <input className="contactForm-input form-text inactive" required placeholder="Full Name"   onChange={event => this.handleData(event)}type="text" name="name"    />
                      <span className="contactForm-correct" title="Correct" />
                      <span className="contactForm-del" title="Clear" />
                    </div>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block">
                      <input className="contactForm-input form-text inactive" tabIndex={2} type="text" name="company"    onChange={event => this.handleData(event)}placeholder="Company / Organization" />
                    </div>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block">
                      <input className="contactForm-input inactive form-text" tabIndex={3} type="text" name="phone" onChange={event => this.handleData(event)}  placeholder="Phone" />
                    </div>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block contactForm-block--require">
                      <input className="contactForm-input inactive form-text required" tabIndex={4} type="text"  name="email"  onChange={event => this.handleData(event)}  placeholder="Email" required />
                      <span className="contactForm-correct" title="Correct" />
                      <span className="contactForm-del" title="Clear" />
                    </div>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block contactForm-block--require">
                      <select placeholder="Country" tabIndex={-1} id="edit-country" name="state"  onChange={event => this.handleData(event)} className="form-select required">
                        <option value="US">United States</option>
                        <option value="UNITED KINGDOM">United Kingdom</option>
                        <option value="INDIA">India</option>
                      </select>
                      <div className="selectarrow"><b /></div>
                      <span className="contactForm-correct" title="Correct" />
                      <span className="contactForm-del" title="Clear" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper" id="edit-request">
                  <div className="contactForm-caption form-wrapper" id="edit-title--2">
                    <h4>Request details</h4>
                  </div>
                  <div className="contactForm-line">
                    <div className="contactForm-block contactForm-block--require">
                      <textarea className="contactForm-textarea form-textarea required inactive"  onChange={event => this.handleData(event)}tabIndex={6} id="edit-message" name="details" placeholder="Please describe your requirements" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-actions form-wrapper text-center" id="edit-actions--3">
                  <div className="col-md-12 col-sm-12 col-xs-12 form-wrapper" id="edit-grid--3">
                    <div className="contactForm-button form-wrapper" id="edit-button--3">
                      <button type="submit" id="edit-submit--3" name="submit"  onClick={event => this.onSubmit(event)} value="Submit">Submit</button>
                    </div>
                    <div className="contactForm-note form-wrapper" id="edit-note--3">
                      <span className="contactForm-sign">
                        <span className="contactForm-star">*</span>— means required fields
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="morecontacts">
        <div className="container">
          <div className="section-title">
            <h2>More contacts</h2>
          </div>
          <div className="morecontact">
            <ul>
              <li>
                <h3>Project Enquiries</h3>
                <a href="#"><span className="icon fa fa-skype" />emedstore</a>
                <a href="mailto:enquiry@emedstore.com"><span className="icon fa fa-envelope" />enquiry@emedstore.com</a>
              </li>
              <li>
                <h3>New Business</h3>
                <a href="mailto:emedstore@gmail.com">emedstore@gmail.com</a>
              </li>
              <li>
                <h3>Career</h3>
                <a href="mailto:emedstore@gmail.com"><span className="icon fa fa-phone" />+91 79 48000686</a>
                <a href="mailto:creer@emedstore.com"><span className="icon fa fa-envelope" />creer@emedstore.com</a>
              </li>
              <li>
                <h3>General Enquiries</h3>
                <a href="mailto:info@emedstore.com"><span className="icon fa fa-envelope" />info@emedstore.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


        )
    }
}
const mapStateToProps = ({ contactUs }) => {
  // const { name, company, email, phone, state,details } = contactUs;
  //   return {
  //     name, company, email, phone, state,details
  //   };
};
  
const mapDispatchToProps = dispatch => ({
  getContactData: payload => dispatch(getContactData(payload)),
});


export default withRouter(
  connect(
    mapStateToProps,
      mapDispatchToProps
  )(ContactUs)
);

