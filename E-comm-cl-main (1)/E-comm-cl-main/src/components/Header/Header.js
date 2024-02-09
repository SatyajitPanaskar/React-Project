import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
           
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                
                
                <li>
                  <Link to="/register">
                    <span className="top-link-itm-txt">Register</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/login">
                    <span className="top-link-itm-txt">Log in</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
