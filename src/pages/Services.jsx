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
  FaImages,
} from "react-icons/fa";

const cardBase = {
  background:
    "linear-gradient(145deg, rgba(30,30,42,0.9) 0%, rgba(15,15,22,0.95) 100%)",
  border: "1px solid rgba(167,139,250,0.12)",
  backdropFilter: "blur(12px)",
};

export default function Services() {
  const [openBenefit, setOpenBenefit] = React.useState(null);

  const benefits = [
    {
      icon: <FaBolt className="text-[#a78bfa]" />,
      label: "Speed Delivery",
      desc: "Get your projects delivered faster with optimized workflows and efficient processes.",
    },
    {
      icon: <FaCalendarAlt className="text-[#fbbf24]" />,
      label: "Quick Turnaround",
      desc: "Rapid response and completion times to keep your business moving forward.",
    },
    {
      icon: <FaThLarge className="text-[#34d399]" />,
      label: "Success Tracking",
      desc: "Monitor progress and results with transparent reporting and analytics.",
    },
    {
      icon: <FaAward className="text-[#61dafb]" />,
      label: "Unique Design",
      desc: "Stand out with custom, creative, and modern design tailored to your brand.",
    },
  ];

  const services = [
    {
      icon: <FaCode className="text-[#a78bfa] text-3xl" />,
      title: "Web Development",
      desc: "Crafting functional websites with clean code and responsive design to meet client objectives and enhance user experiences.",
      categories: [
        { icon: <FaBuilding className="text-[#a78bfa]" />, label: "Agency", count: "08" },
        { icon: <FaDollarSign className="text-[#fbbf24]" />, label: "Fintech", count: "03" },
        { icon: <FaShoppingCart className="text-[#34d399]" />, label: "Ecommerce", count: "05" },
      ],
      direction: "right",
    },
    {
      icon: <FaCode className="text-[#fbbf24] text-3xl" />,
      title: "QT Project Development",
      desc: "Generate high-quality, cross-platform applications using Qt framework, ensuring performance and scalability.",
      categories: [
        { icon: <FaBuilding className="text-[#a78bfa]" />, label: "Desktop", count: "06" },
        { icon: <FaDollarSign className="text-[#fbbf24]" />, label: "Business", count: "04" },
        { icon: <FaShoppingCart className="text-[#34d399]" />, label: "Tools", count: "08" },
      ],
      direction: "left",
    },
    {
      icon: <FaBolt className="text-[#34d399] text-3xl" />,
      title: "Frontend Development",
      desc: "Turning your ideas into reality with modern, performant, and beautiful user interfaces.",
      stats: [
        { label: "Experience", value: "1+ Years" },
        { label: "Completed Works", value: "5+" },
        { label: "Hourly Rate", value: "$100" },
      ],
    },
    {
      icon: <FaBolt className="text-[#61dafb] text-3xl" />,
      title: "QT Projects",
      desc: "Building high-performance applications with Qt, ensuring cross-platform compatibility and modern UI/UX.",
      stats: [
        { label: "Experience", value: "1+ Years" },
        { label: "Completed Works", value: "3+" },
        { label: "Hourly Rate", value: "$50" },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #0f0f14 0%, #13131a 50%, #1a1a24 100%)",
      }}
    >
      <div className="flex flex-col items-center pb-12 px-3">
        <div className="w-full max-w-6xl">
          <Navbar />

          {/* Page Header */}
          <div className="slide-in-top text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[#a78bfa] text-sm font-semibold mb-2">
              <FaThLarge />
              <span>What I Do</span>
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
                Services
              </span>
            </h1>
            <p className="text-[#8b8ba0] text-base max-w-lg mx-auto">
              From concept to deployment — I deliver complete, polished digital
              solutions tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bento-card rounded-2xl p-6 flex flex-col transition-all hover:scale-[1.01] ${
                  i % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
                style={cardBase}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(167,139,250,0.2),rgba(30,30,42,0.8))",
                      border: "1px solid rgba(167,139,250,0.2)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-[#8b8ba0] text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Stats or Categories */}
                {service.stats && (
                  <div
                    className="flex flex-col gap-2 mb-5 p-4 rounded-xl"
                    style={{
                      background: "rgba(167,139,250,0.05)",
                      border: "1px solid rgba(167,139,250,0.08)",
                    }}
                  >
                    {service.stats.map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-[12px] text-[#8b8ba0]">
                          {label}
                        </span>
                        <span className="text-[13px] font-bold text-white">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {service.categories && (
                  <div className="mb-5">
                    <div className="text-[11px] text-[#8b8ba0] font-semibold tracking-widest uppercase mb-2">
                      Completed Projects
                    </div>
                    <Marquee
                      pauseOnHover
                      speed={28}
                      gradient={false}
                      direction={service.direction}
                    >
                      {service.categories.map(({ icon, label, count }) => (
                        <span
                          key={label}
                          className="flex items-center gap-2 px-4 py-2 mx-2 rounded-xl text-[12px] font-semibold text-white transition-all hover:scale-105"
                          style={{
                            background: "rgba(167,139,250,0.07)",
                            border: "1px solid rgba(167,139,250,0.12)",
                          }}
                        >
                          {icon}
                          {label}
                          <span
                            className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold"
                            style={{
                              background: "rgba(167,139,250,0.2)",
                              color: "#c4b5fd",
                            }}
                          >
                            {count}
                          </span>
                        </span>
                      ))}
                    </Marquee>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href="mailto:atharhamza559@gmail.com"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-[#1a1a24] transition-all hover:scale-[1.02] mt-auto"
                  style={{
                    background: "linear-gradient(135deg,#a78bfa,#fbbf24)",
                    boxShadow: "0 4px 16px rgba(167,139,250,0.25)",
                  }}
                >
                  <FaCalendarAlt className="text-[#4c1d95]" />
                  Contact Me
                </a>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="slide-in-bottom grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: "99%", label: "Satisfaction", icon: <FaStar className="text-[#fbbf24]" /> },
              { value: "08+", label: "Partnerships", icon: <FaArrowUp className="text-[#34d399]" /> },
              { value: "12+", label: "Services Suite", icon: <FaThLarge className="text-[#a78bfa]" /> },
              { value: "14+", label: "Accolades", icon: <FaAward className="text-[#fbbf24]" /> },
            ].map(({ value, label, icon }) => (
              <div
                key={label}
                className="bento-card rounded-2xl py-6 flex flex-col items-center text-center transition-all hover:scale-[1.02]"
                style={cardBase}
              >
                <div className="text-3xl font-black text-white mb-2">
                  {value}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-[#8b8ba0]">
                  {icon}
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Profile Card */}
          <div
            className="fade-in bento-card rounded-2xl p-8 flex flex-col items-center max-w-lg mx-auto mb-10"
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
              <FaUserGraduate className="text-[#a78bfa]" />
              Ameer Hamza Athar
            </div>
            <div className="text-[12px] text-[#8b8ba0] mb-4 text-center">
              Software Engineer · UI/UX Designer
            </div>
            <div className="flex gap-3 mb-5">
              {[
                { href: "https://github.com/Hamza-Athar1", icon: <FaGithub /> },
                { href: "https://www.linkedin.com/in/hamza-athar-ezio/", icon: <FaLinkedin /> },
                { href: "mailto:atharhamza559@gmail.com", icon: <FaEnvelope /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-[#a78bfa] transition-all hover:scale-110"
                  style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
                  {icon}
                </a>
              ))}
            </div>
            <Link
              to="/"
              className="px-6 py-2.5 rounded-xl font-bold text-sm text-[#1a1a24] transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 4px 16px rgba(167,139,250,0.3)" }}
            >
              About Me →
            </Link>
          </div>

          {/* Works Gallery */}
          <div
            className="slide-in-bottom bento-card rounded-2xl p-6 flex flex-col items-center mb-10 max-w-3xl mx-auto"
            style={cardBase}
          >
            <FaImages className="text-2xl text-[#a78bfa] mb-1" />
            <span className="text-[10px] text-[#8b8ba0] font-semibold tracking-widest uppercase mb-1">
              Showcase
            </span>
            <h2 className="text-lg font-bold text-white mb-4">Works Gallery</h2>
            <div className="w-full overflow-hidden rounded-xl mb-4">
              <Marquee speed={22} autoFill gradient={false} className="opacity-60">
                {[Aiaura, ReactMini, AC].map((src, i) => (
                  <img key={i} src={src} alt={`Project ${i + 1}`}
                    className="h-28 w-44 object-cover mx-2 rounded-xl"
                    style={{ border: "1px solid rgba(167,139,250,0.25)" }} />
                ))}
              </Marquee>
            </div>
            <Link
              to="/works"
              className="px-5 py-2 rounded-xl text-sm font-bold text-[#1a1a24] transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 4px 12px rgba(167,139,250,0.3)" }}
            >
              View All My Work →
            </Link>
          </div>

          {/* Benefits */}
          <div
            className="fade-in bento-card rounded-2xl p-6 max-w-2xl mx-auto"
            style={cardBase}
          >
            <div className="flex flex-col items-center mb-5">
              <span className="flex items-center gap-2 text-[#a78bfa] text-sm font-semibold">
                <FaStar className="animate-pulse text-[#a78bfa] text-xs" /> Benefits
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Service Benefits
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {benefits.map((benefit, idx) => (
                <div key={benefit.label} className="w-full">
                  <button
                    type="button"
                    className="flex items-center justify-between rounded-xl px-4 py-3 w-full transition-all"
                    style={{
                      background:
                        openBenefit === idx
                          ? "rgba(167,139,250,0.12)"
                          : "rgba(167,139,250,0.05)",
                      border: `1px solid ${openBenefit === idx ? "rgba(167,139,250,0.25)" : "rgba(167,139,250,0.1)"}`,
                    }}
                    onClick={() =>
                      setOpenBenefit(openBenefit === idx ? null : idx)
                    }
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 flex items-center justify-center rounded-lg"
                        style={{
                          background: "rgba(167,139,250,0.1)",
                          border: "1px solid rgba(167,139,250,0.15)",
                        }}
                      >
                        {benefit.icon}
                      </span>
                      <span className="text-white font-semibold text-sm">
                        {benefit.label}
                      </span>
                    </span>
                    <FaChevronDown
                      className={`text-[#8b8ba0] transition-transform duration-300 ${openBenefit === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openBenefit === idx
                        ? "max-h-32 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-[#8b8ba0] text-sm px-4 pb-3 leading-relaxed">
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
