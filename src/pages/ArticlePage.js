

import React from "react";

import { Link } from "react-router-dom"; 

function ArticlePage() {
  return (
    <>
      {/* <Header /> */}

      {/* PAGE TITLE & HERO SECTION */}
 
      <section className="hero is-medium parallax colored-bg pattern-bg">
      <div className="container">
        <div className="hero-body">
          <div className="container">
            
            <h1 className="title is-1 has-text-weight-bold mb-4">
              Recent Articles Detail
            </h1>

         
            <nav className="navbar-breadcrumbs" role="navigation" aria-label="breadcrumbs">
            <ul className= "breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
              
                  <Link to="/regions">Travel Guides</Link>
                </li>
              
                <li className="is-active">
                  <Link to="/article" aria-current="page">
                    Travel Guide Article
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
      </section>

      {/* CONTENT */}
      <div className="content">
        <div className="container">
          <div className="row">

            {/* MAIN */}
            <div className="main col-sm-8">
              <h1 className="blog-title">
                How to get your dream property for the best price?
              </h1>

              <div className="blog-main-image">
                <img src="http://placehold.it/765x362" alt="" />
                <div className="tag">
                  <i className="fa fa-file-text"></i>
                </div>
              </div>

              <div className="blog-bottom-info">
                <ul>
                  <li><i className="fa fa-calendar"></i> July 30, 2014</li>
                  <li><i className="fa fa-comments-o"></i> 3 Comments</li>
                  <li><i className="fa fa-tags"></i> Properties, Prices</li>
                </ul>

                <div id="post-author">
                  <i className="fa fa-pencil"></i> By John Doe
                </div>
              </div>

              <div className="post-content">
                <p>
                  Curabitur dapibus hendrerit dui, vel sagittis lectus laoreet
                  et. Cras vitae purus dictum, fringilla urna sit amet.
                </p>

                <img
                  src="http://placehold.it/270x335"
                  alt=""
                  className="right"
                />

                <p>
                  Vestibulum rhoncus consequat aliquet. Mauris varius posuere
                  mattis. Duis vitae molestie arcu.
                </p>

                <p>
                  Phasellus pulvinar purus turpis, a consequat orci pellentesque
                  vitae.
                </p>
              </div>

              {/* COMMENTS */}
              <h1 className="section-title">Comments</h1>

              <div className="comments">
                <ul>
                  <li>
                    <img src="images/comment-man.jpg" alt="" />
                    <div className="comment">
                      <a href="#" className="btn btn-default-color">Reply</a>
                      <h3>
                        John Doe <small>30 July, 2014</small>
                      </h3>
                      <p>Nice article!</p>
                    </div>
                  </li>
                </ul>

                {/* FORM */}
                <div className="comments-form">
                  <h3>Leave a Reply</h3>

                  <form className="form-style">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="form-control"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      className="form-control"
                    />
                    <textarea
                      placeholder="Comment*"
                      className="form-control"
                    ></textarea>

                    <button
                      type="submit"
                      className="btn btn-default-color btn-lg"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="sidebar gray col-sm-4">
              <h2 className="section-title">Categories</h2>
              <ul className="categories">
                <li><a href="#">Business</a></li>
                <li><a href="#">Real Estate</a></li>
              </ul>

              <h2 className="section-title">Latest News</h2>
              <ul className="latest-news">
                <li>
                  <img src="http://placehold.it/100x100" alt="" />
                  <h3>
                    <a href="#">How to get your dream property?</a>
                  </h3>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default ArticlePage;