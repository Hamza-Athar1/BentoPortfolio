import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BentoGridLg from "./components/BentoGridLg";
import BentoGridMd from "./components/BentoGridMd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hidden lg:block">
        <BentoGridLg />
      </div>
      <div className="hidden md:block lg:hidden">
        <BentoGridMd />
      </div>
    </>
  );
}

export default App;
