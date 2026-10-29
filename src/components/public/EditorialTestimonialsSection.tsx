import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

interface EditorialTestimonialsSectionProps {
  onOpenTestimonialsModal: () => void;
}

export const EditorialTestimonialsSection: React.FC<EditorialTestimonialsSectionProps> = ({
  onOpenTestimonialsModal,
}) => {
  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            TESTIMONIOS · RELACIONES DE CONFIANZA
          </span>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
            Historias que hablan por sí solas.
          </h2>
        </div>

        {/* 2-Column Symmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
          
          {/* Column Left: Feature Case (Diana, Nick y su familia) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between">
            <div className="space-y-5">
              <div className="border-b border-[#E8E2D5] pb-4 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">
                    Caso real · Gestión integral
                  </span>
                  <h3 className="text-2xl font-serif text-[#24211D]">
                    Diana, Nick y su familia
                  </h3>
                </div>
                <span className="text-xs text-[#5C574E] font-sans">
                  Propietarios · Alemania
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                <p>
                  Conocí esta casa mucho antes de trabajar con sus propietarios. Tenía algo especial y estaba convencida de que solo necesitaba una estrategia diferente para encontrar a las personas adecuadas. Cuando finalmente tuve la oportunidad de gestionar la venta de la vivienda, propuse replantear por completo su presentación. Coordiné el vaciado, diseñé una estrategia junto a una especialista en home staging y redefinimos su posicionamiento en el mercado.
                </p>
                <p>
                  La venta fue solo el principio. Años después, Diana, Nick y su familia siguen confiando en mí desde Alemania para gestionar su propiedad en la Costa Dorada. Coordino el mantenimiento, el equipo de limpieza y cuido cada detalle para que todo esté exactamente como ellos esperan, incluso cuando están a miles de kilómetros.
                </p>
                <p>
                  Para mí, esa confianza tiene un valor especial. Demuestra que mi trabajo no termina cuando se firma una venta. Continúa mientras mis clientes sigan necesitando a alguien en quien puedan confiar para cuidar su propiedad.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#5C574E] font-sans">
              <span>Costa Dorada · Acompañamiento a largo plazo</span>
              <span className="text-[#D4AF37]">✦ ✦ ✦</span>
            </div>
          </div>

          {/* Column Right: Quote & Core Philosophy */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-4">
                <Quote className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-xs font-sans text-[#5C574E] tracking-widest uppercase">
                  Filosofía
                </span>
              </div>

              <blockquote className="text-2xl sm:text-3xl font-serif text-[#24211D] leading-snug">
                «La confianza es tu fortaleza.»
              </blockquote>

              <div className="w-8 h-px bg-[#D4AF37]" />

              <p className="text-sm sm:text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                Lo más especial de esas palabras es que no nacieron en una reunión de marketing ni buscando un eslogan para una marca. Me las regaló una clienta después de años de confiar en mí. Creo que ninguna otra frase podría definir mejor mi forma de entender este trabajo.
              </p>

              {/* Additional Micro Testimonial */}
              <div className="p-4 bg-[#F5F2EA] border border-[#E8E2D5] text-xs text-[#4A463F] space-y-1 mt-4">
                <span className="font-semibold text-[#24211D] block">«Transparencia total y tranquilidad desde el primer día»</span>
                <span className="text-[#5C574E]">Compradores internacionales · Costa Dorada</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#5C574E] font-sans">
              <span>Valores Fundacionales</span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </div>
          </div>

        </div>

        {/* View All Testimonials Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onOpenTestimonialsModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] text-[#24211D] text-xs font-sans font-semibold tracking-wider uppercase transition-colors cursor-pointer group"
          >
            <span>Ver más testimonios</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
