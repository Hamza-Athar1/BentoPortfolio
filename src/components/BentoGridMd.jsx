import React from "react";
import ProjectCarousel from "./Carousel";
import ServicesCarousel from "./ServiceCarousel";
import Marquee from "react-fast-marquee";
import {
  PiFlagBannerFoldFill,
  PiMagnifyingGlassBold,
  PiGitBranchBold,
  PiPaletteFill,
  PiCampfire,
  PiCalendarCheckDuotone,
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiStudentFill,
  PiClockFill,
  PiCertificateFill,
  PiSmileyFill,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleFill,
  PiDevicesBold,
  PiCodeBlock,
  PiPenNib,
  PiAppWindow,
} from "react-icons/pi";
import { SiReact, SiCplusplus, SiPython, SiMysql } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
function DropdownStep({ icon, title, description, defaultOpen }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [height, setHeight] = React.useState(0);
  const contentRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const [btnWidth, setBtnWidth] = React.useState(undefined);

  React.useLayoutEffect(() => {
    if (btnRef.current) {
      setBtnWidth(btnRef.current.offsetWidth);
    }
  }, []);

  React.useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open, description]);

  return (
    <div
      className="bg-[#23232a] rounded-xl shadow"
      style={btnWidth ? { width: btnWidth } : undefined}
    >
      <button
        ref={btnRef}
        className="w-full flex items-center justify-between p-3 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        type="button"
        style={btnWidth ? { width: btnWidth } : undefined}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xs text-white font-semibold">{title}</span>
        </div>
        <span
          className="bg-[#23232a] rounded-full p-1 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="2"
          >
            <path d="M4 10l4-4 4 4" />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          width: btnWidth ? btnWidth : undefined,
          height: height,
          paddingLeft: open ? 12 : 0,
          paddingRight: open ? 12 : 0,
          paddingBottom: open ? 12 : 0,
        }}
      >
        <div className="text-xs text-[#a1a1aa] text-left">{description}</div>
      </div>
    </div>
  );
}
export default function BentoGridMd() {
  return (
    <div className="min-h-screen w-full p-1 bg-gradient-to-br from-[#23232a] via-[#18181b] to-[#1e293b]">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-row gap-4">
          {/* Left Column */}
          <div className="flex flex-col w-[48%] min-h-screen rounded-2xl shadow-2xl border border-[#23232a]/40 backdrop-blur-md gap-4 bg-transparent">
            {/* Stack Card */}
            <div id="card1" className="p-2 text-center">
              <div className="bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#a78bfa]/10 flex flex-col items-center text-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <BsStack className="text-lg text-[#a78bfa]" />
                  <span className="text-xs text-[#a1a1aa] font-semibold tracking-wider uppercase">
                    My Tools
                  </span>
                </div>
                <div className="text-lg font-bold text-white mb-2 tracking-tight">
                  Tech Arsenal
                </div>
                <Marquee
                  speed={40}
                  pauseOnHover
                  gradient={false}
                  className="mt-2"
                >
                  <span className="flex flex-row justify-center gap-4 w-full">
                    <span className="flex flex-col items-center gap-2 bg-[#23232a]/80 rounded-xl px-4 py-3 shadow border border-[#61dafb]/10 hover:scale-105 transition">
                      <SiReact className="text-3xl text-[#61dafb] drop-shadow" />
                      <span className="text-xs text-[#61dafb] font-semibold">
                        React
                      </span>
                    </span>
                    <span className="flex flex-col items-center gap-2 bg-[#23232a]/80 rounded-xl px-4 py-3 shadow border border-[#00599C]/10 hover:scale-105 transition">
                      <SiCplusplus className="text-3xl text-[#00599C] drop-shadow" />
                      <span className="text-xs text-[#00599C] font-semibold">
                        C++
                      </span>
                    </span>
                    <span className="flex flex-col items-center gap-2 bg-[#23232a]/80 rounded-xl px-4 py-3 shadow border border-[#fbe200]/10 hover:scale-105 transition">
                      <SiPython className="text-3xl text-[#fbe200] drop-shadow" />
                      <span className="text-xs text-[#fbe200] font-semibold">
                        Python
                      </span>
                    </span>
                    <span className="flex flex-col items-center gap-2 bg-[#23232a]/80 rounded-xl px-4 py-3 shadow border border-[#00758F]/10 hover:scale-105 transition">
                      <SiMysql className="text-3xl text-[#00758F] drop-shadow" />
                      <span className="text-xs text-[#00758F] font-semibold">
                        MySQL
                      </span>
                    </span>
                  </span>
                </Marquee>
              </div>
            </div>
            {/* Projects Card */}
            <div id="card2" className="p-2 text-center">
              <div className="bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#a78bfa]/10 flex flex-col items-center text-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <PiCampfire className="text-lg text-[#fbbf24]" />
                  <span className="text-xs text-[#a1a1aa] font-semibold tracking-wider uppercase">
                    Projects
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-4 tracking-tight">
                  Works Gallery
                </div>
                <div className="w-full flex flex-col items-center relative">
                  <ProjectCarousel />
                  <a
                    href="#"
                    className="px-5 py-2 rounded-xl absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-black text-xs font-semibold hover:from-[#b794f4] hover:to-[#fde68a] transition shadow"
                    style={{ bottom: "12px" }}
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
            {/* Events Card */}
            <div id="card3" className="p-2 text-center">
              <div className="bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#a78bfa]/10 flex flex-col items-center text-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <PiCalendarCheckDuotone className="text-lg text-[#34d399]" />
                  <span className="text-xs text-[#a1a1aa] font-semibold tracking-wider uppercase">
                    Services
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2 tracking-tight">
                  Services
                </div>
                <p className="text-[#a1a1aa] text-xs">Solution Suite</p>

                <Marquee
                  pauseOnHover
                  gradient={false}
                  speed={40}
                  className="mt-4"
                >
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
                      <span className="text-xs text-white font-semibold">
                        Branding
                      </span>
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-[#23232a]/80 rounded-xl border border-[#a78bfa]/10 mx-2">
                      <PiAppWindow className="text-white text-xl" />
                      <span className="text-xs text-white font-semibold">
                        UI/UX
                      </span>
                    </span>
                  </span>
                </Marquee>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col w-[52%] min-h-screen pt-2 pr-2 rounded-2xl shadow-2xl border border-[#23232a]/40 backdrop-blur-md bg-transparent">
            <div
              id="card4"
              className="flex flex-row justify-center gap-4 w-full"
            >
              {/* Projects */}
              <div className="bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#a78bfa]/10 flex flex-col items-center flex-1 text-gray-300">
                <span className="text-white text-4xl font-extrabold bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-lg">
                  56<span className="text-[#a78bfa] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-semibold">
                  <PiFlagBannerFoldFill className="mr-1" />
                  Projects
                </span>
              </div>
              {/* Clients */}
              <div className="bg-gradient-to-br from-[#fbbf24]/20 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#fbbf24]/10 flex flex-col items-center flex-1 text-gray-300">
                <span className="text-white text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
                  12<span className="text-[#a78bfa] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-semibold">
                  <PiCampfire className="mr-1" />
                  Clients
                </span>
              </div>
              {/* YOE */}
              <div className="bg-gradient-to-br from-[#34d399]/20 to-[#18181b]/90 rounded-2xl px-6 py-8 shadow-lg border border-[#34d399]/10 flex flex-col items-center flex-1 text-gray-300">
                <span className="text-white text-4xl font-extrabold bg-gradient-to-r from-[#34d399] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
                  5<span className="text-[#a78bfa] text-2xl">+</span>
                </span>
                <span className="text-[#a1a1aa] mt-2 flex flex-row items-center text-xs font-semibold">
                  <PiCalendarCheckDuotone className="mr-1" />
                  YOE
                </span>
              </div>
            </div>
            <div
              id="card5"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl px-4 py-6 shadow-lg border border-[#a78bfa]/10 mt-4 w-full max-w-3xl mx-auto text-gray-300"
            >
              {/* Top Section */}
              <div className="flex flex-col sm:flex-row items-start w-full gap-4">
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex-shrink-0 overflow-hidden shadow-lg border-2 border-[#a78bfa]/30">
                  <div className="w-full h-full bg-[#a78bfa] opacity-80" />
                </div>

                {/* Status and Resume */}
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center bg-[#23232a]/80 px-3 py-1 rounded-full text-xs text-[#a1a1aa] font-semibold whitespace-nowrap border border-[#34d399]/20 shadow">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Available To Work
                    </span>
                    <a
                      href="/AMEER_HAMZA_RESUME.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white font-semibold bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 px-3 py-1 rounded-full hover:from-[#b794f4] hover:to-[#28282d] transition border border-[#a78bfa]/20 shadow"
                    >
                      Resume
                      <PiCertificateFill className="w-4 h-4" />
                    </a>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white text-left truncate tracking-tight">
                      Ameer Hamza
                    </div>
                    <div
                      className="text-sm text-[#a1a1aa] text-left leading-snug"
                      style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)" }}
                    >
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
              <div className="flex flex-wrap gap-2 mt-4 w-full bg-[#15151a]/80 rounded-2xl px-4 py-3 border border-[#a78bfa]/10 shadow">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiMapPinFill className="w-4 h-4 text-[#a78bfa]" />
                  Pakistan
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiGlobeHemisphereWestFill className="w-4 h-4 text-[#a78bfa]" />
                  English & Urdu
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiStudentFill className="w-4 h-4 text-[#a78bfa]" />
                  Software Engineer
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiClockFill className="w-4 h-4 text-[#a78bfa]" />
                  PKT
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiCertificateFill className="w-4 h-4 text-[#a78bfa]" />
                  Bahria University
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-xs text-[#a1a1aa] border border-[#a78bfa]/10">
                  <PiSmileyFill className="w-4 h-4 text-[#a78bfa]" />
                  Good Boy
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
                <a
                  href="https://www.linkedin.com/in/hamza-athar-ezio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 rounded-xl py-2 px-2 text-[#a78bfa] font-semibold text-xs md:text-sm hover:from-[#b794f4] hover:to-[#28282d] transition border border-[#a78bfa]/20 shadow"
                >
                  <PiFlagBannerFoldFill className="w-5 h-5" />
                  <span className="truncate">Connect With Me</span>
                </a>
                <a
                  href="https://wa.me/+923180535566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 rounded-xl py-2 px-2 text-[#a78bfa] font-semibold text-xs md:text-sm hover:from-[#b794f4] hover:to-[#28282d] transition border border-[#a78bfa]/20 shadow"
                >
                  <PiWhatsappLogoLight className="w-5 h-5" />
                  <span className="truncate">WhatsApp Me</span>
                </a>
              </div>
            </div>
            <div
              id="card6"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl px-8 py-8 shadow-lg border border-[#a78bfa]/10 mt-4"
            >
              {/* Achievements Card */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <PiCertificateFill className="text-lg text-[#fbbf24]" />
                  <span className="text-xs text-[#a1a1aa] font-semibold tracking-wider uppercase">
                    Achievements
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2 tracking-tight">
                  Proud Moments
                </div>
                <ul className="text-xs text-[#a1a1aa] list-disc list-inside text-left mb-2 space-y-1">
                  <li>Dean's List - Bahria University (2023)</li>
                  <li>1st Place - Hackathon XYZ (2022)</li>
                  <li>Open Source Contributor - 10+ Projects</li>
                  <li>Summer of Making Participant</li>
                  <li>Community Volunteer - Local Tech Events</li>
                </ul>
                <span className="text-[#a78bfa] text-xs mt-2 font-medium">
                  Always striving for excellence!
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Grids */}
        <div className="flex flex-row gap-4 px-2">
          <div className="h-80 flex-[3] bg-[#15151a]/80 rounded-2xl shadow-xl border border-[#23232a]/40">
            {/* Mini Timeline */}
            <div className="h-full flex flex-col justify-center px-8">
              <div className="text-white font-semibold text-lg mb-3">
                Mini Timeline
              </div>
              <ol className="relative border-l-2 border-[#a78bfa] pl-6">
                <li className="mb-6 last:mb-0">
                  <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
                  <div className="text-xs text-[#a1a1aa] font-semibold">
                    2027
                  </div>
                  <div className="text-sm text-white">
                    Graduated from Bahria University
                  </div>
                </li>
                <li className="mb-6 last:mb-0">
                  <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
                  <div className="text-xs text-[#a1a1aa] font-semibold">
                    2023
                  </div>
                  <div className="text-sm text-white">
                    Joined Bahria University
                  </div>
                </li>
                <li className="mb-6 last:mb-0">
                  <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
                  <div className="text-xs text-[#a1a1aa] font-semibold">
                    2023
                  </div>
                  <div className="text-sm text-white">
                    Graduated from Punjab Group of Colleges
                  </div>
                </li>
                <li>
                  <span className="absolute -left-3 top-1 w-4 h-4 bg-[#a78bfa] rounded-full border-2 border-[#15151a]"></span>
                  <div className="text-xs text-[#a1a1aa] font-semibold">
                    2020
                  </div>
                  <div className="text-sm text-white">
                    Graduated from SLS Montessori School
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="h-80 flex-[2] bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-xl border border-[#a78bfa]/10 flex items-center justify-center">
            {/* Workflow Highlights Card */}
            <div className="w-full max-w-xs mx-auto flex flex-col gap-2 relative px-2 py-2">
              {/* Header */}
              <div className="flex flex-col items-center gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <IoBookmarksSharp className="text-[#a78bfa] text-lg" />
                  <span className="text-xs text-[#a1a1aa] font-semibold tracking-wider uppercase">
                    Work Process
                  </span>
                </div>
                <div className="text-white font-bold text-lg tracking-tight">
                  Workflow Highlights
                </div>
              </div>
              {/* Steps */}
              <div
                className="flex flex-col gap-2 overflow-y-auto relative"
                style={{
                  maxHeight: "13.5rem",
                  paddingRight: "2px",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {/* Step Dropdowns */}
                <DropdownStep
                  icon={
                    <PiFlagBannerFoldFill className="text-[#a78bfa] text-lg" />
                  }
                  title="Goals & Objectives"
                  description="Defining project aims and target outcomes to guide design."
                  defaultOpen={true}
                />
                <DropdownStep
                  icon={
                    <PiMagnifyingGlassBold className="text-[#a78bfa] text-lg" />
                  }
                  title="Research"
                  description="Gathering insights, analyzing competitors, and understanding user needs to inform the project direction."
                />
                <DropdownStep
                  icon={<PiGitBranchBold className="text-[#a78bfa] text-lg" />}
                  title="Wireframe"
                  description="Creating low-fidelity layouts to map out structure, navigation, and user flow before visual design."
                />
                <DropdownStep
                  icon={<PiPaletteFill className="text-[#a78bfa] text-lg" />}
                  title="Design"
                  description="Developing high-fidelity visuals, refining UI elements, and ensuring a cohesive and engaging user experience."
                />
              </div>
              {/* Fade overlay at bottom */}
              <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-8 rounded-b-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(24,24,27,0) 0%, #18181b 100%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 px-2">
          <div className="h-80 flex-[2] text-white bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-xl border border-[#a78bfa]/10 flex flex-col items-center justify-center p-6">
            {/* Online Presence Card */}
            <div className="w-full max-w-xs mx-auto">
              <div className="flex flex-col items-center mb-4">
                <span className="text-[#a78bfa] text-xl drop-shadow-lg">
                  ✨
                </span>
                <span className="text-xs text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
                  Follow Me
                </span>
                <span className="text-lg font-bold text-white mt-1 tracking-tight">
                  Online Presence
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://facebook.com/praha37v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#23232a]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition border border-[#1877f3]/10 shadow"
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
                  className="flex items-center bg-[#23232a]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition border border-[#e1306c]/10 shadow"
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
                  className="flex items-center bg-[#23232a]/80 rounded-xl px-4 py-3 gap-3 hover:bg-[#28282d] transition border border-[#0077b5]/10 shadow"
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
          <div className="h-80 flex-[3] bg-[#15151a]/80 rounded-2xl shadow-xl border border-[#23232a]/40 flex items-center justify-center">
            {/* Let's Work Together Card */}
            <div className="w-full max-w-md mx-auto flex flex-col items-center bg-transparent">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex items-center justify-center mb-4">
                  {/* Crown Icon */}
                  <PiFlagBannerFoldFill className="text-3xl text-[#a78bfa]" />
                </div>
                <div className="text-white text-2xl font-bold mb-1 text-center tracking-tight">
                  Let's Work Together
                </div>
                <div className="text-[#a1a1aa] text-sm mb-6 text-center">
                  Let's Make Magic Happen Together!
                </div>
              </div>
              <div className="w-[350px] flex flex-col gap-4">
                <a
                  href="mailto:atharhamza559@gmail.com"
                  className="flex items-center gap-3 bg-[#23232a]/80 hover:bg-[#28282d] transition rounded-xl px-2 py-3 text-white font-semibold justify-center border border-[#a78bfa]/10 shadow"
                >
                  {/* Email Icon */}
                  <PiEnvelopeSimpleFill className="text-xl text-[#a78bfa]" />
                  Email Me
                </a>
                <a
                  href="https://calendly.com/hamzaathar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#23232a]/80 hover:bg-[#28282d] transition rounded-xl px-2 py-3 text-white font-semibold justify-center border border-[#a78bfa]/10 shadow"
                >
                  {/* Calendar Icon */}
                  <PiCalendarCheckDuotone className="text-xl text-[#a78bfa]" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
