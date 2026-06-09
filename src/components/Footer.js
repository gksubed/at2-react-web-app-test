import React from "react";
import logo from "../assets/images/logo.png";
import house1 from "../assets/images/house1.jpg";

function Footer() {
  const links = [
    { href: "#", label: "All rentals" },
    { href: "#", label: "List your rental" },
    { href: "#", label: "Read our FAQs" },
  ];

  const regions = [
    "Rhovanion",
    "Eriador",
    "Bay of Belfalas",
    "Mordor",
    "Arnor",
    "Forlindon",
  ];

  return (
    <footer id="footer">

      {/* TOP SECTION */}
      <div id="footer-top" className="container">
        <div className="row">

          {/* ABOUT */}
          <div className="block col-sm-3">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <br /><br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
              volutpat quam dignissim, convallis elit id, efficitur sem.
              Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
              pellentesque nec at metus.
            </p>
          </div>

          {/* LINKS */}
          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* REGIONS */}
          <div className="block col-sm-6">
            <h3>Popular regions</h3>

            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regions.slice(0, 3).map((region, index) => (
                    <li key={index}>
                      <div className="image">
                        <a href="properties-detail.html">
                          <img src={house1} alt={region} />
                        </a>
                      </div>
                      <p>
                        <a href="properties-detail.html">{region}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-6">
                <ul className="footer-listings">
                  {regions.slice(3).map((region, index) => (
                    <li key={index}>
                      <div className="image">
                        <a href="properties-detail.html">
                          <img src={house1} alt={region} />
                        </a>
                      </div>
                      <p>
                        <a href="properties-detail.html">{region}</a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              &copy; 2014 One Ring Rentals | All rights reserved

              <ul className="social-networks">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;