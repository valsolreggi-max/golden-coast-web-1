import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { useLanguage } from '../../i18n';

export const HomeTestimonialFeatured: React.FC = () => {
  const { messages } = useLanguage();
  const { homeTestimonial } = messages;

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Subtítulo de sección */}
        <div className="mb-5 sm:mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {homeTestimonial.eyebrow}
          </span>
        </div>

        {/* Titular principal */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight font-normal">
            {homeTestimonial.title}
          </h2>
        </div>

        {/* Bloque editorial en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Columna Izquierda: Ficha y Preámbulo por Valeria */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* [Ficha] */}
              <div className="border-b border-[#E8E2D5] pb-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D]">
                    {homeTestimonial.clientNames}
                  </h3>
                  <span className="text-xs sm:text-sm text-[#5C574E] font-sans font-medium">
                    {homeTestimonial.clientOrigin}
                  </span>
                </div>
                <p className="text-xs font-sans text-[#D4AF37] font-medium tracking-wide">
                  {homeTestimonial.clientContext}
                </p>
              </div>

              {/* [Preámbulo por Valeria] */}
              <div className="space-y-4 text-sm sm:text-base text-[#4A463F] leading-relaxed font-sans font-light">
                <p>{homeTestimonial.p1}</p>
                <p>{homeTestimonial.p2}</p>
                <p>{homeTestimonial.p3}</p>
              </div>

            </div>

            {/* Separador inferior sutil */}
            <div className="pt-6 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#5C574E] font-sans">
              <span>{homeTestimonial.footerNote}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          </div>

          {/* Columna Derecha: Cita Destacada y Botones / Llamadas a la acción */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="border-b border-[#E8E2D5] pb-4 flex items-center justify-between">
                <Quote className="w-7 h-7 text-[#D4AF37]" />
                <span className="text-[11px] font-sans text-[#8FA777] uppercase tracking-[0.16em] font-medium">
                  {homeTestimonial.badge}
                </span>
              </div>

              {/* [Cita Destacada] */}
              <div className="space-y-4 pt-1">
                <blockquote className="text-xl sm:text-2xl font-serif italic text-[#24211D] leading-snug">
                  {homeTestimonial.quote}
                </blockquote>
                <p className="text-sm font-sans font-medium text-[#24211D]">
                  {homeTestimonial.author}
                </p>
              </div>

            </div>

            {/* [Botones / Llamadas a la acción] */}
            <div className="pt-8 mt-8 border-t border-[#E8E2D5] space-y-4">
              <Link
                to="/testimonios#diana"
                className="w-full py-4 px-6 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-sans font-semibold tracking-[0.16em] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 inline-flex items-center justify-center gap-2 group shadow-xs cursor-pointer text-center"
              >
                <span>{homeTestimonial.ctaFull}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="text-center pt-1">
                <Link
                  to="/testimonios"
                  className="text-xs font-sans text-[#5C574E] hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
                >
                  {homeTestimonial.ctaAll}
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
