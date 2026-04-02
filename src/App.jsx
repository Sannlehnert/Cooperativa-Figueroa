import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Proposal from './pages/Proposal';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/propuesta" element={<Proposal />} />
            <Route path="/como-trabajamos" element={<HowWeWork />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/solicitar-presupuesto" element={<RequestQuote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;