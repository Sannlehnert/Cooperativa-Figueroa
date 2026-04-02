import React from 'react';
import { FaUsers, FaHandshake, FaAward, FaHeart, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaHandshake,
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la transparencia y honestidad.'
    },
    {
      icon: FaAward,
      title: 'Calidad',
      description: 'Cada trabajo es ejecutado con los más altos estándares profesionales.'
    },
    {
      icon: FaUsers,
      title: 'Cooperación',
      description: 'Trabajamos en equipo para lograr los mejores resultados.'
    },
    {
      icon: FaHeart,
      title: 'Compromiso',
      description: 'Nos involucramos genuinamente con las necesidades de nuestros clientes.'
    },
    {
      icon: FaChartLine,
      title: 'Mejora Continua',
      description: 'Siempre buscamos innovar y perfeccionar nuestros servicios.'
    },
    {
      icon: FaShieldAlt,
      title: 'Responsabilidad',
      description: 'Asumimos cada proyecto con seriedad y profesionalismo.'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Sobre Nosotros</h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Somos una cooperativa de profesionales dedicados al mantenimiento integral,
            unidos por la pasión por el trabajo bien hecho y el compromiso con nuestra comunidad.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Nacimos de la necesidad de brindar servicios de mantenimiento confiables,
                transparentes y accesibles para hogares y comunidades. Un grupo de profesionales
                con años de experiencia en diferentes áreas del mantenimiento decidió unirse
                bajo el modelo cooperativo.
              </p>
              <p>
                Creemos que el trabajo en equipo y la cooperación son la base para ofrecer
                servicios de excelencia. Cada miembro de nuestra cooperativa aporta su expertise,
                creando un equipo multidisciplinario capaz de resolver cualquier desafío.
              </p>
              <p>
                Hoy, nos enorgullece ser la elección de cientos de familias y comunidades
                que confían en nuestro trabajo para el cuidado y mantenimiento de sus espacios.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
            <p className="mb-6">
              Brindar soluciones integrales de mantenimiento con profesionalismo,
              confiabilidad y compromiso, contribuyendo al bienestar de las comunidades
              que servimos.
            </p>
            <h3 className="text-2xl font-bold mb-6">Nuestra Visión</h3>
            <p>
              Ser la cooperativa líder en servicios de mantenimiento, reconocida por
              nuestra excelencia, innovación y aporte al desarrollo comunitario.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl mb-4">
                  <value.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Approach */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">El Enfoque Cooperativo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Como cooperativa, reinvertimos nuestros recursos en mejorar servicios,
              capacitar a nuestro equipo y mantener precios justos para la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h4 className="font-semibold mb-2">Profesionales Certificados</h4>
              <p className="text-gray-600">Todo nuestro equipo cuenta con certificaciones vigentes</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <h4 className="font-semibold mb-2">Emergencias</h4>
              <p className="text-gray-600">Urgencias disponibles 24 horas</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">Garantía</div>
              <h4 className="font-semibold mb-2">En Todos los Trabajos</h4>
              <p className="text-gray-600">Cada servicio incluye garantía por escrito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;