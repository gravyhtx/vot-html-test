import React, {Component} from "react";
import Hero from "./modules/Hero"
import Header from "./Header";
import Footer from './Footer';
import NavDesktop from "./NavDesktop";

export default class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { value: true };
    // }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    render(){
        return (
          <div>
          <Header />
          <div id="content" className="main-content animate__animated animate__fadeIn">
          <Hero />
            <div className="spacer"></div>
              <div className="index-section">
                <div className="index-heading container-fluid row">
                    <div className="container col s12 m7 l6 center">
                      
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
}