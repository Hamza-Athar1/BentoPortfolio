import React from "react";
import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import {
  FaBuilding,
  FaDollarSign,
  FaShoppingCart,
  FaUserGraduate,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaStar,
  FaArrowUp,
  FaThLarge,
  FaAward,
  FaCode,
  FaCalendarAlt,
  FaBolt,
  FaChevronDown,
} from "react-icons/fa";

export default function Services() {
  // Add state for dropdowns
  const [openBenefit, setOpenBenefit] = React.useState(null);

  // Benefit data
  const benefits = [
    {
      icon: <FaBolt className="text-violet-300 text-lg" />,
      label: "Speed Delivery",
      desc: "Get your projects delivered faster with optimized workflows and efficient processes.",
    },
    {
      icon: <FaCalendarAlt className="text-violet-300 text-lg" />,
      label: "Quick Turnaround",
      desc: "Rapid response and completion times to keep your business moving forward.",
    },
    {
      icon: <FaThLarge className="text-violet-300 text-lg" />,
      label: "Success Tracking",
      desc: "Monitor progress and results with transparent reporting and analytics.",
    },
    {
      icon: <FaAward className="text-violet-300 text-lg" />,
      label: "Unique Design",
      desc: "Stand out with custom, creative, and modern design tailored to your brand.",
    },
  ];
  return (
    <>
      <div className="slide-in-top flex flex-col items-center min-h-screen bg-gradient-to-br from-[#18181e] via-[#15151a] to-[#23232a] text-white py-8 px-2">
        <Navbar />
        {/* Cards Container */}
        <section className="w-full max-w-7xl mx-auto flex flex-col gap-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {/* Web Development Card */}
            <div className="slide-in-left bg-gradient-to-br from-[#18181e] to-[#23232a] rounded-3xl shadow-2xl border border-[#a78bfa]/10 p-7 flex flex-col items-start hover:shadow-violet-900/40 transition-shadow duration-300">
              <div className="fade-in w-full bg-[#18181e]/90 rounded-2xl p-6 flex flex-col gap-4 shadow-lg border border-[#a78bfa]/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa]/30 to-[#23232a] shadow-md">
                    {/* Code Icon */}
                    <FaCode className="text-violet-400 text-3xl drop-shadow" />
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    Web Development
                  </span>
                </div>
                {/* Description */}
                <div className="text-gray-300 text-base leading-relaxed">
                  Crafting functional websites with clean code and responsive
                  design to meet client objectives and enhance user experiences
                </div>
                {/* Schedule Call Button */}
                <button className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-[#23232a] py-3 rounded-xl mt-2 font-semibold hover:from-[#b794f4] hover:to-[#fde68a] hover:text-black transition border border-[#a78bfa]/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400">
                  <FaCalendarAlt className="inline text-violet-600 text-lg" />
                  <a href="mailto:atharhamza559@gmail.com">Contact Me</a>
                </button>
                {/* Completed Projects */}
                <div className="flex items-center justify-between mt-4 mb-2">
                  <span className="font-semibold text-white text-base">
                    Completed Projects
                  </span>
                  <Link
                    to="/works"
                    className="text-sm text-violet-300 hover:text-fbbf24 transition font-medium underline underline-offset-2"
                  >
                    View Projects
                  </Link>
                </div>
                {/* Project Categories Marquee */}
                <div className="w-full">
                  <Marquee pauseOnHover speed={30} gradient={false}>
                    <span className="flex items-center gap-3 pb-1">
                      {/* Agency */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
                        <FaBuilding className="text-violet-400" />
                        Agency
                        <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                          08
                        </span>
                      </span>
                      {/* Fintech */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
                        <FaDollarSign className="text-violet-400" />
                        Fintech
                        <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                          03
                        </span>
                      </span>
                      {/* Ecommerce */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
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
            <div className="slide-in-right bg-gradient-to-br from-[#18181e] to-[#23232a] rounded-3xl shadow-2xl border border-[#a78bfa]/10 p-7 flex flex-col items-start hover:shadow-violet-900/40 transition-shadow duration-300">
              <div className="fade-in w-full bg-[#18181e]/90 rounded-2xl p-6 flex flex-col gap-4 shadow-lg border border-[#a78bfa]/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa]/30 to-[#23232a] shadow-md">
                    <FaCode className="text-violet-400 text-3xl drop-shadow" />
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    QT Project Development
                  </span>
                </div>
                {/* Description */}
                <div className="text-gray-300 text-base leading-relaxed">
                  Generate high-quality, cross-platform applications using Qt
                  framework, ensuring performance and scalability for modern
                  needs.
                </div>
                {/* Schedule Call Button */}
                <button className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-[#23232a] py-3 rounded-xl mt-2 font-semibold hover:from-[#b794f4] hover:to-[#fde68a] hover:text-black transition border border-[#a78bfa]/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400">
                  <FaCalendarAlt className="inline text-violet-600 text-lg" />
                  <a href="mailto:atharhamza559@gmail.com">Contact Me</a>
                </button>
                {/* Completed Projects */}
                <div className="flex items-center justify-between mt-4 mb-2">
                  <span className="font-semibold text-white text-base">
                    Completed Projects
                  </span>
                  <Link
                    to="/works"
                    className="text-sm text-violet-300 hover:text-fbbf24 transition font-medium underline underline-offset-2"
                  >
                    View Projects
                  </Link>
                </div>
                {/* Project Categories Marquee */}
                <div className="w-full">
                  <Marquee
                    pauseOnHover
                    speed={30}
                    direction="right"
                    gradient={false}
                  >
                    <span className="flex items-center gap-3 pb-1">
                      {/* Agency */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
                        <FaBuilding className="text-violet-400" />
                        Agency
                        <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                          08
                        </span>
                      </span>
                      {/* Fintech */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
                        <FaDollarSign className="text-violet-400" />
                        Fintech
                        <span className="ml-2 bg-[#23232a] px-2 py-0.5 rounded text-xs text-violet-300 font-bold">
                          03
                        </span>
                      </span>
                      {/* Ecommerce */}
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/20 text-gray-200 text-sm font-semibold mx-2 shadow hover:scale-105 transition-transform">
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
            {/* Frontend Development Card */}
            <div className="slide-in-bottom bg-gradient-to-br from-[#18181e] to-[#23232a] rounded-3xl shadow-2xl border border-[#a78bfa]/10 p-7 flex flex-col items-start hover:shadow-violet-900/40 transition-shadow duration-300">
              <div className="fade-in w-full bg-[#18181e]/90 rounded-2xl p-6 flex flex-col gap-4 shadow-lg border border-[#a78bfa]/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa]/30 to-[#23232a] shadow-md">
                    <FaBolt className="text-violet-400 text-3xl drop-shadow" />
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    Frontend Development
                  </span>
                </div>
                {/* Description */}
                <div className="text-gray-300 text-base leading-relaxed">
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
                <button className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-[#23232a] py-3 rounded-xl mt-6 font-semibold hover:from-[#b794f4] hover:to-[#fde68a] hover:text-black transition border border-[#a78bfa]/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400">
                  <FaCalendarAlt className="inline text-violet-600 text-lg" />
                  <a href="mailto:atharhamza559@gmail.com">Contact Me</a>
                </button>
              </div>
            </div>
            {/* QT Projects Card */}
            <div className="slide-in-top bg-gradient-to-br from-[#18181e] to-[#23232a] rounded-3xl shadow-2xl border border-[#a78bfa]/10 p-7 flex flex-col items-start hover:shadow-violet-900/40 transition-shadow duration-300">
              <div className="fade-in w-full bg-[#18181e]/90 rounded-2xl p-6 flex flex-col gap-4 shadow-lg border border-[#a78bfa]/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa]/30 to-[#23232a] shadow-md">
                    <FaBolt className="text-violet-400 text-3xl drop-shadow" />
                  </span>
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    QT Projects
                  </span>
                </div>
                {/* Description */}
                <div className="text-gray-300 text-base leading-relaxed">
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
                <button className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-[#23232a] py-3 rounded-xl mt-6 font-semibold hover:from-[#b794f4] hover:to-[#fde68a] hover:text-black transition border border-[#a78bfa]/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400">
                  <FaCalendarAlt className="inline text-violet-600 text-lg" />
                  <a href="mailto:atharhamza559@gmail.com">Contact Me</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="slide-in-bottom w-full flex justify-center mt-12 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 w-full max-w-4xl">
            {/* Satisfaction */}
            <div className="slide-in-left bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#a78bfa]/10 hover:shadow-violet-900/20 transition-shadow">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                99
                <span className="text-violet-400 text-2xl align-top">%</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <FaStar />
                Satisfaction
              </div>
            </div>
            {/* Partnerships */}
            <div className="slide-in-top bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#a78bfa]/10 hover:shadow-violet-900/20 transition-shadow">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                08
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <FaArrowUp />
                Partnerships
              </div>
            </div>
            {/* Services Suite */}
            <div className="slide-in-bottom bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#a78bfa]/10 hover:shadow-violet-900/20 transition-shadow">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                12
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <FaThLarge />
                Services Suite
              </div>
            </div>
            {/* Accolades */}
            <div className="slide-in-right bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-xl flex flex-col items-center py-7 shadow-inner border border-[#a78bfa]/10 hover:shadow-violet-900/20 transition-shadow">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                14
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <FaAward />
                Accolades
              </div>
            </div>
          </div>
        </section>
        {/* About Me / Profile Card */}
        <section className="fade-in relative bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-3xl shadow-2xl border border-[#a78bfa]/10 px-8 py-8 flex flex-col items-center w-full max-w-[400px] md:max-w-2xl lg:max-w-3xl mx-auto mb-8">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex items-center justify-center mb-3 overflow-hidden shadow-lg border-2 border-[#a78bfa]/30">
            <img
              src={pfp}
              alt="Ameer Hamza"
              className="w-20 h-20 object-cover rounded-xl"
            />
          </div>
          {/* Name */}
          <div className="text-2xl font-extrabold text-white mb-2 flex items-center gap-2 tracking-tight">
            <FaUserGraduate className="text-violet-400" />
            Ameer Hamza Athar
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a
              href="https://github.com/Hamza-Athar1"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-violet-400 hover:text-[#23232a] transition shadow-md border border-[#a78bfa]/20"
            >
              <FaGithub className="text-violet-400 text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio/"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-violet-400 hover:text-[#23232a] transition shadow-md border border-[#a78bfa]/20"
            >
              <FaLinkedin className="text-violet-400 text-xl" />
            </a>
            <a
              href="mailto:atharhamza559@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-violet-400 hover:text-[#23232a] transition shadow-md border border-[#a78bfa]/20"
            >
              <FaEnvelope className="text-violet-400 text-xl" />
            </a>
          </div>
          {/* About Me Button */}
          <button className="w-[220px] py-3 rounded-xl bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-[#23232a] font-bold text-lg shadow-lg hover:from-[#b794f4] hover:to-[#fde68a] hover:text-black transition border-2 border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400">
            <Link to="/about">About Me</Link>
          </button>
        </section>
        {/* Works Gallery Section */}
        <section className="slide-in-bottom w-full max-w-4xl mb-8 bg-gradient-to-br from-[#a78bfa]/10 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-4 py-8 text-center min-h-[260px]">
          <span className="text-[#a78bfa] text-2xl drop-shadow-lg">
            <FaThLarge />
          </span>
          <span className="text-[11px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
            Showcase
          </span>
          <h2 className="text-lg font-bold text-white mt-1 tracking-tight pb-5">
            Works Gallery
          </h2>
          <div className="w-full flex flex-col items-center relative">
            <Marquee
              speed={25}
              className="mt-2 pb-5 opacity-30"
              autoFill={true}
              gradient={false}
            >
              <img
                src={Aiaura}
                alt="Project 1"
                className="h-28 w-44 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow object-cover"
              />
              <img
                src={ReactMini}
                alt="Project 2"
                className="h-28 w-44 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow object-cover"
              />
              <img
                src={AC}
                alt="Project 3"
                className="h-28 w-44 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow object-cover"
              />
            </Marquee>
            <Link
              to="/works"
              className="mt-3 px-4 py-2 absolute left-1/2 -translate-x-1/2 translate-y-23 rounded-xl bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-black text-xs font-semibold hover:from-[#b794f4] hover:to-[#fde68a] transition shadow-lg border border-[#a78bfa]/20"
            >
              View My Work
            </Link>
          </div>
        </section>
        <section className="fade-in w-full flex justify-center mb-8">
          <div className="bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-2xl shadow-2xl border border-[#a78bfa]/10 max-w-md md:max-w-2xl lg:max-w-3xl w-full px-6 py-6 flex flex-col items-center">
            {/* Header */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-violet-300 text-sm flex items-center gap-2">
                <span className="animate-pulse">✧</span> Benefits
              </span>
              <span className="text-white font-bold text-lg mt-1">
                Service Benefits
              </span>
            </div>
            {/* Benefits List */}
            <div className="flex flex-col gap-3 w-full">
              {benefits.map((benefit, idx) => (
                <div key={benefit.label} className="w-full">
                  <button
                    type="button"
                    className="flex items-center justify-between bg-[#23232a]/90 rounded-xl px-4 py-3 w-full focus:outline-none hover:bg-violet-400/20 transition border border-[#a78bfa]/10 shadow"
                    onClick={() =>
                      setOpenBenefit(openBenefit === idx ? null : idx)
                    }
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#18181e] shadow">
                        {benefit.icon}
                      </span>
                      <span className="text-gray-200 font-medium">
                        {benefit.label}
                      </span>
                    </span>
                    <span
                      className={`text-gray-400 transition-transform duration-200 ${
                        openBenefit === idx ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown size={22} />
                    </span>
                  </button>
                  {/* Dropdown Description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openBenefit === idx
                        ? "max-h-32 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-400 text-sm px-2 pb-2">
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Service Benefits Section */}
    </>
  );
}
