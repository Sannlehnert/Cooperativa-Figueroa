import React from 'react';
import { FaCheck, FaUsers, FaClock, FaShieldAlt, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Proposal = () => {
  const valueProps = [
    {
      icon: FaUsers,
      title: 'Un solo proveedor',
      description: 'Solucionamos todas las necesidades de mantenimiento de tu country con un único equipo responsable.'
    },
    {
      icon: FaCheck,
      title: 'Servicio previsible',
      description: 'Abonos mensuales fijos que facilitan la planificación y el control presupuestario.'
    },
    {
      icon: FaShieldAlt,
      title: 'Personal capacitado',
      description: 'Equipo especializado en mantenimiento de countries con formación constante.'
    },
    {
      icon: FaClock,
      title: 'Respuesta inmediata',
      description: 'Atendemos emergencias en menos de 2 horas para minimizar inconvenientes.'
    },
    {
      icon: FaChartLine,
      title: 'Menos problemas',
      description: 'Reducimos la carga administrativa con reportes claros y comunicación directa.'
    },
    {
      icon: FaHandshake,
      title: 'Contrato flexible',
      description: 'Adaptamos nuestros servicios a las necesidades específicas de cada urbanización.'
    }
  ];

  const targetClients = [
    'Countries y barrios privados',
    'Consorcios cerrados',
    'Administraciones de urbanizaciones',
    'Clubes de campo',
    'Residencias exclusivas'
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Nuestra <span className="text-primary">Propuesta de Valor</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Especializados en el mantenimiento integral de countries y barrios privados, 
            ofrecemos soluciones completas que simplifican la gestión y mejoran la calidad de vida.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary text-2xl mb-6">
                  <prop.icon />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Clients */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Clientes Objetivo</h2>
              <p className="text-white/90 mb-8">
                Nos especializamos en servir a administraciones de urbanizaciones cerradas, 
                donde la excelencia en el mantenimiento es fundamental para la calidad de vida.
              </p>
              <ul className="space-y-4">
                {targetClients.map((client, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-lg">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <p className="mb-6">
                Entendemos las particularidades de los countries: seguridad, estética, 
                funcionalidad y tranquilidad son pilares fundamentales.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Emergencias</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Profesionales</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">¿Administrás un country o barrio privado?</h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Hablemos sobre cómo podemos simplificar el mantenimiento de tu urbanización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solicitar-presupuesto"
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              Solicitar Presupuesto
            </Link>
            <Link
              to="/contacto"
              className="bg-white text-dark border-2 border-gray-300 font-bold py-4 px-8 rounded-xl hover:border-primary hover:bg-gray-50 transition-all duration-300 text-lg"
            >
              Contactar Equipo Comercial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;