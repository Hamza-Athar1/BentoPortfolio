import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiEnvelopeSimpleFill, PiWhatsappLogoLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer
      className="w-full py-8 mt-4"
      style={{
        background: "rgba(10,10,16,0.95)",
        borderTop: "1px solid rgba(167,139,250,0.1)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-black gradient-text tracking-tight">
              Ameer Hamza
            </div>
            <div className="text-[11px] text-[#8b8ba0] mt-0.5">
              Software Engineer · Pakistan
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/works", label: "Works" },
              { href: "/services", label: "Services" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-[13px] text-[#8b8ba0] font-medium hover:text-white transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg,#a78bfa,#fbbf24)" }} />
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://github.com/Hamza-Athar1", icon: <FaGithub />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/hamza-athar-ezio", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://www.instagram.com/_hamza_nvm/", icon: <FaInstagram />, label: "Instagram" },
              { href: "mailto:atharhamza559@gmail.com", icon: <PiEnvelopeSimpleFill />, label: "Email" },
              { href: "https://wa.me/+923180535566", icon: <PiWhatsappLogoLight />, label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8b8ba0] hover:text-white transition-all hover:scale-110"
                style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.12)" }}
              >
                <span className="text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(167,139,250,0.08)" }}>
          <p className="text-[11px] text-[#6b6b80]">
            © {new Date().getFullYear()} Ameer Hamza Athar. All rights reserved.
          </p>
          <p className="text-[11px] text-[#6b6b80]">
            Built with{" "}
            <span className="text-[#a78bfa]">React</span> &{" "}
            <span className="text-[#fbbf24]">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
