import React, { Component } from "react";
class ContactUs extends Component {
  render() {
    return (
      <section id="contacts" className="contactemedstore gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>Request a demo</h2>
          </div>
          <p className="text-center">
            Thank you for your interest in EMedStore and our services. Please
            fill out the form below or e-mail us at{" "}
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
                        <span className="contactForm-correct" title="Correct" />
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
                        <span className="contactForm-correct" title="Correct" />
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
                        <span className="contactForm-correct" title="Correct" />
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
    );
  }
}
export default ContactUs;
