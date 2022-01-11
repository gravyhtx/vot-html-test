import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/header.svg";
import NotificationBar from './NotificationBar';
import SiteData from "../config/site-data.json"

const Header = () =>  {

    // Get userData

    let siteName = SiteData.name;
    let abbv = SiteData.abbreviation.toLowerCase();
    let notification;

    const headerLink = "/"
    const notificationLink = "/register"

    const location =  useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    notification=
    <>
      Create your account today and get a <u>FREE</u> Limited Edition VoT NFT!&nbsp;
      <span className="info-icon" id="info-icon">
        <i className="material-icons info-icon">info_outline</i>
      </span>
    </>;
    
    return (
      <header className="site-header" id="site-header">
          <div className="navbar-container black" id="header-container">
            <Link className="navbar-brand container" to={headerLink} id="header-link-container">
              <div className="header-img-container" id="header-img-container">
                <img
                  src={Logo}
                  className={splitLocation[1] === "" ? "header-img animate__animated animate__fadeInDown "+abbv+"-txt-header" : abbv+"-txt-header header-img"}
                  id="header-img"
                  draggable="false"
                  alt={siteName ? siteName+" Logo" : "Website Logo"} />
              </div>
            </Link>
            {/* userData.wallet?<NotificationBar text={notification} link={notificationLink} />:<></> */}
            <NotificationBar text={notification} link={notificationLink} />
          </div>
      </header>
      
    );
}

export default Header;