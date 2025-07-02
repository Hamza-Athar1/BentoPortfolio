import React from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import { FaBuilding, FaDollarSign, FaShoppingCart } from "react-icons/fa";
export default function Services() {
  return (
    <>
      <div className="flex flex-col items-center min-h-[120vh] text-white py-8 px-2">
        <Navbar />
        {/* Cards Container */}
        <div className="flex flex-col items-center w-full gap-4">
          {/* Web Development Card */}
          <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-start">
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
                Crafting functional websites with clean code and responsive
                design to meet client objectives and enhance user experiences
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
          {/* QT Project Development Card */}
          <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-start">
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
                  QT Project Development
                </span>
              </div>
              {/* Description */}
              <div className="text-gray-300 text-sm">
                Generate high-quality, cross-platform applications using Qt
                framework, ensuring performance and scalability for modern
                needs.
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
                <Marquee pauseOnHover speed={30} direction="right">
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
          {/* SEO Optimization Card 1 */}
          <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-start">
            <div className="w-full bg-[#18181e] rounded-2xl p-5 flex flex-col gap-4 shadow-lg border border-[#23232a]/60">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#23232a]">
                  {/* Lightning Icon */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    className="text-violet-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14h7l-1 8L21 10h-7l1-8z"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-xl font-bold text-white">
                  Frontend Development
                </span>
              </div>
              {/* Description */}
              <div className="text-gray-300 text-sm">
                For Turning your Ideas into Reality
              </div>
              {/* Experience, Completed Works, Hourly Rate */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-semibold text-white">1+ Years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Completed Works</span>
                  <span className="font-semibold text-white">5+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Hourly Rate</span>
                  <span className="font-semibold text-white">$100</span>
                </div>
              </div>
              {/* Schedule Call Button */}
              <button className="w-full flex items-center gap-2 justify-center bg-[#23232a] text-gray-200 py-3 rounded-xl mt-6 font-medium hover:bg-[#23232a]/80 transition border border-[#23232a]/60">
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
            </div>
          </div>
          {/* SEO Optimization Card 2 */}
          <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-start">
            <div className="w-full bg-[#18181e] rounded-2xl p-5 flex flex-col gap-4 shadow-lg border border-[#23232a]/60">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#23232a]">
                  {/* Lightning Icon */}
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    className="text-violet-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14h7l-1 8L21 10h-7l1-8z"
                      stroke="#a78bfa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-xl font-bold text-white">
                  QT Projects
                </span>
              </div>
              {/* Description */}
              <div className="text-gray-300 text-sm">
                For Building high-performance applications with Qt, ensuring
                cross-platform compatibility and modern UI/UX.
              </div>
              {/* Experience, Completed Works, Hourly Rate */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-semibold text-white">1+ Years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Completed Works</span>
                  <span className="font-semibold text-white">3+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Hourly Rate</span>
                  <span className="font-semibold text-white">$50</span>
                </div>
              </div>
              {/* Schedule Call Button */}
              <button className="w-full flex items-center gap-2 justify-center bg-[#23232a] text-gray-200 py-3 rounded-xl mt-6 font-medium hover:bg-[#23232a]/80 transition border border-[#23232a]/60">
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
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="w-full flex justify-center mt-8 mb-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full max-w-md">
            {/* Satisfaction */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#23232a]/60">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                99
                <span className="text-violet-400 text-2xl align-top">%</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    fill="#a78bfa"
                  />
                </svg>
                Satisfaction
              </div>
            </div>
            {/* Partnerships */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#23232a]/60">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                08
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M7 14l5-5 5 5"
                    stroke="#a78bfa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19V5"
                    stroke="#a78bfa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Partnerships
              </div>
            </div>
            {/* Services Suite */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#23232a]/60">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                12
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="2"
                    fill="#a78bfa"
                  />
                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="2"
                    fill="#a78bfa"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="2"
                    fill="#a78bfa"
                  />
                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="2"
                    fill="#a78bfa"
                  />
                </svg>
                Services Suite
              </div>
            </div>
            {/* Accolades */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#23232a]/60">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                14
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="8"
                    fill="#a78bfa"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Accolades
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
