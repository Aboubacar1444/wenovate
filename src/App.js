import React from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/Pages/NotFound';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import Contact from './components/Pages/Contact';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:serviceId" element={<Service />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
