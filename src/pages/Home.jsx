import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <ul className="list">
          <div className="list1">
            <img src="/mailchip.png" className="logo" />
            <li>Why MailChimp?</li>
            <li>Marketing Platform</li>
            <li>Pricing</li>
            <li>Resources</li>
          </div>

          <div className="rightlist">
            <span className="searchbar">
              <img src="/searchIcon.png" className="searchIcon" />
              <input type="text" placeholder="Search" className="search" />
            </span>
            <button className="login">Login</button>
            <button className="signup">Signup for Free</button>
          </div>
        </ul>
      </div>

      <div className="container">
        <div className="container-div1">
          <h1 className="header1">Make your side hustle your main hustle</h1>
          <p>
            Your all in one marketing platform that gives you tools to find the
            right customer, build your audience, and brind your brand to life
          </p>
          <button className="container-button">Pick a plan</button>
          <span className="link1">Learn More</span>
        </div>
        <div>
          <img src="/sample.jpg" className="container-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
