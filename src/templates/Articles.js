// article-holder.html
// src/templeates/Articles.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Articles() {
  return (
    <div>

      {/* PAGE TITLE */}
      <div
        className="parallax colored-bg pattern-bg"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="page-title">Blog Listing</h1>

              <ul className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Travel Guides</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content">
        <div className="container">
          <div className="row">

            {/* MAIN */}
            <div className="main col-sm-8">

              <div id="blog-listing" className="list-style clearfix">
                <div className="row">

                  {/* BLOG ITEM */}
                  <div className="item col-md-6">
                    <div className="image">
                      <a href="#">
                        <span className="btn btn-default">Read More</span>
                      </a>
                      <img src="http://placehold.it/766x515" alt="" />
                    </div>

                    <div className="tag">
                      <i className="fa fa-file-text"></i>
                    </div>

                    <div className="info-blog">
                      <ul className="top-info">
                        <li><i className="fa fa-calendar"></i> July 30, 2014</li>
                        <li><i className="fa fa-comments-o"></i> 2</li>
                        <li><i className="fa fa-tags"></i> Properties, Prices</li>
                      </ul>

                      <h3>
                        <a href="#">
                          How to get your dream property for the best price?
                        </a>
                      </h3>

                      <p>
                        Sed rutrum urna id tellus euismod gravida. Praesent
                        placerat mauris ac pellentesque.
                      </p>
                    </div>
                  </div>

                  {/*  SAME BLOCK FOR OTHER ITEMS */}
                  <div className="item col-md-6">
                    <div className="image">
                      <a href="#">
                        <span className="btn btn-default">Read More</span>
                      </a>
                      <img src="http://placehold.it/766x515" alt="" />
                    </div>

                    <div className="tag">
                      <i className="fa fa-file-text"></i>
                    </div>

                    <div className="info-blog">
                      <ul className="top-info">
                        <li><i className="fa fa-calendar"></i> July 30, 2014</li>
                        <li><i className="fa fa-comments-o"></i> 2</li>
                        <li><i className="fa fa-tags"></i> Properties, Prices</li>
                      </ul>

                      <h3>
                        <a href="#">
                          How to get your dream property for the best price?
                        </a>
                      </h3>

                      <p>
                        Sed rutrum urna id tellus euismod gravida. Praesent
                        placerat mauris ac pellentesque.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* PAGINATION */}
              <div className="pagination">
                <ul id="previous">
                  <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                </ul>

                <ul>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>

                <ul id="next">
                  <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                </ul>
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="sidebar gray col-sm-4">

              <h2 className="section-title">Categories</h2>
              <ul className="categories">
                <li><a href="#">Business <span>(2)</span></a></li>
                <li><a href="#">Commercial <span>(1)</span></a></li>
                <li><a href="#">Land <span>(3)</span></a></li>
              </ul>

              <h2 className="section-title">Tags</h2>
              <ul className="tags">
                <li><a href="#">Apartments</a></li>
                <li><a href="#">Real estate</a></li>
                <li><a href="#">Rent</a></li>
              </ul>

              <h2 className="section-title">Latest News</h2>
              <ul className="latest-news">
                <li>
                  <img src="http://placehold.it/100x100" alt="" />
                  <h3><a href="#">Best property deals</a></h3>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Articles;