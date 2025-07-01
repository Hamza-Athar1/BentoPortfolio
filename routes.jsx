import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from "./src/pages/Works";
import Services from "./src/pages/Services";
import Navbar from "./components/Navbar";
import App from "./src/App";
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<App />} />
    <Route path="/works" element={<Works />} />
    <Route path="/services" element={<Services />} />
  </Routes>
  <Footer />
</BrowserRouter>;
