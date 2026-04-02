import React, { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
<div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button

          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
          aria-label="Volver arriba"
        >
          <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
        </button>
      )}
    </div>
  );

};


export default BackToTop;