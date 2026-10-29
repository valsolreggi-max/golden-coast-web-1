import React from 'react';
import { Language, TRANSLATIONS } from '../../data/translations';
import { ABOUT_ME_SOURCE } from '../../data/sourceContent';
import { BRAND_IMAGES } from '../../data/images';
import { ShieldCheck, Award, Heart, CheckCircle2, Quote, Sparkles } from 'lucide-react';

interface ValeriaStorySectionProps {
  lang: Language;
}

export const ValeriaStorySection: React.FC<ValeriaStorySectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].aboutValeria;

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E6DFD3] relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8FA777]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8FA777]/15 text-[#8FA777] font-semibold text-xs uppercase tracking-wider mb-3 border border-[#8FA777]/30">
            <Heart className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] font-bold">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#24211D]/80 mt-2 font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Valeria's Portrait & Official Badges */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Valeria Portrait Card */}
            <div className="bg-white p-3 rounded-2xl border border-[#E6DFD3] shadow-xl relative group">
              <div className="rounded-xl overflow-hidden relative">
                <img
                  src={BRAND_IMAGES.valeriaPortrait}
                  alt="Valeria - Golden Coast Property Advisory"
                  className="w-full h-[460px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F5F2EA]">
                  <span className="text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
                    Fundadora & Directora
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F2EA]">
                    Valeria
                  </h3>
                  <p className="text-xs text-[#F5F2EA]/85 mt-1">
                    Agente de la Propiedad Inmobiliaria (API) & Perito Judicial
                  </p>
                </div>
              </div>
            </div>

            {/* Official Credentials Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-[#E6DFD3] p-4 rounded-xl shadow-xs">
                <Award className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#24211D]">{t.badge1Title}</h4>
                <p className="text-[11px] text-[#24211D]/70 mt-0.5">{t.badge1Desc}</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-xl shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#8FA777] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#24211D]">{t.badge2Title}</h4>
                <p className="text-[11px] text-[#24211D]/70 mt-0.5">{t.badge2Desc}</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-xl shadow-xs">
                <Sparkles className="w-5 h-5 text-[#E76F51] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#24211D]">{t.badge3Title}</h4>
                <p className="text-[11px] text-[#24211D]/70 mt-0.5">{t.badge3Desc}</p>
              </div>

              <div className="bg-white border border-[#E6DFD3] p-4 rounded-xl shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#8FA777] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#24211D]">{t.badge4Title}</h4>
                <p className="text-[11px] text-[#24211D]/70 mt-0.5">{t.badge4Desc}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Verbatim Narrative Text */}
          <div className="lg:col-span-7 bg-white border border-[#E6DFD3] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            
            <div className="border-b border-[#E6DFD3] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E76F51] font-bold">
                Historia y Valores Fundacionales
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8FA777] mt-1">
                "Mi Trayectoria Profesional"
              </h3>
            </div>

            {/* Verbatim Paragraphs from Approved Source Content */}
            <div className="space-y-4 text-xs sm:text-sm text-[#24211D] leading-relaxed font-sans">
              {ABOUT_ME_SOURCE.paragraphs.map((p, idx) => {
                // Highlight the Cunit anecdote with a warmer callout card
                if (p.includes('Cunit')) {
                  return (
                    <div
                      key={idx}
                      className="bg-[#F2A77B]/15 border-l-4 border-[#E76F51] p-5 rounded-r-xl my-6 space-y-2"
                    >
                      <div className="flex items-center gap-2 text-[#E76F51] text-xs font-bold uppercase tracking-wider">
                        <Heart className="w-4 h-4" />
                        <span>La Anécdota que Marcó Mi Propósito</span>
                      </div>
                      <p className="italic text-xs sm:text-sm text-[#24211D] leading-relaxed">
                        "{p}"
                      </p>
                    </div>
                  );
                }

                return (
                  <p key={idx} className="text-[#24211D]/90">
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Inspiring Pull Quote */}
            <div className="bg-[#8FA777] text-[#F5F2EA] p-6 sm:p-8 rounded-xl shadow-md space-y-3 relative overflow-hidden">
              <Quote className="w-12 h-12 text-[#D4AF37]/30 absolute top-2 right-2" />
              <p className="font-serif text-lg sm:text-xl font-bold leading-snug text-[#F5F2EA]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-[#F5F2EA]/20 text-xs text-[#D4AF37] font-semibold">
                <span>— Valeria, Fundadora de Golden Coast</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
