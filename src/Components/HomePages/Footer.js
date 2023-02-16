import React from "react";
import "../../assets/css/footer.css";
import logo from "../../assets/img/logo1.png";

export default function Footer() {
  return (
    <footer>
      <div className="conatiner">
        <div className="footer__bottom row">
          {/* stat item  */}
          <div className="footer__item itemFooter1 col-lg-3 col-md-3 wow">
            <a href="#" className="flex justify-left items-center">
              <img src={logo} alt width={70} height={100} />
              <span>Gaming</span>
            </a>
            <ul className="footer__contact">
              <li>
                <i className="fa fa-phone" />
                <span>
                  1800-123-4567 <br />
                  +91 987-654-3210
                </span>
              </li>
              <li>
                <i className="fa fa-envelope" />
                <span>
                  info@example.com <br />
                  services@gmail.com
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                <span>
                  Thu Duc, Vo Van Ngan <br />
                  HCM City
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__item itemFooter itemDetail col-lg-3 col-md-3 wow">
            <h3>Our Content</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Services
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Team
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item itemFooter .itemDetail col-lg-3 col-md-3 wow">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Strategy &amp; Research
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Web Solution
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  App Design
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item itemFooter itemDetail col-lg-3 col-md-3 wow">
            <h3>Other links</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-right" />
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* end item  */}
        </div>

        <div className="footer__copyrights ">
          <div className="copyrights__content">
            <div className="copyrights__left">
              <p>
                Copyright © 2022 <span>HoangPhu</span>. All rights reserved.
              </p>
            </div>
            <div className="copyrights__right">
              <ul>
                <li>
                  <a href="https://www.facebook.com/hoangphult/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/phuvct/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
