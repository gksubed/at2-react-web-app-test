// src/pages/NewsPage.jsx

import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import house1 from "../assets/images/house1.jpg";

import house3 from "../assets/images/house3.jpg";


function NewsPage() {
  return (
    <div id="wrapper">

      {/* <Header /> */}

      <div className="content">
        <div className="container">
          <div className="row">

            <div className="main col-sm-12">

              <h1 className="section-title">Latest News</h1>

              <div className="grid-style1 clearfix">

                <div className="item col-md-4">

                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </a>
                    <img src={house1} alt="" />
                  </div>

                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>

                  <div className="info-blog">
                    <span className="title">
                      New Rental Regulations Announced
                    </span>

                    <span className="text">
                      The government has announced new rental regulations
                      effective from next month. Find out how this impacts you.
                    </span>

                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>

                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-08
                      </span>
                    </span>
                  </div>

                </div>


                <div className="item col-md-4">

                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </a>
                    <img src={house1} alt="" />
                  </div>

                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>

                  <div className="info-blog">
                    <span className="title">
                      Top 10 Rental Properties in Sydney
                    </span>

                    <span className="text">
                      Explore our list of the top 10 rental properties in
                      Sydney for the month of August.
                    </span>

                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>

                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-07
                      </span>
                    </span>
                  </div>

                </div>


                <div className="item col-md-4">

                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </a>
                    <img src={house3} alt="" />
                  </div>

                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>

                  <div className="info-blog">
                    <span className="title">
                      Customer Stories: Finding the Perfect Home
                    </span>

                    <span className="text">
                      Read our customer stories about their journey to finding
                      the perfect home through One Ring Rentals.
                    </span>

                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>

                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-06
                      </span>
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* <Footer /> */}

    </div>
  );
}

export default NewsPage;