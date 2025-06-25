import { Link } from "react-router-dom";

const BentoTile = ({ to = "#", title, children, className = "" }) => (
  <Link
    to={to}
    className={`
      flex items-center justify-center 
      rounded-2xl text-xl font-semibold 
      text-black dark:text-white 
      hover:scale-105 transition-transform duration-300
      ${className}
    `}
  >
    {children || title}
  </Link>
);

export default BentoTile;
