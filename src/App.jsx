import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


import About from "./pages/About";
import People from "./pages/People";
import Offices from "./pages/Offices";

import "./styles/global.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Sponsors />
      <Testimonials />
      {/* istəyirsənsə Contact burada olmasın, /contact route ilə açılsın */}
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
