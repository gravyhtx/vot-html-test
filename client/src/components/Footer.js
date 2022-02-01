import React from "react";
import { Link } from "react-router-dom";

// make array to loop for "links-list"
const Footer = () => {

    // const links = [
    //   ["home", "products", "faq", "cart"],
    //   ["login", ""]
    // ]
    // const siteMap = {

    // }

    return (
      <div className="footer animate__animated animate__fadeIn">
        <div className="page-footer" id="online">
          <div className="footer-container container-fluid center">
            <div className="links-list disable-highlight" id="links-list">
              <div>
                <Link to="/">
                  <span className="footer-link">
                    HOME
                  </span>
                </Link> &emsp;//&emsp;
                <Link to="/products">
                  <span className="footer-link">
                    SHOP
                  </span>
                </Link> &emsp;//&emsp;
                <Link to="/faq#1">
                  <span className="footer-link">
                    ABOUT
                  </span>
                </Link> &emsp;//&emsp;
                <Link to="/cart">
                  <span className="footer-link">
                    CART
                  </span>
                </Link>
              </div>
              <div>
                <Link to="/news">
                  <span className="footer-link">
                    NEWS
                  </span>&emsp;//&emsp;
                </Link>
                <Link to="/faq">
                  <span className="footer-link">
                    FAQ
                  </span>
                </Link>&emsp;//&emsp;
                <Link to="/faq#3">
                  <span className="footer-link">
                    CONTACT US
                  </span>
                </Link>
                </div>
            </div>
            <div className="copyright container center">
                <div className="copyright-text">Copyright &copy; 2022 // Village of Thousands</div>
                <span className="gravydidit highlight-selection gravy-font container center">
                  <span className="highlight-selection-light cursor-help">
                    <a className="highlight-selection-light cursor-help" href="https://www.instagram.com/gravydesignco/"
                    rel="noreferrer" target="_blank">
                    &nbsp;MADE WITH LOVE BY GRÄVY DESIGN CO.&nbsp;</a>
                  </span>
                </span>
            </div>
            <br/>
          </div>
        </div>
      </div>
    );    
}

export default Footer;