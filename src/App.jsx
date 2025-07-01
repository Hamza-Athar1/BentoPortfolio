import { useState, useEffect } from "react";
import "./App.css";
import BentoGridLg from "./components/BentoGridLg";
import BentoGridMd from "./components/BentoGridMd";
import BentogridXs from "./components/BentogridXs";

function App() {
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
      {screen === "md" && <BentoGridMd />}
      {screen === "xs" && <BentogridXs />}
    </>
  );
}

export default App;
