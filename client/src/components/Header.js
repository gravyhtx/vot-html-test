import React from "react";
import { Link, useLocation } from "react-router-dom";
import  Logo from "../images/vot_txt-logo_white.svg";
import NotificationBar from './modules/NotificationBar';

const Header = () =>  {
    const location =  useLocation();
    const { pathname } = location
    const splitLocation = pathname.split("/")

    const notification = <>
        Create your account today and get a <u>FREE</u> Limited Edition VoT NFT!&nbsp;
        <span className="info-icon" id="info-icon">
        <i className="material-icons info-icon">info_outline</i>
        </span>
    </>
    
    return (
      <header id="site-header" className="site-header">
          <div className="navbar-container black">
            <Link className="navbar-brand container" to="/">
              <div className="header-img">
                <img src={Logo} className={splitLocation[1] === "" ? "vot-txt-header animate__animated animate__fadeInDown" : "vot-txt-header"} draggable="false" alt="Village of Thousands Text Logo" />
              </div>
            </Link>
            <NotificationBar text={notification} />
          </div>
      </header>
    );
}

export default Header;