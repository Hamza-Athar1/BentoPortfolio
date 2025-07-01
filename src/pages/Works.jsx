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
} from "react-icons/fa";
import { SiCplusplus, SiQt, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";
export default function Works() {
  return (
    <>
      <div className="flex flex-col items-center min-h-[120vh] text-white py-8 px-2">
        <Navbar />
        <div className="w-full max-w-md bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center">
          {/* My Works Header */}
          <div className="w-full flex flex-col items-center mb-6">
            <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
              <svg
                width="18"
                height="18"
                fill="none"
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2.25l2.25 4.5 4.5.75-3.375 3.375.75 4.5L9 12.75l-4.125 2.625.75-4.5L2.25 7.5l4.5-.75L9 2.25z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              My Works
            </span>
            <h2 className="text-2xl font-bold text-center">My Top Projects</h2>
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
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 15l8-8M9 7h6v6" />
                      </svg>
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
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 15l8-8M9 7h6v6" />
                      </svg>
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
                      <svg
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 15l8-8M9 7h6v6" />
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* Add more projects here */}
          </div>
        </div>
        {/* Awards & Accolades Section */}
        <div className="w-full max-w-md mt-10 bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center">
          <span className="text-violet-300 flex items-center gap-2 text-xs font-semibold mb-1">
            <svg
              width="18"
              height="18"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.25l2.25 4.5 4.5.75-3.375 3.375.75 4.5L9 12.75l-4.125 2.625.75-4.5L2.25 7.5l4.5-.75L9 2.25z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
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
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    className="text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2l2 4 4 .5-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-.5 2-4z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-white text-sm">
                    Advanced React Course
                  </div>
                  <div className="text-xs text-gray-400">coursera.com</div>
                </div>
              </div>
              <span>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <path d="M5 13l8-8M7 5h6v6" />
                </svg>
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
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    className="text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.3"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-white text-sm">
                    Excellence
                  </div>
                  <div className="text-xs text-gray-400">excellence.in</div>
                </div>
              </div>
              <span>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <path d="M5 13l8-8M7 5h6v6" />
                </svg>
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
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    className="text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <text
                        x="6"
                        y="15"
                        fontSize="8"
                        fill="currentColor"
                        fontFamily="Arial"
                      >
                        g
                      </text>
                    </g>
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-white text-sm">
                    Gezite Details
                  </div>
                  <div className="text-xs text-gray-400">gezitedetails.com</div>
                </div>
              </div>
              <span>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <path d="M5 13l8-8M7 5h6v6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="w-full max-w-md mt-10 bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 p-6 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-5 w-full">
            {/* Certifications */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                08
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2v2M9 14v2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M2 9h2M14 9h2M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="9"
                    cy="9"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Certifications
              </div>
            </div>
            {/* Designs */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                250
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="9"
                    cy="9"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 2v2M9 14v2M2 9h2M14 9h2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Designs
              </div>
            </div>
            {/* Collaborations */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                07
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2a3 3 0 110 6 3 3 0 010-6zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Collaborations
              </div>
            </div>
            {/* Clients */}
            <div className="bg-[#18181e] rounded-xl flex flex-col items-center py-6 shadow-inner">
              <div className="text-4xl font-extrabold text-gray-200 tracking-wider">
                32
                <span className="text-violet-400 text-2xl align-top">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-violet-400 text-sm font-medium">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 2a3 3 0 110 6 3 3 0 010-6zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 14c0-1.1-.9-2-2-2s-2 .9-2 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                Clients
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profile Card Component */}
      <div className="flex justify-center mt-12 mb-8">
        <div className="relative bg-[#18181e] rounded-3xl shadow-2xl border border-[#23232a]/40 px-8 py-8 flex flex-col items-center w-[350px]">
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
          <div className="text-xl font-semibold text-white mb-2">
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
      </div>
      {/* Service Suite Card */}
      <div className="flex justify-center mb-12">
        <div className="bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-8 py-8 w-[350px]">
          <span className="text-[#a78bfa] text-xl drop-shadow-lg mb-1">💼</span>
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
                  {/* Web Design Icon */}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="3"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-xs text-white font-semibold">
                    Web Design
                  </span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                  {/* Mobile App Design Icon */}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="2"
                      width="12"
                      height="16"
                      rx="2"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                    <circle cx="10" cy="16" r="1" fill="#a78bfa" />
                  </svg>
                  <span className="text-xs text-white font-semibold">
                    Mobile App Design
                  </span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                  {/* Development Icon */}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="14"
                      height="12"
                      rx="2"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                    <path d="M7 8l3 3-3 3" stroke="#a78bfa" strokeWidth="1.5" />
                  </svg>
                  <span className="text-xs text-white font-semibold">
                    Development
                  </span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                  {/* Branding Icon */}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16l12-12M8 4h8v8"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-xs text-white font-semibold">
                    Branding
                  </span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                  {/* UI/UX Icon */}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="7"
                      cy="10"
                      r="1.5"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="13"
                      cy="10"
                      r="1.5"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-xs text-white font-semibold">
                    UI/UX
                  </span>
                </span>
              </span>
            </Marquee>
          </div>
        </div>
      </div>
      {/* My Hardcore Skills Card */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#18181e] rounded-2xl shadow-2xl border border-[#23232a]/40 px-8 py-8 flex flex-col items-center w-[350px]">
          <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
            <svg
              width="18"
              height="18"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.25l2.25 4.5 4.5.75-3.375 3.375.75 4.5L9 12.75l-4.125 2.625.75-4.5L2.25 7.5l4.5-.75L9 2.25z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
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
                  <span className="font-semibold text-white">JavaScript</span>
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
      </div>
      {/* Why Me Card */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#15151a] rounded-2xl shadow-2xl border border-[#23232a]/40 px-4 py-6 flex flex-col items-center w-[320px]">
          <span className="text-violet-300 flex items-center gap-2 text-base mb-1">
            <svg
              width="18"
              height="18"
              fill="none"
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.25l2.25 4.5 4.5.75-3.375 3.375.75 4.5L9 12.75l-4.125 2.625.75-4.5L2.25 7.5l4.5-.75L9 2.25z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
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
            <Marquee pauseOnHover speed={20} direction="right" className="mt-4">
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
    </>
  );
}
