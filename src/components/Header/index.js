import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="top-container v-grid-container">
  <header className="home-page-header">
    <div className="header-container header-home">
      <nav className="navbar navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <NavLink className="navbar-brand" to="/">
              <img src={require('../../assets/images/logo.png')} alt="Logo" />
            </NavLink>            
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right f-size18">
              <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
              <li className="dropdown" >
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</a>
                <ul className="dropdown-menu">
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Hosting</a></li>
                </ul>
              </li>
              <li><NavLink to="/blog" >Blog</NavLink></li>
              <li><NavLink to="/about" >About</NavLink></li>
              <li className="dropdown megadropdown hidden-below-991">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Company</a>
                <div className="dropdown-menu megamenu">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="megamenuheading">
                          <h4>COPMANY</h4>
                        </div>
                        <ul className="megamenusubmenu">
                          <li><a href="#">Overview</a></li>
                          <li><a href="#">Our Pathfinders</a></li>
                          <li><a href="#">Corporate Facts</a></li>
                          <li><a href="#">Our Values</a></li>
                          <li><a href="#">Infrastructure</a></li>
                          <li><a href="#">Global Presence</a></li>
                          <li><a href="#">Locate us</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <div className="megamenuheading">
                          <h4>INSIGHT</h4>
                        </div>
                        <ul className="megamenusubmenu">
                          <li><a href="#">Client Testimonial</a></li>
                          <li><a href="#">Corporate Identity</a></li>
                          <li><a href="#">Partnership</a></li>
                          <li><a href="#">Certificates &amp; Alliances</a></li>
                          <li><a href="#">Media Coverage</a></li>
                          <li><a href="#">Global Events</a></li>
                          <li><a href="#">Blog</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <div className="megamenuheading">
                          <h4>WE’RE HIRING</h4>
                          <span>Get to work in an amazing work environment, supportive team which fosters growth</span>
                        </div>
                        <ul className="megamenusubmenu">
                          <li><a href="#">Life @ EMedStore </a></li>
                          <li><a href="#">Celebrations</a></li>
                        </ul>
                        <a href="#" className="megamenubtn">Current Job Opportunities</a>
                      </div>
                      <div className="col-sm-3 hidden-below-991">
                        <iframe width={280} height={160} src="https://www.youtube.com/embed/zSeeO41oseE" frameBorder={0} gesture="media" allowFullScreen />
                        <span className="underiframe">Get an insight about what do we do better than any of our competitors</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="megamenuheading">
                          <h4>WHY EMedStore</h4>
                        </div>
                        <ul className="megamenusubmenu">
                          <li><a href="#">Why EMedStore</a></li>
                          <li><a href="#">Awards &amp; Accolades</a></li>
                          <li><a href="#">Quality Policy</a></li>
                          <li><a href="#">Center of Excellence</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <div className="megamenuheading">
                          <h4>EMEDSTORE DISCIPLINES</h4>
                          <span className="hidden-below-991">Our disciplines provide specific value to our clients. They sit at the core of all our services and offerings.</span>
                        </div>
                        <ul className="megamenusubmenu">
                          <li><a href="#">Development</a></li>
                          <li><a href="#">Delivery</a></li>
                          <li><a href="#">Pricing</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3 hidden-below-991">
                        <div className="bloctemplate">
                          <a href="#">
                            <img src="images/car.png" />
                            <div className="templatedetails">
                              <h4>Partner with Us</h4>
                              <span>and enjoy the benefits</span>
                            </div>
                          </a>
                        </div>
                        <div className="bloctemplate">
                          <img src="images/car.png" />
                          <div className="templatedetails">
                            <h4>+1-888-392-8831</h4>
                            <span><a href="mailto:info@emedstore.com">info@emedstore.com</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 hidden-below-991">
                        <img src="images/iso.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown hidden-above-991">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Company</a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-toggle">COMPANY</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Overview</a></li>
                      <li><a href="#">Our Pathfinders</a></li>
                      <li><a href="#">Corporate Facts</a></li>
                      <li><a href="#">Our Values</a></li>
                      <li><a href="#">Infrastructure</a></li>
                      <li><a href="#">Global Presence</a></li>
                      <li><a href="#">Locate us</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-toggle">INSIGHT</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Client Testimonial</a></li>
                      <li><a href="#">Corporate Identity</a></li>
                      <li><a href="#">Partnership</a></li>
                      <li><a href="#">Certificates &amp; Alliances</a></li>
                      <li><a href="#">Media Coverage/a&gt;</a></li><a href="#">
                      </a><li><a href="#" /><a href="#">Global Events</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-toggle">WE’RE HIRING</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Life @ EMedStore </a></li>
                      <li><a href="#">Celebrations</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-toggle">WHY EMedStore</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Why EMedStore</a></li>
                      <li><a href="#">Awards &amp; Accolades</a></li>
                      <li><a href="#">Quality Policy</a></li>
                      <li><a href="#">Center of Excellence</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#" className="dropdown-toggle">EMEDSTORE DISCIPLINES</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Development</a></li>
                      <li><a href="#">Delivery</a></li>
                      <li><a href="#">Pricing</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="contact"><NavLink to="/contactUs">Contact</NavLink></li>
            </ul>            
          </div>
        </div>
      </nav>      
    </div>
  </header>
</div>

        );
    }
}

export default Header;