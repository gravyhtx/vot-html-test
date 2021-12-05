import React from "react";
import Header from "../components/Header";
import Hero from "../components/modules/Hero"
import HeroImage from "../images/vot_banner-pipe.png"
import Footer from '../components/Footer';
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import RandomQuote from "../components/modules/RandomQuote";

const Home = () => {
    // window.location.href = "/";
    return (
      <div className="animate__animated animate__fadeIn">
      <Header />
      <NavMobile />
      <div id="content" className="main-content">
      <Hero image={HeroImage} />
        <div className="spacer"></div>
          <div className="index-section">
            <div className="index-heading container-fluid row">
                <div className="container col s12 m7 l6 center">
                <RandomQuote type={"zen"} />
                </div>
                <div className="container col s12 m5 l6">
                  <div className="img-card">
                    <div className="inner-card right-align animate__animated animate__fadeIn">
                        Welcome to the jungle. We got fun and games. Something about an animal and other thinks he says.
                        <br/><br/>
                        We are going to take you down to your sha-na-na-na-na-na knees. Just stay away from Mr. Brownstone. Even 
                        if he keeps knocking and won't leave you alone. Oh woahwoah...
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

export default Home;