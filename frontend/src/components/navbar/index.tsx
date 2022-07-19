import React from "react";
import { ReactComponent as Github } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="rymovie-nav-content">
          <h1>
            <p>R</p>
            <span>Y</span>Movie
          </h1>
          <a href="https://github.com/Diego-Sant">
            <div className="rymovie-contact-container">
              <Github />
              <p className="rymovie-contact-link">/RateYourMovie</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
