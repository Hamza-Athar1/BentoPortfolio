import React from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import { FaBuilding, FaDollarSign, FaShoppingCart } from "react-icons/fa";
export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center min-h-[120vh] text-white py-8 px-2">
        <Navbar />
        <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-start">
          {/* Web Development Card */}
          <div className="w-full bg-[#18181e] rounded-2xl p-5 flex flex-col gap-4 shadow-lg border border-[#23232a]/60">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#23232a]">
                {/* Code Icon */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  className="text-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17l-5-5 5-5M16 7l5 5-5 5"
                    stroke="#a78bfa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xl font-bold text-white">
                Web Development
              </span>
            </div>
            {/* Description */}
            <div className="text-gray-300 text-sm">
              Crafting functional websites with clean code and responsive design
              to meet client objectives and enhance user experiences
            </div>
            {/* Schedule Call Button */}
            <button className="w-full flex items-center gap-2 justify-center bg-[#23232a] text-gray-200 py-3 rounded-xl mt-2 font-medium hover:bg-[#23232a]/80 transition border border-[#23232a]/60">
              <span>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  className="inline text-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="14"
                    height="12"
                    rx="3"
                    stroke="#a78bfa"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 3v2M13 3v2"
                    stroke="#a78bfa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="8"
                    y="10"
                    width="4"
                    height="2"
                    rx="1"
                    fill="#a78bfa"
                  />
                </svg>
              </span>
              <span className="text-violet-300">Schedule Call</span>
            </button>
            {/* Completed Projects */}
            <div className="flex items-center justify-between mt-4 mb-2">
              <span className="font-semibold text-white text-base">
                Completed Projects
              </span>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-violet-300 transition font-medium"
              >
                View Projects
              </a>
            </div>
            {/* Project Categories Marquee */}
            <div className="w-full">
              <Marquee pauseOnHover speed={30}>
                <span className="flex items-center gap-3 pb-1">
                  {/* Agency */}
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 text-gray-200 text-sm font-semibold mx-2">
                    <FaBuilding className="text-violet-400" />
                    Agency
                    <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                      08
                    </span>
                  </span>
                  {/* Fintech */}
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 text-gray-200 text-sm font-semibold mx-2">
                    <FaDollarSign className="text-violet-400" />
                    Fintech
                    <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                      03
                    </span>
                  </span>
                  {/* Ecommerce */}
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 text-gray-200 text-sm font-semibold mx-2">
                    <FaShoppingCart className="text-violet-400" />
                    Ecommerce
                    <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                      05
                    </span>
                  </span>
                </span>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
