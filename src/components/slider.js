import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import slide1 from "../assets/images/patterns/pattern8.jpg";
import slide2 from "../assets/images/AjaxLoader.jpg";
const slides = [
  {
    id: 1,
    image: slide1,
     title: "Breathtaking views",
    subtitle: "Relaxation in the Bay of Belfalas",
    link: "/regions",
  },
  {
    id: 2,
    image: slide2,
    title: "The simple life",
    subtitle: "Lush gardens in Mordor",
    link: "/articles",
  },
];


  return (
    <>
      {/* BEGIN HOME SLIDER SECTION */}
      <div
        id="carousel-example-generic"
        className="carousel slide"
      ></div>
      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <!-- Indicators 
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		  </ol> -->

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div
            class="item active"
            id="slide1"
            style="
              background: url(http://placehold.it/1920x605) no-repeat left
                center;
              background-size: cover;
            "
          >
            <!-- Ready for JS Injection -->
            <div class="carousel-caption">
              <div class="caption sfr slider-title">Breathtaking views</div>
              <div class="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <a href="#" class="caption sfb btn btn-default btn-lg"
                >Learn More</a
              >
            </div>
          </div>
          <div
            class="item"
            id="slide2"
            style="
              background: url(http://placehold.it/1920x605) no-repeat left
                center;
              background-size: cover;
            "
          >
            <div class="carousel-caption">
              <div class="caption sfr slider-title">The simple life</div>
              <div class="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <a href="#" class="caption sfb btn btn-default btn-lg"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <!-- Blue Filter -->
        <div id="home-search-section"></div>

        <!-- Controls -->
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- END HOME SLIDER SECTION -->
         {/* END HOME SLIDER SECTION */}
    </>
  );
}

export default Slider;