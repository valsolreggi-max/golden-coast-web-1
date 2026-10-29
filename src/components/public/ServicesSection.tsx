import React, { useState } from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { Key, Home, Sun, Search, FileCheck, Shield, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'owners' | 'buyers'>('all');
  const t = TRANSLATIONS[lang].services;

  const servicesList = [
    {
      id: 'vacacional',
      category: 'owners',
      title: 'Gestión de Alquiler Vacacional Boutique',
      subtitle: 'Rentabilidad optimizada con atención personalizada al huésped',
      description: 'Gestión integral de propiedades de vacaciones en la Costa Dorada. Nos encargamos del posicionamiento, check-in exigente, mantenimiento impecable y cumplimiento estricto de la normativa turística de Cataluña.',
      icon: Sun,
      highlights: [
        'Optimización de tarifas según temporada',
        'Filtro riguroso de huéspedes de calidad',
        'Limpieza y mantenimiento estilo hotelero',
        'Licencia turística y declaración legal'
      ]
    },
    {
      id: 'temporal',
      category: 'owners',
      title: 'Alquiler Temporal & De Temporada',
      subtitle: 'Tranquilidad absoluta para periodos de 32 días a 11 meses',
      description: 'Ideal para ejecutivos, familias en transición o nómadas digitales. Garantizamos contratos redactados bajo la LAU con garantías de pago exigentes y revisión continua.',
      icon: Key,
      highlights: [
        'Verificación de solvencia económica',
        'Redacción jurídica personalizada',
        'Coordinación de suministros e inventario',
        'Cobro puntual y gestión de incidencias'
      ]
    },
    {
      id: 'larga-duracion',
      category: 'owners',
      title: 'Alquiler de Larga Duración',
      subtitle: 'Inquilinos de máxima confianza para la tranquilidad del hogar',
      description: 'Protegemos tu patrimonio inmobiliario seleccionando inquilinos solventes y cuidando la vivienda como si fuera propia, con peritaje e inventario detallado pre-firma.',
      icon: Home,
      highlights: [
        'Análisis scoring de riesgo de impago',
        'Estudio comparativo de precios de mercado',
        'Seguros de impago y garantías adicionales',
        'Atención continua post-firma'
      ]
    },
    {
      id: 'venta-boutique',
      category: 'owners',
      title: 'Venta Inmobiliaria Boutique',
      subtitle: 'Comercialización cuidada, no venta masiva',
      description: 'Valoración pericial precisa, estrategia de home staging para destacar el alma de la propiedad y presentación directa a compradores nacionales e internacionales calificados.',
      icon: FileCheck,
      highlights: [
        'Tasación pericial judicial oficial',
        'Fotografía profesional y dossier editorial',
        'Filtrado previo de compradores reales',
        'Acompañamiento a notaría de principio a fin'
      ]
    },
    {
      id: 'personal-shopper',
      category: 'buyers',
      title: 'Personal Shopper Inmobiliario (Búsqueda)',
      subtitle: 'Tu representante exclusivo para encontrar tu vivienda ideal',
      description: 'Buscamos, analizamos y negociamos por ti. Accedemos a propiedades off-market en Garraf y Costa Dorada para que inviertas o compres sin estrés ni pérdidas de tiempo.',
      icon: Search,
      highlights: [
        'Búsqueda a medida según estilo de vida',
        'Revisión urbanística, cargas y registro',
        'Negociación objetiva del precio final',
        'Gestión de trámites para extranjeros (NIE, cuenta)'
      ]
    },
    {
      id: 'asesoria-legal',
      category: 'buyers',
      title: 'Asesoría Jurídica LAU & Peritaje',
      subtitle: 'Dictámenes técnicos e informes de idoneidad legal',
      description: 'Análisis de contratos, valoraciones oficiales para herencias o divorcios, arbitraje y asesoramiento integral en la Ley de Arrendamientos Urbanos.',
      icon: Shield,
      highlights: [
        'Dictamen judicial homologado',
        'Auditoría previa de cargas y licencias',
        'Asesoramiento en Ley Hipotecaria',
        'Soporte multiidioma (ES, EN, FR, DE)'
      ]
    }
  ];

  const filteredServices = servicesList.filter(
    (s) => filter === 'all' || s.category === filter
  );

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#EFE8DC]/40 border-b border-[#E6DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E76F51] uppercase tracking-widest bg-[#E76F51]/10 px-3 py-1 rounded-full">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] font-bold mt-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#24211D]/80 mt-2 font-sans">
            {t.subtitle}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? 'bg-[#8FA777] text-[#F5F2EA] shadow-xs'
                  : 'bg-white text-[#24211D] border border-[#E6DFD3] hover:bg-[#E6DFD3]/40'
              }`}
            >
              {t.tabAll}
            </button>
            <button
              onClick={() => setFilter('owners')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'owners'
                  ? 'bg-[#8FA777] text-[#F5F2EA] shadow-xs'
                  : 'bg-white text-[#24211D] border border-[#E6DFD3] hover:bg-[#E6DFD3]/40'
              }`}
            >
              {t.tabOwners}
            </button>
            <button
              onClick={() => setFilter('buyers')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === 'buyers'
                  ? 'bg-[#8FA777] text-[#F5F2EA] shadow-xs'
                  : 'bg-white text-[#24211D] border border-[#E6DFD3] hover:bg-[#E6DFD3]/40'
              }`}
            >
              {t.tabBuyers}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E6DFD3] rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#8FA777]/15 text-[#8FA777] flex items-center justify-center mb-5 group-hover:bg-[#E76F51] group-hover:text-[#F5F2EA] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                    {service.category === 'owners' ? 'Propietarios' : 'Compradores e Inversores'}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#24211D] mt-1 group-hover:text-[#8FA777] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#24211D]/80 font-medium mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#24211D]/70 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-4 pt-4 border-t border-[#E6DFD3] space-y-2 text-xs text-[#24211D]/85">
                    {service.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E76F51] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6DFD3]">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#F5F2EA] hover:bg-[#8FA777] hover:text-[#F5F2EA] text-[#24211D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Consultar este Servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
