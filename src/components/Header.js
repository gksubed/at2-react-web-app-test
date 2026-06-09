// components/Header.js

import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <ul id="top-buttons">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
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
            <ul className="nav navbar-nav">
              <li><a href="/">Find a Rental</a></li>
              <li><a href="/articles">Recent Articles</a></li>
              <li><a href="/regions">Regions</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;