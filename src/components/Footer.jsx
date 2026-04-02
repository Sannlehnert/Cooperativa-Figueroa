import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="Cooperativa" className="h-10 w-auto drop-shadow-lg" />
          </div>

          <div className="flex items-center gap-6">
            <a href="https://wa.me/5411123456789" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors font-medium group">
              <FaWhatsapp className="text-xl" />
            </a>
            <a href="mailto:info@cooperativa.com.ar" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors font-medium group">
              <FaEnvelope className="text-xl" />
            </a>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-accent p-2 transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Cooperativa Figueroa. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

