import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { useConsultation } from '../ConsultationContext';
import { useLanguage } from '../../i18n';

export const HomeContactCta: React.FC = () => {
  const { openConsultation } = useConsultation();
  const { messages } = useLanguage();
  const { homeContactCta } = messages;

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F3] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6 text-center">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            {homeContactCta.eyebrow}
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
            {homeContactCta.title}
          </h2>

          <p className="text-base sm:text-lg text-[#4A463F] leading-relaxed font-sans font-normal">
            {homeContactCta.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 group shadow-xs cursor-pointer"
            >
              <span>{homeContactCta.ctaForm}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => openConsultation('general')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-[#8FA777] text-[#8FA777] text-xs font-semibold tracking-wider uppercase hover:bg-[#8FA777] hover:text-[#FBF9F3] active:bg-[#8FA777] active:text-[#FBF9F3] transition-all duration-200 cursor-pointer"
            >
              <span>{homeContactCta.ctaDirect}</span>
            </button>
          </div>

          {/* Direct channels footer line */}
          <div className="pt-8 border-t border-[#E8E2D5] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#5C574E] font-sans">
            <a
              href="mailto:realtygoldencoast@gmail.com"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>realtygoldencoast@gmail.com</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{homeContactCta.coverage}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{homeContactCta.credentials}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
