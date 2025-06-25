import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BentoGrid />
    </>
  );
}

export default App;
