import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBolt, 
  FaWater, 
  FaTree, 
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaQuoteRight,
  FaMountain
} from 'react-icons/fa';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    setIsLoaded(true);
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      icon: FaBolt,
      title: 'Electricidad',
      description: 'Instalaciones y mantenimiento eléctrico profesional para espacios comunes.',
      color: 'blue',
      delay: 0.1
    },
    {
      icon: FaWater,
      title: 'Plomería',
      description: 'Sistemas de agua, bombas y riego con atención 24/7.',
      color: 'emerald',
      delay: 0.2
    },
    {
      icon: FaTree,
      title: 'Espacios Verdes',
      description: 'Cuidado profesional de jardines y áreas naturales.',
      color: 'amber',
      delay: 0.3
    },
    {
      icon: FaTools,
      title: 'Mantenimiento General',
      description: 'Reparaciones y mejoras integrales para tu propiedad.',
      color: 'blue',
      delay: 0.4
    }
  ];

  const stats = [
    { number: '24/7', label: 'Emergencias', icon: FaShieldAlt },
    { number: '100%', label: 'Garantía', icon: FaCheckCircle },
    { number: '<2h', label: 'Respuesta', icon: FaChartLine },
    { number: '50+', label: 'Countries', icon: FaUsers }
  ];

  const testimonials = [
    {
      text: 'Desde que contratamos a Figueroa, el mantenimiento del country es un problema menos. Profesionales y confiables.',
      author: 'Admin. Country Las Lomas',
      role: 'Neuquén Capital'
    },
    {
      text: 'La mejor decisión que tomamos. Un solo proveedor para todo, respuesta inmediata y precios transparentes.',
      author: 'Consorcio Los Álamos',
      role: 'San Martín de los Andes'
    }
  ];

  const features = [
    { icon: FaMountain, text: 'Inspirados en la fortaleza de la Cordillera' },
    { icon: FaWater, text: 'Claridad y transparencia como nuestros lagos' },
    { icon: FaTree, text: 'Sostenibilidad y cuidado del medio ambiente' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Función para obtener clases de color según el tipo
  const getColorClasses = (color, type) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        border: 'border-blue-600',
        hover: 'hover:text-blue-700'
      },
      emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        gradient: 'from-emerald-500 to-emerald-600',
        border: 'border-emerald-600',
        hover: 'hover:text-emerald-700'
      },
      amber: {
        bg: 'bg-amber-50',
        text: 'text-amber-600',
        gradient: 'from-amber-500 to-amber-600',
        border: 'border-amber-600',
        hover: 'hover:text-amber-700'
      }
    };
    
    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Con identidad patagónica */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        {/* Patrón de puntos minimalista */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-6xl mx-auto"
          >
            
            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-4">Mantenimiento con</span>
              <span className="text-gradient-aurora">
                Raíces Neuquinas
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Fortaleza andina, compromiso patagónico. 
              <span className="block mt-3 text-amber-300 font-medium">
                Un servicio que honra nuestra tierra con profesionalismo y dedicación.
              </span>
            </p>
            
            {/* Features destacados */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <feature.icon className="text-amber-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <Link 
                  to="/solicitar-presupuesto" 
                  className="relative bg-gradient-to-r from-blue-700 to-emerald-700 text-white font-bold py-4 px-12 rounded-full hover:shadow-2xl transition-all duration-300 text-lg tracking-wide border border-white/30"
                >
                  <span className="flex items-center gap-3">
                    Solicitar Presupuesto
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/servicios" 
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-12 rounded-full hover:border-white hover:bg-white/20 transition-all duration-300 text-lg flex items-center justify-center gap-3"
                >
                  <span>Explorar Servicios</span>
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Firma decorativa */}
        <div className="absolute bottom-8 right-8 text-white/20 text-sm font-display tracking-widest hidden lg:block">
          FIGUEROA · NEUQUÉN
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-lg mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <stat.icon className={`text-3xl ${
                    index === 0 ? 'text-blue-600' : 
                    index === 1 ? 'text-emerald-600' : 
                    index === 2 ? 'text-amber-600' : 
                    'text-blue-700'
                  }`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${
                  index === 0 ? 'text-blue-600' : 
                  index === 1 ? 'text-emerald-600' : 
                  index === 2 ? 'text-amber-600' : 
                  'text-blue-700'
                } mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-2 mb-4">
              SERVICIOS INTEGRALES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones con <span className="text-gradient-neuquino">identidad patagónica</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Un paquete completo diseñado específicamente para las necesidades únicas de los countries y barrios privados de nuestra región.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color, 'all');
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: service.delay }}
                  className="group"
                >
                  <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-200">
                    {/* Acabado de esquina con color */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color, 'gradient')} transform rotate-45`}></div>
                    </div>
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${getColorClasses(service.color, 'bg')} ${getColorClasses(service.color, 'text')}`}>
                        <service.icon className="text-2xl" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                        {service.description}
                      </p>
                      
                      <Link
                        to="/servicios"
                        className="inline-flex items-center text-blue-600 font-semibold group/link"
                      >
                        <span className="border-b border-transparent group-hover/link:border-blue-600 transition-all">
                          Detalles del servicio
                        </span>
                        <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Línea decorativa inferior */}
                    <div className={`h-1 w-0 group-hover:w-full transition-all duration-700 ${getColorClasses(service.color, 'border')}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-full px-4 py-2 mb-4">
              <FaQuoteRight />
              <span>CONFIANZA EN LA PATAGONIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen <span className="text-gradient-andino">nuestros clientes</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 flex items-center justify-center">
                        <FaQuoteRight className="text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-emerald-600 text-sm font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background con gradiente neuquino */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
        
        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                ¿Listo para un mantenimiento con identidad patagónica?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Más de 50 properties en Neuquén y la Patagonia ya confían en nuestro enfoque único.
                Sé el próximo en experimentar la tranquilidad de un mantenimiento arraigado en nuestra tierra.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/solicitar-presupuesto" 
                    className="inline-flex items-center justify-center bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:shadow-2xl transition-all duration-300 text-lg gap-3"
                  >
                    <span>Solicitar Presupuesto Sin Cargo</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
                  >
                    Contactar Comercial
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;