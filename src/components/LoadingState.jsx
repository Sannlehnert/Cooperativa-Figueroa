import React from 'react';
import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-dark to-neutral z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-secondary/30 border-t-secondary rounded-full mx-auto mb-8"
        />
        <div className="text-white font-display text-2xl tracking-widest">FIGUEROA</div>
        <div className="text-white/60 text-sm mt-2 tracking-widest">MANTENIMIENTO INTEGRAL</div>
      </div>
    </div>
  );
};

export default LoadingState;