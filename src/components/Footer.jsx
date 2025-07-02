import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#23232a]/80 to-[#18181e]/90 border-t border-[#a78bfa]/10 py-6 shadow-inner">
      <nav className="flex justify-center gap-12">
        <a
          href="/"
          className="text-[#a1a1aa] text-base font-normal hover:text-violet-300 transition underline-offset-2 hover:underline"
        >
          Home
        </a>
        <a
          href="/works"
          className="text-[#a1a1aa] text-base font-normal hover:text-violet-300 transition underline-offset-2 hover:underline"
        >
          Works
        </a>
        <a
          href="/services"
          className="text-[#a1a1aa] text-base font-normal hover:text-violet-300 transition underline-offset-2 hover:underline"
        >
          Services
        </a>
      </nav>
    </footer>
  );
}
