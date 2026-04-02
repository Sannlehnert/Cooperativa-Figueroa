import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaChartLine
} from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      image: '/img/MantenimentoGeneral.png',
      title: 'Mantenimiento General',
      description: 'Electricidad básica (tableros, farolas), plomería (riego, pérdidas), albañilería menor y pintura de espacios comunes.',
      delay: 0.1
    },
    {
      image: '/img/EspaciosVerdes.png',
      title: 'Espacios Verdes',
      description: 'Corte de césped, poda de árboles, recolección de hojas y mantenimiento del sistema de riego.',
      delay: 0.2
    },
    {
      image: '/img/LimpiezaOrden.png',
      title: 'Limpieza y Orden',
      description: 'Mantenimiento impecable de áreas comunes, recolección de residuos y limpieza de calles internas y veredas.',
      delay: 0.3
    },
    {
      image: '/img/MantenimientoPreventivo.png',
      title: 'Mantenimiento Preventivo',
      description: 'Inspecciones periódicas, reportes de estado para la administración y detección temprana de problemas.',
      delay: 0.4
    }
  ];

  const stats = [
    { number: 'Semanal', label: 'Visitas', icon: FaClock },
    { number: '1', label: 'Proveedor', icon: FaUsers },
    { number: '<2h', label: 'Urgencias', icon: FaCheckCircle },
    { number: 'Mensual', label: 'Reportes', icon: FaChartLine }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:40px_40px]"></div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-6">Soluciones Integrales</span>
            <span className="text-gradient-main block">
              Para Tu Barrio Privado
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Mantenimiento preventivo y correctivo confiable para countries y urbanizaciones cerradas. Un solo proveedor, múltiples soluciones para tu administración.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/solicitar-presupuesto" className="btn-main flex items-center gap-3">
              Solicitar Presupuesto
              <FaArrowRight />
            </Link>
            <Link to="/servicios" className="btn-secondary flex items-center gap-3">
              Ver Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg mb-6 group-hover:shadow-xl transition-all mx-auto">
                  <stat.icon className="text-2xl text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-gradient-main">Servicios</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Cuatro áreas clave para el mantenimiento integral de tu urbanización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group card h-full border-gradient-main hover:border-primary/50 hover:-translate-y-2 transition-all">
                <div className="mb-6 mx-auto">
                  <img src={service.image} alt={service.title} className="h-16 w-auto max-h-16 drop-shadow-lg transition-all group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed">{service.description}</p>
                <Link to={`/servicios#${service.title.toLowerCase().replace(/ /g, '-').replace(/ñ/g, 'n')}`} className="inline-flex items-center text-primary font-semibold mx-auto group/link">
                  Ver detalles
                  <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

