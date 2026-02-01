import React from 'react';
import { FaCalendarAlt, FaFileInvoiceDollar, FaTools, FaClipboardList, FaPhoneAlt, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  const processSteps = [
    {
      step: '01',
      icon: FaPhoneAlt,
      title: 'Contacto Inicial',
      description: 'Evaluamos las necesidades específicas de tu country o barrio privado.',
      details: ['Reunión con administración', 'Reconocimiento del espacio', 'Análisis de requerimientos']
    },
    {
      step: '02',
      icon: FaFileInvoiceDollar,
      title: 'Presupuesto Personalizado',
      description: 'Elaboramos una propuesta detallada según tamaño y servicios requeridos.',
      details: ['Abono mensual claro', 'Servicios incluidos', 'Politica de extras']
    },
    {
      step: '03',
      icon: FaCalendarAlt,
      title: 'Planificación',
      description: 'Establecemos un calendario de mantenimiento y puntos de contacto.',
      details: ['Calendario anual', 'Responsables asignados', 'Protocolo de emergencias']
    },
    {
      step: '04',
      icon: FaTools,
      title: 'Implementación',
      description: 'Nuestro equipo comienza con el servicio según lo acordado.',
      details: ['Visitas programadas', 'Reportes iniciales', 'Ajustes necesarios']
    },
    {
      step: '05',
      icon: FaClipboardList,
      title: 'Seguimiento',
      description: 'Monitoreo constante y comunicación fluida con la administración.',
      details: ['Reportes mensuales', 'Reuniones de seguimiento', 'Feedback constante']
    },
    {
      step: '06',
      icon: FaChartBar,
      title: 'Mejora Continua',
      description: 'Evaluamos resultados y optimizamos procesos para mayor eficiencia.',
      details: ['Indicadores de desempeño', 'Sugerencias de mejora', 'Planificación futura']
    }
  ];

  const pricingModels = [
    {
      title: 'Abono Mensual',
      price: 'Desde $XXX/mes',
      features: [
        'Visitas semanales programadas',
        'Mano de obra básica incluida',
        'Reporte mensual detallado',
        'Respuesta a emergencias',
        'Personal asignado fijo'
      ],
      recommended: true
    },
    {
      title: 'Servicios Extra',
      price: 'Presupuesto aparte',
      features: [
        'Materiales específicos',
        'Obras mayores',
        'Equipamiento especial',
        'Servicios no recurrentes',
        'Ampliaciones del contrato'
      ],
      recommended: false
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Cómo <span className="text-primary">Trabajamos</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Nuestra metodología está diseñada para ofrecer tranquilidad, transparencia y 
            resultados consistentes en el mantenimiento de tu urbanización.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Step Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-3">
                          <step.icon className="text-2xl" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary">PASO {step.step}</div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Empty div for alignment */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Models */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Modelos de Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingModels.map((model, index) => (
              <div key={index} className={`rounded-3xl p-8 ${model.recommended ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-white border-2 border-gray-200'}`}>
                {model.recommended && (
                  <div className="inline-block bg-white text-primary font-bold py-1 px-4 rounded-full mb-6">
                    RECOMENDADO
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <div className="text-3xl font-bold mb-8">{model.price}</div>
                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <div className={`mr-3 ${model.recommended ? 'text-white' : 'text-primary'}`}>
                        ✓
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/solicitar-presupuesto"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    model.recommended 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                  }`}
                >
                  Solicitar Información
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-dark mb-6">¿Tenés dudas sobre nuestro proceso?</h2>
            <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
              Nuestro equipo está disponible para explicarte cada detalle y adaptarnos a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-10 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                Contactar Ahora
              </Link>
              <a
                href="tel:+541112345678"
                className="bg-white text-dark border-2 border-gray-300 font-bold py-4 px-10 rounded-xl hover:border-primary transition-all duration-300 text-lg"
              >
                Llamar por Teléfono
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;