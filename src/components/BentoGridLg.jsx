import { Link } from "react-router-dom";
import {
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
  PiClockFill,
  PiWhatsappLogoFill,
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
  PiArrowRightBold,
} from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";
import pfp from "../assets/pfp.jpg";
import AC from "../assets/AC.png";
import Aiaura from "../assets/Aiaura.png";
import ReactMini from "../assets/ReactMini.png";
import Navbar from "./Navbar";

/* ── design tokens ── */
const C = {
  card: {
    background: "rgba(20,18,32,0.92)",
    border: "1px solid rgba(167,139,250,0.11)",
    backdropFilter: "blur(20px)",
  },
  item: {
    background: "rgba(167,139,250,0.05)",
    border: "1px solid rgba(167,139,250,0.10)",
  },
  tag: {
    background: "rgba(30,26,48,0.85)",
    border: "1px solid rgba(167,139,250,0.11)",
  },
  hr: { background: "rgba(167,139,250,0.09)" },
};

/* ── tiny helpers ── */
const Divider = () => (
  <div className="w-full h-px" style={C.hr} />
);

const SectionLabel = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <span className="text-base opacity-90">{icon}</span>
    <span className="text-[10px] text-[#8b8ba0] font-bold tracking-widest uppercase">{label}</span>
  </div>
);

