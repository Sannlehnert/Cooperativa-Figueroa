import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBolt,
  FaTint,
  FaPaintRoller,
  FaTree,
  FaRoad,
  FaRecycle,
  FaSearch,
  FaFileAlt
} from 'react-icons/fa';

const Services = () => {
  const serviceCategories = [
    {
      image: '/img/MantenimentoGeneral.png',
      title: 'Mantenimiento General',
      description: 'Electricidad básica (tableros, farolas), plomería (riego, pérdidas), albañilería menor y pintura de espacios comunes.',
      services: [
        { icon: FaBolt, name: 'Electricidad básica', desc: 'Luces comunes, tableros, farolas' },
        { icon: FaTint, name: 'Plomería', desc: 'Pérdidas, bombas, sistemas de riego' },
        { icon: FaPaintRoller, name: 'Albañilería menor', desc: 'Reparaciones, veredas, paredes' },
        { icon: FaTint, name: 'Pintura', desc: 'Espacios comunes y áreas compartidas' }
      ],
      color: 'from-primary to-accent'
    },
    {
      image: '/img/EspaciosVerdes.png',
      title: 'Espacios Verdes',
      description: 'Corte de césped, poda de árboles, recolección de hojas y mantenimiento del sistema de riego.',
      services: [
        { icon: FaTree, name: 'Corte de césped', desc: 'Mantenimiento regular superficies verdes' },
        { icon: FaTree, name: 'Poda de árboles', desc: 'Cuidado y mantenimiento arbóreo' },
        { icon: FaTree, name: 'Recolección', desc: 'Hojas y residuos vegetales' },
        { icon: FaTint, name: 'Sistema de riego', desc: 'Control y reparaciones' }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      image: '/img/LimpiezaOrden.png',
      title: 'Limpieza y Orden',
      description: 'Mantenimiento impecable de áreas comunes, recolección de residuos y limpieza de calles internas y veredas.',
      services: [
        { icon: FaRoad, name: 'Calles internas', desc: 'Limpieza de calles y veredas' },
        { icon: FaRecycle, name: 'Recolección residuos', desc: 'Gestión en áreas comunes' },
        { icon: FaRecycle, name: 'Áreas comunes', desc: 'Limpieza profunda espacios compartidos' },
        { icon: FaTint, name: 'Limpieza especial', desc: 'Eventos y situaciones específicas' }
      ],
      color: 'from-gray-500 to-gray-600'
    },
    {
      image: '/img/MantenimientoPreventivo.png',
      title: 'Mantenimiento Preventivo',
      description: 'Inspecciones periódicas, reportes de estado para la administración y detección temprana de problemas para ahorrar costos.',
      services: [
        { icon: FaSearch, name: 'Inspecciones periódicas', desc: 'Revisiones programadas de instalaciones' },
        { icon: FaFileAlt, name: 'Reportes de estado', desc: 'Informes detallados para administración' },
        { icon: FaSearch, name: 'Detección temprana', desc: 'Identificación de problemas potenciales' },
        { icon: FaSearch, name: 'Planificación', desc: 'Calendario anual mantenimiento' }
      ],
      color: 'from-primary to-accent'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-gradient-main">Servicios</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Cuatro áreas clave del mantenimiento para countries y urbanizaciones cerradas.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16 mb-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Header */}
              <div id={category.title.toLowerCase().replace(/ /g, '-').replace(/ñ/g, 'n')} className={`bg-gradient-to-r ${category.color} text-white p-8 lg:p-12 scroll-mt-20`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
                      <div className="flex items-center justify-center min-w-[120px]">
                        <img src={category.image} alt={category.title} className="h-16 w-[120px] lg:h-20 lg:w-[140px] object-contain drop-shadow-xl" />
                      </div>
                    <div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                      <p className="opacity-90 mt-2">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">Incluido</div>
                    <div className="opacity-80 text-sm">abono mensual</div>
                  </div>
                </div>
              </div>

              {/* Subservices */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className={`bg-gradient-to-r ${category.color} text-white p-3 rounded-xl flex-shrink-0`}>
                          <service.icon />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{service.name}</h4>
                          <p className="text-gray-600">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Administrás un country?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Solicitá presupuesto sin compromiso para tu abono mensual.
          </p>
          <Link to="/solicitar-presupuesto" className="btn-main inline-flex items-center gap-3 mx-auto">
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;