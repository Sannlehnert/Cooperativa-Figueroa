import React from 'react';
import { Link } from 'react-router-dom';


const PatagoniaButton = ({ 
  to, 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = "font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2";
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg'
  };
  
  const variantClasses = {
primary: 'btn-primary',


    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-800 text-white hover:shadow-xl hover:shadow-secondary/25',
    accent: 'bg-gradient-to-r from-accent-600 to-accent-800 text-white hover:shadow-xl hover:shadow-accent/25',
    aurora: 'btn-aurora',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    'outline-secondary': 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white'
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
<div className="group hover:scale-105 transition-transform active:scale-95">
      {to ? (
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      ) : (
        <button className={classes} {...props}>
          {children}
        </button>
      )}
    </div>
  );
};


export default PatagoniaButton;