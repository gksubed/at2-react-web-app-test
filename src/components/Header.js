// components/Header.js

import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header id="header">
      <div id="top-bar">
        {/* <div className="container"> */}
        <div className="container d-flex align-items-center justify-content-end">
          <ul id="top-buttons">
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
            <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className ="fa fa-globe"></i> English</span>
                    <ul>
                      <li><a href="#">Deutsch</a></li>
                      <li><a href="#">Espa&ntilde;ol</a></li>
                      <li><a href="#">Fran&ccedil;ais</a></li>
                      <li><a href="#">Portugu&ecirc;s</a></li>
                    </ul>
                  </div>
                </li>
          </ul>
        </div>
      </div>
      <div id="nav-section">
        <div className="container">
       

          <a href="/" className="nav-logo">
            <img src={logo} alt="One Ring Rentals" />
          </a>
          <div id="sb-search" className="sb-search">
                  <form>
                    <input
                      className="sb-search-input"
                      placeholder="Search..."
                      type="text"
                   
                      name="search"
                      id="search"
                    />
                    <input className="sb-search-submit" type="submit" value="" />
                    <i className="fa fa-search sb-icon-search"></i>
                  </form>
                </div>
          <nav className="navbar">
            {/* <ul className="nav navbar-nav d-flex mb-0"> */}
            <ul className="nav navbar-nav d-flex flex-row mb-0 gap-3">
              <li className="nav-item"><a className="nav-link" href="/">Find a Rental</a></li>
              {/* <li><a href="#">List your rental</a></li> */}
              <li className="nav-item"><a className="nav-link" href="/articles">Recent Articles</a></li>
              <li className="nav-item"><a className="nav-link" href="/regions">Regions</a></li>
              <li className="nav-item"><a className="nav-link" href="/news">News</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;