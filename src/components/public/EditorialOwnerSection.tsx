import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialOwnerSectionProps {
  onOpenConsultation: (type: 'owner') => void;
  onOpenServicesModal: () => void;
}

export const EditorialOwnerSection: React.FC<EditorialOwnerSectionProps> = ({
  onOpenConsultation,
  onOpenServicesModal,
}) => {
  const servicesList = [
    {
      num: '01',
      title: 'Venta de viviendas',
      desc: 'Estrategia integral, valoración rigurosa y posicionamiento selectivo en el mercado.',
    },
    {
      num: '02',
      title: 'Alquiler turístico',
      desc: 'Gestión cuidada para maximizar rendimiento protegiendo el valor de la vivienda.',
    },
    {
      num: '03',
      title: 'Alquiler temporal',
      desc: 'Flexibilidad para estancias de media duración con perfiles contrastados.',
    },
    {
      num: '04',
      title: 'Alquiler de larga duración',
      desc: 'Seguridad jurídica, contratos con especialista en LAU y selección rigurosa de inquilinos.',
    },
  ];

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            SERVICIOS · ¿TIENES UNA PROPIEDAD?
          </span>
        </div>

        {/* Headline & Main Paragraph Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Tu propiedad merece algo más que una simple gestión.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            <p>
              Después de años acompañando a propietarios, inversores y familias, entendí que gestionar una propiedad no consiste solo en publicar un anuncio o firmar un contrato. Consiste en tomar buenas decisiones y proteger aquello que tanto esfuerzo costó conseguir.
            </p>
            <p>
              Ya sea un alquiler turístico, un alquiler temporal, un alquiler de larga duración o la venta de una vivienda en la Costa Dorada y el Garraf, te acompaño durante todo el proceso con un asesoramiento personalizado, para que puedas delegar con la tranquilidad de saber que tu propiedad está en buenas manos.
            </p>
          </div>
        </div>

        {/* 4 Modalidades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesList.map((service) => (
            <div
              key={service.num}
              onClick={onOpenServicesModal}
              className="p-6 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-sans font-semibold text-[#D4AF37] tracking-widest uppercase">
                  {service.num}
                </span>
                <h3 className="text-xl font-serif text-[#24211D] mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C574E] leading-relaxed font-sans font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D5]">
          <span className="text-xs text-[#5C574E] font-sans">
            Asesoramiento personalizado con garantía jurídica por especialista en LAU
          </span>
          <button
            onClick={() => onOpenConsultation('owner')}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs"
          >
            <span>Asesorar mi propiedad</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
