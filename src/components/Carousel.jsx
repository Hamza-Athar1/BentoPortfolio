// src/components/ProjectCarousel.jsx
import React from "react";
import "../componentStyles/Carousel.css"; // Import the custom CSS

const images = [
  "../assets/Devlog1.png",
  "../assets/Devlog2.png",
  "../assets/Devlog3.png",
  "../assets/Devlog4.png",
];

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
