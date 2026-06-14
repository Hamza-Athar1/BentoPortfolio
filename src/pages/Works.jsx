import React from "react";
import Navbar from "../components/Navbar";
import AC from "../assets/AC.png";
import pfp from "../assets/pfp.jpg";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import CDL from "../assets/CDL.png";
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
} from "react-icons/fa";
import { SiCplusplus, SiQt, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const cardBase = {
  background:
    "linear-gradient(145deg, rgba(30,30,42,0.9) 0%, rgba(15,15,22,0.95) 100%)",
  border: "1px solid rgba(167,139,250,0.12)",
  backdropFilter: "blur(12px)",
};

const projects = [
  {
    img: Aiaura,
    title: "AIAURA",
    category: "Business",
    url: "https://aiaura.co.uk/",
    desc: "AI-powered aura reading platform for business insights.",
  },
  {
    img: ReactMini,
    title: "React Mini Projects",
    category: "Personal",
    url: "https://mini-react-projects-six.vercel.app/",
    desc: "Collection of interactive React components and projects.",
  },
  {
    img: AC,
    title: "Assassins Creed Website",
    category: "Fan-site",
    url: "https://assassins-creed-two.vercel.app/",
    desc: "Immersive fan website recreating the AC universe.",
  },
  {
    img: CDL,
    title: "FreeCDLTests",
    category: "Business",
    url:"https://freecdltests.com/",
    desc: "Comprehensive CDL practice tests for aspiring truck drivers.",
  }
];

export default function Works() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #0f0f14 0%, #13131a 50%, #1a1a24 100%)",
      }}
    >
      <div className="flex flex-col items-center pb-12 px-3">
        <div className="w-full max-w-7xl">
          <Navbar />

          {/* Page Header */}
          <div className="slide-in-top text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[#a78bfa] text-sm font-semibold mb-2">
              <FaTrophy />
              <span>Portfolio</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight mb-3">
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Works
              </span>
            </h1>
            <p className="text-[#8b8ba0] text-base max-w-lg mx-auto">
              A curated selection of projects that showcase my skills and
              passion for building great digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column */}
            <div className="slide-in-left lg:col-span-5 flex flex-col gap-6 h-full lg:justify-between">
              {/* Projects */}
              <div className="bento-card rounded-2xl p-6" style={cardBase}>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(167,139,250,0.3),rgba(30,30,42,0.5))",
                    }}
                  >
                    <FaTrophy className="text-[#fbbf24] text-sm" />
                  </span>
                  <h2 className="text-lg font-bold text-white">Top Projects</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {projects.map(({ img, title, category, url, desc }) => (
                    <div
                      key={title}
                      className="rounded-2xl overflow-hidden transition-all hover:scale-[1.01]"
                      style={{
                        background: "rgba(167,139,250,0.05)",
                        border: "1px solid rgba(167,139,250,0.12)",
                      }}
                    >
                      <div className="relative overflow-hidden h-32">
                        <img
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          style={{ opacity: 0.7 }}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(15,15,22,0.8) 0%, transparent 60%)",
                          }}
                        />
                        <div className="absolute top-2 right-2">
                          <span
                            className="text-[10px] font-bold px-2 py-1 rounded-full"
                            style={{
                              background: "rgba(167,139,250,0.3)",
                              border: "1px solid rgba(167,139,250,0.4)",
                              color: "#e2d9ff",
                            }}
                          >
                            {category}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white text-sm">
                            {title}
                          </div>
                          <div className="text-[11px] text-[#8b8ba0] mt-0.5">
                            {desc}
                          </div>
                        </div>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0 ml-3 transition-all hover:scale-110"
                          style={{
                            background:
                              "linear-gradient(135deg,rgba(167,139,250,0.3),rgba(30,30,42,0.8))",
                            border: "1px solid rgba(167,139,250,0.25)",
                          }}
                        >
                          <FaExternalLinkAlt className="text-[#a78bfa] text-sm" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profile Card */}
              <div
                className="bento-card rounded-2xl p-6 flex flex-col items-center text-center lg:flex-1 lg:justify-center"
                style={cardBase}
              >
                <div
                  className="w-20 h-20 rounded-2xl overflow-hidden mb-3"
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
                <div className="text-xl font-black text-white mb-1 flex items-center gap-2">
                  <FaUserGraduate className="text-[#a78bfa] text-base" />
                  Ameer Hamza Athar
                </div>
                <div className="flex gap-3 my-4">
                  {[
                    { href: "https://github.com/Hamza-Athar1", icon: <FaGithub /> },
                    { href: "https://www.linkedin.com/in/hamza-athar-ezio", icon: <FaLinkedin /> },
                    { href: "mailto:atharhamza559@gmail.com", icon: <FaEnvelope /> },
                  ].map(({ href, icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl text-[#a78bfa] transition-all hover:scale-110 hover:text-white"
                      style={{
                        background: "rgba(167,139,250,0.1)",
                        border: "1px solid rgba(167,139,250,0.2)",
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <Link
                  to="/"
                  className="px-6 py-2.5 rounded-xl font-bold text-sm text-[#1a1a24] transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                    boxShadow: "0 4px 16px rgba(167,139,250,0.3)",
                  }}
                >
                  About Me →
                </Link>
              </div>

              {/* Fun Fact + Quote */}
              <div
                className="bento-card rounded-2xl p-4 text-center"
                style={cardBase}
              >
                <div className="flex justify-center mb-1"><FaLightbulb className="text-[#fbbf24] text-xl" /></div>
                <p className="text-[12px] text-[#a78bfa] italic mt-2 leading-relaxed">
                  "Did you know? The first computer bug was an actual moth found
                  in a computer in 1947."
                </p>
              </div>
              <div
                className="bento-card rounded-2xl p-4 text-center"
                style={cardBase}
              >
                <p className="text-[13px] text-[#8b8ba0] italic leading-relaxed">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <div className="text-[11px] text-[#a78bfa] font-semibold mt-2">
                  — Cory House
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="slide-in-right lg:col-span-7 flex flex-col gap-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "08+", label: "Certifications", icon: <FaCertificate /> },
                  { value: "250+", label: "Designs", icon: <FaPalette /> },
                  { value: "07+", label: "Collaborations", icon: <FaUserCheck /> },
                  { value: "32+", label: "Clients", icon: <FaUserAlt /> },
                ].map(({ value, label, icon }) => (
                  <div
                    key={label}
                    className="bento-card rounded-2xl py-6 flex flex-col items-center text-center transition-all hover:scale-[1.02]"
                    style={cardBase}
                  >
                    <div className="text-3xl font-black text-white mb-2">
                      {value}
                    </div>
                    <div className="flex items-center gap-2 text-[#a78bfa] text-sm font-medium">
                      {icon}
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Awards & Accolades */}
              <div className="bento-card rounded-2xl p-6" style={cardBase}>
                <div className="flex items-center gap-2 mb-4">
                  <FaCrown className="text-[#fbbf24]" />
                  <span className="text-[11px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                    Recognitions
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Awards & Accolades
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: <FaAward />, title: "Advanced React Course", source: "Coursera.com" },
                    { icon: <FaMedal />, title: "Graphic Designing", source: "Digiskills.pk" },
                    { icon: <FaGem />, title: "Freelancing Certificate", source: "Digiskills.pk" },
                  ].map(({ icon, title, source }) => (
                    <a
                      key={title}
                      href="https://www.linkedin.com/in/hamza-athar-ezio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:scale-[1.01]"
                      style={{
                        background: "rgba(167,139,250,0.06)",
                        border: "1px solid rgba(167,139,250,0.12)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-9 h-9 flex items-center justify-center rounded-xl text-[#a78bfa]"
                          style={{
                            background: "rgba(167,139,250,0.12)",
                            border: "1px solid rgba(167,139,250,0.2)",
                          }}
                        >
                          {icon}
                        </span>
                        <div>
                          <div className="font-semibold text-white text-sm">
                            {title}
                          </div>
                          <div className="text-[11px] text-[#8b8ba0]">
                            {source}
                          </div>
                        </div>
                      </div>
                      <FaExternalLinkAlt className="text-[#a78bfa] text-sm flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div
                className="bento-card rounded-2xl p-6"
                style={{
                  ...cardBase,
                  background:
                    "linear-gradient(145deg,rgba(167,139,250,0.1),rgba(15,15,22,0.95))",
                  border: "1px solid rgba(167,139,250,0.15)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <FaBriefcase className="text-[#a78bfa]" />
                  <span className="text-[11px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                    What I Offer
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Service Suite
                </h2>
                <Marquee pauseOnHover speed={38}>
                  {[
                    { icon: <FaLaptopCode className="text-[#a78bfa]" />, label: "Web Design" },
                    { icon: <FaMobileAlt className="text-[#a78bfa]" />, label: "Mobile App" },
                    { icon: <FaCode className="text-[#a78bfa]" />, label: "Development" },
                    { icon: <FaPencilRuler className="text-[#a78bfa]" />, label: "Branding" },
                    { icon: <FaLayerGroup className="text-[#a78bfa]" />, label: "UI/UX" },
                  ].map(({ icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl mx-2 text-[12px] text-white font-semibold transition-all hover:scale-105"
                      style={{
                        background: "rgba(167,139,250,0.08)",
                        border: "1px solid rgba(167,139,250,0.15)",
                      }}
                    >
                      {icon}
                      {label}
                    </span>
                  ))}
                </Marquee>
              </div>

              {/* Skills */}
              <div className="bento-card rounded-2xl p-6" style={cardBase}>
                <div className="flex items-center gap-2 mb-1">
                  <FaBullseye className="text-[#a78bfa]" />
                  <span className="text-[11px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                    My Skills
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-col gap-3">
                  <Marquee pauseOnHover speed={38} direction="right">
                    {[
                      { icon: <FaReact className="text-[#61DAFB] text-xl" />, label: "React" },
                      { icon: <FaHtml5 className="text-[#E44D26] text-xl" />, label: "HTML" },
                      { icon: <FaCss3Alt className="text-[#2965F1] text-xl" />, label: "CSS" },
                      { icon: <FaJsSquare className="text-[#F7DF1E] text-xl" />, label: "JS" },
                      { icon: <FaPython className="text-[#3776AB] text-xl" />, label: "Python" },
                      { icon: <SiCplusplus className="text-[#00599C] text-xl" />, label: "C++" },
                      { icon: <SiQt className="text-[#41CD52] text-xl" />, label: "Qt" },
                      { icon: <SiMysql className="text-[#4479A1] text-xl" />, label: "SQL" },
                    ].map(({ icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl mx-2 text-[12px] text-white font-semibold transition-all hover:scale-105"
                        style={{ background: "rgba(30,30,42,0.8)", border: "1px solid rgba(167,139,250,0.12)" }}
                      >
                        {icon} {label}
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>

              {/* Why Me */}
              <div className="bento-card rounded-2xl p-6" style={cardBase}>
                <div className="flex items-center gap-2 mb-1">
                  <FaSun className="text-[#fbbf24]" />
                  <span className="text-[11px] text-[#8b8ba0] font-semibold tracking-widest uppercase">
                    Why Me
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  Why Choose Me?
                </h2>
                <div className="flex flex-col gap-2">
                  <Marquee pauseOnHover speed={18}>
                    {[
                      { icon: <FaLightbulb className="text-[#fbbf24]" />, label: "Problem Solver" },
                      { icon: <FaRegStar className="text-[#a78bfa]" />, label: "Attention to Detail" },
                      { icon: <FaRegSun className="text-[#61dafb]" />, label: "Critical Thinker" },
                      { icon: <FaBolt className="text-[#fbbf24]" />, label: "Fast Learner" },
                      { icon: <FaUsers className="text-[#34d399]" />, label: "Team Player" },
                      { icon: <FaRocket className="text-[#a78bfa]" />, label: "Proactive" },
                    ].map(({ icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl mx-2 text-[12px] text-white font-semibold"
                        style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.12)" }}
                      >
                        {icon} {label}
                      </span>
                    ))}
                  </Marquee>
                  <Marquee pauseOnHover speed={18} direction="right" className="mt-2">
                    {[
                      { icon: <FaLightbulb className="text-[#34d399]" />, label: "Creative Thinker" },
                      { icon: <FaUsers className="text-[#61dafb]" />, label: "Communicator" },
                      { icon: <FaBolt className="text-[#e1306c]" />, label: "Motivated" },
                      { icon: <FaRocket className="text-[#a78bfa]" />, label: "Results Driven" },
                    ].map(({ icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl mx-2 text-[12px] text-white font-semibold"
                        style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.12)" }}
                      >
                        {icon} {label}
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
