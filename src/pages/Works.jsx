import React from "react";
import Navbar from "../components/Navbar";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaLightbulb,
  FaRegStar,
  FaRegSun,
  FaBolt,
  FaUsers,
  FaRocket,
  FaAward,
  FaCertificate,
  FaBriefcase,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
  FaLayerGroup,
  FaMedal,
  FaGem,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaTrophy,
  FaCrown,
  FaUserCheck,
  FaUserAlt,
  FaUserGraduate,
  FaPalette,
  FaBullseye,
  FaSun,
  FaGem as FaGemSolid,
} from "react-icons/fa";
import { SiCplusplus, SiQt, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";
export default function Works() {
  return (
    <>
      <div className="flex flex-col items-center min-h-[120vh] text-white py-8 px-2">
        <Navbar />
        {/* Improved Responsive 2-column layout on large screens */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          {/* Left: My Top Projects, Profile, Fun Fact, Quote */}
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <div className="bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center w-full">
              {/* My Works Header */}
              <div className="w-full flex flex-col items-center mb-6">
                <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
                  <FaTrophy />
                  My Works
                </span>
                <h2 className="text-2xl font-bold text-center">
                  My Top Projects
                </h2>
              </div>
              {/* Project Cards */}
              <div className="w-full flex flex-col gap-4">
                {/* Project 1 */}
                <div className="bg-[#23232a] rounded-2xl p-4 flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={Aiaura}
                      alt="Aiaura"
                      className="w-full h-32 object-cover opacity-50"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">AIAURA</h3>
                        <span className="text-sm text-gray-400">Business</span>
                      </div>
                      <a
                        href="https://aiaura.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23232a] border border-[#23232a]/60 hover:bg-[#1a1a20] transition">
                          <FaExternalLinkAlt className="text-gray-300" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="bg-[#23232a] rounded-2xl p-4 flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={ReactMini}
                      alt="Personal Project"
                      className="w-full h-32 object-cover opacity-50"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          React Mini Projects
                        </h3>
                        <span className="text-sm text-gray-400">Personal</span>
                      </div>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23232a] border border-[#23232a]/60 hover:bg-[#1a1a20] transition">
                        <a
                          href="https://react-projects-rust-xi.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="text-gray-300" />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="bg-[#23232a] rounded-2xl p-4 flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={AC}
                      alt="Assassins Creed Website"
                      className="w-full h-32 object-cover opacity-50"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Assassins Creed Website
                        </h3>
                        <span className="text-sm text-gray-400">Fan-site</span>
                      </div>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#23232a] border border-[#23232a]/60 hover:bg-[#1a1a20] transition">
                        <a href="https://assassins-creed-web.vercel.app/">
                          <FaExternalLinkAlt className="text-gray-300" />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Add more projects here */}
              </div>
            </div>
            <div className="relative bg-[#18181e] rounded-3xl shadow-2xl border border-[#23232a]/40 px-8 py-8 flex flex-col items-center w-full max-w-[600px] mx-auto mt-8">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-xl bg-violet-400 flex items-center justify-center mb-3">
                {/* Replace with your avatar image */}
                <img
                  src="https://avatars.githubusercontent.com/u/placeholder"
                  alt="Ameer Hamza"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>
              {/* Name */}
              <div className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                <FaUserGraduate />
                Ameer Hamza Athar
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-[#23232a]/80 transition"
                >
                  <FaGithub className="text-gray-300 text-xl" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-[#23232a]/80 transition"
                >
                  <FaLinkedin className="text-gray-300 text-xl" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#23232a] hover:bg-[#23232a]/80 transition"
                >
                  <FaEnvelope className="text-gray-300 text-xl" />
                </a>
              </div>
              {/* About Me Button */}
              <button className="w-[220px] py-3 rounded-xl bg-violet-400 text-[#23232a] font-semibold text-lg shadow-md hover:bg-violet-300 transition border-2 border-violet-300">
                About Me
              </button>
            </div>
            <div className="w-full max-w-[600px] mx-auto mt-4 flex justify-center">
              <div className="bg-[#23232a] rounded-xl px-6 py-4 text-center text-sm text-violet-200 italic shadow border border-[#23232a]/60">
                {/* You can change the quote/fact below */}
                "Did you know? The first computer bug was an actual moth found
                in a computer in 1947."
              </div>
            </div>
            <div className="w-full max-w-[600px] mx-auto mt-2 flex justify-center">
              <div className="bg-[#18181e] rounded-xl px-6 py-4 text-center text-base text-violet-300 font-semibold shadow border border-[#23232a]/60">
                "Code is like humor. When you have to explain it, it’s bad." –
                Cory House
              </div>
            </div>
          </div>
          {/* Right: All other sections stacked */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
            {/* Awards & Accolades */}
            <div className="bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center w-full max-w-[900px] mx-auto">
              <span className="text-violet-300 flex items-center gap-2 text-xs font-semibold mb-1">
                <FaCrown />
                Recognitions
              </span>
              <h2 className="text-lg font-bold text-white mb-4">
                Awards & Accolades
              </h2>
              <div className="w-full flex flex-col gap-3">
                {/* Card 1 */}
                <a
                  href="https://designmastery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#23232a] rounded-xl px-4 py-3 hover:bg-[#23232a]/80 transition border border-[#23232a]/60"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#23232a] border border-[#23232a]/40">
                      <FaAward className="text-gray-400" size={20} />
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Advanced React Course
                      </div>
                      <div className="text-xs text-gray-400">coursera.com</div>
                    </div>
                  </div>
                  <span>
                    <FaExternalLinkAlt className="text-gray-400" size={18} />
                  </span>
                </a>
                {/* Card 2 */}
                <a
                  href="https://excellence.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#23232a] rounded-xl px-4 py-3 hover:bg-[#23232a]/80 transition border border-[#23232a]/60"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#23232a] border border-[#23232a]/40">
                      <FaMedal className="text-gray-400" size={20} />
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Excellence
                      </div>
                      <div className="text-xs text-gray-400">excellence.in</div>
                    </div>
                  </div>
                  <span>
                    <FaExternalLinkAlt className="text-gray-400" size={18} />
                  </span>
                </a>
                {/* Card 3 */}
                <a
                  href="https://gezitedetails.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#23232a] rounded-xl px-4 py-3 hover:bg-[#23232a]/80 transition border border-[#23232a]/60"
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#23232a] border border-[#23232a]/40">
                      <FaGem className="text-gray-400" size={20} />
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Gezite Details
                      </div>
                      <div className="text-xs text-gray-400">
                        gezitedetails.com
                      </div>
                    </div>
                  </div>
                  <span>
                    <FaExternalLinkAlt className="text-gray-400" size={18} />
                  </span>
                </a>
              </div>
            </div>
            {/* Certifications/Stats */}
            <div className="bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center w-full max-w-[900px] mx-auto">
              <div className="grid grid-cols-2 gap-x-2 gap-y-5 w-full">
                {/* Certifications */}
                <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
                  <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                    08
                    <span className="text-violet-400 text-2xl align-top">
                      +
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                    <FaCertificate />
                    Certifications
                  </div>
                </div>
                {/* Designs */}
                <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
                  <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                    250
                    <span className="text-violet-400 text-2xl align-top">
                      +
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                    <FaPalette />
                    Designs
                  </div>
                </div>
                {/* Collaborations */}
                <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
                  <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                    07
                    <span className="text-violet-400 text-2xl align-top">
                      +
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                    <FaUserCheck />
                    Collaborations
                  </div>
                </div>
                {/* Clients */}
                <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
                  <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                    32
                    <span className="text-violet-400 text-2xl align-top">
                      +
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                    <FaUserAlt />
                    Clients
                  </div>
                </div>
              </div>
            </div>
            {/* Service Suite Card */}
            <div className="bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-8 py-8 w-full max-w-[900px] mx-auto">
              <span className="text-[#a78bfa] text-xl drop-shadow-lg mb-1">
                <FaBriefcase />
              </span>
              <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
                What I Offer
              </span>
              <h2 className="text-base font-bold text-white mt-1 tracking-tight mb-2">
                Services
              </h2>
              <div className="w-full mt-2">
                <Marquee pauseOnHover speed={40}>
                  <span className="flex items-center gap-6">
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <FaLaptopCode className="text-[#a78bfa]" />
                      <span className="text-xs text-white font-semibold">
                        Web Design
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <FaMobileAlt className="text-[#a78bfa]" />
                      <span className="text-xs text-white font-semibold">
                        Mobile App Design
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <FaCode className="text-[#a78bfa]" />
                      <span className="text-xs text-white font-semibold">
                        Development
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <FaPencilRuler className="text-[#a78bfa]" />
                      <span className="text-xs text-white font-semibold">
                        Branding
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <FaLayerGroup className="text-[#a78bfa]" />
                      <span className="text-xs text-white font-semibold">
                        UI/UX
                      </span>
                    </span>
                  </span>
                </Marquee>
              </div>
            </div>
            {/* My Hardcore Skills Card */}
            <div className="bg-[#18181e] rounded-2xl shadow-2xl border border-[#23232a]/40 px-8 py-8 flex flex-col items-center w-full max-w-[900px] mx-auto">
              <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
                <FaBullseye />
                My Skills
              </span>
              <h2 className="text-2xl text-white font-bold text-center mb-4">
                My Hardcore Skills
              </h2>
              <div className="w-full mt-2">
                <Marquee pauseOnHover speed={40} direction="right">
                  <span className="flex items-center gap-6">
                    {/* React */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaReact className="text-[#61DAFB] text-2xl" />
                      <span className="font-semibold text-white">React</span>
                    </span>
                    {/* HTML */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaHtml5 className="text-[#E44D26] text-2xl" />
                      <span className="font-semibold text-white">HTML</span>
                    </span>
                    {/* CSS */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaCss3Alt className="text-[#2965F1] text-2xl" />
                      <span className="font-semibold text-white">CSS</span>
                    </span>
                    {/* JavaScript */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaJsSquare className="text-[#F7DF1E] text-2xl" />
                      <span className="font-semibold text-white">
                        JavaScript
                      </span>
                    </span>
                    {/* Python */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaPython className="text-[#3776AB] text-2xl" />
                      <span className="font-semibold text-white">Python</span>
                    </span>
                    {/* C++ */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <SiCplusplus className="text-[#00599C] text-2xl" />
                      <span className="font-semibold text-white">C++</span>
                    </span>
                    {/* QT */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <SiQt className="text-[#41CD52] text-2xl" />
                      <span className="font-semibold text-white">QT</span>
                    </span>
                    {/* SQL */}
                    <span className="flex items-center gap-2 mr-7 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <SiMysql className="text-[#4479A1] text-2xl" />
                      <span className="font-semibold text-white">SQL</span>
                    </span>
                  </span>
                </Marquee>
              </div>
            </div>
            {/* Why Me Card */}
            <div className="bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 px-4 py-6 flex flex-col items-center w-full max-w-[900px] mx-auto">
              <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
                <FaSun />
                Why Me
              </span>
              <h2 className="text-2xl font-bold text-center mb-4 text-white">
                Why to Choose Me?
              </h2>
              <div className="w-full mt-2">
                <Marquee pauseOnHover speed={20}>
                  <span className="flex items-center gap-6">
                    {/* Problem Solver */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaLightbulb className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Problem Solver
                      </span>
                    </span>
                    {/* Attention to Detail */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaRegStar className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Attention to Detail
                      </span>
                    </span>
                    {/* Critical Thinker */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaRegSun className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Critical Thinker
                      </span>
                    </span>
                    {/* Continuous Learner */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaBolt className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Continuous Learner
                      </span>
                    </span>
                    {/* Team Player */}
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaUsers className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Team Player
                      </span>
                    </span>
                    {/* Proactive */}
                    <span className="flex items-center gap-2 px-4 py-2 mr-7 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaRocket className="text-gray-200 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Proactive
                      </span>
                    </span>
                  </span>
                </Marquee>
                {/* Additional Marquee Below */}
                <Marquee
                  pauseOnHover
                  speed={20}
                  direction="right"
                  className="mt-4"
                >
                  <span className="flex items-center gap-6">
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Fast Learner
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaUsers className="text-blue-400 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Great Communicator
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaLightbulb className="text-green-400 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Creative Thinker
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaBolt className="text-pink-400 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Motivated
                      </span>
                    </span>
                    <span className="flex items-center gap-2 mr-7 px-4 py-2 bg-[#23232a] rounded-xl border border-[#23232a]/60 mx-2">
                      <FaRocket className="text-purple-400 text-lg" />
                      <span className="font-semibold text-white text-sm">
                        Results Driven
                      </span>
                    </span>
                  </span>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
