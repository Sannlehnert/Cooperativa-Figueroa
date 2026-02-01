import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { 
  FaTools, 
  FaLeaf, 
  FaBroom, 
  FaClipboardCheck,
  FaBolt,
  FaWater,
  FaPaintRoller,
  FaTree,
  FaTint,
  FaRoad,
  FaRecycle,
  FaEye
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: FaTools,
      title: 'Mantenimiento General',
      description: 'Soluciones integrales para el cuidado estructural y funcional de espacios comunes.',
      services: [
        { icon: FaBolt, name: 'Electricidad básica', desc: 'Luces comunes, tableros, farolas' },
        { icon: FaWater, name: 'Plomería', desc: 'Pérdidas, bombas, sistemas de riego' },
        { icon: FaPaintRoller, name: 'Albañilería menor', desc: 'Reparaciones, veredas, paredes comunes' },
        { icon: FaTint, name: 'Pintura', desc: 'Espacios comunes y áreas compartidas' }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaLeaf,
      title: 'Espacios Verdes',
      description: 'Cuidado profesional de jardines, parques y áreas naturales dentro del country.',
      services: [
        { icon: FaTree, name: 'Corte de césped', desc: 'Mantenimiento regular de superficies verdes' },
        { icon: FaTree, name: 'Poda de árboles', desc: 'Mantenimiento y cuidado arbóreo' },
        { icon: FaLeaf, name: 'Limpieza verde', desc: 'Recolección de hojas y residuos vegetales' },
        { icon: FaTint, name: 'Sistemas de riego', desc: 'Control, reparación y mantenimiento' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FaBroom,
      title: 'Limpieza y Orden',
      description: 'Mantenimiento de la higiene y presentación de todas las áreas comunes.',
      services: [
        { icon: FaRoad, name: 'Limpieza de calles', desc: 'Calles internas y veredas' },
        { icon: FaRecycle, name: 'Recolección', desc: 'Gestión de residuos en áreas comunes' },
        { icon: FaBroom, name: 'Áreas comunes', desc: 'Limpieza profunda de espacios compartidos' },
        { icon: FaWater, name: 'Limpieza especial', desc: 'Eventos y situaciones específicas' }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaClipboardCheck,
      title: 'Mantenimiento Preventivo',
      description: 'Control proactivo para anticipar y prevenir problemas futuros.',
      services: [
        { icon: FaEye, name: 'Inspecciones periódicas', desc: 'Revisiones programadas de instalaciones' },
        { icon: FaClipboardCheck, name: 'Reportes de estado', desc: 'Informes detallados del barrio' },
        { icon: FaEye, name: 'Detección temprana', desc: 'Identificación de problemas potenciales' },
        { icon: FaClipboardCheck, name: 'Planificación', desc: 'Calendario de mantenimiento anual' }
      ],
      color: 'from-orange-500 to-amber-600'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Servicios para <span className="text-primary">Countries y Barrios Privados</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Ofrecemos un paquete integral de mantenimiento diseñado específicamente 
            para las necesidades de urbanizaciones cerradas y espacios comunes.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16 mb-20">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white p-8`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <category.icon className="text-3xl" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                      <p className="text-white/90 mt-2">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">Incluido</div>
                    <div className="text-white/80">en abono mensual</div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`bg-gradient-to-r ${category.color} text-white p-3 rounded-xl`}>
                          <service.icon />
                        </div>
                        <h3 className="font-bold text-lg">{service.name}</h3>
                      </div>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Cómo Trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Abono Mensual</h3>
              <p className="text-gray-600">
                Servicio fijo que incluye visitas semanales, mano de obra básica y reporte mensual.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Servicios Extra</h3>
              <p className="text-gray-600">
                Trabajos especiales o materiales adicionales se presupuestan aparte con aprobación previa.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Comunicación Clara</h3>
              <p className="text-gray-600">
                Reportes detallados, contacto directo con el responsable y respuesta inmediata a emergencias.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para simplificar el mantenimiento de tu country?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contactanos para una evaluación sin cargo y un presupuesto personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solicitar-presupuesto"
              className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              Solicitar Presupuesto
            </Link>
            <Link
              to="/contacto"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Hablar con Comercial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;