import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const EditorialContactSection: React.FC = () => {
  const { messages } = useLanguage();
  const { contact } = messages;

  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    telefonoContacto: '',
    tipoConsulta: contact.optSell,
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative bg-[#F5F2EA] text-[#24211D]">
      
      {/* 1. ENCABEZADO DE CONTACTO */}
      <div className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E8E2D5]/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          
          {/* Subtítulo superior */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              {contact.headerEyebrow}
            </span>
          </div>

          {/* Titular principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.14] tracking-tight mb-6 sm:mb-7 font-normal">
            {contact.headerTitle}
          </h1>

          {/* Texto descriptivo */}
          <div className="space-y-3 font-sans text-base sm:text-lg text-[#4A463F] leading-relaxed max-w-2xl mx-auto font-light">
            <p>{contact.headerP1}</p>
            <p className="text-[#5C574E]">{contact.headerP2}</p>
          </div>

        </div>
      </div>

      {/* 2. GARANTÍA DE SERVICIO */}
      <div className="py-16 sm:py-20 border-b border-[#E8E2D5]/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 md:divide-x md:divide-[#E8E2D5]/80">
            
            {/* Columna 1 */}
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                01
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                {contact.g1Title}
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                {contact.g1Desc}
              </p>
            </div>

            {/* Columna 2 */}
            <div className="space-y-3 text-center md:text-left md:pl-10 lg:pl-14">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                02
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                {contact.g2Title}
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                {contact.g2Desc}
              </p>
            </div>

            {/* Columna 3 */}
            <div className="space-y-3 text-center md:text-left md:pl-10 lg:pl-14">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                03
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                {contact.g3Title}
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                {contact.g3Desc}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. FORMULARIO DE CONSULTA */}
      <div className="py-16 sm:py-24 border-b border-[#E8E2D5]/80">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          
          {/* Título y Subtítulo */}
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211D] font-normal tracking-tight mb-3">
              {contact.formTitle}
            </h2>
            <p className="text-sm text-[#5C574E] font-sans font-light leading-relaxed max-w-lg mx-auto">
              {contact.formSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-12 h-12 rounded-full bg-[#8FA777]/15 text-[#8FA777] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#24211D] font-normal">
                {contact.successTitle}
              </h3>
              <p className="text-sm text-[#5C574E] max-w-md mx-auto leading-relaxed font-sans font-light">
                {contact.successDesc}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nombreCompleto: '',
                      correoElectronico: '',
                      telefonoContacto: '',
                      tipoConsulta: contact.optSell,
                      mensaje: '',
                    });
                  }}
                  className="px-7 py-3 bg-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
                >
                  {contact.successNewButton}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Nombre completo */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  {contact.fieldName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombreCompleto}
                  onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                  placeholder={contact.fieldNamePlaceholder}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                />
              </div>

              {/* Correo electrónico y Teléfono de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                    {contact.fieldEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.correoElectronico}
                    onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
                    placeholder={contact.fieldEmailPlaceholder}
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                    {contact.fieldPhone}
                  </label>
                  <input
                    type="tel"
                    value={formData.telefonoContacto}
                    onChange={(e) => setFormData({ ...formData, telefonoContacto: e.target.value })}
                    placeholder={contact.fieldPhonePlaceholder}
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Desplegable Tipo de consulta */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  {contact.fieldInquiryType}
                </label>
                <select
                  required
                  value={formData.tipoConsulta}
                  onChange={(e) => setFormData({ ...formData, tipoConsulta: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans cursor-pointer"
                >
                  <option value={contact.optSell}>
                    {contact.optSell}
                  </option>
                  <option value={contact.optRent}>
                    {contact.optRent}
                  </option>
                  <option value={contact.optBuy}>
                    {contact.optBuy}
                  </option>
                  <option value={contact.optRelocation}>
                    {contact.optRelocation}
                  </option>
                  <option value={contact.optLegal}>
                    {contact.optLegal}
                  </option>
                  <option value={contact.optOther}>
                    {contact.optOther}
                  </option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  {contact.fieldMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder={contact.fieldMessagePlaceholder}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors resize-y font-sans"
                />
              </div>

              {/* Botón de envío */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[220px] py-4 px-9 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2.5 shadow-xs"
                >
                  <span>{contact.submitButton}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

      {/* 4. DATOS DIRECTOS DE CONTACTO */}
      <div className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:divide-x md:divide-[#E8E2D5]/70">
            
            {/* Teléfono & WhatsApp */}
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <Phone className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  {contact.directPhone}
                </span>
              </div>
              <div>
                <a
                  href="https://wa.me/34645695194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg sm:text-xl text-[#24211D] hover:text-[#D4AF37] transition-colors block"
                >
                  +34 645 695 194
                </a>
                <span className="text-xs text-[#5C574E] font-sans font-light block mt-1">
                  {contact.directPhoneSub}
                </span>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="space-y-2 md:pl-8">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <Mail className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  {contact.directEmail}
                </span>
              </div>
              <div>
                <a
                  href="mailto:realtygoldencoast@gmail.com"
                  className="font-serif text-base sm:text-lg text-[#24211D] hover:text-[#D4AF37] transition-colors break-all block"
                >
                  realtygoldencoast@gmail.com
                </a>
              </div>
            </div>

            {/* Ubicación & Cobertura */}
            <div className="space-y-2 md:pl-8">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <MapPin className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  {contact.directCoverage}
                </span>
              </div>
              <div>
                <p className="font-serif text-base sm:text-lg text-[#24211D]">
                  Garraf & Costa Daurada
                </p>
                <span className="text-xs text-[#5C574E] font-sans font-light block mt-1">
                  {contact.directCoverageSub}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
