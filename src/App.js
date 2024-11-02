import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Banner from './components/Banner';
import Reviews from './components/Reviews';
import CursoLashistas from './components/CursoLashistas';
import ContactCard from './components/ContactCard';
import SobreMi from './components/SobreMi';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ'; 

const App = () => {
  const sobreMiRef = useRef(null);
  const carruselRef = useRef(null);
  const cursoRef = useRef(null);
  const resenasRef = useRef(null);
  const FAQRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Router>
      <Navbar 
        onSobreMiClick={() => scrollToSection(sobreMiRef)}
        onCarruselClick={() => scrollToSection(carruselRef)}
        onCursoClick={() => scrollToSection(cursoRef)}
        onResenasClick={() => scrollToSection(resenasRef)}
        onFAQClick={() => scrollToSection(FAQRef)}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <SobreMi ref={sobreMiRef} />
              <Carrusel ref={carruselRef} />
              <CursoLashistas ref={cursoRef} />
              <FAQ ref={FAQRef} />
              <Reviews ref={resenasRef} />
              <ContactCard />
            </>
          } 
        />
        <Route path="/formulario" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
