import {
  PiGithubLogoBold,
  PiFacebookLogoBold,
  PiLinkedinLogoBold,
  PiFlagBannerFoldFill,
  PiCampfire,
  PiCalendarCheckDuotone,
  PiCertificateFill,
  PiMagnifyingGlassBold,
  PiGitBranchBold,
  PiPaletteFill,
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiStudentFill,
  PiClockFill,
  PiSmileyFill,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleFill,
  PiDevicesBold,
  PiCodeBlock,
  PiPenNib,
  PiAppWindow,
} from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
const BentoGridLg = () => {
  return (
    <div className="lg:h-screen lg:w-screen p-1 bg-gradient-to-br from-[#23232a] via-[#18181b] to-[#1e293b] min-h-screen">
      <div
        className="
          grid h-full w-full gap-4
          lg:grid-cols-6 lg:grid-rows-6
          bg-transparent text-gray-300
          rounded-2xl
          shadow-2xl
          border border-[#23232a]/40
          backdrop-blur-md
        "
      >
        {/* Socials */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-1 py-3 text-center hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300">
          <span className="text-[#fbbf24] text-lg drop-shadow-lg">🤝</span>

          <h2 className="text-[11px] font-bold pb-1 text-white mt-1 tracking-tight">
            Connect with Me
          </h2>
          <div className="flex flex-row gap-1 mt-1">
            <a
              href="https://github.com/Hamza-Athar1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a78bfa] transition-colors duration-300"
            >
              <PiGithubLogoBold className="text-lg" />
            </a>
            <a
              href="https://facebook.com/hamza.athar.1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fbbf24] transition-colors duration-300"
            >
              <PiFacebookLogoBold className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#34d399] transition-colors duration-300"
            >
              <PiLinkedinLogoBold className="text-lg" />
            </a>
          </div>
        </div>

        {/* No. of Projects */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-lg">
            56<span className="text-[#a78bfa] text-2xl">+</span>
          </h2>
          <div className="flex items-center mt-2">
            <PiFlagBannerFoldFill className="text-[#a78bfa] text-xl mr-2" />
            <p className="text-xs text-[#a1a1aa] font-semibold">Projects</p>
          </div>
        </div>

        {/* Clients */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-[#fbbf24]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#fbbf24]/10 flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#fbbf24] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
            12<span className="text-[#a78bfa] text-2xl">+</span>
          </h2>
          <div className="flex items-center mt-2">
            <PiCampfire className="text-[#fbbf24] text-xl mr-2" />
            <p className="text-xs text-[#a1a1aa] font-semibold">Clients</p>
          </div>
        </div>

        {/* Experience */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-[#34d399]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#34d399]/10 flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-[1.04] hover:shadow-2xl transition-transform duration-300">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#34d399] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-lg">
            5<span className="text-[#a78bfa] text-2xl">+</span>
          </h2>
          <div className="flex items-center mt-2">
            <PiCalendarCheckDuotone className="text-[#34d399] text-xl mr-2" />
            <p className="text-xs text-[#a1a1aa] font-semibold">YOE</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="col-span-1 row-span-4 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-4 py-4 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 flex-1 min-h-0 overflow-hidden">
          <span className="text-[#a78bfa] text-2xl drop-shadow-lg mb-1">
            🏆
          </span>
          <span className="text-[10px] text-[#a1a1aa] font-semibold tracking-wider uppercase">
            Highlights
          </span>
          <h2 className="text-lg font-bold text-white mt-1 tracking-tight">
            Achievements
          </h2>
          <div className="flex-1 min-h-0 w-full flex flex-col justify-center overflow-y-auto">
            <ul className="text-xs mt-2 text-[#a1a1aa] text-left list-disc list-inside w-full max-w-[90%] mx-auto space-y-1">
              <li>
                <span className="font-semibold text-white">
                  Open Source Contributor
                </span>{" "}
                – 10+ Projects
              </li>
              <li>
                <span className="font-semibold text-white">
                  Summer of Making Participant
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Community Volunteer
                </span>{" "}
                – Local Tech Events
              </li>
            </ul>
            <span className="text-[#a78bfa] text-xs mt-4 font-medium block">
              Always striving for excellence!
            </span>
          </div>
        </div>

        {/* (Workflow Highlights) */}
        <div className="col-span-1 row-span-4 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-3 py-4 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 flex-1 min-h-0 overflow-hidden">
          {/* Swapped: Workflow Highlights content */}
          <span className="text-[#a78bfa] text-xl drop-shadow-lg">🤝</span>
          <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
            Workflow
          </span>
          <h2 className="text-lg font-bold text-white mt-1 tracking-tight">
            Workflow Highlights
          </h2>
          <div className="flex-1 min-h-0 w-full flex flex-col justify-center overflow-y-auto">
            <div className="w-full flex flex-col gap-2 mt-2 max-w-lg pr-1">
              {/* Step 1 */}
              <div className="group relative flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow cursor-pointer">
                <span>
                  <PiFlagBannerFoldFill className="text-[#a78bfa] text-xl" />
                </span>
                <div className="text-left flex-1">
                  <div className="text-xs font-semibold text-white">
                    Goals & Objectives
                  </div>
                  {/* Tooltip - now appears on the left */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-[#18181b] text-[#a1a1aa] text-xs rounded-md px-3 py-2 border border-[#a78bfa]/20 shadow-lg w-56">
                    Defining project aims and target outcomes to guide design.
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="group relative flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow cursor-pointer">
                <span>
                  <PiMagnifyingGlassBold className="text-[#a78bfa] text-xl" />
                </span>
                <div className="text-left flex-1">
                  <div className="text-xs font-semibold text-white">
                    Research
                  </div>
                  {/* Tooltip - now appears on the left */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-[#18181b] text-[#a1a1aa] text-xs rounded-md px-3 py-2 border border-[#a78bfa]/20 shadow-lg w-56">
                    Gathering insights, analyzing competitors, and understanding
                    user needs to inform the project direction.
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="group relative flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow cursor-pointer">
                <span>
                  <PiGitBranchBold className="text-[#a78bfa] text-xl" />
                </span>
                <div className="text-left flex-1">
                  <div className="text-xs font-semibold text-white">
                    Wireframe
                  </div>
                  {/* Tooltip - now appears on the left */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-[#18181b] text-[#a1a1aa] text-xs rounded-md px-3 py-2 border border-[#a78bfa]/20 shadow-lg w-56">
                    Creating low-fidelity layouts to map out structure,
                    navigation, and user flow before visual design.
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="group relative flex items-start gap-3 bg-[#23232a]/80 rounded-xl px-3 py-2 border border-[#a78bfa]/10 shadow cursor-pointer">
                <span>
                  <PiPaletteFill className="text-[#a78bfa] text-xl" />
                </span>
                <div className="text-left flex-1">
                  <div className="text-xs font-semibold text-white">Design</div>
                  {/* Tooltip - now appears on the left */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-[#18181b] text-[#a1a1aa] text-xs rounded-md px-3 py-2 border border-[#a78bfa]/20 shadow-lg w-56">
                    Developing high-fidelity visuals, refining UI elements, and
                    ensuring a cohesive and engaging user experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
          <span className="text-[#a78bfa] text-xl drop-shadow-lg">🖼️</span>
          <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
            Showcase
          </span>
          <h2 className="text-base font-bold text-white mt-1 tracking-tight">
            Works Gallery
          </h2>
          <div className="w-full flex flex-col items-center relative">
            <Marquee
              speed={25}
              direction="right"
              className="my-3 rounded-2xl opacity-30"
            >
              <img
                src={AC}
                alt="Project 1"
                className="h-28 w-44 rounded-2xl mx-2 border-2 border-[#a78bfa]/30 shadow"
                style={{ borderRadius: "35px" }}
              />
              <img
                src={Aiaura}
                alt="Project 2"
                className="h-28 w-44 rounded-lg mx-2 border-2 border-[#a78bfa]/30 shadow"
                style={{ borderRadius: "35px" }}
              />
              <img
                src={ReactMini}
                alt="Project 3"
                className="h-28 w-44 rounded-lg mx-2 border-2 border-[#a78bfa]/30 shadow"
                style={{ borderRadius: "35px" }}
              />
            </Marquee>
            <a
              href="#"
              className="mt-2 px-4 py-2 rounded-xl -translate-y-15 bg-gradient-to-r from-[#a78bfa] to-[#fbbf24] text-black text-xs font-semibold hover:from-[#b794f4] hover:to-[#fde68a] transition shadow"
            >
              View My Work
            </a>
          </div>
        </div>
        {/* Self details */}
        <div className="col-span-3 row-span-3 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-1 sm:px-2 md:px-4 py-4 text-center hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
          <div className="flex flex-row items-start w-full max-w-2xl mx-auto mt-0">
            {/* Profile Image */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#fbbf24] flex-shrink-0 overflow-hidden shadow-lg border-2 border-[#a78bfa]/30">
              {/* Replace with <img src="..." /> for real image */}
              <div className="w-full h-full bg-[#a78bfa] opacity-80" />
            </div>
            {/* Status and Resume */}
            <div className="flex flex-col ml-3 sm:ml-4 md:ml-6 flex-1 min-w-0">
              <div className="flex flex-row items-center justify-between flex-wrap gap-2 min-w-0">
                <span className="flex items-center bg-[#23232a]/80 px-3 py-1 rounded-full text-[11px] sm:text-[12px] text-[#a1a1aa] font-semibold whitespace-nowrap min-w-0 border border-[#34d399]/20 shadow ">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Available To Work
                </span>
                <a
                  href="/AMEER_HAMZA_RESUME.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] sm:text-[12px] text-white font-semibold bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 px-3 ml-2 py-1 rounded-full hover:from-[#b794f4] hover:to-[#28282d] transition min-w-0 border border-[#a78bfa]/20 shadow"
                  style={{ maxWidth: "60%" }}
                >
                  <span className="truncate">Resume</span>
                  <PiCertificateFill className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
              <div className="mt-2 text-left min-w-0">
                <div className="text-base sm:text-lg md:text-xl font-bold text-white truncate tracking-tight">
                  Ameer Hamza
                </div>
                {/* Description text */}
                <div
                  className="text-xs sm:text-sm md:text-base text-[#a1a1aa] leading-tight break-words"
                  style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)" }}
                >
                  Passionate developer focused on building innovative solutions
                  and seamless user experiences.
                </div>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4 w-full bg-[#15151a]/80 rounded-2xl px-2 md:px-4 py-2 justify-center border border-[#a78bfa]/10 shadow">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-[12px] text-[#a1a1aa] border border-[#a78bfa]/10">
              <PiCertificateFill className="w-4 h-4 text-[#a78bfa]" />
              Bahria University
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-[12px] text-[#a1a1aa] border border-[#a78bfa]/10">
              <PiCampfire className="w-4 h-4 text-[#a78bfa]" />
              Software Engineer
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-[12px] text-[#a1a1aa] border border-[#a78bfa]/10">
              <PiMapPinFill className="w-4 h-4 text-[#a78bfa]" />
              Pakistan
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-[12px] text-[#a1a1aa] border border-[#a78bfa]/10">
              <PiGlobeHemisphereWestFill className="w-4 h-4 text-[#a78bfa]" />
              English & Urdu
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#23232a]/80 text-[12px] text-[#a1a1aa] border border-[#a78bfa]/10">
              <PiClockFill className="w-4 h-4 text-[#a78bfa]" />
              PKT
            </span>
          </div>
          {/* Buttons */}
          <div className="flex flex-row gap-2 md:gap-3 mt-4 w-full max-w-2xl justify-center">
            <a
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 rounded-xl py-2 px-2 text-[#a78bfa] font-semibold text-xs md:text-sm hover:from-[#b794f4] hover:to-[#28282d] transition min-w-0 border border-[#a78bfa]/20 shadow"
              href="https://www.linkedin.com/in/hamza-athar-ezio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ minWidth: 0 }}
            >
              <PiFlagBannerFoldFill className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Connect With Me</span>
            </a>
            <a
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a78bfa]/80 to-[#23232a]/80 rounded-xl py-2 px-2 text-[#a78bfa] font-semibold text-xs md:text-sm hover:from-[#b794f4] hover:to-[#28282d] transition min-w-0 border border-[#a78bfa]/20 shadow"
              href="https://wa.me/+923180535566"
              target="_blank"
              rel="noopener noreferrer"
              style={{ minWidth: 0 }}
            >
              <PiWhatsappLogoLight className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">WhatsApp Me</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-[#a78bfa]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
          <span className="text-[#a78bfa] text-xl drop-shadow-lg">💼</span>
          <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
            What I Offer
          </span>
          <h2 className="text-base font-bold text-white mt-1 tracking-tight">
            Services
          </h2>

          <Marquee pauseOnHover gradient={false} speed={40} className="mt-4">
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
                <span className="text-xs text-white font-semibold">UI/UX</span>
              </span>
            </span>
          </Marquee>
        </div>

        {/* TechStack */}
        <div className="col-span-3 row-span-3 bg-gradient-to-br from-[#fbbf24]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#fbbf24]/10 flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300 overflow-hidden">
          <span className="text-[#61dafb] text-xl drop-shadow-lg mb-1">🛠️</span>
          <h2 className="text-lg font-bold text-white mt-1 mb-3 tracking-tight">
            Tech Arsenal
          </h2>
          <Marquee
            speed={50}
            direction="right"
            className="mt-5"
            autoFill={true}
          >
            <div className="flex flex-row gap-4 items-center w-full flex-1 justify-start py-1">
              <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#61dafb]/10 min-w-[120px] justify-center">
                <FaReact className="text-[#61dafb] text-2xl" />
                <span className="font-semibold">React</span>
              </span>
              <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#00599C]/10 min-w-[120px] justify-center">
                <SiCplusplus className="text-[#00599C] text-2xl" />
                <span className="font-semibold">C++</span>
              </span>
              <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#fbe200]/10 min-w-[120px] justify-center">
                <FaPython className="text-[#fbe200] text-2xl" />
                <span className="font-semibold">Python</span>
              </span>
              <span className="flex items-center gap-2 text-base text-[#a1a1aa] py-2 px-4 bg-[#23232a]/80 rounded-xl shadow border border-[#00758F]/10 min-w-[120px] justify-center mr-4">
                <SiMysql className="text-[#00758F] text-2xl" />
                <span className="font-semibold">MySQL</span>
              </span>
            </div>
          </Marquee>
        </div>
        {/* Online Presence */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-[#23232a]/80 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#a78bfa]/10 flex flex-col items-center justify-center px-1 sm:px-2 py-2 sm:py-3 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
          <span className="text-[#a78bfa] text-xl drop-shadow-lg">✨</span>

          <span className="text-xs font-semibold text-white mt-1 tracking-tight">
            Online Presence
          </span>
          <div className="flex flex-col gap-1 w-full mt-2">
            <a
              href="https://facebook.com/hamza.athar.1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#23232a]/80 rounded-xl px-2 py-1 gap-2 hover:bg-[#28282d] transition w-full min-w-0 border border-[#1877f3]/10 shadow"
            >
              <span className="text-base text-[#1877f3] flex-shrink-0">
                <FaFacebook />
              </span>
              <span className="text-[#a1a1aa] text-xs flex-1 text-left truncate">
                Hamza Athar
              </span>
              <span className="ml-auto text-[#a1a1aa] flex-shrink-0">
                <FaFacebook />
              </span>
            </a>
            <a
              href="https://www.instagram.com/_hamza_nvm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#23232a]/80 rounded-xl px-2 py-1 gap-2 hover:bg-[#28282d] transition w-full min-w-0 border border-[#e1306c]/10 shadow"
            >
              <span className="text-base text-[#e1306c] flex-shrink-0">
                <FaInstagram />
              </span>
              <span className="text-[#a1a1aa] text-xs flex-1 text-left truncate">
                @hamza
              </span>
              <span className="ml-auto text-[#a1a1aa] flex-shrink-0">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#23232a]/80 rounded-xl px-2 py-1 gap-2 hover:bg-[#28282d] transition w-full min-w-0 border border-[#0077b5]/10 shadow"
            >
              <span className="text-base text-[#0077b5] flex-shrink-0">
                <FaLinkedin />
              </span>
              <span className="text-[#a1a1aa] text-xs flex-1 text-left truncate">
                Hamza Athar
              </span>
              <span className="ml-auto text-[#a1a1aa] flex-shrink-0">
                <FaLinkedin />
              </span>
            </a>
          </div>
        </div>

        {/* Contact me */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-[#34d399]/20 to-[#18181b]/90 rounded-2xl shadow-lg border border-[#34d399]/10 flex flex-col items-center justify-center px-2 py-3 text-center hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300">
          <span className="text-[#34d399] text-xl drop-shadow-lg">📬</span>
          <span className="text-[10px] text-[#a1a1aa] font-semibold mt-1 tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-sm font-bold text-white mt-1 tracking-tight">
            Contact
          </h2>
          <p className="text-xs mt-1 text-[#a1a1aa]">
            Let's Make Magic Happen Together!
          </p>
          <div className="w-full flex flex-col gap-2 mt-2">
            <a
              href="mailto:atharhamza559@gmail.com"
              className="flex items-center gap-2 bg-[#23232a]/80 hover:bg-[#28282d] transition rounded-xl px-2 py-1 text-white font-semibold text-xs justify-center min-w-0 border border-[#a78bfa]/10 shadow"
            >
              <PiEnvelopeSimpleFill className="text-base text-[#a78bfa]" />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGridLg;
