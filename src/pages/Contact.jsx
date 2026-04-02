import React from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Teléfono',
      details: ['(011) 1234-5678', '(011) 8765-4321'],
      color: 'text-blue-600'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: ['+54 9 11 2345-6789', 'Disponible 24/7'],
      color: 'text-green-600',
      link: 'https://wa.me/5491123456789'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@cooperativamantenimiento.com', 'soporte@cooperativamantenimiento.com'],
      color: 'text-red-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Oficina Central',
      details: ['Avenida Del Trabajador 1234', 'Neuquen, Argentina'],
      color: 'text-purple-600'
    },
    {
      icon: FaClock,
      title: 'Horarios de Atención',
      details: ['Lunes a Viernes: 8:00 - 20:00', 'Sábados: 9:00 - 14:00', 'Emergencias: 24/7'],
      color: 'text-orange-600'
    }
  ];

  const socialMedia = [
    { icon: FaFacebook, name: 'Facebook', link: '#', color: 'text-blue-600' },
    { icon: FaInstagram, name: 'Instagram', link: '#', color: 'text-pink-600' },
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Contacto</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por el medio que prefieras y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8">Información de Contacto</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className={`text-2xl ${item.color} mt-1`}>
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline mt-2 inline-block"
                      >
                        Enviar mensaje →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-dark mb-6">Seguinos en Redes Sociales</h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${social.color} hover:opacity-80 transition-opacity`}
                  >
                    <social.icon className="text-2xl" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Zone Info */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8">Zona de Cobertura</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Áreas de Trabajo</h3>
              <p className="text-gray-600 mb-4">
                Trabajamos en:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Neuquén
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Plottier
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Cipolletti
                </li>
              </ul>
            </div>

            {/* Emergency Banner */}
            <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">🚨 EMERGENCIA 24/7</h3>
              <p className="mb-4">¿Tenés una emergencia urgente?</p>
              <a 
                href="https://wa.me/5491123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp de Emergencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;