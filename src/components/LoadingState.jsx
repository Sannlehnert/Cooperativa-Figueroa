import React from 'react';


const LoadingState = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-dark to-neutral z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full mx-auto mb-8" />

<div className="text-white font-display text-2xl tracking-widest">COOPERATIVA</div>
        <div className="text-white/60 text-sm mt-2 tracking-widest">MANTENIMIENTO COUNTRIES</div>

      </div>
    </div>
  );
};

export default LoadingState;