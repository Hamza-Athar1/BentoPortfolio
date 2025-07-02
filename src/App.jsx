import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BentoGridLg from "./components/BentoGridLg";
import BentoGridMd from "./components/BentoGridMd";
import BentogridXs from "./components/BentogridXs";
import Navbar from "./components/Navbar";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function Home() {
  const [screen, setScreen] = useState(getScreen());

  function getScreen() {
    const width = window.innerWidth;
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    return "xs";
  }

  useEffect(() => {
    function handleResize() {
      setScreen(getScreen());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screen === "lg" && <BentoGridLg />}
      {screen !== "lg" && (
        <>
          {screen === "md" && <BentoGridMd />}
          {screen === "xs" && <BentogridXs />}
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}
