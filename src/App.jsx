import { Routes, Route } from 'react-router-dom';

import About from './component/About';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Hero from './component/Hero';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar stays outside Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
