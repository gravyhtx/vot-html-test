import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import RandomQuote from "../components/modules/RandomQuote";
import CopError from "../images/szn/001/cop_error.png";
import FallError from "../images/szn/001/fall_error.png";

const PageNotFound = () => {

    let imageSelect = Math.floor(Math.random() * 2);
    let image = imageSelect === 0 ? CopError : FallError;

    return (
      <div>
      <Header />
      <NavMobile />
      <div id="content" className="main-content animate__animated animate__fadeIn">
            <div className="big-spacer"></div>
            <div className="location-error-section">
                <div className="box-container row">

                    <div className="box-col col s12 m6">
                        <div className="img-card">
                            <img src={image} className="img-constraints" draggable="false" alt="Sorry, broh. You're on the wrong page." />
                        </div>
                    </div>

                    <div className="box-col col s12 m6 center">
                        <h1 className="404-header">Hey, broh.. r u lost??</h1>
                        <div className="404-text-content left-text">
                            <div className="404-description">
                            <RandomQuote type="locationError" />
                            <span className="material-icons-outlined">
                                report_problem
                            </span>
                            </div>
                            <div className="404-quote italics">
                            01000100 01101001 01110110 01100101 01110010 01110011 01101001 01110100 01111001 00101110 00100000 01000011 01110010 01100101 01100001 01110100 01101001 01110110 01101001 01110100 01111001 00101110 00100000 01010000 01100001 01110011 01110011 01101001 01101111 01101110 00101110
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      <Footer />
      <NavDesktop />
      </div> 
    );
}

export default PageNotFound;