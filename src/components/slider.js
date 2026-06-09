import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
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
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* BEGIN HOME SLIDER SECTION */}
      <div id="carousel-example-generic" className="carousel slide">
        
        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              // 'item' to 'carousel-item' for modern Bootstrap compatibility
              className={`carousel-item ${index === current ? "active" : ""}`}
              style={{
                background: `url(${slide.image}) no-repeat left center`,
                backgroundSize: "cover",
                height: "605px",
                display: index === current ? "block" : "none",
                position: "relative",
              }}
            >
              <div className="carousel-caption">
                <div className="caption sfr slider-title">{slide.title}</div>
                <div className="caption sfl slider-subtitle">{slide.subtitle}</div>
                
                {/*Changed <a> to <Link> to avoid full-page reloads */}
                <Link to={slide.link} className="caption sfb btn btn-default btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={nextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* END HOME SLIDER SECTION */}
    </>
  );
}

export default Slider;
