import React from "react";
import { Link, withRouter } from "react-router-dom";
import  Logo from "../images/vot_txt-logo_white.svg";

function Header() {
  return (
    <header id="header" className="site-header">
        <div className="navbar-container black">
            <div>
                <Link className="navbar-brand container" to="/">
                  <div className="header-img">
                    <img src={Logo} className="vot-txt-header animate__animated animate__fadeInDown" draggable="false" alt="Village of Thousands Text Logo" />
                  </div>
                </Link>
                <Link className="nav-link" to="/">
                    <div className="notify">
                        Create your account today and get a <u>FREE</u> Limited Edition VoT NFT!
                    <Link className="info-icon" >
                    <i className="material-icons info-icon">info_outline</i>
                    </Link>
                    </div>
                </Link>
        </div>
      </div>
    </header>
  );
}
    // <header id="header" class="site-header">
    //   <div class="navbar-container black">
    //     <div class="nav-wrapper">
    //       <div class="logo-wrapper">
    //         <a href="index.html" class="brand-logo center">
    //           <!-- LOGO -->
    //           <img class="vot-txt-header animate__animated animate__fadeInDown" style="display:none" draggable="false" class="lazyload" role="img" data-src="img/vot_txt-logo_white.svg" alt="Village of Thousands Text Logo">
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <a href="#">
    //     <div class="notify">Create your account today and get a <u>FREE</u> Limited Edition VoT NFT! <a class="info-icon"><i class="material-icons info-icon">info_outline</i></a></li></div>          
    //   </a>
    // </header>
export default withRouter(Header);