import { PiBooksBold, PiSquaresFourBold, PiHouseSimpleBold } from "react-icons/pi";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  {
    name: "Home",
    path: "/",
    icon: <PiHouseSimpleBold className="text-base mr-1.5" />,
  },

  {
    name: "Works",
    path: "/works",
    icon: <PiBooksBold className="text-base mr-1.5" />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <PiSquaresFourBold className="text-base mr-1.5" />,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center items-center pt-6 pb-4 select-none z-50">
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-2xl border"
        style={{
          background: "rgba(20, 20, 30, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(167,139,250,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(167,139,250,0.05)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex items-center px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isActive
                  ? "text-[#1a1a24] shadow-lg"
                  : "text-[#8b8ba0] hover:text-white hover:bg-white/5"
              }`}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #fbbf24 100%)",
                      boxShadow:
                        "0 4px 16px rgba(167,139,250,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }
                  : {}
              }
            >
              {tab.icon}
              {tab.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
