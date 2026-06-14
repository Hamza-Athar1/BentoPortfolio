import React from "react";
import pfp from "../assets/pfp.jpg";
import Marquee from "react-fast-marquee";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import {
  PiFlagBannerFoldFill,
  PiMagnifyingGlassBold,
  PiGitBranchBold,
  PiPaletteFill,
  PiCampfire,
  PiCalendarCheckDuotone,
  PiMapPinFill,
  PiGlobeHemisphereWestFill,
  PiClockFill,
  PiCertificateFill,
  PiSmileyFill,
  PiWhatsappLogoLight,
  PiEnvelopeSimpleFill,
  PiDevicesBold,
  PiCodeBlock,
  PiPenNib,
  PiAppWindow,
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
import { SiReact, SiCplusplus, SiPython, SiMysql } from "react-icons/si";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function BentoGridMd() {
  return (
    <div
      className="min-h-screen w-full pb-8"
      style={{
        background:
          "linear-gradient(135deg, #0f0f14 0%, #13131a 50%, #1a1a24 100%)",
      }}
    >
      <Navbar />
      <div className="px-4 flex flex-col gap-2 max-w-[900px] mx-auto">
        {/* Row 1: Stats */}
        <div className="grid grid-cols-3 gap-2 slide-in-top">
          {[
            {
              value: "56+",
              label: "Projects",
              icon: <PiFlagBannerFoldFill />,
              color: "#a78bfa",
            },
            {
              value: "12+",
              label: "Clients",
              icon: <PiCampfire />,
              color: "#fbbf24",
            },
            {
              value: "5+",
              label: "YOE",
              icon: <PiCalendarCheckDuotone />,
              color: "#34d399",
            },
          ].map(({ value, label, icon, color }) => (
            <div
              key={label}
              className="bento-card rounded-2xl p-4 flex flex-col items-center justify-center text-center"
            >
              <div
                className="text-3xl font-black leading-none"
                style={{
                  background: `linear-gradient(135deg,${color},rgba(167,139,250,0.8))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <span style={{ color, fontSize: 14 }}>{icon}</span>
                <span className="text-xs text-[#8b8ba0] font-semibold">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Profile Card (full width) */}
        <div className="slide-in-left bento-card rounded-2xl p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid rgba(167,139,250,0.3)",
                  boxShadow: "0 0 24px rgba(167,139,250,0.15)",
                }}
              >
                <img
                  src={pfp}
                  alt="Ameer Hamza"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                }}
              >
                <PiCheckBold className="text-[9px] text-[#1a1a24] font-black" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{
                    background: "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    color: "#34d399",
                  }}
                >
                  <span className="status-dot" />
                  Available To Work
                </span>
                <a
                  href="/AMEER_HAMZA_RESUME.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-white transition-all hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(167,139,250,0.5),rgba(30,30,42,0.8))",
                    border: "1px solid rgba(167,139,250,0.25)",
                  }}
                >
                  Resume <PiCertificateFill className="w-3 h-3" />
                </a>
              </div>
              <div className="text-2xl font-black text-white tracking-tight">
                Ameer Hamza
              </div>
              <div className="text-sm text-[#8b8ba0] mt-1 leading-snug">
                Passionate developer with a knack for creating innovative
                solutions and crafting seamless user experiences.
              </div>
            </div>
          </div>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-1.5 mt-4 p-3 rounded-xl"
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
                label: "English & Urdu",
              },
              {
                icon: <PiClockFill className="text-[#8b8ba0] w-3 h-3" />,
                label: "PKT",
              },
              {
                icon: (
                  <PiCertificateFill className="text-[#a78bfa] w-3 h-3" />
                ),
                label: "Bahria University",
              },
              {
                icon: <PiSmileyFill className="text-[#fbbf24] w-3 h-3" />,
                label: "Good Vibes Only",
              },
            ].map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium text-[#8b8ba0]"
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
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(167,139,250,0.6),rgba(167,139,250,0.2))",
                border: "1px solid rgba(167,139,250,0.3)",
                color: "#e2d9ff",
              }}
            >
              <PiFlagBannerFoldFill className="w-4 h-4" />
              Connect With Me
            </a>
            <a
              href="https://wa.me/+923180535566"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(37,211,102,0.3),rgba(30,30,42,0.8))",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#6de898",
              }}
            >
              <PiWhatsappLogoLight className="w-4 h-4" />
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Row 3: Two columns */}
        <div className="grid grid-cols-2 gap-2">
          {/* Tech Arsenal */}
          <div className="slide-in-left bento-card rounded-2xl p-4">
            <div className="flex items-center gap-1.5 mb-1.5">
              <PiWrenchBold className="text-[#a78bfa] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                My Tools
              </span>
            </div>
            <h2 className="text-sm font-bold text-white mb-3">
              Tech Arsenal
            </h2>
            <Marquee speed={35} pauseOnHover>
              {[
                {
                  icon: <SiReact className="text-[#61dafb] text-2xl" />,
                  label: "React",
                  color: "#61dafb",
                },
                {
                  icon: <SiCplusplus className="text-[#00599C] text-2xl" />,
                  label: "C++",
                  color: "#00599C",
                },
                {
                  icon: <SiPython className="text-[#fbe200] text-2xl" />,
                  label: "Python",
                  color: "#fbe200",
                },
                {
                  icon: <SiMysql className="text-[#00758F] text-2xl" />,
                  label: "MySQL",
                  color: "#00758F",
                },
              ].map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 px-4 py-2.5 mx-2 rounded-xl hover:scale-105 transition-transform"
                  style={{
                    background: "rgba(30,30,42,0.8)",
                    border: `1px solid ${color}22`,
                    minWidth: 80,
                  }}
                >
                  {icon}
                  <span
                    className="text-[11px] font-semibold"
                    style={{ color }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Works Gallery */}
          <div className="slide-in-right bento-card rounded-2xl p-4 flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <PiImagesBold className="text-[#a78bfa] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                Showcase
              </span>
            </div>
            <h2 className="text-sm font-bold text-white mb-2">
              Works Gallery
            </h2>
            <div className="w-full overflow-hidden rounded-xl">
              <Marquee direction="right" speed={22} className="opacity-60">
                {[AC, Aiaura, ReactMini].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Project ${i + 1}`}
                    className="h-20 w-32 object-cover mx-2 rounded-xl"
                    style={{ border: "1px solid rgba(167,139,250,0.25)" }}
                  />
                ))}
              </Marquee>
            </div>
            <Link
              to="/works"
              className="mt-3 px-4 py-1.5 rounded-lg text-[11px] font-bold text-[#1a1a24] transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                boxShadow: "0 4px 12px rgba(167,139,250,0.3)",
              }}
            >
              View My Work →
            </Link>
          </div>
        </div>

        {/* Row 4: Workflow + Achievements */}
        <div className="grid grid-cols-2 gap-2">
          {/* Workflow */}
          <div className="slide-in-left bento-card rounded-2xl p-4">
            <div className="flex items-center gap-1.5 mb-1.5">
              <PiFoldersBold className="text-[#a78bfa] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                Process
              </span>
            </div>
            <h2 className="text-sm font-bold text-white mb-3">
              Workflow
            </h2>
            <div className="flex flex-col gap-2">
              {[
                {
                  icon: <PiFlagBannerFoldFill />,
                  label: "Goals & Objectives",
                  desc: "Define aims and outcomes.",
                },
                {
                  icon: <PiMagnifyingGlassBold />,
                  label: "Research",
                  desc: "Gather insights & needs.",
                },
                {
                  icon: <PiGitBranchBold />,
                  label: "Wireframe",
                  desc: "Map structure & flow.",
                },
                {
                  icon: <PiPaletteFill />,
                  label: "Design",
                  desc: "High-fidelity visuals.",
                },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-xl px-3 py-2 flex items-start gap-2 transition-all hover:translate-x-1"
                  style={{
                    background: "rgba(167,139,250,0.07)",
                    border: "1px solid rgba(167,139,250,0.1)",
                  }}
                >
                  <span className="text-[#a78bfa] text-sm mt-0.5 flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold text-white">
                      {label}
                    </div>
                    <div className="text-[10px] text-[#8b8ba0]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="slide-in-right bento-card rounded-2xl p-4">
            <div className="flex items-center gap-1.5 mb-1.5">
              <PiTrophyBold className="text-[#fbbf24] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                Highlights
              </span>
            </div>
            <h2 className="text-sm font-bold text-white mb-3">
              Achievements
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { title: "Dean's List", sub: "Bahria University 2023" },
                { title: "Open Source", sub: "10+ Projects contributed" },
                { title: "Summer of Making", sub: "Participant" },
                { title: "Community", sub: "Volunteer at Local Tech Events" },
              ].map(({ title, sub }) => (
                <div
                  key={title}
                  className="rounded-xl px-3 py-2 flex items-start gap-2"
                  style={{
                    background: "rgba(167,139,250,0.07)",
                    border: "1px solid rgba(167,139,250,0.1)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "#a78bfa" }}
                  />
                  <div>
                    <div className="text-[11px] font-semibold text-white">
                      {title}
                    </div>
                    <div className="text-[10px] text-[#8b8ba0]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#a78bfa] text-[10px] mt-3 text-center font-medium">
              Always striving for excellence!
            </p>
          </div>
        </div>

        {/* Row 5: Services + Online Presence */}
        <div className="grid grid-cols-2 gap-2">
          {/* Services */}
          <div className="slide-in-bottom bento-card rounded-2xl p-4 flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1.5">
              <PiBriefcaseBold className="text-[#fbbf24] text-base" />
              <span className="text-[9px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                What I Offer
              </span>
            </div>
            <h2 className="text-sm font-bold text-white mb-3">
              Services
            </h2>
            <Marquee pauseOnHover speed={35} gradient={false}>
              {[
                {
                  icon: <PiGlobeHemisphereWestFill />,
                  label: "Web Design",
                },
                { icon: <PiDevicesBold />, label: "Mobile" },
                { icon: <PiCodeBlock />, label: "Dev" },
                { icon: <PiPenNib />, label: "Branding" },
                { icon: <PiAppWindow />, label: "UI/UX" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 mx-1.5 rounded-lg text-[11px] text-white font-semibold"
                  style={{
                    background: "rgba(167,139,250,0.1)",
                    border: "1px solid rgba(167,139,250,0.15)",
                  }}
                >
                  <span className="text-[#a78bfa]">{icon}</span>
                  {label}
                </span>
              ))}
            </Marquee>
            <Link
              to="/services"
              className="mt-3 px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg,rgba(167,139,250,0.8),rgba(251,191,36,0.6))",
                color: "#1a1a24",
              }}
            >
              View Services →
            </Link>
          </div>

          {/* Let's Work Together / Contact */}
          <div className="slide-in-bottom delay-200 bento-card rounded-2xl p-4 flex flex-col items-center justify-center text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
              style={{
                background:
                  "linear-gradient(135deg,rgba(167,139,250,0.3),rgba(52,211,153,0.3))",
                border: "1px solid rgba(167,139,250,0.2)",
              }}
            >
              <PiRocketLaunchBold className="text-xl text-[#34d399]" />
            </div>
            <div className="text-base font-black text-white tracking-tight mb-0.5">
              Let's Work Together
            </div>
            <div className="text-[10px] text-[#8b8ba0] mb-3">
              Let's Make Magic Happen!
            </div>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="mailto:atharhamza559@gmail.com"
                className="flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(167,139,250,0.5),rgba(30,30,42,0.8))",
                  border: "1px solid rgba(167,139,250,0.3)",
                }}
              >
                <PiEnvelopeSimpleFill className="text-[#a78bfa]" />
                Email Me
              </a>
              <div className="flex gap-2 w-full">
                {[
                  {
                    href: "https://facebook.com/hamza.athar.1",
                    icon: <FaFacebook />,
                    color: "#1877f2",
                  },
                  {
                    href: "https://www.instagram.com/_hamza_nvm/",
                    icon: <FaInstagram />,
                    color: "#e1306c",
                  },
                  {
                    href: "https://www.linkedin.com/in/hamza-athar-ezio",
                    icon: <FaLinkedin />,
                    color: "#0077b5",
                  },
                  {
                    href: "https://github.com/Hamza-Athar1",
                    icon: <FaGithub />,
                    color: "#e2e2f0",
                  },
                ].map(({ href, icon, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center py-1.5 rounded-lg transition-all hover:scale-110"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}25`,
                      color,
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 6: Timeline + Quote */}
        <div className="grid grid-cols-3 gap-3">
          {/* Timeline */}
          <div className="slide-in-left col-span-2 bento-card rounded-2xl p-4">
            <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <PiCalendarBlankBold className="text-[#a78bfa]" />
              Timeline
            </h2>
            <ol
              className="relative border-l-2 pl-4"
              style={{ borderColor: "rgba(167,139,250,0.3)" }}
            >
              {[
                {
                  year: "2027",
                  event: "Graduating from Bahria University",
                  icon: <PiGraduationCapBold />,
                },
                {
                  year: "2023",
                  event: "Joined Bahria University — BSCS",
                  icon: <PiHouseLineBold />,
                },
                {
                  year: "2023",
                  event: "Graduated Punjab Group of Colleges",
                  icon: <PiCertificateFill className="text-xs" />,
                },
                {
                  year: "2020",
                  event: "Completed SLS Montessori",
                  icon: <PiPencilBold />,
                },
              ].map(({ year, event, icon }) => (
                <li key={year + event} className="mb-3 last:mb-0 relative">
                  <span
                    className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                      boxShadow: "0 0 8px rgba(167,139,250,0.4)",
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-[#a78bfa] text-sm">{icon}</span>
                    <div>
                      <div className="text-[10px] text-[#a78bfa] font-bold">
                        {year}
                      </div>
                      <div className="text-[12px] text-white font-medium">
                        {event}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Quote */}
          <div className="slide-in-right bento-card rounded-2xl p-4 flex flex-col justify-center">
            <span className="text-3xl text-[#a78bfa] font-serif mb-2">"</span>
            <blockquote className="text-[12px] text-[#8b8ba0] italic leading-relaxed">
              Great design is achieved not when there is nothing more to add,
              but when there is nothing left to take away.
            </blockquote>
            <div className="mt-3 text-[10px] text-[#a78bfa] font-semibold">
              — Antoine de Saint-Exupéry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
