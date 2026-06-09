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

function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Previous Slide
  const prevSlide = (e) => {
    e.preventDefault();

    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next Slide
  const nextSlide = (e) => {
    e.preventDefault();

    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* BEGIN HOME SLIDER SECTION */}
      <div
        id="carousel-example-generic"
        className="carousel slide"
      >

        {/* Wrapper for slides */}
        <div
          className="carousel-inner"
          role="listbox"
        >

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={slide.id}
              className={`item ${
                index === current ? "active" : ""
              }`}
              style={{
                background: `url(${slide.image}) no-repeat left center`,
                backgroundSize: "cover",
                height: "605px",
                display:
                  index === current ? "block" : "none",
                position: "relative",
              }}
            >

              {/* Ready for JS Injection */}
              <div className="carousel-caption">

                <div className="caption sfr slider-title">
                  {slide.title}
                </div>

                <div className="caption sfl slider-subtitle">
                  {slide.subtitle}
                </div>

                <a
                  href={slide.link}
                  className="caption sfb btn btn-default btn-lg"
                >
                  Learn More
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Blue Filter */}
        {/* <div id="home-search-section"></div> */}

        {/* Controls */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          onClick={prevSlide}
        >
          <span className="glyphicon glyphicon-chevron-left"></span>

          <span className="sr-only">
            Previous
          </span>
        </a>

        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          onClick={nextSlide}
        >
          <span className="glyphicon glyphicon-chevron-right"></span>

          <span className="sr-only">
            Next
          </span>
        </a>

      </div>
      {/* END HOME SLIDER SECTION */}
    </>
  );
}

export default Slider;