import React from "react";
import Marquee from "react-fast-marquee";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import {
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiClockFill,
  PiCertificateFill,
  PiSmileyFill,
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
  PiEnvelopeSimpleFill,
  PiHandshakeBold,
  PiSparkleBold,
  PiTrophyBold,
  PiFoldersBold,
  PiImagesBold,
  PiBriefcaseBold,
  PiWrenchBold,
  PiCalendarBlankBold,
  PiCheckBold,
  PiRocketLaunchBold,
  PiGraduationCapBold,
  PiHouseLineBold,
  PiPencilBold,
} from "react-icons/pi";
import {
  FaReact,
  FaPython,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import Navbar from "./Navbar";
import pfp from "../assets/pfp.jpg";
import { Link } from "react-router-dom";

export default function BentogridXs() {
  return (
    <div
      className="flex flex-col items-center min-h-screen pb-8 px-3"
      style={{
        background:
          "linear-gradient(135deg, #0f0f14 0%, #13131a 50%, #1a1a24 100%)",
      }}
    >
      <div className="w-full max-w-md">
        <Navbar />

        {/* Profile Card */}
        <div className="slide-in-top bento-card rounded-2xl p-5 flex flex-col items-center mb-3">
          {/* Profile Image */}
          <div className="relative mb-3">
            <div
              className="w-24 h-24 rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(167,139,250,0.35)",
                boxShadow: "0 0 32px rgba(167,139,250,0.15)",
              }}
            >
              <img
                src={pfp}
                alt="Ameer Hamza"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-sm"
              style={{
                background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                boxShadow: "0 4px 12px rgba(167,139,250,0.4)",
              }}
            >
              <PiCheckBold className="text-[10px] text-[#1a1a24] font-black" />
            </div>
          </div>

          {/* Status */}
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3"
            style={{
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.25)",
              color: "#34d399",
            }}
          >
            <span className="status-dot" />
            Available To Work
          </span>

          {/* Name + Title */}
          <div className="text-2xl font-black text-white text-center tracking-tight mb-1">
            Ameer Hamza Athar
          </div>
          <div className="text-sm text-[#8b8ba0] mb-4 text-center">
            I'm a{" "}
            <span className="text-[#a78bfa] font-semibold">developer</span> &
            designer
          </div>

          {/* Tags */}
          <div
            className="w-full p-3 rounded-xl flex flex-wrap gap-1.5 justify-center mb-4"
            style={{
              background: "rgba(167,139,250,0.05)",
              border: "1px solid rgba(167,139,250,0.08)",
            }}
          >
            {[
              {
                icon: <PiMapPinFill className="text-[#34d399] w-3 h-3" />,
                label: "Pakistan",
              },
              {
                icon: (
                  <PiGlobeHemisphereWestFill className="text-[#a78bfa] w-3 h-3" />
                ),
                label: "EN & UR",
              },
              {
                icon: <PiClockFill className="text-[#8b8ba0] w-3 h-3" />,
                label: "PKT",
              },
              {
                icon: (
                  <PiCertificateFill className="text-[#a78bfa] w-3 h-3" />
                ),
                label: "Bahria Uni",
              },
              {
                icon: <PiSmileyFill className="text-[#fbbf24] w-3 h-3" />,
                label: "Good Boy",
              },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium text-[#8b8ba0]"
                style={{
                  background: "rgba(30,30,42,0.8)",
                  border: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                {icon} {label}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full">
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(167,139,250,0.6),rgba(167,139,250,0.2))",
                border: "1px solid rgba(167,139,250,0.3)",
                color: "#e2d9ff",
              }}
            >
              <PiFlagBannerFoldFill className="w-4 h-4" />
              Connect
            </a>
            <a
              href="https://wa.me/+923180535566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(37,211,102,0.3),rgba(30,30,42,0.8))",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#6de898",
              }}
            >
              <PiWhatsappLogoLight className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="slide-in-bottom grid grid-cols-3 gap-2 mb-3">
          {[
            {
              value: "56+",
              label: "Projects",
              icon: <PiFlagBannerFoldFill />,
              color: "#a78bfa",
              bg: "rgba(167,139,250,0.12)",
            },
            {
              value: "23+",
              label: "Clients",
              icon: <PiCampfire />,
              color: "#fbbf24",
              bg: "rgba(251,191,36,0.1)",
            },
            {
              value: "5+",
              label: "YOE",
              icon: <PiCalendarCheckDuotone />,
              color: "#34d399",
              bg: "rgba(52,211,153,0.1)",
            },
          ].map(({ value, label, icon, color, bg }) => (
            <div
              key={label}
              className="bento-card rounded-2xl py-4 px-2 flex flex-col items-center justify-center text-center"
              style={{
                border: `1px solid ${color}33`,
              }}
            >
              <div
                className="text-2xl font-black leading-none"
                style={{
                  background: `linear-gradient(135deg,${color},rgba(167,139,250,0.8))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span style={{ color, fontSize: 12 }}>{icon}</span>
                <span className="text-[10px] text-[#8b8ba0] font-semibold">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/AMEER_HAMZA_RESUME.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in flex items-center justify-center gap-2 rounded-2xl py-3 px-6 mb-3 w-full font-bold text-sm text-[#1a1a24] transition-all hover:scale-[1.01]"
          style={{
            background: "linear-gradient(135deg,#a78bfa,#c084fc,#fbbf24)",
            boxShadow: "0 8px 24px rgba(167,139,250,0.3)",
          }}
        >
          Download Resume
          <PiCertificateFill className="w-5 h-5" />
        </a>

        {/* Tech Arsenal */}
        <div className="slide-in-left bento-card rounded-2xl p-4 mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <PiWrenchBold className="text-[#a78bfa] text-base" />
            <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
              My Tools
            </span>
          </div>
          <h2 className="text-sm font-bold text-white mb-3">
            Tech Arsenal
          </h2>
          <Marquee speed={35} pauseOnHover direction="right">
            {[
              { icon: <FaReact className="text-[#61dafb] text-xl" />, label: "React", color: "#61dafb" },
              { icon: <SiCplusplus className="text-[#00599C] text-xl" />, label: "C++", color: "#00599C" },
              { icon: <FaPython className="text-[#fbe200] text-xl" />, label: "Python", color: "#fbe200" },
              { icon: <SiMysql className="text-[#00758F] text-xl" />, label: "MySQL", color: "#00758F" },
            ].map(({ icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 mx-2 rounded-xl"
                style={{ background: "rgba(30,30,42,0.8)", border: `1px solid ${color}22`, minWidth: 100 }}>
                {icon}
                <span className="font-semibold text-sm text-[#e2e2f0]">{label}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Works Gallery */}
        <div className="slide-in-right bento-card rounded-2xl p-4 flex flex-col items-center mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <PiImagesBold className="text-[#a78bfa] text-base" />
            <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
              Showcase
            </span>
          </div>
          <h2 className="text-sm font-bold text-white mb-3">
            Works Gallery
          </h2>
          <div className="w-full overflow-hidden rounded-xl mb-3">
            <Marquee speed={20} autoFill className="opacity-60">
              {[AC, Aiaura, ReactMini].map((src, i) => (
                <img key={i} src={src} alt={`Project ${i + 1}`}
                  className="h-28 w-44 object-cover mx-2 rounded-xl"
                  style={{ border: "1px solid rgba(167,139,250,0.25)" }} />
              ))}
            </Marquee>
          </div>
          <Link
            to="/works"
            className="px-5 py-2 rounded-xl text-xs font-bold text-[#1a1a24] transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 4px 16px rgba(167,139,250,0.3)" }}
          >
            View My Work →
          </Link>
        </div>

        {/* Workflow */}
        <div className="slide-in-bottom bento-card rounded-2xl p-4 mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <PiFoldersBold className="text-[#a78bfa] text-base" />
            <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
              Process
            </span>
          </div>
          <h2 className="text-sm font-bold text-white mb-3">Workflow</h2>
          <div className="flex flex-col gap-2">
            {[
              { icon: <PiFlagBannerFoldFill />, label: "Goals & Objectives", desc: "Define aims and outcomes." },
              { icon: <PiMagnifyingGlassBold />, label: "Research", desc: "Gather insights & user needs." },
              { icon: <PiGitBranchBold />, label: "Wireframe", desc: "Map structure & navigation." },
              { icon: <PiPaletteFill />, label: "Design", desc: "High-fidelity visuals & polish." },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="rounded-xl px-3 py-2.5 flex items-start gap-3"
                style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.1)" }}>
                <span className="text-[#a78bfa] text-base mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-[12px] font-semibold text-white">{label}</div>
                  <div className="text-[11px] text-[#8b8ba0]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="slide-in-top bento-card rounded-2xl p-4 flex flex-col items-center mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <PiBriefcaseBold className="text-[#fbbf24] text-base" />
            <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
              What I Offer
            </span>
          </div>
          <h2 className="text-sm font-bold text-white mb-3">Services</h2>
          <Marquee pauseOnHover speed={35} direction="left">
            {[
              { icon: <PiGlobeHemisphereWestFill />, label: "Web Design" },
              { icon: <PiDevicesBold />, label: "Mobile App" },
              { icon: <PiCodeBlock />, label: "Development" },
              { icon: <PiPenNib />, label: "Branding" },
              { icon: <PiAppWindow />, label: "UI/UX" },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-2 px-3 py-2 mx-2 rounded-lg text-[11px] text-white font-semibold"
                style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.15)" }}>
                <span className="text-[#a78bfa]">{icon}</span>
                {label}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Timeline */}
        <div className="fade-in bento-card rounded-2xl p-4 mb-3">
          <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
            <PiCalendarBlankBold className="text-[#a78bfa] text-base" />
            Timeline
          </h2>
          <ol className="relative border-l-2 pl-4" style={{ borderColor: "rgba(167,139,250,0.3)" }}>
            {[
              { year: "2027", event: "Graduating from Bahria University", icon: <PiGraduationCapBold /> },
              { year: "2023", event: "Joined Bahria University — BSCS", icon: <PiHouseLineBold /> },
              { year: "2023", event: "Punjab Group of Colleges", icon: <PiCertificateFill className="text-xs" /> },
              { year: "2020", event: "SLS Montessori School", icon: <PiPencilBold /> },
            ].map(({ year, event, icon }) => (
              <li key={year + event} className="mb-3 last:mb-0 relative">
                <span className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full"
                  style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 0 8px rgba(167,139,250,0.4)" }} />
                <div className="flex items-center gap-2">
                  <span className="text-[#a78bfa] text-sm">{icon}</span>
                  <div>
                    <div className="text-[10px] text-[#a78bfa] font-bold">{year}</div>
                    <div className="text-[12px] text-white font-medium">{event}</div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Achievements */}
        <div className="slide-in-left bento-card rounded-2xl p-4 mb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <PiTrophyBold className="text-[#fbbf24] text-base" />
            <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">Achievements</span>
          </div>
          <h2 className="text-sm font-bold text-white mb-3">Proud Moments</h2>
          <div className="flex flex-col gap-2">
            {[
              { title: "Dean's List", sub: "Bahria University 2023" },
              { title: "Open Source", sub: "10+ Projects contributed" },
              { title: "Summer of Making", sub: "Participant" },
              { title: "Community", sub: "Local Tech Events Volunteer" },
            ].map(({ title, sub }) => (
              <div key={title} className="rounded-xl px-3 py-2 flex items-start gap-2"
                style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.1)" }}>
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#a78bfa" }} />
                <div>
                  <div className="text-[12px] font-semibold text-white">{title}</div>
                  <div className="text-[11px] text-[#8b8ba0]">{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#a78bfa] text-[11px] mt-3 text-center font-medium">
            Always striving for excellence!
          </p>
        </div>

        {/* Online + Contact */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Online Presence */}
          <div className="slide-in-left bento-card rounded-2xl p-4 flex flex-col">
            <div className="flex items-center gap-1.5 mb-3">
              <PiSparkleBold className="text-[#fbbf24] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                Online Presence
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "https://facebook.com/hamza.athar.1", icon: <FaFacebook />, color: "#1877f2", label: "Hamza Athar" },
                { href: "https://www.instagram.com/_hamza_nvm/", icon: <FaInstagram />, color: "#e1306c", label: "@hamza" },
                { href: "https://www.linkedin.com/in/hamza-athar-ezio", icon: <FaLinkedin />, color: "#0077b5", label: "Hamza Athar" },
                { href: "https://github.com/Hamza-Athar1", icon: <FaGithub />, color: "#e2e2f0", label: "Hamza-Athar1" },
              ].map(({ href, icon, color, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl px-2 py-2 transition-all hover:scale-[1.02]"
                  style={{ background: `${color}12`, border: `1px solid ${color}22` }}>
                  <span style={{ color, fontSize: 14 }}>{icon}</span>
                  <span className="text-[10px] text-[#8b8ba0] truncate">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="slide-in-right bento-card rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <PiRocketLaunchBold className="text-2xl text-[#34d399] mb-2" />
            <div className="text-sm font-black text-white mb-1">Let's Work!</div>
            <div className="text-[10px] text-[#8b8ba0] mb-3">
              Make magic together
            </div>
            <a href="mailto:atharhamza559@gmail.com"
              className="flex items-center justify-center gap-1.5 w-full rounded-xl py-2 text-[11px] font-bold text-white mb-2 transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,rgba(167,139,250,0.5),rgba(30,30,42,0.8))", border: "1px solid rgba(167,139,250,0.3)" }}>
              <PiEnvelopeSimpleFill className="text-[#a78bfa]" />
              Email Me
            </a>
            <a href="https://wa.me/+923180535566" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full rounded-xl py-2 text-[11px] font-bold transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,rgba(37,211,102,0.3),rgba(30,30,42,0.8))", border: "37,211,102,0.3", color: "#6de898" }}>
              <PiWhatsappLogoLight />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
