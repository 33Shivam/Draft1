import React from "react";
import "./footer.css";

class Footer extends React.Component {
    render() {  
        return (
            <div className="footer-c">
            <b className="contact-us">Contact Us</b>
            <div className="govt-of-india">© Govt. of India</div>
            <img className="ellipse-icon" alt="" src="/ellipse.svg" />
            <img className="ellipse-icon1" alt="" src="/ellipse1.svg" />
            <img className="ellipse-icon2" alt="" src="/ellipse2.svg" />
            <img className="ellipse-icon3" alt="" src="/ellipse3.svg" />
            <b className="help-desk">Help Desk</b>
            <b className="terms-and-conditions">Terms and conditions</b>
            <b className="website-policy">Website Policy</b>
            <div className="socials">Socials</div>
            <b className="disclaimer">Disclaimer</b>
            <b className="sitemap">Sitemap</b>
            <div className="rectangle" />
          </div>
        )
  };
}
  export default Footer;


 
