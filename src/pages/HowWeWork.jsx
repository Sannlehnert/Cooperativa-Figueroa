import React from 'react';
/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // unused, pero motion.div usado abajo - error falso?
import { 
  FaPhone, 
  FaFileInvoiceDollar, 
  FaCalendarAlt, 
  FaWrench, 
  FaClipboardList, 
  FaChartBar,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const HowWeWork = () => {
  const processSteps = [
    'Diseñamos planes a medida de cada consorcio, buscando relaciones estables que beneficien a ambas partes.',
    'No incluye materiales ni obras de gran escala.'
  ];

  const pricingOptions = [
    {
      title: 'Abono Mensual (Recomendado)',
      description: 'Incluye visitas semanales, mano de obra básica y un reporte mensual de estado. Ideal para mantener el barrio en perfectas condiciones todo el año.',
      features: [
        'Visitas semanales garantizadas',
        'Mano de obra incluida',
        'Reporte mensual detallado',
        'Respuesta prioritaria urgencias',
        'Personal asignado fijo'
      ],
      recommended: true
    },
    {
      title: 'Trabajos por Presupuesto',
      description: 'Para servicios extraordinarios, reparaciones puntuales o mejoras de infraestructura.',
      features: [
        'Servicios no recurrentes',
        'Obras especiales',
        'Materiales presupuestados',
        'Flexibilidad total'
      ],
      recommended: false
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
            <span>¿Cómo</span> <span className="text-gradient-main">trabajamos?</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            Metodología transparente para administradores.
          </p>
          {processSteps.map((step, index) => (
            <p key={index} className="text-lg text-gray-700 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-primary mb-4">
              {step}
            </p>
          ))}
        </motion.div>

        {/* Pricing Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-10 shadow-xl transition-all ${
                option.recommended 
                  ? 'bg-gradient-to-br from-primary to-accent text-white border-2 border-white/20' 
                  : 'bg-white border-2 border-gray-200 hover:shadow-2xl'
              }`}
            >
              {option.recommended && (
                <div className="inline-block bg-white/20 text-white font-bold py-2 px-6 rounded-full mb-6 backdrop-blur-sm">
                  RECOMENDADO
                </div>
              )}
              
              <h3 className="text-3xl font-bold mb-6">{option.title}</h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">{option.description}</p>
              
              <ul className="space-y-4 mb-10">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center ${
                    option.recommended ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    <FaCheck className={`mr-3 ${option.recommended ? 'text-white' : 'text-primary'} flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/solicitar-presupuesto"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                  option.recommended 
                    ? 'bg-white text-primary hover:bg-gray-100 hover:shadow-inner' 
                    : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl'
                }`}
              >
                Solicitar {option.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-3xl p-12 lg:p-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para cotizar tu plan?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Completá el formulario y recibí propuesta personalizada en 24hs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/solicitar-presupuesto" className="btn-main flex items-center gap-3 justify-center">
              Cotizar Abono Mensual
              <FaArrowRight />
            </Link>
            <Link to="/contacto" className="btn-secondary px-8">
              Contacto Directo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;

