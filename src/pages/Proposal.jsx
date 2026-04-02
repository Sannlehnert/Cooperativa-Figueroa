import React from 'react';
/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // unused lint

const Proposal = () => {
  const valueProps = [

    {
      image: '/img/Centralizacion.png',
      title: 'Centralización',
      description: 'Un solo proveedor para todas las necesidades del barrio. Menos problemas para la administración.',
      color: 'primary'
    },
    {

      image: '/img/Previsibilidad.png',
      title: 'Previsibilidad',
      description: 'Abonos mensuales fijos con visitas semanales garantizadas.',
      color: 'accent'
    },


    {
      image: '/img/RespuestaRapida.png',
      title: 'Respuesta Rápida',
      description: 'Atención prioritaria ante urgencias.',
      color: 'primary'
    },
    {
      image: '/img/Profesionalismo.png',
      title: 'Profesionalismo',
      description: 'Personal capacitado, responsable y equipado.',
      color: 'accent'
    }

  ];

  return (
    <div className="section-padding py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span>Por qué</span> <span className="text-gradient-main">elegirnos</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Nuestra propuesta está diseñada específicamente para administradores de countries y barrios privados.
          </p>
        </motion.div>

        {/* 4 Cards Propuesta de Valor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card h-full p-8 hover-lift border-2 border-transparent hover:border-primary/50 group"
            >
              <div className="mb-6 mx-auto">
                <img src={prop.image} alt={prop.title} className="h-16 w-auto max-h-16 drop-shadow-lg transition-all group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{prop.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center mb-8 flex-grow">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simplificá la gestión de tu country
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Un solo contacto, servicios garantizados, tranquilidad para la administración.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/solicitar-presupuesto" className="btn-main inline-flex items-center gap-3 mx-auto sm:mx-0">
              Solicitar Presupuesto
              <FaArrowRight />
            </Link>
            <Link to="/servicios" className="btn-accent inline-flex items-center gap-3">
              Ver Servicios
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Proposal;

