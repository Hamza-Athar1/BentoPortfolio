import { Link } from "react-router-dom";

export default function BentoTile({ to = "#", className = "", children }) {
  return (
    <Link
      to={to}
      className={`
        flex items-center justify-center
        rounded-lg p-2
        text-gray-900 dark:text-gray-100
        hover:scale-105 transition-transform duration-300
        ${className}
      `}
      style={{ fontFamily: "'M PLUS 2 Variable', sans-serif" }}
    >
      {children}
    </Link>
  );
}
