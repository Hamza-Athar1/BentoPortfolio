import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./src/App";
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/project/:id" element={<ProjectDetail />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>;
