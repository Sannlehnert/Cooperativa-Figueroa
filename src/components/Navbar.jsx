import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaToolbox, FaMountain } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Propuesta', path: '/propuesta' },
    { name: 'Cómo Trabajamos', path: '/como-trabajamos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 p-3 rounded-xl">
                <FaToolbox className="text-white text-xl" />
              </div>
            </motion.div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">FIGUEROA</span>
                <FaMountain className="text-accent-600 text-sm" />
              </div>
              <div className="text-xs text-neutral-500 -mt-1">Mantenimiento Integral</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-600 font-semibold'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600"
                  />
                )}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/solicitar-presupuesto"
                className="ml-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              >
                Solicitar Presupuesto
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-neutral-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="bg-white border-t border-neutral-200 py-4 rounded-b-2xl shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 rounded-lg mx-2 transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600 font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                to="/solicitar-presupuesto"
                className="block w-full text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;