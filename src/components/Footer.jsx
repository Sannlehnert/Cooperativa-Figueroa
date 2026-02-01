import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaMountain } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 p-3 rounded-lg flex items-center justify-center">
                    <FaMountain className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold tracking-tight">FIGUEROA</div>
                  <div className="text-sm text-neutral-400 -mt-1">Mantenimiento Integral</div>
                </div>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Especialistas en mantenimiento integral para countries y barrios privados 
              con raíces patagónicas. Profesionalismo, confianza y resultados.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-white/90">Contacto</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">Teléfono</div>
                  <a href="tel:+541112345678" className="font-medium hover:text-primary-400 transition-colors">
                    (011) 1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaWhatsapp className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">WhatsApp</div>
                  <a 
                    href="https://wa.me/5491123456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-green-400 transition-colors"
                  >
                    +54 9 11 2345-6789
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-neutral-400 text-sm">Email</div>
                  <a 
                    href="mailto:info@figueroamantenimiento.com" 
                    className="font-medium hover:text-accent-400 transition-colors"
                  >
                    info@figueroamantenimiento.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-8 text-white/90">Enlaces</h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li>
                  <Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/propuesta" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Propuesta
                  </Link>
                </li>
                <li>
                  <Link to="/como-trabajamos" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Cómo Trabajamos
                  </Link>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <Link to="/solicitar-presupuesto" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Presupuesto
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Contacto
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-neutral-500 text-sm">
            &copy; {currentYear} Figueroa Mantenimiento Integral. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-neutral-500 text-sm">
              <Link to="/privacidad" className="hover:text-neutral-300 transition-colors">Política de Privacidad</Link>
              <span className="mx-2">•</span>
              <Link to="/terminos" className="hover:text-neutral-300 transition-colors">Términos</Link>
            </div>
            <div className="text-xs text-neutral-600 tracking-widest">
              NEUQUÉN · PATAGONIA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;