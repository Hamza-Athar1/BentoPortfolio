import React from "react";
import Marquee from "react-fast-marquee";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import {
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiClockFill,
  PiStudentFill,
  PiCertificateFill,
  PiSmileyFill,
  PiTelegramLogo,
  PiWhatsappLogoLight,
  PiFlagBannerFoldFill,
  PiCampfire,
  PiCalendarCheckDuotone,
  PiDevicesBold,
  PiCodeBlock,
  PiPenNib,
  PiAppWindow,
  PiMagnifyingGlassBold,
  PiGitBranchBold,
  PiPaletteFill,
} from "react-icons/pi";
import {
  FaReact,
  FaPython,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import Navbar from "./Navbar";
import pfp from "../assets/pfp.jpg"; // Updated to use the correct profile image
import { Link } from "react-router";

export default function BentogridXs() {
  return (
    <div className="flex flex-col items-center min-h-[120vh] text-white py-8 px-2">
      <Navbar />
      <div className="slide-in-top w-full max-w-md bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 rounded-2xl shadow-2xl border border-[#a78bfa]/10 p-6 flex flex-col items-center">
        {/* Profile Image */}
        <div className="fade-in w-24 h-24 rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex items-center justify-center mb-3 overflow-hidden shadow-lg border-2 border-[#a78bfa]/30">
          <img src={pfp} />
          <div className="w-full h-full bg-[#a78bfa] opacity-80" />
        </div>
        {/* Status */}
        <span className="fade-in flex items-center bg-[#23232a]/80 px-3 py-1 rounded-full text-xs text-[#a1a1aa] font-semibold mb-2 border border-[#34d399]/20 shadow">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Available To Work
        </span>
        {/* Name */}
        <div className="fade-in text-xl font-bold text-white mb-1 text-center">
          Ameer Hamza Athar
        </div>
        {/* Subtitle */}
        <div className="fade-in text-sm text-[#a1a1aa] mb-3 text-center">
          I am a <span className="text-[#a78bfa] font-semibold">developer</span>
        </div>
        {/* Tags */}
        <div className="fade-in w-full bg-[#18181b] rounded-2xl px-2 py-3 flex flex-wrap gap-2 justify-center border border-[#23232a]/60 mb-4">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiMapPinFill className="w-4 h-4 text-[#a78bfa]" />
            Pakistan
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiGlobeHemisphereWestFill className="w-4 h-4 text-[#a78bfa]" />
            English & Urdu
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiClockFill className="w-4 h-4 text-[#a78bfa]" />
            PKT
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiStudentFill className="w-4 h-4 text-[#a78bfa]" />
            Software Engineer
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiCertificateFill className="w-4 h-4 text-[#a78bfa]" />
            Bahria University
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a] text-xs text-[#a1a1aa] border border-[#23232a]/40">
            <PiSmileyFill className="w-4 h-4 text-[#a78bfa]" />
            Good Boy
          </span>
        </div>
        {/* Buttons */}
        <div className="fade-in flex flex-row gap-3 w-full mt-2">
          <a
            href="https://www.linkedin.com/in/hamza-athar-ezio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#23232a] rounded-xl py-3 text-[#a78bfa] font-semibold text-sm hover:bg-[#28282d] transition border border-[#23232a]/40 shadow"
          >
            <PiFlagBannerFoldFill className="w-5 h-5" />
            Connect With Me
          </a>
          <a
            href="https://wa.me/+923180535566"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#23232a] rounded-xl py-3 text-[#a78bfa] font-semibold text-sm hover:bg-[#28282d] transition border border-[#23232a]/40 shadow"
          >
            <PiWhatsappLogoLight className="w-5 h-5" />
            WhatsApp Me
          </a>
        </div>
      </div>
      <div className="slide-in-bottom w-full max-w-md mt-6 grid grid-cols-3 gap-4">
        {/* No of Projects */}
        <div className="slide-in-left flex flex-col items-center justify-center bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 px-0 py-4">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-lg">
            56<span className="text-[#a78bfa] text-xl">+</span>
          </span>
          <div className="flex items-center mt-1">
            <PiFlagBannerFoldFill className="text-[#a78bfa] text-lg mr-1" />
            <span className="text-xs text-[#a1a1aa] font-semibold">
              Projects
            </span>
          </div>
        </div>
        {/* Clients */}
        <div className="slide-in-top flex flex-col items-center justify-center bg-gradient-to-br from-[#fbbf24]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#fbbf24]/10 px-0 py-4">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
            23<span className="text-[#a78bfa] text-xl">+</span>
          </span>
          <div className="flex items-center mt-1">
            <PiCampfire className="text-[#fbbf24] text-lg mr-1" />
            <span className="text-xs text-[#a1a1aa] font-semibold">
              Clients
            </span>
          </div>
        </div>
        {/* YOE */}
        <div className="slide-in-right flex flex-col items-center justify-center bg-gradient-to-br from-[#34d399]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#34d399]/10 px-0 py-4">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-[#34d399] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
            6<span className="text-[#a78bfa] text-xl">+</span>
          </span>
          <div className="flex items-center mt-1">
            <PiCalendarCheckDuotone className="text-[#34d399] text-lg mr-1" />
            <span className="text-xs text-[#a1a1aa] font-semibold">YOE</span>
          </div>
        </div>
      </div>
      {/* Resume Download Button */}
      <div className="fade-in w-full max-w-md mt-4">
        <a
          href="/AMEER_HAMZA_RESUME.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#a78bfa] to-[#23232a] text-white font-semibold rounded-2xl py-3 px-6 hover:from-[#b794f4] hover:to-[#28282d] transition border border-[#a78bfa]/20 shadow text-sm"
        >
          Resume
          <PiCertificateFill className="w-5 h-5" />
        </a>
      </div>

      {/* Tech Arsenal Section */}
      <div className="slide-in-left w-full max-w-md mt-6 bg-gradient-to-br from-[#fbbf24]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#fbbf24]/10 flex flex-col items-center px-4 py-8 text-center">
        <span className="text-[#61dafb] text-xl drop-shadow-lg mb-1">🛠️</span>
        <span className="text-[10px] text-[#a1a1aa] font-semibold tracking-wider uppercase">
          My Tools
        </span>
        <h2 className="text-base font-bold text-white mt-1 tracking-tight">
          Tech Arsenal
        </h2>
        <Marquee speed={40} pauseOnHover direction="right" className="mt-5">
          <span className="flex flex-row gap-4 items-center w-full flex-1 justify-start py-1">
            <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#61dafb]/10 min-w-[100px] justify-center">
              <FaReact className="text-[#61dafb] text-2xl" />
              <span className="font-semibold">React</span>
            </span>
            <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#00599C]/10 min-w-[100px] justify-center">
              <SiCplusplus className="text-[#00599C] text-2xl" />
              <span className="font-semibold">C++</span>
            </span>
            <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#fbe200]/10 min-w-[100px] justify-center">
              <FaPython className="text-[#fbe200] text-2xl" />
              <span className="font-semibold">Python</span>
            </span>
            <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 mr-4 bg-[#23232a]/80 rounded-xl shadow border border-[#00758F]/10 min-w-[100px] justify-center">
              <SiMysql className="text-[#00758F] text-2xl" />
              <span className="font-semibold">MySQL</span>
            </span>
          </span>
        </Marquee>
      </div>
      {/* Works Gallery Section */}
      <div className="slide-in-right w-full max-w-md mt-6 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center  px-4 py-8 text-center min-h-[260px]">
        <span className="text-[#a78bfa] text-xl drop-shadow-lg">🖼️</span>
        <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
          Showcase
        </span>
        <h2 className="text-base font-bold text-white mt-1 tracking-tight pb-5">
          Works Gallery
        </h2>
        <div className="w-full flex flex-col items-center relative">
          <Marquee speed={25} className="mt-2 pb-5 opacity-30" autoFill={true}>
            <img
              src={AC}
              alt="Project 1"
              className="h-35 w-55 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow"
            />
            <img
              src={Aiaura}
              alt="Project 2"
              className="h-35 w-55 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow"
            />
            <img
              src={ReactMini}
              alt="Project 3"
              className="h-35 w-55 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow"
            />
          </Marquee>
          <Link
            to="/works"
            className="mt-3 px-4 py-2 absolute left-1/2 -translate-x-1/2 translate-y-23 rounded-xl bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-black text-xs font-semibold hover:from-[#b794f4] hover:to-[#fde68a] transition shadow"
          >
            View My Work
          </Link>
        </div>
      </div>
      {/* Workflow Highlights Section */}
      <div className="slide-in-bottom w-full max-w-md mt-6 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-4 py-6 text-center">
        <span className="text-[#a78bfa] text-xl drop-shadow-lg">🤝</span>
        <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
          Workflow
        </span>
        <h2 className="text-base font-bold text-white mt-1 tracking-tight">
          Workflow Highlights
        </h2>
        <div className="flex flex-col gap-3 mt-4 w-full max-w-xs mx-auto">
          {/* Step 1 */}
          <div className="flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow">
            <span>
              <PiFlagBannerFoldFill className="text-[#a78bfa] text-xl" />
            </span>
            <div className="text-left flex-1">
              <div className="text-xs font-semibold text-white">
                Goals & Objectives
              </div>
              <div className="text-xs text-[#a1a1aa]">
                Defining project aims and target outcomes to guide design.
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow">
            <span>
              <PiMagnifyingGlassBold className="text-[#a78bfa] text-xl" />
            </span>
            <div className="text-left flex-1">
              <div className="text-xs font-semibold text-white">Research</div>
              <div className="text-xs text-[#a1a1aa]">
                Gathering insights, analyzing competitors, and understanding
                user needs to inform the project direction.
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow">
            <span>
              <PiGitBranchBold className="text-[#a78bfa] text-xl" />
            </span>
            <div className="text-left flex-1">
              <div className="text-xs font-semibold text-white">Wireframe</div>
              <div className="text-xs text-[#a1a1aa]">
                Creating low-fidelity layouts to map out structure, navigation,
                and user flow before visual design.
              </div>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow">
            <span>
              <PiPaletteFill className="text-[#a78bfa] text-xl" />
            </span>
            <div className="text-left flex-1">
              <div className="text-xs font-semibold text-white">Design</div>
              <div className="text-xs text-[#a1a1aa]">
                Developing high-fidelity visuals, refining UI elements, and
                ensuring a cohesive and engaging user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="slide-in-top w-full max-w-md mt-6 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-4 py-8 text-center">
        <span className="text-[#a78bfa] text-xl drop-shadow-lg">💼</span>
        <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
          What I Offer
        </span>
        <h2 className="text-base font-bold text-white mt-1 tracking-tight">
          Services
        </h2>
        <Marquee pauseOnHover speed={40} direction="left" className="mt-4">
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
              <PiGlobeHemisphereWestFill className="text-white text-xl" />
              <span className="text-xs text-white font-semibold">
                Web Design
              </span>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
              <PiDevicesBold className="text-white text-xl" />
              <span className="text-xs text-white font-semibold">
                Mobile App Design
              </span>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
              <PiCodeBlock className="text-white text-xl" />
              <span className="text-xs text-white font-semibold">
                Development
              </span>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
              <PiPenNib className="text-white text-xl" />
              <span className="text-xs text-white font-semibold">Branding</span>
            </span>
            <span className="flex items-center gap-2 mr-7 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
              <PiAppWindow className="text-white text-xl" />
              <span className="text-xs text-white font-semibold">UI/UX</span>
            </span>
          </span>
        </Marquee>
      </div>
      {/* Mini Timeline Section */}
      <div className="fade-in w-full max-w-md mt-6 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-4 py-8 text-center">
        <div className="text-white font-semibold text-lg mb-3">
          Mini Timeline
        </div>
        <ol className="relative border-l-2 border-[#a78bfa] pl-6">
          <li className="mb-6 last:mb-0">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
            <div className="text-xs text-[#a1a1aa] font-semibold">2027</div>
            <div className="text-sm text-white">
              Graduated from Bahria University
            </div>
          </li>
          <li className="mb-6 last:mb-0">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
            <div className="text-xs text-[#a1a1aa] font-semibold">2023</div>
            <div className="text-sm text-white">Joined Bahria University</div>
          </li>
          <li className="mb-6 last:mb-0">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
            <div className="text-xs text-[#a1a1aa] font-semibold">2023</div>
            <div className="text-sm text-white">
              Graduated from Punjab Group of Colleges
            </div>
          </li>
          <li>
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
            <div className="text-xs text-[#a1a1aa] font-semibold">2020</div>
            <div className="text-sm text-white">
              Graduated from SLS Montessori School
            </div>
          </li>
        </ol>
      </div>
      {/* Achievements Section */}
      <div className="slide-in-left w-full max-w-md mt-6 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center px-4 py-8 text-center">
        <span className="text-[#a78bfa] text-2xl drop-shadow-lg mb-1">🏆</span>
        <span className="text-[10px] text-[#a1a1aa] font-semibold tracking-wider uppercase">
          Achievements
        </span>
        <h2 className="text-base font-bold text-white mt-1 tracking-tight">
          Proud Moments
        </h2>
        <ul className="text-xs text-[#a1a1aa] list-disc list-inside text-left mb-2 space-y-1 mt-2 max-w-[90%] mx-auto">
          <li>Dean's List - Bahria University (2023)</li>
          <li>1st Place - Hackathon XYZ (2022)</li>
          <li>Open Source Contributor - 10+ Projects</li>
          <li>Summer of Making Participant</li>
          <li>Community Volunteer - Local Tech Events</li>
        </ul>
        <span className="text-[#a78bfa] text-xs mt-2 font-medium block">
          Always striving for excellence!
        </span>
      </div>
      {/* Online Presence & Let's Work Together Section */}
      <div className="slide-in-bottom w-full max-w-md mt-6 flex flex-col md:flex-row gap-6">
        {/* Online Presence */}
        <div className="slide-in-left flex-1 bg-gradient-to-br from-[#23232a]/90 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#61dafb]/10 flex flex-col items-center px-5 py-7 text-center transition hover:scale-[1.02] hover:shadow-2xl">
          <span className="text-[#61dafb] text-2xl drop-shadow-lg mb-1">
            ✨
          </span>
          <span className="text-[11px] text-[#a1a1aa] font-semibold tracking-wider uppercase">
            Online Presence
          </span>
          <span className="text-lg font-bold text-white mt-1 tracking-tight">
            Follow Me
          </span>
          <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
            <a
              href="https://facebook.com/hamza.athar.1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#23232a] transition border border-[#1877f3]/20 shadow group"
            >
              <span className="text-xl text-[#1877f3] group-hover:scale-110 transition-transform">
                <FaFacebook />
              </span>
              <span className="text-[#a1a1aa] text-sm flex-1 text-left font-medium group-hover:text-white transition">
                Hamza Athar
              </span>
            </a>
            <a
              href="https://www.instagram.com/_hamza_nvm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#23232a] transition border border-[#e1306c]/20 shadow group"
            >
              <span className="text-xl text-[#e1306c] group-hover:scale-110 transition-transform">
                <FaInstagram />
              </span>
              <span className="text-[#a1a1aa] text-sm flex-1 text-left font-medium group-hover:text-white transition">
                @hamza
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#18181b]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#23232a] transition border border-[#0077b5]/20 shadow group"
            >
              <span className="text-xl text-[#0077b5] group-hover:scale-110 transition-transform">
                <FaLinkedin />
              </span>
              <span className="text-[#a1a1aa] text-sm flex-1 text-left font-medium group-hover:text-white transition">
                Hamza Athar
              </span>
            </a>
          </div>
        </div>
        {/* Let's Work Together */}
        <div className="slide-in-right flex-1 bg-gradient-to-br from-[#fbbf24]/20 to-[#23232a]/90 rounded-2xl shadow-lg border border-[#fbbf24]/20 flex flex-col items-center px-5 py-7 text-center transition hover:scale-[1.02] hover:shadow-2xl">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex items-center justify-center mb-4 shadow-lg">
            <PiFlagBannerFoldFill className="text-3xl text-[#a78bfa]" />
          </div>
          <div className="text-white text-2xl font-bold mb-1 text-center tracking-tight">
            Let's Work Together
          </div>
          <div className="text-[#a1a1aa] text-sm mb-6 text-center">
            Let's Make Magic Happen Together!
          </div>
          <div className="w-full flex flex-col gap-3 max-w-xs">
            <a
              href="mailto:atharhamza559@gmail.com"
              className="flex items-center gap-3 bg-[#23232a]/90 hover:bg-[#28282d] transition rounded-xl px-2 py-3 text-white font-semibold justify-center border border-[#a78bfa]/10 shadow group"
            >
              <FaEnvelope className="text-xl text-[#a78bfa] mr-1 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-[#a78bfa] transition">
                Email Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
