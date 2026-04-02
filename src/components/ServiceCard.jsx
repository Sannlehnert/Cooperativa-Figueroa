import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="card hover:border-primary border-2 border-transparent transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary text-2xl mb-4">
            
          </div>

          <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
        <Link
          to="/solicitar-servicio"
          className="inline-flex items-center text-primary font-semibold mt-4 hover:text-blue-800 transition-colors"
        >
          Solicitar este servicio
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;