/* ═══════════════════════════════════════════════════ */
const BentoGridLg = () => (
  <div
    className="h-screen w-full flex flex-col overflow-hidden"
    style={{ background: "linear-gradient(145deg,#0d0b14 0%,#10101a 55%,#14121e 100%)" }}
  >
    <Navbar />

    <div className="flex-1 px-4 pb-4 overflow-hidden">
      <div
        className="grid gap-3 w-full h-full max-w-[1720px] mx-auto"
        style={{
          gridTemplateColumns: "repeat(12,1fr)",
          /* compact header/footer rows; main content rows are equal */
          gridTemplateRows: "0.5fr 1fr 1fr 1fr 1fr 0.5fr",
        }}
      >

        {/* ════════════════ ROW 1 – Stats bar ════════════════ */}

        {/* Connect  1-2 */}
        <div className="slide-in-top rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "1/3" }}>
          <SectionLabel icon={<PiHandshakeBold className="text-[#a78bfa]" />} label="Connect" />
          <div className="flex gap-2">
            {[
              { h: "https://github.com/Hamza-Athar1",            n: <FaGithub />,         c: "#a78bfa" },
              { h: "https://facebook.com/hamza.athar.1",         n: <PiFacebookLogoBold />, c: "#1877f2" },
              { h: "https://linkedin.com/in/hamza-athar-ezio",   n: <PiLinkedinLogoBold />, c: "#0077b5" },
            ].map(({ h, n, c }) => (
              <a key={h} href={h} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all hover:scale-110"
                style={{ color: c, background: `${c}14`, border: `1px solid ${c}30` }}>
                {n}
              </a>
            ))}
          </div>
        </div>

        {/* 56 Projects  3-4 */}
        <div className="slide-in-top delay-100 rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "3/5", background: "rgba(167,139,250,0.09)", border: "1px solid rgba(167,139,250,0.20)" }}>
          <span className="text-4xl font-black gradient-text leading-none">56</span>
          <div className="flex items-center gap-1.5">
            <PiFlagBannerFoldFill className="text-[#a78bfa] text-sm" />
            <span className="text-xs text-[#8b8ba0] font-semibold">Projects</span>
          </div>
        </div>

        {/* 12 Clients  5-6 */}
        <div className="slide-in-top delay-200 rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "5/7", background: "rgba(251,191,36,0.09)", border: "1px solid rgba(251,191,36,0.20)" }}>
          <span className="text-4xl font-black leading-none"
            style={{ background: "linear-gradient(135deg,#fbbf24,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            12
          </span>
          <div className="flex items-center gap-1.5">
            <PiCampfire className="text-[#fbbf24] text-sm" />
            <span className="text-xs text-[#8b8ba0] font-semibold">Clients</span>
          </div>
        </div>

        {/* 5 YOE  7-8 */}
        <div className="slide-in-top delay-300 rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "7/9", background: "rgba(52,211,153,0.09)", border: "1px solid rgba(52,211,153,0.20)" }}>
          <span className="text-4xl font-black leading-none"
            style={{ background: "linear-gradient(135deg,#34d399,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            5
          </span>
          <div className="flex items-center gap-1.5">
            <PiCalendarCheckDuotone className="text-[#34d399] text-sm" />
            <span className="text-xs text-[#8b8ba0] font-semibold">Years Exp.</span>
          </div>
        </div>

        {/* Online  9-10 */}
        <div className="slide-in-right delay-400 rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "9/11" }}>
          <SectionLabel icon={<PiSparkleBold className="text-[#fbbf24]" />} label="Online" />
          <div className="flex gap-2">
            {[
              { h: "https://facebook.com/hamza.athar.1",       n: <FaFacebook />,  c: "#1877f2" },
              { h: "https://instagram.com/_hamza_nvm/",        n: <FaInstagram />, c: "#e1306c" },
              { h: "https://linkedin.com/in/hamza-athar-ezio", n: <FaLinkedin />,  c: "#0077b5" },
            ].map(({ h, n, c }) => (
              <a key={h} href={h} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all hover:scale-110"
                style={{ color: c, background: `${c}14`, border: `1px solid ${c}30` }}>
                {n}
              </a>
            ))}
          </div>
        </div>

        {/* Contact  11-12 */}
        <div className="slide-in-right delay-500 rounded-2xl px-4 flex flex-col items-center justify-evenly"
          style={{ ...C.card, gridColumn: "11/13" }}>
          <SectionLabel icon={<PiEnvelopeSimpleFill className="text-[#34d399]" />} label="Contact" />
          <a href="mailto:atharhamza559@gmail.com"
            className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,rgba(167,139,250,0.75),rgba(52,211,153,0.4))", border: "1px solid rgba(167,139,250,0.24)" }}>
            <PiEnvelopeSimpleFill className="text-sm" /> Email Me
          </a>
        </div>


        {/* ════════════════ ROWS 2-5 – Main content ════════════════ */}

        {/* ── Achievements  col 1-2, rows 2-5 ── */}
        <div className="slide-in-left rounded-2xl p-4 flex flex-col"
          style={{ ...C.card, gridColumn: "1/3", gridRow: "2/6" }}>

          {/* Header */}
          <SectionLabel icon={<PiTrophyBold className="text-[#fbbf24]" />} label="Highlights" />
          <h2 className="text-base font-bold text-white mt-1 mb-3">Achievements</h2>
          <Divider />

          {/* ↓ justify-evenly: space is distributed BETWEEN items, items keep natural height */}
          <div className="flex flex-col gap-8 my-4">
            {[
              { title: "Open Source",     sub: "10+ public repos",       dot: "#a78bfa" },
              { title: "Summer of Making", sub: "Hackathon participant",  dot: "#fbbf24" },
              { title: "Community",        sub: "Tech events volunteer",  dot: "#34d399" },
              { title: "Dean's List",      sub: "Bahria University 2023", dot: "#a78bfa" },
            ].map(({ title, sub, dot }) => (
              <div key={title} className="rounded-xl px-4 py-3.5 flex items-center gap-3"
                style={C.item}>
                <span className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: dot, boxShadow: `0 0 8px ${dot}88` }} />
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{title}</div>
                  <div className="text-[11px] text-[#8b8ba0] mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-3 rounded-xl px-4 py-2.5 text-center" style={C.item}>
            <span className="text-[11px] text-[#a78bfa] font-semibold">Always striving for excellence!</span>
          </div>
        </div>


        {/* ── Workflow  col 3-4, rows 2-5 ── */}
        <div className="slide-in-bottom rounded-2xl p-4 flex flex-col"
          style={{ ...C.card, gridColumn: "3/5", gridRow: "2/6" }}>

          <SectionLabel icon={<PiFoldersBold className="text-[#a78bfa]" />} label="Process" />
          <h2 className="text-base font-bold text-white mt-1 mb-3">Workflow</h2>
          <Divider />

          {/* ↓ same pattern: justify-evenly, items at natural height */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              { icon: <PiFlagBannerFoldFill />, label: "Goals & Objectives", tip: "Define aims & target outcomes." },
              { icon: <PiMagnifyingGlassBold />, label: "Research",           tip: "Gather insights & user needs."  },
              { icon: <PiGitBranchBold />,       label: "Wireframe",          tip: "Map structure & navigation."    },
              { icon: <PiPaletteFill />,         label: "Design",             tip: "High-fidelity visuals & polish."},
            ].map(({ icon, label, tip }) => (
              <div key={label} className="rounded-xl px-4 py-3.5 flex items-center gap-3"
                style={C.item}>
                <span className="text-[#a78bfa] text-xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{label}</div>
                  <div className="text-[11px] text-[#8b8ba0] mt-0.5">{tip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── Profile Hero  col 5-9, rows 2-5 ── */}
        {/* justify-between distributes the 5 content blocks across the full card height */}
        <div className="slide-in-top rounded-2xl px-5 py-5 flex flex-col gap-4"
          style={{ ...C.card, gridColumn: "5/10", gridRow: "2/6" }}>

          {/* Block 1: Avatar + name */}
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl overflow-hidden"
                style={{ border: "2px solid rgba(167,139,250,0.32)", boxShadow: "0 0 28px rgba(167,139,250,0.15)" }}>
                <img src={pfp} alt="Ameer Hamza" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)" }}>
                <PiCheckBold className="text-[10px] text-[#0d0b14] font-black" />
              </div>
            </div>
            <div className="flex-1 pt-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
                  style={{ background: "rgba(52,211,153,0.09)", border: "1px solid rgba(52,211,153,0.25)", color: "#34d399" }}>
                  <span className="status-dot" /> Available To Work
                </span>
                <a href="/AMEER_HAMZA_RESUME.pdf" download target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,rgba(167,139,250,0.35),rgba(20,18,32,0.8))", border: "1px solid rgba(167,139,250,0.25)" }}>
                  Resume <PiCertificateFill />
                </a>
              </div>
              <div className="text-2xl font-black text-white tracking-tight leading-tight">Ameer Hamza Athar</div>
              <div className="text-sm text-[#a78bfa] font-semibold mt-1">Software Engineer &amp; UI/UX Designer</div>
            </div>
          </div>

          {/* Block 2: Bio */}
          <div>
            <Divider />
            <p className="text-[13px] text-[#9090a8] leading-relaxed mt-3">
              Passionate developer with a knack for building innovative, performant web applications
              and crafting seamless user experiences. Focused on clean code, modern design, and continuous growth.
            </p>
          </div>

          {/* Block 3: Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: <PiCertificateFill className="text-[#a78bfa]" />, label: "Bahria University" },
              { icon: <PiCampfire className="text-[#fbbf24]" />,        label: "Software Engineer" },
              { icon: <PiMapPinFill className="text-[#34d399]" />,      label: "Pakistan"          },
              { icon: <PiGlobeHemisphereWestFill className="text-[#a78bfa]" />, label: "EN / UR"  },
              { icon: <PiClockFill className="text-[#8b8ba0]" />,       label: "UTC +5"            },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium text-[#9090a8]"
                style={C.tag}>
                {icon} {label}
              </span>
            ))}
          </div>

          {/* Block 4: Mini stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "56+", label: "Projects",   color: "#a78bfa" },
              { value: "5+",  label: "Years Exp.", color: "#34d399" },
              { value: "12+", label: "Clients",    color: "#fbbf24" },
            ].map(({ value, label, color }) => (
              <div key={label} className="flex flex-col items-center py-3 rounded-xl" style={C.item}>
                <span className="text-xl font-black" style={{ color }}>{value}</span>
                <span className="text-[11px] text-[#8b8ba0] font-medium mt-0.5">{label}</span>
              </div>
            ))}
          </div>

          {/* Block 5: CTA buttons */}
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/hamza-athar-ezio" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,rgba(167,139,250,0.55),rgba(167,139,250,0.15))", border: "1px solid rgba(167,139,250,0.25)", color: "#e2d9ff" }}>
              <PiFlagBannerFoldFill className="text-base" /> Connect on LinkedIn
            </a>
            <a href="https://wa.me/+923180535566" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,rgba(37,211,102,0.22),rgba(20,18,32,0.7))", border: "1px solid rgba(37,211,102,0.25)", color: "#6de898" }}>
              <PiWhatsappLogoFill className="text-base" /> WhatsApp
            </a>
          </div>
        </div>


        {/* ── Works Gallery  col 10-12, rows 2-4 ── */}
        {/* justify-between: header at top, images centered, button at bottom */}
        <div className="slide-in-right rounded-2xl p-4 flex flex-col justify-between"
          style={{ ...C.card, gridColumn: "10/13", gridRow: "2/5" }}>

          {/* Top */}
          <div>
            <SectionLabel icon={<PiImagesBold className="text-[#a78bfa]" />} label="Showcase" />
            <h2 className="text-base font-bold text-white mt-1">Works Gallery</h2>
          </div>

          {/* Images — fixed-height marquee, overflow clipped by wrapper */}
          <div className="rounded-xl overflow-hidden" style={C.item}>
            <Marquee speed={22} direction="right">
              {[AC, Aiaura, ReactMini, AC, Aiaura, ReactMini].map((src, i) => (
                <img key={i} src={src} alt={`Project ${i + 1}`}
                  className="h-40 w-44 object-cover mx-1.5 rounded-lg"
                  style={{ border: "1px solid rgba(167,139,250,0.12)", opacity: 0.82 }} />
              ))}
            </Marquee>
          </div>

          {/* Bottom CTA */}
          <Link to="/works"
            className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-[#0d0b14] transition-all hover:scale-105 hover:brightness-110"
            style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 4px 18px rgba(167,139,250,0.28)" }}>
            View My Work <PiArrowRightBold />
          </Link>
        </div>


        {/* ── Services  col 10-12, rows 5-6 ── */}
        <div className="slide-in-right delay-200 rounded-2xl p-4 flex flex-col justify-between"
          style={{ ...C.card, gridColumn: "10/13", gridRow: "5/7" }}>

          {/* Top */}
          <div>
            <SectionLabel icon={<PiBriefcaseBold className="text-[#fbbf24]" />} label="What I Offer" />
            <h2 className="text-base font-bold text-white mt-1">Services</h2>
          </div>

          {/* Middle: marquee chips */}
          <div className="rounded-xl overflow-hidden py-2" style={C.item}>
            <Marquee pauseOnHover gradient={false} speed={30}>
              {[
                { icon: <PiGlobeHemisphereWestFill />, label: "Web Design"   },
                { icon: <PiDevicesBold />,             label: "Mobile"       },
                { icon: <PiCodeBlock />,               label: "Development"  },
                { icon: <PiPenNib />,                  label: "Branding"     },
                { icon: <PiAppWindow />,               label: "UI/UX"        },
              ].map(({ icon, label }) => (
                <span key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl mx-1.5 text-sm font-semibold text-white"
                  style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.14)" }}>
                  <span className="text-[#a78bfa] text-base">{icon}</span> {label}
                </span>
              ))}
            </Marquee>
          </div>

          {/* Bottom CTA */}
          <Link to="/services"
            className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,rgba(167,139,250,0.75),rgba(251,191,36,0.55))", color: "#0d0b14" }}>
            View Services <PiArrowRightBold />
          </Link>
        </div>


        {/* ════════════════ ROW 6 – Footer strip ════════════════ */}

        {/* Tech Arsenal  col 1-6 */}
        <div className="slide-in-bottom rounded-2xl px-5 flex flex-col justify-center gap-2"
          style={{ ...C.card, gridColumn: "1/7", gridRow: "6" }}>
          <SectionLabel icon={<PiWrenchBold className="text-[#a78bfa]" />} label="Tech Arsenal" />
          <Marquee speed={44} direction="right" autoFill gradient={false}>
            {[
              { icon: <FaReact className="text-[#61dafb] text-base" />,  label: "React",  color: "#61dafb" },
              { icon: <SiCplusplus className="text-[#00599C] text-base" />, label: "C++", color: "#00599C" },
              { icon: <FaPython className="text-[#fbe200] text-base" />, label: "Python", color: "#fbe200" },
              { icon: <SiMysql className="text-[#00758F] text-base" />,  label: "MySQL",  color: "#00758F" },
            ].map(({ icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-1.5 mx-2 rounded-xl"
                style={{ background: "rgba(30,26,48,0.7)", border: `1px solid ${color}22` }}>
                {icon}
                <span className="text-[11px] font-semibold text-[#d0d0e8]">{label}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Timeline  col 7-9 */}
        <div className="slide-in-bottom delay-200 rounded-2xl px-5 flex flex-col justify-center gap-3"
          style={{ ...C.card, gridColumn: "7/10", gridRow: "6" }}>
          <SectionLabel icon={<PiCalendarBlankBold className="text-[#a78bfa]" />} label="Timeline" />
          <div className="flex flex-row justify-between items-start relative px-3">
            <div className="absolute left-7 right-7 top-[6px] h-px z-0"
              style={{ background: "linear-gradient(90deg,rgba(167,139,250,0.12),rgba(167,139,250,0.38),rgba(251,191,36,0.12))" }} />
            {[
              { year: "2020", event: "Matriculation"  },
              { year: "2023", event: "Joined Bahria"  },
              { year: "2027", event: "Graduation"     },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10 text-center w-1/3">
                <div className="w-3 h-3 rounded-full mb-1.5"
                  style={{ background: "linear-gradient(135deg,#a78bfa,#fbbf24)", boxShadow: "0 0 10px rgba(167,139,250,0.55)" }} />
                <div className="text-[11px] text-[#a78bfa] font-bold">{item.year}</div>
                <div className="text-[10px] text-[#8b8ba0] font-medium mt-0.5 leading-tight">{item.event}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default BentoGridLg;
