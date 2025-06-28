import React from "react";
import {
  PiDevicesBold,
  PiGlobeLight,
  PiCodeBlock,
  PiPenNib,
  PiAppWindow,
} from "react-icons/pi";

const services = [
  { name: "Web Design", icon: <PiGlobeLight className="text-white text-xl" /> },
  {
    name: "Mobile App Design",
    icon: <PiDevicesBold className="text-white text-xl" />,
  },
  { name: "Development", icon: <PiCodeBlock className="text-white text-xl" /> },
  { name: "Branding", icon: <PiPenNib className="text-white text-xl" /> },
  { name: "UI/UX", icon: <PiAppWindow className="text-white text-xl" /> },
];

export default function ServicesCarousel() {
  // Duplicate services for seamless scroll
  const items = [...services, ...services];

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="carousel-wrapper"
        style={{ width: "220px", height: "100px" }}
      >
        <div className="carousel-track">
          {items.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[120px] h-24 flex-shrink-0 mx-1"
            >
              {service.icon}
              <span className="text-gray-200 text-xs mt-1">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 px-5 py-2 rounded-xl bg-[#a78bfa] text-black text-xs font-semibold hover:bg-[#b794f4] transition">
        View All Services
      </button>
    </div>
  );
}
