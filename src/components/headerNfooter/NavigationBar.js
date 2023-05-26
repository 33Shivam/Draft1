import "./NavigationBar.css";
import React from "react";

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
      <div className="mission">Mission</div>
      <div className="collaboration">Collaboration</div>
      <div className="faqs">FAQs</div>
      <div className="crowdfunding">Crowdfunding</div>
      <div className="button">
        <div className="button-child" />
        <div className="register">Register</div>
      </div>
      <div className="button1">
        <div className="button-item" />
        <div className="log-in">Log in</div>
      </div>
      <div className="learn">Learn</div>
    </div>
    );
  }
}

export default NavigationBar;