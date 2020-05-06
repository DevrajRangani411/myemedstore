import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
  <div className="footer-primary-container">
    <div className="container">
      <div className="footer footer-primary">
        <div className="row">
          <div className="col-md-5">
            <div className="bookmarks row">
              <div className="col-md-4 col-sm-4 col-xs-4 wow fadeInUp">
                <div className="block-title">About Us</div>
                <div className="block-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="career.php">Careers</a>
                    </li>
                    <li>
                      <a href="aboutus.php">About us</a>
                    </li>
                    <li>
                      <a href="our-team.php">Our Team</a>
                    </li>
                    <li>
                      <a href="contactus.php">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-4 col-xs-4 fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="block-title">OUR WORK</div>
                <div className="block-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="portfolio.php">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="clients.php">Clients</a>
                    </li>
                    <li>
                      <a href="#">Process</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-4 col-xs-4 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="block-title">INSIGHTS</div>
                <div className="block-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="blog.php">Our blog</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">e-Books</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-media row">
              <div className="col-md-12">
                <img
                  className="img-responsive logo"
                  title="EMedStore
                             logo"
                  src="images/logo.png"
                  alt="ready4s white"
                />
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/facebook-white.png"
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/youtube-white.png"
                        alt="YouTube"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/twitter-white.png"
                        alt="Twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/google-plus-white.png"
                        alt="Google Plus"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/linkedin-white.png"
                        alt="LinkedIn"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/appfutura-white.png"
                        alt="AppFutura"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://www.ready4s.com/img/icon/clutch-white.png"
                        alt="Clutch"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End col-md-5 */}
          <div className="col-md-7">
            <div className="contact">
              <div className="block-title">
                <a href="#" title="Contact us">
                  Contact us
                </a>
              </div>
              <div className="row">
                <div className="pl-0 col-md-12">
                  <ul>
                    <li className="mail">
                      <a
                        href="mailto:apps@emedstore.com"
                        title="apps@emedstore.com"
                      >
                        apps@emedstore.com
                      </a>
                    </li>
                    <li className="skype">
                      <a
                        href="skype:emedstore?call"
                        title="Call EMedStore on Skype"
                      >
                        emedstore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row country-row">
                <div className="pl-0 col-md-5">
                  <div className="country pl">Poland</div>
                  <ul>
                    <li className="address">
                      ul. Krowoderskich&nbsp;Zuchów 12
                      <br />
                      <nobr>31-272</nobr>&nbsp;Cracow, Poland
                    </li>
                    <li className="phone">
                      <a href="tel:+48 12 307 15 14" title="+48 12 307 15 14">
                        +48 12 307 15 14
                      </a>
                    </li>
                    <li>VAT UE: PL6762505351</li>
                  </ul>
                </div>
                <div className="pl-0 col-md-5">
                  <div className="country gb">United Kingdom</div>
                  <ul>
                    <li className="address">
                      3 High Street
                      <br />
                      BH15&nbsp;1AB&nbsp;Poole, Dorset
                    </li>
                    <li className="phone">
                      <a href="tel:+44 238 097 0485" title="+44 238 097 0485">
                        +44 238 097 0485
                      </a>
                    </li>
                    <li>VAT UE: GB218151236</li>
                  </ul>
                </div>
              </div>
              {/* <div class="row country-row">
                          <div class="pl-0 col-md-5">
                              <div class="country usa">
                                  United States
                              </div>
                              <ul>
                                  <li class="address">555 Madison Avenue Manhattan<br>New York, 10022</li>
                                  <li class="phone"><a href="tel:+1 347 897 04 40" title="+1 347 897 04 40">+1 347 897 04 40</a></li>
                                  <li>VAT UE: PL6762505351</li>
                              </ul>
                          </div>
                          <div class="pl-0 col-md-5">
                              <div class="country ua">
                                  Ukraine
                              </div>
                              <ul>
                                  <li class="address">Syhniwka (Сигнівка) 5/83<br>79040 Lviv (Львів)</li>
                                  <li class="phone"><a href="tel:+44 238 097 0485" title="+44 238 097 0485">+44 238 097 0485</a></li>
                                  <li>VAT UE: GB218151236</li>
                              </ul>
                          </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom-container wow fadeInUp">
    <div className="container">
      <div className="footer footer-bottom">
        <div className="row legal">
          <div className="col-sm-6">
            Copyright © 2012-2017 &nbsp;EMedStore - Pharmacies Mobile App.
          </div>
          <div className="col-sm-6 text-right">
            <ul>
              <li>
                <a href="#" title>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" title>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>;

            </div>
        )
    }
}
export default Footer;