// src/components/ProjectCarousel.jsx
import React from "react";
import "../componentStyles/Carousel.css"; // Import the custom CSS
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
const images = [AC, Aiaura, ReactMini];

export default function ProjectCarousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project ${i + 1}`}
            className="carousel-image"
            style={{
              width: "auto",
              height: "160px",
              aspectRatio: "16/9",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "1rem",
            }}
          />
        ))}
      </div>
    </div>
  );
}
