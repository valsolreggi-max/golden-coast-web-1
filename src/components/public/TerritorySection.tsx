import React from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { BRAND_IMAGES } from '../../data/images';
import { MapPin, Sun, Waves, Compass, Building2 } from 'lucide-react';

interface TerritorySectionProps {
  lang: Language;
}

export const TerritorySection: React.FC<TerritorySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].territory;

  const zones = [
    {
      name: 'Sitges & El Garraf',
      tagline: 'Elegancia cosmopolita, cultura y luz mediterránea',
      image: BRAND_IMAGES.sitgesPromenadeStatue,
      description: 'Destino preferido para familias internacionales y compradores que buscan villas exclusivas, masías rehabilitadas y áticos con vistas al mar a 30 minutos de Barcelona.',
      highlights: ['Internacional & Exclusivo', 'Conexión Directa con El Prat', 'Estilo de vida costero premium']
    },
    {
      name: 'Vilanova i la Geltrú',
      tagline: 'Tradición marina, tranquilidad y vida familiar de calidad',
      image: BRAND_IMAGES.vilanovaBeachPromenade,
      description: 'Capital del Garraf con gran riqueza gastronómica, puerto deportivo, Rambla comercial y una demanda creciente de viviendas residenciales con excelente rentabilidad.',
      highlights: ['Calidad de Vida Familiar', 'Servicios & Colegios Internacionales', 'Alta demanda de alquiler']
    },
    {
      name: 'Castelldefels & Gavà Mar',
      tagline: 'Residencia de alto standing entre la playa y la montaña',
      image: BRAND_IMAGES.sitgesCastleOverSea,
      description: 'Villas de lujo y residenciales cerrados ideales para directivos y deportistas. Proximidad inmediata al aeropuerto y a escuelas internacionales de renombre.',
      highlights: ['Villas de Lujo', 'Cerca del Aeropuerto', 'Colegios Británicos e Internacionales']
    },
    {
      name: 'Cunit, Calafell & Costa Dorada Norte',
      tagline: 'Naturaleza marítima, playas infinitas y espíritu de hogar',
      image: BRAND_IMAGES.traditionalWoodenBoat,
      description: 'Ubicación clave en el inicio de la Costa Dorada. Casas unifamiliares con jardín, un entorno tranquilo para criar hijos y gran atractivo para primera o segunda residencia.',
      highlights: ['Entorno Familiar Tranquilo', 'Jardines & Espacios Amplios', 'Excelente Relación Calidad-Precio']
    }
  ];

  return (
    <section id="zones" className="py-16 sm:py-20 bg-[#F5F2EA] border-b border-[#E6DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#8FA777] uppercase tracking-widest bg-[#8FA777]/15 px-3 py-1 rounded-full border border-[#8FA777]/30">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] font-bold mt-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#24211D]/80 mt-2 font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E6DFD3] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F5F2EA]">
                  <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Garraf & Costa Dorada</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F2EA] mt-0.5">
                    {zone.name}
                  </h3>
                  <p className="text-xs text-[#F5F2EA]/85 mt-0.5">
                    {zone.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#24211D]/80 leading-relaxed font-sans">
                  {zone.description}
                </p>

                <div className="pt-3 border-t border-[#E6DFD3] flex flex-wrap gap-2">
                  {zone.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#EFE8DC] text-[#24211D] text-[11px] font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
