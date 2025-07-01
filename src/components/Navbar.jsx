import { PiUserBold, PiBooksBold, PiSquaresFourBold } from "react-icons/pi";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  {
    name: "About",
    path: "/about",
    icon: <PiUserBold className="text-lg mr-2" />,
  },
  {
    name: "Works",
    path: "/works",
    icon: <PiBooksBold className="text-lg mr-2" />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <PiSquaresFourBold className="text-lg mr-2" />,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center items-center pt-8 pb-4 select-none">
      <div className="flex bg-[#18181b] border border-[#23232a]/60 rounded-2xl shadow-lg px-2 py-2 gap-2 backdrop-blur-md">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition
                ${
                  isActive
                    ? "bg-[#a78bfa] text-black shadow-md"
                    : "bg-[#23232a] text-[#a1a1aa] hover:bg-[#23232a]/80 hover:text-white"
                }
                border border-[#23232a]/40`}
              style={{
                boxShadow: isActive
                  ? "0 2px 8px 0 rgba(167,139,250,0.10)"
                  : undefined,
              }}
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
