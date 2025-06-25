import BentoTile from "./BentoTile";
import { Link } from "react-router-dom";

const BentoGrid = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="grid h-full w-full gap-4 p-2 grid-cols-6 grid-rows-6 rounded-lg shadow-md bg-gray-200 dark:bg-gray-900">
        <div className="col-span-1 row-span-1 bg-pink-200 rounded-lg shadow-md flex items-center justify-center">
          <p>TechStack</p>
        </div>

        <div className="col-span-1 row-span-1 bg-lime-200 rounded-lg shadow-md flex items-center justify-center">
          <p>No. of Projects</p>
        </div>

        <div className="col-span-1 row-span-1 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center">
          <p>No. of Clients</p>
        </div>

        <div className="col-span-1 row-span-1 bg-amber-200 rounded-lg shadow-md flex items-center justify-center">
          <p>YOE</p>
        </div>

        <div className="col-span-1 row-span-4 bg-green-200 rounded-lg shadow-md flex items-center justify-center">
          <p>Reviews</p>
        </div>

        <div className="col-span-1 row-span-4 bg-orange-200 rounded-lg shadow-md flex items-center justify-center">
          <p>Achievements</p>
        </div>

        <div className="col-span-1 row-span-3 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
          <p>Projects Gallery</p>
        </div>

        <div className="col-span-3 row-span-3 bg-yellow-50 rounded-lg shadow-md flex items-center justify-center">
          <p>Self Details</p>
        </div>

        <div className="col-span-1 row-span-3 bg-yellow-300 rounded-lg shadow-md flex items-center justify-center">
          <p>Services</p>
        </div>

        <div className="col-span-3 row-span-3 bg-green-50 rounded-lg shadow-md flex items-center justify-center">
          <p>TBD</p>
        </div>

        <div className="col-span-1 row-span-3 bg-orange-100 rounded-lg shadow-md flex items-center justify-center">
          <p>Socials</p>
        </div>

        <div className="col-span-1 row-span-3 bg-white rounded-lg shadow-md flex items-center justify-center">
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
