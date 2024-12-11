import React from "react";
import './Header.css'; 
import { Link } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";

const Header = () => {
  return (
    <header>
      <div className="header-content">
         <img
          src="/download.jpg" 
          alt="Snapdeal Logo"
          className="logo"
        /> 
       <h1>Snapdeal</h1>
        <div className="auth-buttons">
          <Link to="/signin">
          <button className="signin-btn">Sign In</button>
          </Link>
          <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;