import React from "react";
import ProjectCarousel from "./Carousel";
import ServicesCarousel from "./ServiceCarousel";
import {
  PiFlagBannerFoldFill,
  PiCampfire,
  PiCalendarCheckDuotone,
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiStudentFill,
  PiClockFill,
  PiCertificateFill,
  PiSmileyFill,
  PiWhatsappLogoLight,
} from "react-icons/pi";
import { SiReact, SiCplusplus, SiPython, SiMysql } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function BentoGridMd() {
  return (
    <div className="min-h-screen w-full  p-0">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col w-[48%] min-h-screen rounded-[32px] shadow-xl gap-4">
            {/* Stack Card */}
            <div id="card1" className="p-2 text-center">
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <BsStack className="text-lg text-[#a78bfa]" />
                  <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">
                    My Stacks
                  </span>
                </div>
                <div className="text-[20px] font-semibold text-white mb-4">
                  Tech Arsenal
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="bg-[#232329] rounded-xl flex flex-col items-center justify-center h-16 shadow-md">
                    <SiReact className="text-xl text-blue-500" />
                    <span className="text-gray-200 text-xs mt-1">React</span>
                  </div>
                  <div className="bg-[#232329] rounded-xl flex flex-col items-center justify-center h-16 shadow-md">
                    <SiCplusplus className="text-xl text-blue-400" />
                    <span className="text-gray-200 text-xs mt-1">C++</span>
                  </div>
                  <div className="bg-[#232329] rounded-xl flex flex-col items-center justify-center h-16 shadow-md">
                    <SiPython className="text-xl text-yellow-400" />
                    <span className="text-gray-200 text-xs mt-1">Python</span>
                  </div>
                  <div className="bg-[#232329] rounded-xl flex flex-col items-center justify-center h-16 shadow-md">
                    <SiMysql className="text-xl text-blue-300" />
                    <span className="text-gray-200 text-xs mt-1">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects Card */}
            <div id="card2" className="p-2 text-center">
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <PiCampfire className="text-lg text-[#fbbf24]" />
                  <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">
                    Projects
                  </span>
                </div>
                <div className="text-[20px] font-semibold text-white mb-4">
                  Works Gallery
                </div>
                <div className="w-full flex flex-col items-center relative">
                  <ProjectCarousel />
                  <button
                    className="px-5 py-2 rounded-xl bg-[#232329] text-white text-xs font-medium hover:bg-[#28282d] transition absolute left-1/2 -translate-x-1/2"
                    style={{ bottom: "12px" }}
                  >
                    View My Work
                  </button>
                </div>
              </div>
            </div>
            {/* Events Card */}
            <div id="card3" className="p-2 text-center">
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <PiCalendarCheckDuotone className="text-lg text-[#34d399]" />
                  <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">
                    Services
                  </span>
                </div>
                <div className="text-[20px] font-semibold text-white mb-2">
                  Services
                </div>
                <p className="text-gray-400 text-xs">Solution Suite</p>.
                <ServicesCarousel />
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col w-[52%] min-h-screen pt-2 pr-2 rounded-[32px] shadow-xl ">
            <div
              id="card4"
              className="flex flex-row justify-center gap-4 w-full"
            >
              {/* Projects */}
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center flex-1">
                <span className="text-white text-4xl font-bold">
                  56<span className="text-[#6366f1] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-medium">
                  <PiFlagBannerFoldFill className="mr-1" />
                  Projects
                </span>
              </div>
              {/* Clients */}
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center flex-1">
                <span className="text-white text-4xl font-bold">
                  12<span className="text-[#6366f1] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-medium">
                  <PiCampfire className="mr-1" />
                  Clients
                </span>
              </div>
              {/* YOE */}
              <div className="bg-[#18181b] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center flex-1">
                <span className="text-white text-4xl font-bold">
                  5<span className="text-[#6366f1] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-medium">
                  <PiCalendarCheckDuotone className="mr-1" />
                  YOE
                </span>
              </div>
            </div>
            <div
              id="card5"
              className="flex flex-col items-center justify-center bg-[#18181b] rounded-2xl px-8 py-8 shadow-lg mt-4"
            >
              <div className="flex flex-row items-start w-full">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-xl bg-[#a78bfa] flex-shrink-0 overflow-hidden">
                  {/* Replace with <img src="..." /> for real image */}
                  <div className="w-full h-full bg-[#a78bfa]" />
                </div>
                {/* Status and Resume */}
                <div className="flex flex-col ml-4 flex-1">
                  <div className="flex flex-row items-center justify-between">
                    <span className="flex items-center bg-[#23232a] px-3 py-1 rounded-full text-xs text-[#a1a1aa] font-medium whitespace-nowrap text-[0.75rem] sm:text-xs md:text-xs lg:text-xs xl:text-xs">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Available To Work
                    </span>
                    <button className="flex items-center gap-1 text-xs text-white font-semibold bg-[#23232a] px-3 ml-2 py-1 rounded-full hover:bg-[#28282d] transition">
                      <a
                        href="../assets/Ameer Hamza Athar Resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                      <PiCertificateFill className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <div className="text-xl font-bold text-white text-left">
                      Ameer Hamza
                    </div>
                    <div className="text-sm text-[#a1a1aa] text-left">
                      I am a passionate developer with a knack for creating
                      innovative solutions and crafting seamless user
                      experiences. With expertise in modern web technologies and
                      a commitment to continuous learning, I strive to deliver
                      high-quality software that makes a difference.
                    </div>
                  </div>
                </div>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 w-full bg-[#15151a] rounded-xl px-4 py-3">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiMapPinFill className="w-4 h-4 text-[#a78bfa]" />
                  Pakistan
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiGlobeHemisphereWestFill className="w-4 h-4 text-[#a78bfa]" />
                  English & Urdu
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiStudentFill className="w-4 h-4 text-[#a78bfa]" />
                  Software Engineer
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiClockFill className="w-4 h-4 text-[#a78bfa]" />
                  PKT
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiCertificateFill className="w-4 h-4 text-[#a78bfa]" />
                  Bahria University
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa]">
                  <PiSmileyFill className="w-4 h-4 text-[#a78bfa]" />
                  Good Boy
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-row gap-4 mt-4 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#23232a] rounded-xl py-3 text-[#a78bfa] font-medium text-base hover:bg-[#28282d] transition">
                  <PiFlagBannerFoldFill className="w-5 h-5" />
                  <a
                    href="https://www.linkedin.com/in/hamza-athar-ezio"
                    target="_blank"
                  >
                    Connect With Me
                  </a>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#23232a] rounded-xl py-3 text-[#a78bfa] font-medium text-base hover:bg-[#28282d] transition">
                  <PiWhatsappLogoLight className="w-5 h-5" />
                  <a href="https://wa.me/+923180535566" target="_blank">
                    WhatsApp Me
                  </a>
                </button>
              </div>
            </div>
            <div
              id="card6"
              className="flex flex-col items-center justify-center bg-[#18181b] rounded-2xl px-8 py-8 shadow-lg mt-4"
            >
              {/* Achievements Card */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <PiCertificateFill className="text-lg text-[#fbbf24]" />
                  <span className="text-xs text-[#a1a1aa] font-medium tracking-wide">
                    Achievements
                  </span>
                </div>
                <div className="text-[18px] font-semibold text-white mb-2">
                  Proud Moments
                </div>
                <ul className="text-xs text-[#a1a1aa] list-disc list-inside text-left mb-2">
                  <li>Dean's List - Bahria University (2023)</li>
                  <li>1st Place - Hackathon XYZ (2022)</li>
                  <li>Open Source Contributor - 10+ Projects</li>
                  <li>Summer of Making Participant</li>
                  <li>Community Volunteer - Local Tech Events</li>
                </ul>
                <span className="text-[#a78bfa] text-xs mt-2">
                  Always striving for excellence!
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Grids */}
        <div className="flex flex-row gap-4">
          <div className="h-80 flex-[3] bg-[#15151a] rounded-2xl shadow-xl border border-[#23232a]"></div>
          <div className="h-80 flex[2] bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] flex items-center justify-center">
            {/* Quote of the Day Card */}
            <div className="text-center px-4">
              <div className="text-xl text-[#a78bfa] mb-2">💡</div>
              <div className="text-white font-semibold text-lg mb-1">
                Quote of the Day
              </div>
              <div className="text-[#a1a1aa] text-xs italic">
                "Code is like humor. When you have to explain it, it's bad."
              </div>
              <div className="text-[#34d399] text-xs mt-2">- Cory House</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="h-80 flex-[2] text-white bg-[#18181b] rounded-2xl shadow-xl border border-[#23232a] flex flex-col items-center justify-center p-6">
            {/* Online Presence Card */}
            <div className="w-full max-w-xs mx-auto">
              <div className="flex flex-col items-center mb-4">
                <span className="text-[#a78bfa] text-lg">✨</span>
                <span className="text-xs text-[#a1a1aa] font-medium mt-1">
                  Follow Me
                </span>
                <span className="text-lg font-semibold text-white mt-1">
                  Online Presence
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://facebook.com/praha37v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#23232a] rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition"
                >
                  <span className="text-xl text-[#1877f3]">
                    <FaFacebook />
                  </span>
                  <span className="text-[#a1a1aa] text-sm flex-1 text-left">
                    Hamza Athar
                  </span>
                  <span className="ml-auto text-[#a1a1aa]">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="inline-block"
                    >
                      <path d="M5 12l5-5 5 5" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://instagram.com/praha37v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#23232a] rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition"
                >
                  <span className="text-xl text-[#e1306c]">
                    <FaInstagram />
                  </span>
                  <span className="text-[#a1a1aa] text-sm flex-1 text-left">
                    @hamza
                  </span>
                  <span className="ml-auto text-[#a1a1aa]">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="inline-block"
                    >
                      <path d="M5 12l5-5 5 5" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/praha37v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#23232a] rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition"
                >
                  <span className="text-xl text-[#0077b5]">
                    <FaLinkedin />
                  </span>
                  <span className="text-[#a1a1aa] text-sm flex-1 text-left">
                    Hamza Athar
                  </span>
                  <span className="ml-auto text-[#a1a1aa]">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="inline-block"
                    >
                      <path d="M5 12l5-5 5 5" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="h-80 flex-[3] bg-[#15151a] rounded-2xl shadow-xl border border-[#23232a] flex items-center justify-center">
            {/* ...you can add more engaging content here if desired... */}
          </div>
        </div>
      </div>
    </div>
  );
}
