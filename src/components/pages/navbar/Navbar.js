import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiDrippingSword } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../Button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <GiDrippingSword className="navbar-icon" />
            Weriniaa
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-me" className="nav-links">
                About me
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/projects" className="btn-link">
                  <Button buttonStyle="btn--outline">Projects</Button>
                </Link>
              ) : (
                <Link to="/projects" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Projects
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
