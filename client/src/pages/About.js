import Header from "../components/Header";
import Footer from '../components/Footer';
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
// import RandomQuote from "../components/modules/RandomQuote";
// import ImageContainer from "../components/ImageContainer";

const About = () => {
    return (
        <div className="animate__animated animate__fadeIn">
        <Header />
        <NavMobile />
        <div id="content" className="main-content">
        <div className="spacer"></div>
        <div className="index-section animate__animated animate__fadeIn">
          
        </div>
        </div>
        <Footer />
        <NavDesktop />
        </div>
    );
}

export default About;