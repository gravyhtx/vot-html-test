import React, {Component} from "react";

// make array to loop for "links-list"
export default class Footer extends Component {
    // constructor(props){
    //     super(props);
    // this.state = { bool: true };
    // }
    render() {
      return (
        <div className="footer animate__animated animate__fadeIn">
          <footer className="page-footer" id="online">
            <div className="footer-container container-fluid center">
              <div className="links-list" id="links-list">
                <div><b>ABOUT</b>&emsp;//&emsp;<b>TERMS OF SERVICE</b>&emsp;//&emsp;<b>SHIPPING</b>&emsp;//&emsp;<b>RETURNS</b></div>
                <div><b>NEWSLETTER</b>&emsp;//&emsp;<b>FAQ</b>&emsp;//&emsp;<b>CONTACT US</b></div>
              </div>
              <div className="copyright container center">Copyright &copy; 2021 // Village of Thousands</div>
              <br/>
            </div>
          </footer>
        </div>
      );    
    }
}