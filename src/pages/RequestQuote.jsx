import React, { useState } from 'react';
import { FaCheckCircle, FaWhatsapp, FaEnvelope, FaPhone, FaBuilding, FaUsers } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    requestType: 'abono-mensual',
    serviceType: 'mantenimiento-integral',
    name: '',
    phone: '',
    email: '',
    propertyType: 'country',
    propertyName: '',
    position: '',  // Nuevo: Cargo (Administrador, Miembro de comisión, etc.)
    propertySize: '',
    residentsCount: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const requestTypes = [
    { value: 'abono-mensual', label: 'Abono Mensual Integral' },
    { value: 'servicio-puntual', label: 'Servicio Puntual' },
    { value: 'consulta', label: 'Consulta General' }
  ];

  const serviceTypes = [
    { value: 'mantenimiento-integral', label: 'Mantenimiento Integral (Todos los servicios)' },
    { value: 'mantenimiento-general', label: 'Mantenimiento General' },
    { value: 'espacios-verdes', label: 'Espacios Verdes' },
    { value: 'limpieza-orden', label: 'Limpieza y Orden' },
    { value: 'preventivo', label: 'Mantenimiento Preventivo' }
  ];

  const propertyTypes = [
    { value: 'country', label: 'Country / Barrio Privado' },
    { value: 'consorcio', label: 'Consorcio Cerrado' },
    { value: 'club', label: 'Club de Campo' },
    { value: 'residencial', label: 'Residencial Exclusivo' },
    { value: 'otros', label: 'Otro tipo de propiedad' }
  ];

  const propertySizes = [
    { value: 'pequeno', label: 'Menos de 10 hectáreas' },
    { value: 'mediano', label: '10-50 hectáreas' },
    { value: 'grande', label: 'Más de 50 hectáreas' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nombre obligatorio';
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Email obligatorio';
    if (!formData.propertyName.trim()) newErrors.propertyName = 'Nombre del country es obligatorio';
    if (!formData.position.trim()) newErrors.position = 'Cargo es obligatorio';
    if (!formData.propertySize) newErrors.propertySize = 'Tamaño aproximado es obligatorio';
    if (!formData.residentsCount) newErrors.residentsCount = 'Cantidad aproximada de residentes es obligatoria';

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
// templateParams comentado para lint



      // Simular envío exitoso
      setTimeout(() => {
        setIsSuccess(true);
      }, 1500);

      setIsSuccess(true);

      setTimeout(() => {
        setFormData({
          requestType: 'abono-mensual',
          serviceType: 'mantenimiento-integral',
          name: '',
          phone: '',
          email: '',
          propertyType: 'country',
          propertyName: '',
          propertySize: '',
          residentsCount: '',
          message: ''
        });
      }, 10000);

    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar la solicitud. Por favor intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 md:p-12 text-center">
            <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-6" />

            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              ¡Solicitud Enviada con Éxito!
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              Hemos recibido tu solicitud de presupuesto. Nuestro equipo comercial
              se contactará contigo en las próximas 24 horas para coordinar una reunión.
            </p>

            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Resumen de tu solicitud:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-700">
                <p><span className="font-semibold">Tipo:</span> {formData.requestType === 'abono-mensual' ? 'Abono Mensual' : 'Servicio Puntual'}</p>
                <p><span className="font-semibold">Propiedad:</span> {formData.propertyName}</p>
                <p><span className="font-semibold">Contacto:</span> {formData.name}</p>
                <p><span className="font-semibold">Teléfono:</span> {formData.phone}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Mientras tanto, podés contactarnos por:</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Comercial</span>
                </a>

                <a
                  href="tel:+541112345678"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <FaPhone />
                  <span>Llamada Directa</span>
                </a>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="flex items-center justify-center space-x-2 bg-gray-200 text-dark py-3 px-4 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  <FaEnvelope />
                  <span>Nueva Solicitud</span>
                </button>
              </div>
            </div>

            <p className="text-gray-500 mt-8 text-sm">
              Horario de atención comercial: Lunes a Viernes de 8:00 a 18:00 hs
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Solicitar <span className="text-primary">Presupuesto</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Completá el formulario y nuestro equipo comercial se contactará para evaluar
            las necesidades de tu country y ofrecerte la mejor propuesta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Request Type */}
                <div>
                  <label className="block text-dark font-semibold mb-4 text-lg">
                    ¿Qué tipo de servicio necesitás?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {requestTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.requestType === type.value
                            ? 'border-primary bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <input
                          type="radio"
                          name="requestType"
                          value={type.value}
                          checked={formData.requestType === type.value}
                          onChange={handleChange}
                          className="mr-3"
                        />
                        <span className="font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Servicio específico
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {serviceTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark font-semibold mb-2">
                      Nombre y Apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Carlos Figueroa"
                      className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-dark font-semibold mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej: +54 9 11 2345-6789"
                      className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@country.com"
                    className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Property Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <FaBuilding className="text-primary text-xl" />
                    <h3 className="text-xl font-bold">Información del Country/Barrio</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-semibold mb-2">
                        Tipo de Propiedad
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        {propertyTypes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-dark font-semibold mb-2">
                        Tamaño aproximado <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.propertySize ? 'border-red-500' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Seleccionar tamaño</option>
                        {propertySizes.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.propertySize && (
                        <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-semibold mb-2">
                        Nombre del Country/Barrio <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleChange}
                        placeholder="Ej: Country Las Lomas"
                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.propertyName ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.propertyName && (
                        <p className="text-red-500 text-sm mt-1">{errors.propertyName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-dark font-semibold mb-2">
                        Cargo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Ej: Administrador, Miembro de comisión"
                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.position ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.position && (
                        <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-dark font-semibold mb-2">
                        <div className="flex items-center">
                          <FaUsers className="mr-2" />
                          Residentes aproximados <span className="text-red-500">*</span>
                        </div>
                      </label>
                      <input
                        type="number"
                        name="residentsCount"
                        value={formData.residentsCount}
                        onChange={handleChange}
                        placeholder="Ej: 150"
                        className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${errors.residentsCount ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.residentsCount && (
                        <p className="text-red-500 text-sm mt-1">{errors.residentsCount}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-dark font-semibold mb-2">
                    Información adicional
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Contanos cualquier detalle relevante sobre las necesidades de mantenimiento de tu urbanización..."
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-5 rounded-xl hover:shadow-2xl transition-all duration-300 text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-6 w-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando solicitud...
                    </div>
                  ) : (
                    'Enviar Solicitud de Presupuesto'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contacto Comercial</h3>
              <p className="mb-6 opacity-90">
                Para consultas específicas sobre presupuestos para countries,
                contactá a nuestro equipo comercial especializado.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white text-primary font-bold p-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Comercial</span>
                </a>
                <a
                  href="tel:+541112345678"
                  className="flex items-center justify-center space-x-3 bg-white/10 border border-white/30 font-bold p-4 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FaPhone className="text-xl" />
                  <span>Llamada Directa</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">ℹ Proceso Comercial</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <div className="font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Evaluación</h4>
                    <p className="text-gray-600 text-sm">Reunión para conocer las necesidades específicas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <div className="font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Propuesta</h4>
                    <p className="text-gray-600 text-sm">Presupuesto detallado en 48 horas hábiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <div className="font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Implementación</h4>
                    <p className="text-gray-600 text-sm">Inicio del servicio según lo acordado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">⏱ Respuesta Garantizada</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Contacto inicial</span>
                  <span className="font-bold">24 horas</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span>Presupuesto detallado</span>
                  <span className="font-bold">48 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Emergencias</span>
                  <span className="font-bold text-green-400">2 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;