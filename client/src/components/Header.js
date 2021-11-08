import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import  Logo from "../images/vot_txt-logo_white.svg";

export default class Header extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { value: true };
    // }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    render() {
        return (
          <header id="header" className="site-header">
              <div className="navbar-container black">
                <Link className="navbar-brand container" to="/">
                  <div className="header-img">
                    <img src={Logo} className="vot-txt-header animate__animated animate__fadeInDown" draggable="false" alt="Village of Thousands Text Logo" />
                  </div>
                </Link>
                <Link className="nav-link" to="/">
                    <div className="notify">
                        Create your account today and get a <u>FREE</u> Limited Edition VoT NFT!&nbsp;
                      <span className="info-icon" id="info-icon">
                        <i className="material-icons info-icon">info_outline</i>
                      </span>
                    </div>
                </Link>
              </div>
          </header>
        );
    }
}