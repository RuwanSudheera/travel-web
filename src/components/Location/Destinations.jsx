import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Location.scss";

function Destinations() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="destination_main_wrapper">
      <h2 className="title">Top travel destinations</h2>
      <div className="destination_item">
        <div
          className="slider_round"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-wrapper">
            <img
              className={`image ${
                hoveredIndex === 1 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/sigiriya02.jpg"
              alt=""
            />
            <img
              className={`image ${
                hoveredIndex !== 1 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/sigiriya01.jpg"
              alt=""
            />
          </div>

          <a href="/">
            <h3>Sigiriya</h3>
          </a>
        </div>
        <div
          className="slider_round"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-wrapper">
            <img
              className={`image ${
                hoveredIndex === 2 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/kandy02.jpg"
              alt=""
            />
            <img
              className={`image ${
                hoveredIndex !== 2 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/kandy01.jpg"
              alt=""
            />
          </div>
          <a href="/">
            <h3>Kandy</h3>
          </a>
        </div>
        <div
          className="slider_round"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-wrapper">
            <img
              className={`image ${
                hoveredIndex === 3 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/galle02.jpg"
              alt=""
            />
            <img
              className={`image ${
                hoveredIndex !== 3 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/galle01.jpg"
              alt=""
            />
          </div>
          <a href="/">
            <h3>Galle</h3>
          </a>
        </div>
        <div
          className="slider_round"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-wrapper">
            <img
              className={`image ${
                hoveredIndex === 4 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/ella02.jpg"
              alt=""
            />
            <img
              className={`image ${
                hoveredIndex !== 4 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/ella01.jpg"
              alt=""
            />
          </div>
          <a href="/">
            <h3>Ella</h3>
          </a>
        </div>
        <div
          className="slider_round"
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="image-wrapper">
            <img
              className={`image ${
                hoveredIndex === 5 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/mirissa02.jpg"
              alt=""
            />
            <img
              className={`image ${
                hoveredIndex !== 5 ? "slide-in" : "slide-out"
              }`}
              src="/img/Destinations/mirissa01.jpg"
              alt=""
            />
          </div>
          <a href="/">
            <h3>Mirissa</h3>
          </a>
        </div>
      </div>
      <button className="btn button_border">See all destinations</button>
    </div>
  );
}

export default Destinations;
