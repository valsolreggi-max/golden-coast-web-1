import React from 'react';
import { Compass } from 'lucide-react';

interface EditorialBuyerSectionProps {
  onOpenConsultation: (type: 'buyer') => void;
  onOpenBuyerModal: () => void;
}

export const EditorialBuyerSection: React.FC<EditorialBuyerSectionProps> = ({
  onOpenConsultation,
  onOpenBuyerModal,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Primera reunión (online o presencial)',
      desc: 'Conoceremos tu proyecto, tus necesidades y aquello que realmente buscas.',
    },
    {
      num: '02',
      title: 'Búsqueda personalizada',
      desc: 'Seleccionaré, analizaré y valoraré las propiedades que mejor se adapten a tus prioridades.',
    },
    {
      num: '03',
      title: 'Visitas y asesoramiento',
      desc: 'Organizaremos visitas presenciales o virtuales y analizaremos cada opción con criterio y sin prisas.',
    },
    {
      num: '04',
      title: 'Negociación y cierre',
      desc: 'Te acompañaré durante la negociación y hasta la firma para que afrontes cada paso con seguridad.',
    },
    {
      num: '05',
      title: 'Después de la firma',
      desc: 'Mi acompañamiento no termina con la compra. Seguiré a tu lado para ayudarte en los primeros pasos de esta nueva etapa.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            SERVICIOS · ¿BUSCAS UNA PROPIEDAD?
          </span>
        </div>

        {/* Headline & Narrative Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Encontrar la propiedad adecuada merece algo más que una simple búsqueda.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            <p>
              Quiero entender qué necesitas, qué esperas de esta nueva etapa y qué tipo de propiedad encaja realmente contigo. A partir de ahí, diseño una búsqueda personalizada adaptada a tus prioridades, tu presupuesto y tus tiempos.
            </p>
            <p>
              Si buscas una vivienda en la Costa Dorada y el Garraf, tanto si resides en España como si vienes desde otro país, te acompaño durante todo el proceso para que tomes cada decisión con la tranquilidad de estar bien asesorado.
            </p>
          </div>
        </div>

        {/* Subheading: Cómo trabajaremos juntos */}
        <div className="border-t border-b border-[#E8E2D5] py-4 mb-10 flex items-center justify-between">
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Cómo trabajaremos juntos
          </span>
          <span className="text-xs font-sans text-[#5C574E] tracking-wider uppercase">
            Proceso en 5 etapas
          </span>
        </div>

        {/* 5-Step Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              onClick={onOpenBuyerModal}
              className="p-5 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-sans font-semibold text-[#D4AF37] tracking-widest uppercase">
                  {step.num}
                </span>
                <h4 className="text-base font-serif text-[#24211D] mt-2 mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-[#5C574E] leading-relaxed font-sans font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D5]">
          <span className="text-xs text-[#5C574E] font-sans">
            Acompañamiento integral para compradores locales e internacionales
          </span>
          <button
            onClick={() => onOpenConsultation('buyer')}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs"
          >
            <span>Quiero encontrar una propiedad</span>
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
