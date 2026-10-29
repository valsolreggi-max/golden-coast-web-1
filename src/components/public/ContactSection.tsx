import React, { useState } from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { Phone, Mail, MapPin, Send, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Alquiler / Venta de Mi Propiedad',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5F2EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#8FA777] uppercase tracking-widest bg-[#8FA777]/15 px-3 py-1 rounded-full border border-[#8FA777]/30">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] font-bold mt-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#24211D]/80 mt-2 font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 bg-[#8FA777] text-[#F5F2EA] rounded-2xl p-8 sm:p-10 shadow-xl space-y-8 border border-[#D4AF37]/40">
            
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
                Atención Personalizada
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F5F2EA] mt-1">
                Contacto Directo con Valeria
              </h3>
              <p className="text-xs text-[#F5F2EA]/90 mt-2 leading-relaxed">
                Sin intermediarios ni salas de espera. Nos reunimos en nuestra oficina del Garraf, por videollamada o directamente en tu propiedad.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#F5F2EA]/20 text-xs sm:text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#24211D] flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F5F2EA]/70 uppercase font-semibold">Teléfono Directo</p>
                  <a href="tel:+34600000000" className="text-base font-bold text-[#F5F2EA] hover:text-[#D4AF37] transition-colors">
                    +34 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E76F51] text-[#F5F2EA] flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F5F2EA]/70 uppercase font-semibold">WhatsApp Inmediato</p>
                  <a
                    href="https://wa.me/34600000000?text=Hola%20Valeria,%20quisiera%20consultar%20sobre%20asesoramiento%20inmobiliario"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-[#F5F2EA] hover:text-[#D4AF37] transition-colors underline"
                  >
                    Enviar WhatsApp a Valeria
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 text-[#F5F2EA] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F5F2EA]/70 uppercase font-semibold">Correo Electrónico</p>
                  <a href="mailto:realtygoldencoast@gmail.com" className="text-sm font-bold text-[#F5F2EA] hover:text-[#D4AF37] transition-colors">
                    realtygoldencoast@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 text-[#F5F2EA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F5F2EA]/70 uppercase font-semibold">Zona de Cobertura</p>
                  <p className="text-xs font-semibold text-[#F5F2EA]/90 mt-0.5">
                    Sitges, Vilanova i la Geltrú, Castelldefels, Cunit, Calafell & Barcelona Sur.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F5F2EA]/20 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantía de confidencialidad y protección de datos personalizados.</span>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7 bg-white border border-[#E6DFD3] rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8FA777]/20 text-[#8FA777] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#24211D]">
                  ¡Mensaje Recibido con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-[#24211D]/80 max-w-md mx-auto leading-relaxed">
                  Gracias por contactar con Golden Coast. Valeria revisará tu solicitud y se pondrá en contacto contigo en un plazo máximo de 24 horas laborables.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#8FA777] text-[#F5F2EA] font-bold text-xs uppercase"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl font-bold text-[#24211D] border-b border-[#E6DFD3] pb-3">
                  Formulario de Consulta Tranquila
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#24211D] uppercase tracking-wider mb-1">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carmen García"
                      className="w-full px-4 py-3 rounded-lg border border-[#E6DFD3] bg-[#F5F2EA]/40 text-xs sm:text-sm text-[#24211D] focus:outline-none focus:border-[#8FA777]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#24211D] uppercase tracking-wider mb-1">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carmen@ejemplo.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#E6DFD3] bg-[#F5F2EA]/40 text-xs sm:text-sm text-[#24211D] focus:outline-none focus:border-[#8FA777]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#24211D] uppercase tracking-wider mb-1">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded-lg border border-[#E6DFD3] bg-[#F5F2EA]/40 text-xs sm:text-sm text-[#24211D] focus:outline-none focus:border-[#8FA777]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#24211D] uppercase tracking-wider mb-1">
                      {t.typeLabel}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E6DFD3] bg-[#F5F2EA]/40 text-xs sm:text-sm text-[#24211D] focus:outline-none focus:border-[#8FA777]"
                    >
                      <option>Alquilar mi propiedad (Vacacional / Temporal / Larga Duración)</option>
                      <option>Vender mi propiedad en Costa Dorada / Garraf</option>
                      <option>Comprar vivienda (Personal Shopper Inmobiliario)</option>
                      <option>Consulta Legal / Peritaje Judicial / LAU</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#24211D] uppercase tracking-wider mb-1">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe aquí los detalles de tu consulta o las características de tu vivienda..."
                    className="w-full px-4 py-3 rounded-lg border border-[#E6DFD3] bg-[#F5F2EA]/40 text-xs sm:text-sm text-[#24211D] focus:outline-none focus:border-[#8FA777]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E76F51] hover:bg-[#d85d3f] text-[#F5F2EA] py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submitButton}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
