// src/components/ProjectCarousel.jsx
import React from "react";
import "../componentStyles/Carousel.css"; // Import the custom CSS
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
const images = [AC, Aiaura, ReactMini];

export default function ProjectCarousel() {
  return (
    <div className="carousel-wrapper bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 p-4 flex items-center justify-center">
      <div className="carousel-track">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project ${i + 1}`}
            className="carousel-image border-2 border-[#a78bfa]/30 shadow object-cover rounded-2xl mx-2"
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
