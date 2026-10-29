import React from 'react';
import { ArrowRight, MoveRight, MapPin, Building, FileText, Sparkles } from 'lucide-react';

interface EditorialRelocationSectionProps {
  onOpenConsultation: () => void;
}

export const EditorialRelocationSection: React.FC<EditorialRelocationSectionProps> = ({
  onOpenConsultation,
}) => {
  const relocationPillars = [
    {
      icon: Building,
      title: 'Búsqueda y selección de hogar',
      desc: 'Localización de viviendas que se adapten a tu estilo de vida, tiempos y proyecto familiar.',
    },
    {
      icon: FileText,
      title: 'Trámites y gestiones iniciales',
      desc: 'Asesoramiento en la llegada: suministros, contratos, orientación legal y empadronamiento.',
    },
    {
      icon: MapPin,
      title: 'Orientación en el territorio',
      desc: 'Conocimiento experto sobre colegios, servicios, movilidad y particularidades de cada localidad.',
    },
    {
      icon: Sparkles,
      title: 'Integración y asentamiento',
      desc: 'Acompañamiento personal continuo para que te sientas en casa desde el primer día.',
    },
  ];

  return (
    <section id="relocation" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            SERVICIOS · RELOCATION
          </span>
          <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8FA777] bg-[#FBF9F3] border border-[#E8E2D5] px-2.5 py-1">
            En fase de definición
          </span>
        </div>

        {/* Headline & Narrative Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Acompañamiento en el traslado e instalación en la Costa Dorada y el Garraf.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            <p>
              Cambiar de ciudad o país es una de las decisiones vitales más ilusionantes, pero también requiere un soporte cercano, riguroso y bien conectado con el territorio.
            </p>
            <p>
              Golden Coast incorpora el servicio de <strong>Relocation</strong> para guiar a familias, profesionales e inversores en su llegada al litoral catalán. Desarrollaremos y detallaremos todo su contenido próximamente. Si ya estás planeando tu traslado, podemos atenderte y diseñar un plan personalizado.
            </p>
          </div>
        </div>

        {/* 4 Preview Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {relocationPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-sans font-semibold text-[#D4AF37] tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#8FA777]" />
                  </div>

                  <h3 className="text-lg font-serif text-[#24211D] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#5C574E] leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E2D5]/70 text-[10px] uppercase font-sans tracking-wider text-[#8FA777]">
                  Módulo en desarrollo
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8E2D5]">
          <span className="text-xs text-[#5C574E] font-sans">
            ¿Planeas trasladarte a Sitges, Vilanova, Cubelles, Cunit, Segur o Calafell?
          </span>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs"
          >
            <span>Consultar sobre Relocation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
