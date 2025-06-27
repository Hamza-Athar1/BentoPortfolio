import {
  PiGithubLogoBold,
  PiFacebookLogoBold,
  PiLinkedinLogoBold,
  PiFlagBannerFoldFill,
  PiCampfire,
  PiCalendarCheckDuotone,
} from "react-icons/pi";

const BentoGridLg = () => {
  return (
    <div className="lg:h-screen lg:w-screen bg-gray-900 p-1">
      <div
        className="
          grid h-full w-full gap-4 
          lg:grid-cols-6 lg:grid-rows-6
          bg-gray-800 text-gray-300
          rounded-xl shadow-2xl
        "
      >
        {/* Socials */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[16px] font-semibold pb-2 text-gray-100">
            Connect with Me
          </h2>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Hamza-Athar1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <PiGithubLogoBold className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/hamza.athar.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <PiFacebookLogoBold className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-athar-ezio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <PiLinkedinLogoBold className="text-2xl" />
            </a>
          </div>
        </div>

        {/* No. of Projects */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[40px] md:text-[32px] sm:text-[28px] font-extrabold text-gray-100">
            56+
          </h2>
          <div className="flex items-center mt-1">
            <PiFlagBannerFoldFill className="text-purple-500 text-xl md:text-lg sm:text-base mr-2" />
            <p className="text-[16px] md:text-[14px] sm:text-[12px] text-gray-300">
              Projects
            </p>
          </div>
        </div>

        {/* Clients */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[40px] md:text-[32px] sm:text-[28px] font-extrabold text-gray-100">
            23+
          </h2>
          <div className="flex items-center mt-1">
            <PiCampfire className="text-purple-500 text-xl md:text-lg sm:text-base mr-2" />
            <p className="text-[16px] md:text-[14px] sm:text-[12px] text-gray-300">
              Happy Clients
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="col-span-1 row-span-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[40px] md:text-[32px] sm:text-[28px] font-extrabold text-gray-100">
            06+
          </h2>
          <div className="flex items-center mt-1">
            <PiCalendarCheckDuotone className="text-purple-500 text-xl md:text-lg sm:text-base mr-2" />
            <p className="text-[16px] md:text-[14px] sm:text-[12px] text-gray-300">
              Year Expertise
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="col-span-1 row-span-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">Reviews</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Consistently rated highly by clients and peers.
          </p>
        </div>

        {/* Achievements */}
        <div className="col-span-1 row-span-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">Achievements</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Recognized as Top Developer in 2024.
          </p>
        </div>

        {/* Gallery */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">Gallery</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Explore screenshots of my work and projects.
          </p>
        </div>

        {/* Self details */}
        <div className="col-span-3 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[22px] font-bold text-gray-100">About Me</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            A brief overview of my skills, journey, and aspirations.
          </p>
        </div>

        {/* Services */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">Services</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Offering Design, Development, and Automation solutions.
          </p>
        </div>

        {/* TBD */}
        <div className="col-span-3 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[22px] font-bold text-gray-100">Coming Soon</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Dynamic module under development.
          </p>
        </div>

        {/* TechStack */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">TechStack</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Proficient in React, Tailwind CSS, and Firebase.
          </p>
        </div>

        {/* Contact me */}
        <div className="col-span-1 row-span-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center px-3 py-5 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <h2 className="text-[20px] font-bold text-gray-100">Contact</h2>
          <p className="text-[14px] mt-2 text-gray-300">
            Reach out via Email or WhatsApp for inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BentoGridLg;
