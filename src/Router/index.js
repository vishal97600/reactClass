import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Contact from "./../Pages/Contact";
import Service from "./../Pages/Services";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
};

export default Router;
