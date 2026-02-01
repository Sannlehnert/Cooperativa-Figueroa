/**
 * Genera el enlace de WhatsApp con el mensaje estructurado
 */
export const generateWhatsAppLink = (formData) => {
  const phoneNumber = '5491123456789'; // Reemplazar con número real
  
  // Formatear el mensaje
  const message = `
📋 *NUEVA SOLICITUD DE SERVICIO*

*Servicio:* ${formData.serviceType}
*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Dirección:* ${formData.address}
*Descripción:* ${formData.description}

*Fecha:* ${new Date().toLocaleDateString()}
*Hora:* ${new Date().toLocaleTimeString()}
  `.trim();

  // Codificar para URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Formatea el tipo de servicio para mostrar
 */
export const formatServiceType = (serviceType) => {
  const services = {
    'electricidad': 'Electricidad',
    'plomeria': 'Plomería / Agua',
    'parques': 'Mantenimiento de Parques',
    'mantenimiento-general': 'Mantenimiento General'
  };
  
  return services[serviceType] || serviceType;
};